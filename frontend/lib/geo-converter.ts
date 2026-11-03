import * as THREE from 'three';

// Convertește coordonate GeoJSON (long, lat) în coordonate 3D
export function geoTo3D(coordinates: number[][][], scale: number = 1): THREE.Vector2[] {
  // Centrul Bucureștiului pentru proiecție
  const centerLng = 26.1025;
  const centerLat = 44.4268;
  
  return coordinates[0].map(([lng, lat]) => {
    // Proiecție simplă (pentru demo - pentru producție folosește proiecție corectă)
    const x = (lng - centerLng) * scale * 1000;
    const y = (lat - centerLat) * scale * 1000;
    return new THREE.Vector2(x, y);
  });
}

// Calculează centrul unui poligon
export function calculatePolygonCenter(points: THREE.Vector2[]): THREE.Vector3 {
  const center = points.reduce(
    (acc, point) => new THREE.Vector2(acc.x + point.x, acc.y + point.y),
    new THREE.Vector2(0, 0)
  );
  center.divideScalar(points.length);
  return new THREE.Vector3(center.x, 0, center.y);
}