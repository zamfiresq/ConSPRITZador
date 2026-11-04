'use client';

/**
 * Harta 3D în stil ConQUIZtador.
 *  - teritoriile vin din /data/territories.json (scripts/build_territories.py)
 *  - allowedDistricts: dacă e dat, doar acele teritorii pot fi alese (pulsează);
 *    restul teritoriilor libere sunt întunecate și nu răspund la click
 *  - animații: săgeata cade pe teritoriul ales, cucerirea face săritură + val de culoare
 */

import { Canvas, useFrame, type ThreeEvent } from '@react-three/fiber';
import { OrbitControls, Html, useCursor } from '@react-three/drei';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { DEFAULT_TERRITORIES_URL, useTerritories, type Territory } from '@/lib/territories';

export type { Territory };

interface PlayerInfo {
  color: string;
  name: string;
}

interface BucharestMap3DProps {
  dataUrl?: string;
  onDistrictClick?: (district: {
    id: string;
    properties: { name: string; sector: string };
    neighbors: string[];
  }) => void;
  selectedDistrict?: string | null;
  /** teritoriul indicat de săgeată (implicit = selectedDistrict) */
  targetDistrict?: string | null;
  /** null/undefined = fără restricții; altfel doar aceste id-uri pot fi alese */
  allowedDistricts?: string[] | null;
  zones?: Record<string, string>; // idTeritoriu -> uidJucator
  playersData?: Record<string, PlayerInfo>; // uidJucator -> { color, name }
}

// ───────────────────────── stil ─────────────────────────

const DEPTH = 0.32;
const BEVEL = 0.05;
const UNOWNED_TOP = '#efe2a8';
const UNOWNED_SIDE = '#8a6a3a';
const DIMMED_TOP = '#44514a';
const DIMMED_SIDE = '#2a3430';

function easeOutBounce(x: number): number {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (x < 1 / d1) return n1 * x * x;
  if (x < 2 / d1) return n1 * (x -= 1.5 / d1) * x + 0.75;
  if (x < 2.5 / d1) return n1 * (x -= 2.25 / d1) * x + 0.9375;
  return n1 * (x -= 2.625 / d1) * x + 0.984375;
}

// ───────────────────────── emblemă ─────────────────────────

function Emblem({ color }: { color: string }) {
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" style={{ filter: 'drop-shadow(0 2px 3px rgba(0,0,0,.55))' }}>
      <defs>
        <radialGradient id="emb-g" cx="35%" cy="30%" r="80%">
          <stop offset="0" stopColor="#fff3c4" />
          <stop offset="1" stopColor="#d9a73a" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="url(#emb-g)" stroke="#f7e08f" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="17.5" fill="none" stroke={color} strokeWidth="2" opacity=".9" />
      <path d="M12 33V21h4v-3h3v3h2v-7h6v7h2v-3h3v3h4v12z" fill="#5a3a12" />
      <path d="M22 33v-5a2 2 0 0 1 4 0v5z" fill="#f3dc92" />
    </svg>
  );
}

function OwnerTag({ name, color, label }: { name?: string; color?: string; label?: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, pointerEvents: 'none' }}>
      {label && (
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: '#fff',
            textShadow: '0 1px 2px rgba(0,0,0,.9)',
            whiteSpace: 'nowrap',
            opacity: 0.95,
          }}
        >
          {label}
        </div>
      )}
      {name && (
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: '#fff',
            textShadow: '0 1px 2px rgba(0,0,0,.9), 0 0 4px rgba(0,0,0,.6)',
            whiteSpace: 'nowrap',
          }}
        >
          {name}
        </div>
      )}
      {color && <Emblem color={color} />}
    </div>
  );
}

// ───────────────────────── săgeata ─────────────────────────

function TargetArrow({ x, z }: { x: number; z: number }) {
  const ref = useRef<THREE.Group>(null);
  const start = useRef<number | null>(null);

  useFrame((state) => {
    const g = ref.current;
    if (!g) return;
    const now = state.clock.elapsedTime;
    if (start.current === null) start.current = now;
    const t = now - start.current;
    // cade de sus și ricoșează, apoi plutește
    const DROP = 0.55;
    const drop = t < DROP ? (1 - easeOutBounce(t / DROP)) * 5 : 0;
    const bob = t < DROP ? 0 : Math.sin((t - DROP) * 3) * 0.22;
    g.position.y = DEPTH + 0.95 + drop + bob;
  });

  return (
    <group position={[x, 0, z]}>
      <group ref={ref} position={[0, DEPTH + 6, 0]}>
        <mesh rotation={[Math.PI, 0, 0]} position={[0, -0.35, 0]} castShadow>
          <coneGeometry args={[0.55, 0.9, 24]} />
          <meshStandardMaterial color="#c4452b" roughness={0.45} metalness={0.1} />
        </mesh>
        <mesh position={[0, 0.65, 0]} castShadow>
          <cylinderGeometry args={[0.2, 0.2, 1.1, 20]} />
          <meshStandardMaterial color="#d9583a" roughness={0.45} metalness={0.1} />
        </mesh>
      </group>
    </group>
  );
}

// ───────────────────────── un teritoriu ─────────────────────────

function Territory3D({
  t,
  index,
  owner,
  isHovered,
  isSelected,
  dimmed,
  pulsing,
  selectable,
  onHover,
  onSelect,
}: {
  t: Territory;
  index: number;
  owner?: PlayerInfo;
  isHovered: boolean;
  isSelected: boolean;
  dimmed: boolean;
  pulsing: boolean;
  selectable: boolean;
  onHover: (id: string | null) => void;
  onSelect: (t: Territory) => void;
}) {
  const lift = useRef<THREE.Group>(null);
  const topMat = useRef<THREE.MeshStandardMaterial>(null);
  const ring = useRef<THREE.Mesh>(null);
  const baseY = useRef(-1.6);

  const ownerKey = owner?.color ?? '';
  const prevOwnerKey = useRef(ownerKey);
  const popStart = useRef<number | null>(null);

  const geometry = useMemo(() => {
    const shape = new THREE.Shape(t.polygon.map(([x, y]) => new THREE.Vector2(x, y)));
    return new THREE.ExtrudeGeometry(shape, {
      depth: DEPTH,
      curveSegments: 1,
      bevelEnabled: true,
      bevelThickness: BEVEL,
      bevelSize: BEVEL,
      bevelOffset: -BEVEL,
      bevelSegments: 2,
    });
  }, [t.polygon]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  const { top, side } = useMemo(() => {
    if (owner) {
      const base = new THREE.Color(owner.color);
      return { top: base.clone().lerp(new THREE.Color('#ffffff'), 0.1), side: base.clone().multiplyScalar(0.5) };
    }
    if (dimmed) return { top: new THREE.Color(DIMMED_TOP), side: new THREE.Color(DIMMED_SIDE) };
    return { top: new THREE.Color(UNOWNED_TOP), side: new THREE.Color(UNOWNED_SIDE) };
  }, [owner, dimmed]);

  useLayoutEffect(() => {
    if (lift.current) lift.current.position.y = -1.6;
  }, []);

  useFrame((state, delta) => {
    const g = lift.current;
    if (!g) return;
    const now = state.clock.elapsedTime;

    // a primit un proprietar acum => animația de cucerire
    if (prevOwnerKey.current !== ownerKey) {
      if (!prevOwnerKey.current && ownerKey) popStart.current = now;
      prevOwnerKey.current = ownerKey;
    }
    const t0 = popStart.current === null ? Infinity : now - popStart.current;

    // aparițe la încărcare + ridicare la hover/selecție
    const appear = now - index * 0.07;
    const target = appear < 0 ? -1.6 : isSelected ? 0.3 : isHovered && selectable ? 0.14 : 0;
    baseY.current = THREE.MathUtils.damp(baseY.current, target, 9, delta);

    // săritură cu ricoșeu + flash la cucerire
    let bounce = 0;
    let flash = 0;
    if (t0 < 1.6) {
      bounce = 0.9 * Math.exp(-3 * t0) * Math.abs(Math.cos(7 * t0));
      flash = 1.4 * Math.exp(-3.5 * t0);
    }
    g.position.y = baseY.current + bounce;

    const m = topMat.current;
    if (m) {
      const base = isSelected ? 0.28 : isHovered && selectable ? 0.16 : 0.04;
      const pulse = pulsing && !isSelected ? 0.06 + 0.05 * Math.sin(now * 4 + index) : 0;
      m.emissiveIntensity = base + pulse + flash;
    }

    // val de culoare care se extinde din centrul teritoriului
    const r = ring.current;
    if (r) {
      if (t0 < 1.1) {
        r.visible = true;
        const s = 0.6 + t0 * 9;
        r.scale.set(s, s, s);
        (r.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.9 * (1 - t0 / 1.1));
      } else if (r.visible) {
        r.visible = false;
      }
    }
  });

  const [lx, ly] = t.label;
  const showTag = !!owner || (isHovered && selectable) || isSelected;

  return (
    <group ref={lift}>
      <mesh
        geometry={geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow
        receiveShadow
        onPointerOver={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation();
          onHover(selectable ? t.id : null);
        }}
        onPointerOut={() => onHover(null)}
        onClick={(e: ThreeEvent<MouseEvent>) => {
          if (e.delta > 4) return; // drag (rotire cameră), nu click
          e.stopPropagation();
          if (selectable) onSelect(t);
        }}
      >
        <meshStandardMaterial
          ref={topMat}
          attach="material-0"
          color={top}
          emissive={top}
          emissiveIntensity={0.04}
          roughness={0.55}
          metalness={0.05}
        />
        <meshStandardMaterial attach="material-1" color={side} roughness={0.8} />
      </mesh>

      {/* valul de la cucerire */}
      <mesh ref={ring} position={[lx, DEPTH + 0.08, -ly]} rotation={[-Math.PI / 2, 0, 0]} visible={false}>
        <ringGeometry args={[0.8, 1, 48]} />
        <meshBasicMaterial color={top} transparent opacity={0} depthWrite={false} />
      </mesh>

      {showTag && (
        <Html
          position={[lx, DEPTH + 0.35, -ly]}
          center
          distanceFactor={15}
          zIndexRange={[10, 0]}
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          {owner ? (
            <OwnerTag name={owner.name} color={owner.color} label={isHovered || isSelected ? t.name : undefined} />
          ) : (
            <OwnerTag name={t.name} />
          )}
        </Html>
      )}
    </group>
  );
}

// ───────────────────────── scena ─────────────────────────

function Scene({
  territories,
  selectedDistrict,
  targetDistrict,
  allowedDistricts,
  zones,
  playersData,
  onSelect,
}: {
  territories: Territory[];
  selectedDistrict?: string | null;
  targetDistrict?: string | null;
  allowedDistricts?: string[] | null;
  zones: Record<string, string>;
  playersData: Record<string, PlayerInfo>;
  onSelect: (t: Territory) => void;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  useCursor(!!hovered);

  const allowedSet = useMemo(() => (allowedDistricts ? new Set(allowedDistricts) : null), [allowedDistricts]);
  const arrowTarget = territories.find((t) => t.id === (targetDistrict ?? selectedDistrict));

  return (
    <>
      <hemisphereLight args={['#fff4d6', '#3a2610', 0.95]} />
      <directionalLight
        position={[-9, 20, 12]}
        intensity={1.7}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-16}
        shadow-camera-right={16}
        shadow-camera-top={16}
        shadow-camera-bottom={-16}
        shadow-camera-near={1}
        shadow-camera-far={60}
        shadow-bias={-0.0004}
      />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -BEVEL - 0.01, 0]} receiveShadow>
        <planeGeometry args={[80, 80]} />
        <shadowMaterial opacity={0.38} />
      </mesh>

      {territories.map((t, i) => {
        const ownerUid = zones[t.id];
        const owner = ownerUid ? playersData[ownerUid] : undefined;
        const allowed = !allowedSet || allowedSet.has(t.id);
        return (
          <Territory3D
            key={t.id}
            t={t}
            index={i}
            owner={owner}
            isHovered={hovered === t.id}
            isSelected={selectedDistrict === t.id}
            dimmed={!!allowedSet && !allowed && !owner}
            pulsing={!!allowedSet && allowed}
            selectable={allowed}
            onHover={setHovered}
            onSelect={onSelect}
          />
        );
      })}

      {arrowTarget && <TargetArrow key={arrowTarget.id} x={arrowTarget.label[0]} z={-arrowTarget.label[1]} />}

      <OrbitControls
        makeDefault
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        minDistance={20}
        maxDistance={46}
        minPolarAngle={0.35}
        maxPolarAngle={1.2}
        minAzimuthAngle={-0.6}
        maxAzimuthAngle={0.6}
        target={[0, 0, 0]}
      />
    </>
  );
}

// ───────────────────────── componenta exportată ─────────────────────────

export default function BucharestMap3D({
  dataUrl = DEFAULT_TERRITORIES_URL,
  onDistrictClick,
  selectedDistrict,
  targetDistrict,
  allowedDistricts,
  zones = {},
  playersData = {},
}: BucharestMap3DProps) {
  const { territories, error } = useTerritories(dataUrl);

  const handleSelect = (t: Territory) =>
    onDistrictClick?.({ id: t.id, properties: { name: t.name, sector: t.sector }, neighbors: t.neighbors });

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: 360,
        overflow: 'hidden',
        background: 'var(--map-bg, radial-gradient(ellipse at 50% 38%, #1d3b29 0%, #122419 48%, #060d09 100%))',
      }}
    >
      {!territories && !error && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255,240,200,.8)',
          }}
        >
          Se încarcă harta…
        </div>
      )}
      {error && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fca5a5',
          }}
        >
          Nu s-a putut încărca harta ({error})
        </div>
      )}

      {territories && (
        <Canvas shadows flat dpr={[1, 2]} camera={{ position: [0, 27, 21], fov: 32, near: 0.5, far: 200 }}>
          <Scene
            territories={territories}
            selectedDistrict={selectedDistrict}
            targetDistrict={targetDistrict}
            allowedDistricts={allowedDistricts}
            zones={zones}
            playersData={playersData}
            onSelect={handleSelect}
          />
        </Canvas>
      )}

      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', boxShadow: 'inset 0 0 120px 30px rgba(0,0,0,.55)' }} />
    </div>
  );
}
