'use client';
import React from 'react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section className='py-16 bg-black text-white'>
      <div className='container mx-auto px-6 text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-4xl font-bold mb-6'
        >
          Ready to Build Something Great?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-lg mb-8'
        >
          Let's work together to turn your ideas into reality. Contact us today
          and let's discuss how we can help you succeed.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href='#contact'
            className='px-8 py-3 bg-white text-black font-bold text-lg rounded-lg shadow hover:bg-gray-100 transition duration-300'
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
