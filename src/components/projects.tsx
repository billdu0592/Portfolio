import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio',
      description: 'A personal portfolio website to showcase my projects and skills.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      github: '',
      live: 'https://myportfolio.com',
    }, 
    {
      title: 'Portfolio',
      description: 'A personal portfolio website to showcase my projects and skills.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      github: '',
      live: 'https://myportfolio.com',
    }, 
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-dark-600 dark:text-dark-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={project.github}
                  target="_blank"
                  className="flex items-center space-x-2 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <Github size={20} />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={project.live}
                  target="_blank"
                  className="flex items-center space-x-2 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <ExternalLink size={20} />
                  <span>Live</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
