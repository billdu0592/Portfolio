import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'] },
    { category: 'Backend', items: ['C', 'Java', 'Python'] },
    { category: 'Tools', items: ['Git', 'VS Code'] },
    { category: 'Frameworks', items: ['Flask', 'Next.js'] },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills and Technologies
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white dark:bg-dark-900 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-primary-600 dark:text-primary-400">
                {skillGroup.category}
              </h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-dark-700 dark:text-dark-300">
                      {skill}
                    </span>
                    <div className="w-24 h-2 bg-gray-200 dark:bg-dark-700 rounded-full">
                      <div className="w-3/4 h-full bg-primary-500 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
