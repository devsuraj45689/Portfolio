'use client';
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'Custom, responsive websites built with modern technologies.',
    icon: '🌐',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric designs for web and mobile applications.',
    icon: '🎨',
  },
  {
    title: 'SEO Optimization',
    description: 'Boost your site ranking and drive organic traffic.',
    icon: '🚀',
  },
];

const ServiceSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeInOut' },
  };

  return (
    <section className='py-16 bg-gray-100' id='services'>
      <div className='container mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6'>Our Services</h2>
        <p className='text-gray-600 mb-12'>
          We offer a range of services to help your business grow.
        </p>

        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className='bg-white shadow-md rounded-lg p-6 text-left'
              //   initial="initial"
              //   animate="animate"
              whileHover={{ scale: 1.05 }}
              {...fadeInUp}
            >
              <div className='flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-500 rounded-full text-2xl mb-4'>
                {service.icon}
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                {service.title}
              </h3>
              <p className='text-gray-600'>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
