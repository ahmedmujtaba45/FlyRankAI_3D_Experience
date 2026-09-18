"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Float, OrbitControls, Sparkles } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import type { Mesh } from "three";

type MaterialPreset = {
  label: string;
  color: string;
  emissive: string;
  metalness: number;
  roughness: number;
};

const presets: MaterialPreset[] = [
  { label: "Aurora", color: "#a3e635", emissive: "#365314", metalness: 0.42, roughness: 0.2 },
  { label: "Signal", color: "#fb7185", emissive: "#4c0519", metalness: 0.32, roughness: 0.24 },
  { label: "Static", color: "#67e8f9", emissive: "#164e63", metalness: 0.72, roughness: 0.15 },
];

function SignalShape({ preset, autoRotate }: { preset: MaterialPreset; autoRotate: boolean }) {
  const mesh = useRef<Mesh>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * (autoRotate ? 0.18 : 0.04);
    mesh.current.rotation.y += delta * (autoRotate ? 0.26 : 0.05);
    mesh.current.position.x += (pointer.x * 0.22 - mesh.current.position.x) * 0.04;
    mesh.current.position.y += (pointer.y * 0.12 - mesh.current.position.y) * 0.04;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.16} floatIntensity={0.35}>
      <mesh ref={mesh} castShadow>
        <icosahedronGeometry args={[1.45, 3]} />
        <meshStandardMaterial color={preset.color} emissive={preset.emissive} emissiveIntensity={0.55} metalness={preset.metalness} roughness={preset.roughness} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.9, 0.012, 8, 96]} />
        <meshBasicMaterial color={preset.color} transparent opacity={0.7} />
      </mesh>
      <mesh rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={[2.18, 0.008, 8, 96]} />
        <meshBasicMaterial color="#e2e8f0" transparent opacity={0.22} />
      </mesh>
    </Float>
  );
}

function Scene({ preset, autoRotate, onSelect }: { preset: MaterialPreset; autoRotate: boolean; onSelect: () => void }) {
  return (
    <Canvas camera={{ position: [0, 0.2, 5.6], fov: 38 }} dpr={[1, 1.5]} shadows onPointerMissed={onSelect} gl={{ antialias: true, powerPreference: "high-performance" }}>
      <color attach="background" args={["#101416"]} />
      <ambientLight intensity={0.6} />
      <directionalLight castShadow position={[3, 4, 5]} intensity={3.5} color="#fef9c3" shadow-mapSize={[1024, 1024]} />
      <pointLight position={[-4, -1, 2]} intensity={12} color={preset.color} distance={8} />
      <SignalShape preset={preset} autoRotate={autoRotate} />
      <Sparkles count={36} scale={6} size={1.2} speed={0.18} color="#d9f99d" />
      <ContactShadows position={[0, -2, 0]} opacity={0.45} scale={5} blur={2.5} far={4} />
      <OrbitControls enablePan={false} minDistance={3.8} maxDistance={7} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.7} makeDefault />
    </Canvas>
  );
}

function StaticFallback({ preset }: { preset: MaterialPreset }) {
  return <div className="orb-fallback" style={{ "--orb-color": preset.color } as React.CSSProperties}><div className="fallback-core" /><span>Static preview / motion reduced</span></div>;
}

export function SignalOrb() {
  const [activePreset, setActivePreset] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [staticMode, setStaticMode] = useState(false);
  const preset = presets[activePreset];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    const lowPower = deviceMemory !== undefined && deviceMemory <= 2;
    const updateMotion = () => setStaticMode(mediaQuery.matches || lowPower);
    updateMotion();
    mediaQuery.addEventListener("change", updateMotion);
    return () => mediaQuery.removeEventListener("change", updateMotion);
  }, []);

  return (
    <div className="orb-stage">
      <div className="orb-canvas">
        {staticMode ? <StaticFallback preset={preset} /> : <Scene preset={preset} autoRotate={autoRotate} onSelect={() => setAutoRotate((value) => !value)} />}
      </div>
      <div className="orb-label"><span className="orb-index">0{activePreset + 1}</span><span>{preset.label} surface</span></div>
      <div className="orb-controls" aria-label="3D scene controls">
        <div className="preset-row">
          {presets.map((item, index) => <button key={item.label} type="button" className={`swatch ${index === activePreset ? "is-active" : ""}`} style={{ backgroundColor: item.color }} onClick={() => setActivePreset(index)} aria-label={`Use ${item.label} material`} />)}
        </div>
        <button type="button" className="rotate-toggle" onClick={() => setAutoRotate((value) => !value)} aria-pressed={autoRotate}><span>{autoRotate ? "Pause" : "Orbit"}</span><span className="toggle-mark">{autoRotate ? "II" : ">"}</span></button>
      </div>
    </div>
  );
}