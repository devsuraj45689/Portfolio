import React from 'react';
import Image from 'next/image';
import ScetchImg from 'images/vecteezy_educational-concept-line-art-illustration_.jpg';
import { GrowOnHoverButton } from 'components';

const Hero = () => {
  return (
    <div className='flex justify-between'>
      <div className='w-1/2'>
        <h1 className='text-[50px] font-bold mt-24'>
          Full Stack Developer & Front end Architecht Expert
        </h1>
        <br />
        <p>
          Specialist in MERN Stack Development and Pythong Programming Contrary
          to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC, making it over
          2000 years old. It has roots in a piece of classical Latin literature
          from 45 BC, making it over 2000 years old. It has roots in a piece of
          classical Latin literature from 45 BC, making it over 2000 years old.
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old. It has roots in a piece of classical
          Latin literature from 45 BC, making it over 2000 years old.
        </p>
        <br />
        <GrowOnHoverButton>Get In Touch</GrowOnHoverButton>
      </div>
      <div className='w-1/2'>
        <Image src={ScetchImg} className='w-full' alt='Hero Image' />
      </div>
    </div>
  );
};

export default Hero;
