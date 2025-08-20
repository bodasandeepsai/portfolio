'use client';

import { motion } from 'framer-motion';

export default function About() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const highlights = [
    "Computer Science Engineering student with strong programming fundamentals",
    "Proficient in Java, JavaScript and modern web technologies",
    "Experience with Reactjs,Nextjs, Node.js, express.js and full-stack development",
    "Strong problem-solving skills and algorithmic thinking",
    "Passionate about learning new technologies and building innovative solutions",
    "Active in competitive programming and open-source contributions",
    "Experience with cloud platforms and Databases"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 text-primary">About Me</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I&apos;m Boda Sandeep Sai, a passionate Computer Science Engineering student with a strong foundation
                in software development and a keen interest in emerging technologies. My journey in tech began
                with curiosity about how software systems work and has evolved into a deep commitment to
                building innovative solutions that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I specialize in full-stack web development, with expertise in modern frameworks like React,
                Node.js, and cloud technologies. I&apos;m particularly interested in areas like artificial intelligence,
                machine learning, and scalable system design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new programming languages, contributing to
                open-source projects, participating in hackathons, or learning about the latest trends in
                technology. I believe in continuous learning and staying updated with industry best practices.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 text-primary">Key Highlights</h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}