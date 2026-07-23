"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function Blob() {
  const mesh = useRef<THREE.Mesh>(null);
  const { viewport, pointer } = useThree();

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.sin(t * 0.15) * 0.3;
    mesh.current.rotation.y += 0.0025;

    // subtle mouse-reactive tilt
    mesh.current.rotation.x += pointer.y * 0.08 * viewport.factor * 0.02;
    mesh.current.rotation.y += pointer.x * 0.08 * viewport.factor * 0.02;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh ref={mesh} scale={2.1}>
        <icosahedronGeometry args={[1, 6]} />
        <MeshDistortMaterial
          color="#ff007f"
          attach="material"
          distort={0.42}
          speed={1.6}
          roughness={0.15}
          metalness={0.6}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
}

function Lighting() {
  const light = useRef<THREE.PointLight>(null);
  const { pointer, viewport } = useThree();

  useFrame(() => {
    if (!light.current) return;
    light.current.position.x = (pointer.x * viewport.width) / 2;
    light.current.position.y = (pointer.y * viewport.height) / 2;
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight ref={light} position={[2, 2, 3]} intensity={40} color="#00f6ff" />
      <pointLight position={[-3, -2, -2]} intensity={20} color="#bd00ff" />
    </>
  );
}

export function HeroBlob() {
  const dpr = useMemo<[number, number]>(() => [1, 1.75], []);

  return (
    <Canvas
      dpr={dpr}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 5], fov: 42 }}
      className="!absolute inset-0"
    >
      <Lighting />
      <Blob />
      <Environment preset="city" />
    </Canvas>
  );
}
