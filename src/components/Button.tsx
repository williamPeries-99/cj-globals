
import React from 'react';
import { motion } from 'framer-motion';
import { fonts } from '../theme';
import { Link as RouterLink } from 'react-router-dom';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  as?: React.ElementType;
  to?: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const base =
  'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-base';

const variants = {
  primary:
    'bg-accent text-primary shadow-glow hover:bg-primary hover:text-white hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg',
  secondary:
    'bg-white/80 text-primary border border-primary/20 shadow-md hover:bg-primary hover:text-white hover:border-primary/40',
  outline:
    'border border-accent text-primary bg-white/60 hover:bg-accent hover:text-primary hover:border-accent/80',
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, as, to, className = '', ...props }) => {
  const Comp = as || (to ? RouterLink : 'button');
  const sharedProps: any = {
    className: `${base} ${variants[variant]} ${className}`,
    style: { fontFamily: fonts.heading },
    ...props,
  };
  if (to) {
    sharedProps.to = to;
    if (Comp === 'a') sharedProps.href = to;
  }
  if (Comp === 'button') {
    return (
      <motion.button
        whileHover={{ scale: 1.06, boxShadow: '0 4px 24px rgba(212,175,55,0.15)' }}
        whileTap={{ scale: 0.97 }}
        {...sharedProps}
      >
        {children}
      </motion.button>
    );
  }
  if (Comp === 'a') {
    return (
      <motion.a
        whileHover={{ scale: 1.06, boxShadow: '0 4px 24px rgba(212,175,55,0.15)' }}
        whileTap={{ scale: 0.97 }}
        {...sharedProps}
      >
        {children}
      </motion.a>
    );
  }
  const MotionComp = motion(Comp);
  return (
    <MotionComp
      whileHover={{ scale: 1.06, boxShadow: '0 4px 24px rgba(212,175,55,0.15)' }}
      whileTap={{ scale: 0.97 }}
      {...sharedProps}
    >
      {children}
    </MotionComp>
  );
};
