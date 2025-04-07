'use client';

import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Building Scalable Web Applications with Next.js',
    excerpt: 'Learn how to architect and build performant web applications using Next.js and React',
    date: 'Oct 15, 2023',
    readTime: '5 min read',
    image: 'https://via.placeholder.com/600x400',
    link: '#',
  },
  {
    title: 'The Future of Web Development: What to Expect in 2024',
    excerpt: 'Exploring upcoming trends and technologies in web development',
    date: 'Oct 10, 2023',
    readTime: '4 min read',
    image: 'https://via.placeholder.com/600x400',
    link: '#',
  },
  {
    title: 'Optimizing React Applications for Performance',
    excerpt: 'Best practices and techniques for building fast React applications',
    date: 'Oct 5, 2023',
    readTime: '6 min read',
    image: 'https://via.placeholder.com/600x400',
    link: '#',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <a
                  href={post.link}
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
                >
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;