'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Frontend developer Intern",
      company: "Chikitsa pvt ltd - vigours health care",
      duration: "May 2025 - july 2025",
      description: "Collaborated with senior developers to deliver key frontend functionalities, gaining hands-on experience in component-based architecture and real-world API integration.Developed and implemented responsive, user-facing features by translating UI/UX designs into reusable andscalable components for a client-facing project.Resolved technical issues and fixed bugs, contributing to a more stable and polished product that was successfully delivered to the client.",
      highlights: ["Developed 3 key features for the main product", "Improved code quality through peer reviews", "Learned industry best practices"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      school: "Vellore insitute of technology, vellore",
      duration: "2021 - 2025",
      description: "B.Tech in Computer Science with focus on software development, data structures, algorithms, and modern programming paradigms.",
      highlights: ["CGPA: 8/10", "member of bulls and bears Club", "Participated in hackathons"]
    },
    {
      degree: "Intermediate (11-12th Grade)",
      school: "Narayana junior college",
      duration: "2019 - 2021",
      description: "Completed higher secondary education with Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving skills.",
      highlights: ["Scored 97.2% "]
    },
    {
      degree: "High School (1-10th Grade cbse)",
      school: "Kendriya vidyalaya warangal",
      duration: "2009 - 2019",
      description: "Completed higher secondary education with Mathematics, Science, and Social Studies. Developed strong analytical and problem-solving skills.",
      highlights: ["Scored 84.6% "]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const TimelineItem = ({ item, icon: Icon }: any) => (
    <motion.div
      variants={itemVariants}
      className="relative pl-8 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 bg-primary rounded-full border-2 border-background shadow-sm">
        <Icon className="h-3 w-3 text-primary-foreground" />
      </div>
      <div className="absolute left-3 top-6 w-px h-full bg-border"></div>
      
      <div className="bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <h3 className="text-lg font-semibold">{item.title || item.degree}</h3>
          <span className="text-sm text-primary font-medium">{item.duration}</span>
        </div>
        <p className="text-muted-foreground font-medium mb-3">{item.company || item.school}</p>
        <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
        
        <div className="space-y-2">
          {item.highlights.map((highlight: string, highlightIndex: number) => (
            <div key={highlightIndex} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          Experience & Education
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Briefcase className="h-6 w-6 mr-3 text-primary" />
              Experience
            </h3>
            <div className="relative">
              {experiences.map((exp, index) => (
                <TimelineItem key={index} item={exp} icon={Briefcase} />
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 mr-3 text-primary" />
              Education
            </h3>
            <div className="relative">
              {education.map((edu, index) => (
                <TimelineItem key={index} item={edu} icon={GraduationCap} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}