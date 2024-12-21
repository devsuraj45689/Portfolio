import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className='bg-black hover:bg-gray-600 transition-colors duration-300 ease-in-out text-white py-2 px-10'
    >
      {children}
    </button>
  );
};

export default Button;
