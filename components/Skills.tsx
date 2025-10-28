'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = {
    programming: {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Java', icon: '☕', color: 'from-orange-500 to-red-500' },
        { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', icon: '🔷', color: 'from-blue-600 to-indigo-600' },
        { name: 'SQL', icon: '🗃️', color: 'from-gray-500 to-gray-700' }
      ]
    },
    frontend: {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
        { name: 'Next.js', icon: '▲', color: 'from-gray-800 to-black' },
        { name: 'HTML5', icon: '🌐', color: 'from-orange-500 to-red-600' },
        { name: 'CSS3', icon: '🎭', color: 'from-blue-400 to-blue-600' },
        { name: 'Tailwind CSS', icon: '🌊', color: 'from-teal-400 to-cyan-500' },
        { name: 'Bootstrap', icon: '🅱️', color: 'from-purple-500 to-purple-700' }
      ]
    },
    backend: {
      title: 'Backend & Database',
      icon: '🔧',
      skills: [
        { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-700' },
        { name: 'Express.js', icon: '🚀', color: 'from-gray-600 to-gray-800' },
        { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-800' },
        { name: 'MySQL', icon: '🐬', color: 'from-blue-600 to-blue-800' },
        { name: 'Firebase', icon: '🔥', color: 'from-yellow-500 to-orange-600' },
        { name: 'REST APIs', icon: '🔗', color: 'from-indigo-500 to-purple-600' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', icon: '🐙', color: 'from-gray-700 to-black' },
        { name: 'VS Code', icon: '💙', color: 'from-blue-500 to-blue-700' },
        { name: 'Postman', icon: '📮', color: 'from-orange-500 to-red-500' },
        { name: 'AWS', icon: '☁️', color: 'from-yellow-500 to-orange-500' }
      ]
    }
  };



  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          Skills & Technologies
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {Object.entries(skillCategories).map(([key, category], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className={`flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r ${skill.color} bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 cursor-pointer group/skill`}
                  >
                    <span className="text-lg group-hover/skill:scale-125 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="font-medium text-foreground group-hover/skill:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>



        {/* Additional Skills & Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-center mb-8">Additional Skills & Interests</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Data Structures & Algorithms', 'OOPS', 'AI Basics',
              'Competitive Programming', 'Problem Solving', 'System Design',
              'Team Collaboration'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}