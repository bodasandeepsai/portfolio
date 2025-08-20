'use client';

import { useRef, useMemo, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Three.js components
const Canvas = dynamic(() => import('@react-three/fiber').then(mod => ({ default: mod.Canvas })), { ssr: false });

// Create particle field component
function ParticleComponent() {
  const ref = useRef<any>();

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(1000 * 3);

    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    return positions;
  }, []);

  // Only use useFrame if we're in a Canvas context
  const { useFrame } = require('@react-three/fiber');
  useFrame((state: any) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        transparent
        color="#4f46e5"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </points>
  );
}

// Create floating geometry component
function GeometryComponent() {
  const meshRef = useRef<any>();

  const { useFrame } = require('@react-three/fiber');
  useFrame((state: any) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[3, 0, -5]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#8b5cf6"
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
}

// Dynamically import the components that use Three.js hooks
const ParticleField = dynamic(() => Promise.resolve(ParticleComponent), { ssr: false });
const FloatingGeometry = dynamic(() => Promise.resolve(GeometryComponent), { ssr: false });

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5" />}>
        <Canvas
          camera={{ position: [0, 0, 10], fov: 60 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <ParticleField />
          <FloatingGeometry />
        </Canvas>
      </Suspense>
    </div>
  );
}
