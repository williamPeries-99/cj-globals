import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const AnimatedPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const reduceMotion = useReducedMotion();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
      scale: reduceMotion ? 1 : 0.985,
      filter: reduceMotion ? 'blur(0px)' : 'blur(10px)',
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
    },
    exit: {
      opacity: 0,
      y: reduceMotion ? 0 : -24,
      scale: reduceMotion ? 1 : 0.985,
      filter: reduceMotion ? 'blur(0px)' : 'blur(8px)',
    },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-[80vh]"
    >
      {children}
    </motion.div>
  );
};
