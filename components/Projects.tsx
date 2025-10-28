'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

export default function Projects() {
  const projects = [
    {
      title: " LeetCode Whisper – AI Coding Assistant Chrome Extension",
      description: "Developed an AI-powered LeetCode Helper Chrome Extension using React 18, TypeScript, and Vite, integrating OpenAI GPT-4 and Gemini 2.0 for real-time contextual coding assistance. Engineered a plugin-based architecture with 95% code reusability, intelligent code analysis for constraint extraction, and 85% accurate language-specific solutions. ",
      tech: ["React.js", "Next.js","Typescript", "GeminiAI model", "PostgreSQL", "TailwindCSS", "Clerk Auth", "Drizzle Studio"],
      github: "https://github.com/bodasandeepsai/leetcode-whisper",
    },
    {
      title: "MockPro-AI – AI Interview Platform",
      description: "Built a realistic AI-powered mock interview platform using Next.js and GeminiAI.Integrated PostgreSQL + Drizzle Studio for user responses and feedback storage.Secured platform with Clerk authentication and simulated 100+ interviews with 90% success rate. ",
      tech: ["React.js", "Next.js","Typescript", "GeminiAI model", "PostgreSQL", "TailwindCSS", "Clerk Auth", "Drizzle Studio"],
      github: "https://github.com/bodasandeepsai/Mockpro-ai-",
      demo: "https://mockpro-ai-9k94.vercel.app/",
      featured: true
    },
    {
      title: "MoviezAddict – Online Movie & TV Streaming Platform",
      description: "Developed a streaming platform using React.js with VidSRC API for video playback.Achieved 30% improved API efficiency and ensured 99.9% uptime through fallback routing. ",
      tech: ["React.js", " VidSRC APIs", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/bodasandeepsai/moviezaddict",
      demo: "https://moviezaddict.vercel.app/",
      featured: true
    },
    {
      title: "EduEmpower - NGO website",
      description: "Developed a website for an NGO using React.js with content management and form submission. ",
      tech: ["React.js","Tailwind CSS", "HTML5", "javascript"],
      github: "https://github.com/bodasandeepsai/EduEmpower",
      demo: "https://edu-empower.vercel.app/",
      featured: true
    },
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website showcasing projects, skills, and experience with modern animations and 3D elements.",
      tech: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS", "javascript", "EmailJS"],
      github: "https://github.com/bodasandeepsai/portfolio",
      demo: "https://bodasandeepsai.vercel.app",
      featured: false
    }
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedCard
                key={index}
                className={`group bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                delay={index * 0.1}
                tiltIntensity={3}
                glowEffect={project.featured}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <a 
                        href={project.github}
                        className="p-2 rounded-md hover:bg-accent transition-colors duration-200"
                        title="View Code"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a 
                        href={project.demo}
                        className="p-2 rounded-md hover:bg-accent transition-colors duration-200"
                        title="Live Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}