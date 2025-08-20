'use client';

import { useRef, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import * as THREE from 'three';

// Dynamically import Three.js components
const Canvas = dynamic(() => import('@react-three/fiber').then(mod => ({ default: mod.Canvas })), { ssr: false });
const Text = dynamic(() => import('@react-three/drei').then(mod => ({ default: mod.Text })), { ssr: false });
const OrbitControls = dynamic(() => import('@react-three/drei').then(mod => ({ default: mod.OrbitControls })), { ssr: false });
const Float = dynamic(() => import('@react-three/drei').then(mod => ({ default: mod.Float })), { ssr: false });

interface SkillSphereProps {
  position: [number, number, number];
  skill: string;
  level: number;
  color: string;
  onClick: () => void;
  isSelected: boolean;
}

function SkillSphere({ position, skill, level, color, onClick, isSelected }: SkillSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Import useFrame dynamically within the component
  const { useFrame } = require('@react-three/fiber');
  useFrame((state: any) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  const scale = (level / 100) * 2 + 0.5;

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <mesh
          ref={meshRef}
          scale={isSelected ? scale * 1.2 : hovered ? scale * 1.1 : scale}
          onClick={onClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color={color}
            transparent
            opacity={isSelected ? 0.9 : hovered ? 0.8 : 0.7}
            emissive={color}
            emissiveIntensity={isSelected ? 0.3 : hovered ? 0.2 : 0.1}
          />
        </mesh>
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill}
        </Text>
        <Text
          position={[0, -2, 0]}
          fontSize={0.2}
          color="#888"
          anchorX="center"
          anchorY="middle"
        >
          {level}%
        </Text>
      </group>
    </Float>
  );
}

interface Skills3DProps {
  onSkillSelect: (skill: string) => void;
  selectedSkill: string | null;
}

function Skills3D({ onSkillSelect, selectedSkill }: Skills3DProps) {
  const skills = [
    { name: 'React', level: 85, position: [-3, 2, 0] as [number, number, number], color: '#61dafb' },
    { name: 'JavaScript', level: 85, position: [3, 2, 0] as [number, number, number], color: '#f7df1e' },
    { name: 'Python', level: 88, position: [0, 3, -2] as [number, number, number], color: '#3776ab' },
    { name: 'Java', level: 90, position: [-2, 0, 2] as [number, number, number], color: '#ed8b00' },
    { name: 'Node.js', level: 80, position: [2, 0, 2] as [number, number, number], color: '#339933' },
    { name: 'MongoDB', level: 82, position: [0, -2, 0] as [number, number, number], color: '#47a248' },
    { name: 'Git', level: 88, position: [-3, -1, -1] as [number, number, number], color: '#f05032' },
    { name: 'CSS', level: 88, position: [3, -1, -1] as [number, number, number], color: '#1572b6' },
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />
      
      {skills.map((skill, index) => (
        <SkillSphere
          key={skill.name}
          position={skill.position}
          skill={skill.name}
          level={skill.level}
          color={skill.color}
          onClick={() => onSkillSelect(skill.name)}
          isSelected={selectedSkill === skill.name}
        />
      ))}
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

export default function SkillsVisualization() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <div className="w-full h-96 relative">
      <Suspense fallback={
        <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading 3D Skills Visualization...</p>
          </div>
        </div>
      }>
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Skills3D onSkillSelect={setSelectedSkill} selectedSkill={selectedSkill} />
        </Canvas>
      </Suspense>

      {selectedSkill && (
        <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-4">
          <h4 className="font-semibold text-primary">{selectedSkill}</h4>
          <p className="text-sm text-muted-foreground">Click and drag to explore the 3D skills visualization</p>
        </div>
      )}
    </div>
  );
}
