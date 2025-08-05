import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white dark:from-dark-900 dark:to-dark-800"
    >
      <div className="container-custom text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold gradient-text mb-6"
        >
          Bill Du
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-dark-600 dark:text-dark-300 mb-8"
        >
          Computer Science and Applied Math Major at UTM
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/billdu0592"
            target="_blank"
            className="p-3 bg-gray-100 dark:bg-dark-800 rounded-full"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/bill-du"
            target="_blank"
            className="p-3 bg-gray-100 dark:bg-dark-800 rounded-full"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:billdu0592@gmail.com"
            className="p-3 bg-gray-100 dark:bg-dark-800 rounded-full"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn-primary"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn-secondary"
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
