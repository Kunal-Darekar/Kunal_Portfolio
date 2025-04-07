'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Kunal Darekar</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 mb-8">
              Software Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              A passionate MERN stack developer with expertise in modern web technologies, 
              combining strong problem-solving skills with a drive for creating impactful solutions.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Background blur effect */}
            <div className="aspect-square rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 absolute inset-0 blur-3xl" />
            
            {/* Profile image container */}
            <div className="relative z-10 pt-8"> {/* Added pt-8 for top padding */}
              <img
                src="/images/profile.png"
                alt="Kunal Darekar"
                className="w-full aspect-square rounded-full object-cover border-4 border-purple-600/50"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;