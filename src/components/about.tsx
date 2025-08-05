import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '900+' },
    { label: 'Projects Completed', value: '100+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Awards Won', value: '10+' }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h2 className="text-4xl font-bold mb-6">
              About Me
            </motion.h2>
            <motion.p className="text-lg text-dark-600 dark:text-dark-300 mb-6">
              Description about yourself goes here. You can include your background, skills, and what you are passionate about in web development.
            </motion.p>
            <motion.div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gray-100 dark:bg-dark-800 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">What I Do</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full mt-2"></div>   
                <p>Web Development ........ stuff i do</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full mt-2"></div>
                <p>back end .......... stuff i do</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full mt-2"></div>
                <p>stuff relevant to me .......... stuff i do</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full mt-2"></div>
                <p>other .......... stuff i do</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
