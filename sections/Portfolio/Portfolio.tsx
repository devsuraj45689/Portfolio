'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'A scalable and user-friendly e-commerce platform built with Next.js and Tailwind CSS.',
    image: 'https://via.placeholder.com/400',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio showcasing professional achievements and projects.',
    image: 'https://via.placeholder.com/400',
    link: '#',
  },
  {
    title: 'Consultancy Dashboard',
    description:
      'An analytics dashboard designed for consultancy services with real-time data integration.',
    image: 'https://via.placeholder.com/400',
    link: '#',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id='portfolio' className='py-16 bg-gray-50'>
      <div className='container mx-auto px-6'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-4xl font-bold text-gray-800 mb-12 text-center'
        >
          My Portfolio
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow'
            >
              <div className='relative group'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-56 object-cover'
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className='absolute inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity'
                >
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600'
                  >
                    View Project
                  </a>
                </motion.div>
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-semibold text-gray-700 mb-3'>
                  {item.title}
                </h3>
                <p className='text-gray-600'>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
