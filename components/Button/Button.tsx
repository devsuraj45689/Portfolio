import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className='bg-black hover:bg-gray-600 transition-colors duration-300 ease-in-out text-white py-2 px-10 transform origin-center'
    >
      {children}
    </button>
  );
};

export default Button;
