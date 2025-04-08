'use client';

import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface EducationItem {
  title: string;
  period: string;
  institution: string;
}

interface ExperienceItem {
  title: string;
  period: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    title: "Diploma in Computer Engineering",
    period: "2020 - 2023",
    institution: "MSBTE"
  },
  {
    title: "B. Eng. Information Technology",
    period: "2023 - 2026",
    institution: "Savitribai Phule Pune University"
  }
];

const experienceData: ExperienceItem[] = [
  {
    title: "DevOps Intern",
    period: "Summer 2025",
    description: "Built responsive web applications with React and deploy"
  }
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              As a fresh graduate with a passion for software development, I bring enthusiasm, modern technical skills, and a strong foundation in computer science principles.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              During my academic journey, I&apos;ve focused on building practical projects and gaining hands-on experience with current technologies used in the industry.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A passionate MERN stack developer with expertise in building full-stack web applications. I combine my problem-solving skills in Data Structures & Algorithms with practical development experience to create efficient, scalable solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My journey includes working with MongoDB, Express.js, React, and Node.js, while maintaining a strong focus on solving complex algorithmic challenges to write optimized code.
            </p>
            {/* Stats Section */}
            <div className="flex flex-wrap gap-4">
              {[
                { title: "B. Eng.", subtitle: "Information Technology" },
                { title: "5+", subtitle: "Projects Built" },
                { title: "3+", subtitle: "Internships" }
              ].map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex-1">
                  <h3 className="font-bold text-xl mb-2 gradient-text">{stat.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{stat.subtitle}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Education & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold mb-4">Education & Experience</h3>
            <div className="space-y-4">
              {educationData.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-purple-600 dark:text-purple-400">{item.period}</p>
                  <p className="text-gray-600 dark:text-gray-400">{item.institution}</p>
                </div>
              ))}
              {experienceData.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-purple-600 dark:text-purple-400">{item.period}</p>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;