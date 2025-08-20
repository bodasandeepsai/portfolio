'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  tiltIntensity?: number;
  scaleOnHover?: boolean;
  glowEffect?: boolean;
}

export default function AnimatedCard({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  tiltIntensity = 10,
  scaleOnHover = true,
  glowEffect = false,
}: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      whileHover={scaleOnHover ? { scale: 1.02 } : {}}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {glowEffect && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-purple-600/20 blur-xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      <div
        className="relative z-10"
        style={{
          transform: 'translateZ(50px)',
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

export function AnimatedText({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.05,
}: {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}) {
  const words = text.split(' ');

  return (
    <motion.div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: delay + i * staggerDelay,
            ease: 'easeOut',
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  suffix = '',
  className = '',
}: {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  className?: string;
}) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration,
          delay,
          ease: 'easeOut',
        }}
        onUpdate={(latest) => {
          if (typeof latest === 'number') {
            const element = document.getElementById(`counter-${to}`);
            if (element) {
              element.textContent = Math.round(latest) + suffix;
            }
          }
        }}
      >
        <span id={`counter-${to}`}>{from}{suffix}</span>
      </motion.span>
    </motion.span>
  );
}
