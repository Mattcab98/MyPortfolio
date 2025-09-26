import { useEffect, useState } from 'react';

interface ParticlesProps {
  type?: 'cobweb' | 'circle' | 'square' | 'line'; // los tipos válidos de particles-bg
  bg?: boolean;
  num?: number;
  color?: string;
  minSpeed?: number,
  maxSpeed?: number,
}

export default function ParticlesBg({
  type = 'cobweb',
  bg = true,
  num = 50,
  color = '#ffffff',
  minSpeed= 0.6,
  maxSpeed= 100,
}: ParticlesProps) {
  const [Particles, setParticles] = useState<any>(null);

  useEffect(() => {
    import('particles-bg').then((mod) => setParticles(() => mod.default));
  }, []);

  if (!Particles) return null;

  return <Particles type={type} bg={bg} num={num} color={color} minSpeed={minSpeed}  maxSpeed={maxSpeed}/>;
}
