'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'React', level: 85, color: '#61dafb' },
  { name: 'JavaScript', level: 85, color: '#f7df1e' },
  { name: 'Python', level: 88, color: '#3776ab' },
  { name: 'Java', level: 90, color: '#ed8b00' },
  { name: 'Node.js', level: 80, color: '#339933' },
  { name: 'MongoDB', level: 82, color: '#47a248' },
  { name: 'Git', level: 88, color: '#f05032' },
  { name: 'CSS', level: 88, color: '#1572b6' },
];

export default function SimpleSkillsVisualization() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <div className="w-full h-96 relative bg-gradient-to-br from-primary/5 to-purple-600/5 rounded-lg p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 h-full">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="relative flex flex-col items-center justify-center cursor-pointer group"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
          >
            {/* Skill Circle */}
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm relative overflow-hidden group-hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: skill.color }}
            >
              {/* Progress Ring */}
              <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                  fill="none"
                />
                <motion.circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 28}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 28 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 28 * (1 - skill.level / 100) }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                />
              </svg>
              
              {/* Skill Initial */}
              <span className="relative z-10">
                {skill.name.substring(0, 2).toUpperCase()}
              </span>
            </div>
            
            {/* Skill Name */}
            <h4 className="mt-3 text-sm font-medium text-center">{skill.name}</h4>
            
            {/* Skill Level */}
            <p className="text-xs text-muted-foreground">{skill.level}%</p>
            
            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: `${skill.color}20` }}
            />
          </motion.div>
        ))}
      </div>
      
      {/* Selected Skill Info */}
      {selectedSkill && (
        <motion.div
          className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <h4 className="font-semibold text-primary">{selectedSkill}</h4>
          <p className="text-sm text-muted-foreground">
            Proficiency: {skills.find(s => s.name === selectedSkill)?.level}%
          </p>
        </motion.div>
      )}
      
      {/* Instructions */}
      <div className="absolute top-4 right-4 text-xs text-muted-foreground">
        Click on skills to learn more
      </div>
    </div>
  );
}
