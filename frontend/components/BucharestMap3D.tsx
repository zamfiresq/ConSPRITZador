'use client';

/**
 * Harta 3D in stil ConQUIZtador: 15 teritorii extrudate, cu santuri intre ele,
 * camera inclinata, culori de jucator + emblema, sageata rosie pentru tinta curenta.
 *
 * Datele vin din /data/territories.json (generat de scripts/build_territories.py).
 * API-ul public ramane compatibil cu versiunea veche:
 *   onDistrictClick({ id, properties: { name, sector }, neighbors })
 */

import { Canvas, useFrame, type ThreeEvent } from '@react-three/fiber';
import { OrbitControls, Html, useCursor } from '@react-three/drei';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

// ───────────────────────── tipuri ─────────────────────────

export interface Territory {
  id: string;
  name: string;
  sector: string;
  label: [number, number]; // punct interior pentru emblema (x, y plan)
  neighbors: string[];
  polygon: [number, number][];
}

interface PlayerInfo {
  color: string;
  name: string;
}

interface BucharestMap3DProps {
  onDistrictClick?: (district: {
    id: string;
    properties: { name: string; sector: string };
    neighbors: string[];
  }) => void;
  /** fisierul cu teritorii: '/data/territories.json' (6 sectoare) sau '/data/territories-cartiere.json' (15 cartiere) */
  dataUrl?: string;
  selectedDistrict?: string | null;
  /** teritoriul indicat de sageata (implicit = selectedDistrict) */
  targetDistrict?: string | null;
  /** nu mai e folosit, pastrat pentru compatibilitate */
  players?: { id: string; name: string; position: [number, number] }[];
  zones?: Record<string, string>; // numeTeritoriu -> uidJucator
  playersData?: Record<string, PlayerInfo>; // uidJucator -> { color, name }
}

// ───────────────────────── constante de stil ─────────────────────────

const DEPTH = 0.32; // inaltimea placilor
const BEVEL = 0.05; // latimea santului dintre teritorii
const UNOWNED_TOP = '#efe2a8'; // crem, ca in captura
const UNOWNED_SIDE = '#8a6a3a';

// ───────────────────────── emblema ─────────────────────────

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

// ───────────────────────── sageata ─────────────────────────

function TargetArrow({ x, z }: { x: number; z: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = DEPTH + 0.95 + Math.sin(state.clock.elapsedTime * 3) * 0.22;
    }
  });
  return (
    <group position={[x, 0, z]}>
      <group ref={ref}>
        {/* varf (con) cu tipul in jos */}
        <mesh rotation={[Math.PI, 0, 0]} position={[0, -0.35, 0]} castShadow>
          <coneGeometry args={[0.55, 0.9, 24]} />
          <meshStandardMaterial color="#c4452b" roughness={0.45} metalness={0.1} />
        </mesh>
        {/* coada */}
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
  onHover,
  onSelect,
}: {
  t: Territory;
  index: number;
  owner?: PlayerInfo;
  isHovered: boolean;
  isSelected: boolean;
  onHover: (id: string | null) => void;
  onSelect: (t: Territory) => void;
}) {
  const lift = useRef<THREE.Group>(null);

  const geometry = useMemo(() => {
    const shape = new THREE.Shape(t.polygon.map(([x, y]) => new THREE.Vector2(x, y)));
    return new THREE.ExtrudeGeometry(shape, {
      depth: DEPTH,
      curveSegments: 1,
      bevelEnabled: true,
      bevelThickness: BEVEL,
      bevelSize: BEVEL,
      bevelOffset: -BEVEL, // santul ramane IN interiorul conturului => placile nu se suprapun
      bevelSegments: 2,
    });
  }, [t.polygon]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  const { top, side } = useMemo(() => {
    if (!owner) return { top: new THREE.Color(UNOWNED_TOP), side: new THREE.Color(UNOWNED_SIDE) };
    const base = new THREE.Color(owner.color);
    return {
      top: base.clone().lerp(new THREE.Color('#ffffff'), 0.1),
      side: base.clone().multiplyScalar(0.5),
    };
  }, [owner]);

  // animatie de aparitie (placile "cresc" pe rand) + ridicare la hover/selectie
  useLayoutEffect(() => {
    if (lift.current) lift.current.position.y = -1.6;
  }, []);

  useFrame((state, delta) => {
    const g = lift.current;
    if (!g) return;
    const appear = state.clock.elapsedTime - index * 0.07;
    const target = appear < 0 ? -1.6 : isSelected ? 0.3 : isHovered ? 0.14 : 0;
    g.position.y = THREE.MathUtils.damp(g.position.y, target, 9, delta);
  });

  const [lx, ly] = t.label;
  const showTag = !!owner || isHovered || isSelected;

  return (
    <group ref={lift}>
      {/* shape-ul e in planul XY; il culcam: y(nord) -> -z, extrudarea -> sus */}
      <mesh
        geometry={geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow
        receiveShadow
        onPointerOver={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation();
          onHover(t.id);
        }}
        onPointerOut={() => onHover(null)}
        onClick={(e: ThreeEvent<MouseEvent>) => {
          if (e.delta > 4) return; // a fost drag (rotire camera), nu click
          e.stopPropagation();
          onSelect(t);
        }}
      >
        <meshStandardMaterial
          attach="material-0"
          color={top}
          emissive={top}
          emissiveIntensity={isSelected ? 0.28 : isHovered ? 0.16 : 0.04}
          roughness={0.55}
          metalness={0.05}
        />
        <meshStandardMaterial attach="material-1" color={side} roughness={0.8} />
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
            <OwnerTag
              name={owner.name}
              color={owner.color}
              label={isHovered || isSelected ? t.name : undefined}
            />
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
  zones,
  playersData,
  onSelect,
}: {
  territories: Territory[];
  selectedDistrict?: string | null;
  targetDistrict?: string | null;
  zones: Record<string, string>;
  playersData: Record<string, PlayerInfo>;
  onSelect: (t: Territory) => void;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  useCursor(!!hovered);

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

      {/* sol: primeste doar umbre, fundalul vine din CSS */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -BEVEL - 0.01, 0]} receiveShadow>
        <planeGeometry args={[80, 80]} />
        <shadowMaterial opacity={0.38} />
      </mesh>

      {territories.map((t, i) => {
        const ownerUid = zones[t.id];
        return (
          <Territory3D
            key={t.id}
            t={t}
            index={i}
            owner={ownerUid ? playersData[ownerUid] : undefined}
            isHovered={hovered === t.id}
            isSelected={selectedDistrict === t.id}
            onHover={setHovered}
            onSelect={onSelect}
          />
        );
      })}

      {arrowTarget && <TargetArrow x={arrowTarget.label[0]} z={-arrowTarget.label[1]} />}

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

// ───────────────────────── componenta exportata ─────────────────────────

export default function BucharestMap3D({
  dataUrl = '/data/territories.json',
  onDistrictClick,
  selectedDistrict,
  targetDistrict,
  zones = {},
  playersData = {},
}: BucharestMap3DProps) {
  const [territories, setTerritories] = useState<Territory[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(dataUrl)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((d) => !cancelled && setTerritories(d.territories as Territory[]))
      .catch((e) => !cancelled && setError(String(e)));
    return () => {
      cancelled = true;
    };
  }, [dataUrl]);

  const handleSelect = (t: Territory) =>
    onDistrictClick?.({ id: t.id, properties: { name: t.name, sector: t.sector }, neighbors: t.neighbors });

  return (
    <div
      className="relative h-[600px] w-full overflow-hidden rounded-lg shadow-2xl"
      style={{ background: 'radial-gradient(ellipse at 50% 38%, #7d5629 0%, #4b3117 48%, #1c1109 100%)' }}
    >
      {!territories && !error && (
        <div className="absolute inset-0 flex items-center justify-center text-amber-100/80">Se încarcă harta…</div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-red-300">
          Nu s-a putut încărca harta ({error})
        </div>
      )}

      {territories && (
        <Canvas
          shadows
          flat /* fara tone-mapping => cremul ramane crem, nu gri */
          dpr={[1, 2]}
          camera={{ position: [0, 27, 21], fov: 32, near: 0.5, far: 200 }}
        >
          <Scene
            territories={territories}
            selectedDistrict={selectedDistrict}
            targetDistrict={targetDistrict}
            zones={zones}
            playersData={playersData}
            onSelect={handleSelect}
          />
        </Canvas>
      )}

      {/* vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: 'inset 0 0 120px 30px rgba(0,0,0,.55)' }}
      />

      <div className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-black/45 px-3 py-1.5 text-xs text-amber-100/90 backdrop-blur-sm">
        Drag: rotește · Scroll: zoom · Click: alege teritoriul
      </div>
    </div>
  );
}
