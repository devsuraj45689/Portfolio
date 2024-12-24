'use client';
import { useState } from 'react';
import {Forms,GrowOnHoverButton} from 'components';
const {Input,TextArea} = Forms;

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
             <Input type="text" label="Name" placeholder='Name' />
            <Input type="email" label="Email" placeholder='Email' />
            <Input type="text" label="Message" placeholder='Message' />
            <TextArea label='Message' placeholder='Your Message' required rows={5} />
            <GrowOnHoverButton type="submit">Send Message</GrowOnHoverButton>
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
