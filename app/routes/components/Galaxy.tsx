// StarFieldScene.tsx
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface StarFieldProps {
  count?: number;
}

const StarField: React.FC<StarFieldProps> = ({ count = 5000 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  // Posiciones originales de las estrellas
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 40;    // x
      arr[i * 3 + 1] = (Math.random() - 0.5) * 40; // y
      arr[i * 3 + 2] = (Math.random() - 0.5) * 40; // z
    }
    return arr;
  }, [count]);

  // Copia para manipular posiciones
  const currentPositions = useMemo(() => Float32Array.from(positions), [positions]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const { mouse } = state;
    const mx = mouse.x * 15; // intensidad horizontal
    const my = mouse.y * 15; // intensidad vertical

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const ox = positions[idx];
      const oy = positions[idx + 1];
      const oz = positions[idx + 2];

      // Distancia al mouse en XY
      const dx = ox - mx;
      const dy = oy - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Fuerza proporcional a la cercanía al cursor
      const force = Math.min(0.8 / (dist + 0.1), 0.4);

      // Interpolación suave hacia posición dispersada
      currentPositions[idx] += (dx * force - currentPositions[idx] + ox) * 0.1;
      currentPositions[idx + 1] += (dy * force - currentPositions[idx + 1] + oy) * 0.1;
      currentPositions[idx + 2] += (Math.random() - 0.5) * 0.01; // pequeña variación z
    }

    // Actualizar buffer
    const geometry = pointsRef.current.geometry;
    geometry.setAttribute("position", new THREE.BufferAttribute(currentPositions, 3));
    geometry.attributes.position.needsUpdate = true;

    // Rotación lenta
    pointsRef.current.rotation.y += 0.0008;
  });

  return (
    <Points ref={pointsRef} positions={currentPositions} stride={3} frustumCulled={false}>
      <PointMaterial
        color="white"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        transparent
      />
    </Points>
  );
};

// Canvas fijo de fondo interactivo
export const StarFieldScene: React.FC = () => (
  <Canvas
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -1,
      pointerEvents: "none", // permite interactuar con elementos encima
    }}
    camera={{ position: [0, 0, 25], fov: 75 }}
  >
    <ambientLight intensity={0.5} />
    <StarField count={5000} />
  </Canvas>
);
