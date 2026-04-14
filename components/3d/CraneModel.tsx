"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
  Html,
} from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const { scene } = useGLTF("/models/crane.glb");

  return (
    <primitive
      object={scene}
      scale={1.8}
      position={[0, -0.25, 0]}  // 🔥 moved slightly MORE UP
    />
  );
}

export default function CraneModel() {
  return (
    <Canvas camera={{ position: [0, 2.2, 5.5], fov: 42 }}>
      <Suspense
        fallback={
          <Html center>
            <div className="text-gray-400">Loading 3D...</div>
          </Html>
        }
      >
        {/* 🔥 LIGHTING */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 6, 5]} intensity={2.2} />
        <directionalLight position={[-5, 4, -5]} intensity={1.2} />

        {/* 🔥 ENV */}
        <Environment preset="warehouse" />

        {/* 🔥 MODEL */}
        <Model />

        {/* 🔥 SHADOW (adjusted again) */}
        <ContactShadows
          position={[0, -0.75, 0]} // 🔥 moved up with model
          opacity={0.35}
          scale={7}
          blur={2}
        />

        {/* 🔥 CONTROLS */}
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.9}
        />
      </Suspense>
    </Canvas>
  );
}