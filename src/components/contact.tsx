import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section 
      id="contact"
      className="section-padding bg-gray-50 dark:bg-dark-800"
    >
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >   
            <h3 className="text-2xl font-bold mb-6">Connections</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Feel free to reach out via email or connect with me on LinkedIn.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-600 dark:text-primary-400" />
                <span>billdu0592@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-600 dark:text-primary-400" />
                <span>(647) 657-1114</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-primary-600 dark:text-primary-400" />
                <span>Toronto, ON, Canada</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-dark-900 p-8 rounded-lg shadow-lg"
          >
            <form className="space-y-6">  
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full p-3 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="w-full btn-primary"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>          
        </div>     
      </div>
    </section>
  );
};

export default Contact;
