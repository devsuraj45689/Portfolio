'use client';
import React, { useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    role: 'CEO at TechCorp',
    message:
      'The team was exceptional in delivering a seamless and scalable solution. Their attention to detail and expertise in modern frameworks like Next.js made a huge difference in our project.',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Jane Smith',
    role: 'Founder at InnovateNow',
    message:
      'Working with them was a pleasure! They understood our requirements and delivered a website that exceeded our expectations. Highly recommend their services.',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Chris Johnson',
    role: 'CTO at BuildIT',
    message:
      'Their consultancy services helped us streamline our IT processes, saving both time and costs. Their professionalism and problem-solving skills are unmatched.',
    image: 'https://via.placeholder.com/100',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { name, role, message, image } = testimonials[currentIndex];

  return (
    <section id='testimonials' className='py-16 bg-gray-50'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold text-gray-800 mb-12 text-center'>
          What Our Clients Say
        </h2>

        <div className='max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center space-y-6'>
          <img
            src={image}
            alt={name}
            className='w-24 h-24 rounded-full shadow-md border-2 border-blue-500'
          />
          <p className='text-gray-600 italic'>"{message}"</p>
          <h3 className='text-xl font-semibold text-gray-700'>{name}</h3>
          <p className='text-sm text-gray-500'>{role}</p>
        </div>

        {/* Navigation Buttons */}
        <div className='flex justify-center items-center space-x-6 mt-8'>
          <button
            onClick={handlePrev}
            className='p-3 bg-gray-200 hover:bg-gray-300 rounded-full focus:outline-none'
            aria-label='Previous Testimonial'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-700'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className='p-3 bg-gray-200 hover:bg-gray-300 rounded-full focus:outline-none'
            aria-label='Next Testimonial'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-700'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
