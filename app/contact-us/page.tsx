'use client';
import { useState } from 'react';
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Example action: Display a success message
    // Replace this with actual form submission logic
    setSuccessMessage('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <>
      <section id='contact' className='py-16 bg-gray-100'>
        <div className='container mx-auto px-6'>
          <h2 className='text-4xl font-bold text-gray-800 mb-6 text-center'>
            Contact Us
          </h2>
          <p className='text-gray-600 mb-12 text-center'>
            Have questions or want to work together? Reach out to us using the
            form below.
          </p>

          <div className='max-w-xl mx-auto'>
            <form
              onSubmit={handleSubmit}
              className='bg-white shadow-md rounded-lg p-8 space-y-6'
            >
              <div>
                <label
                  htmlFor='name'
                  className='block text-gray-700 font-medium mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none'
                  placeholder='Your Name'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-gray-700 font-medium mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none'
                  placeholder='Your Email'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-gray-700 font-medium mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none'
                  placeholder='Your Message'
                  rows={5}
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300'
              >
                Send Message
              </button>
            </form>
            {successMessage && (
              <p className='text-green-600 text-center mt-4'>
                {successMessage}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
