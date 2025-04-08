'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiDownload } from 'react-icons/hi';
import { FaGoogleDrive, FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const GOOGLE_DRIVE_URL = "your-drive-link";
  const GITHUB_URL = "https://github.com/Kunal-Darekar";
  const LINKEDIN_URL = "your-linkedin-profile";

  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Kunal Darekar</span>
            </h1>
            <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 mb-8 h-[60px]">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  1000,
                  'MERN Stack Developer',
                  1000,
                  'Full Stack Developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex gap-4 flex-wrap justify-center lg:justify-start"
            >
              <a
                href={process.env.NODE_ENV === 'production' 
                  ? '/Kunal_Portfolio/resume/Kunal_Darekar_Resume.pdf' 
                  : '/resume/Kunal_Darekar_Resume.pdf'
                }
                download
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <HiDownload className="w-5 h-5 mr-2" />
                Download Resume
              </a>
              
              <a
                href={GOOGLE_DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <FaGoogleDrive className="w-5 h-5 mr-2" />
                View on Drive
              </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex gap-6 justify-center lg:justify-start"
            >
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
              >
                <FaGithub className="w-8 h-8" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="relative"
          >
            {/* Background blur effect */}
            <div className="aspect-square rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 absolute inset-0 blur-3xl" />
            
            {/* Profile image container */}
            <div className="relative z-10 pt-8">
              <div className="relative w-full aspect-square">
                <Image
                  src={process.env.NODE_ENV === 'production' 
                    ? '/Kunal_Portfolio/images/profile.png' 
                    : '/images/profile.png'
                  }
                  alt="Profile"
                  width={600}
                  height={600}
                  priority
                  className="rounded-full object-cover border-4 border-purple-600/50"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;