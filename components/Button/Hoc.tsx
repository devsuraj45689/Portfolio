'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button,{ButtonProps} from './Button';

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

export const bounce = {
  initial: { y: -10 },
  animate: { y: 5 },
  transition: {
    y: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export const growOnHover = {
  whileHover: { scale: 1.05 }, // Scale up to 120% on hover
  transition: { duration: 0.2, ease: 'easeInOut' }, // Smooth transition
};

const withAnimation = (
  WrappedComponent: React.ComponentType<ButtonProps>,
  animation: object
) => {
  return function AnimatedComponent(props:ButtonProps) {
    return (
      <motion.button {...animation}>
        <WrappedComponent {...props} />
      </motion.button>
    );
  };
};

export const BounceButton = withAnimation(Button, bounce);
export const FadeInButton = withAnimation(Button, fadeIn);
export const GrowOnHoverButton = withAnimation(Button, growOnHover);
