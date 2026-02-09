import React from 'react';
import { motion } from 'framer-motion';
import { fonts } from '../theme';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.03, boxShadow: '0 18px 50px rgba(11, 31, 58, 0.16)' }}
    whileTap={{ scale: 0.98 }}
    className={`rounded-3xl bg-white/80 shadow-glow backdrop-blur-md border border-white/70 p-6 md:p-8 transition-all ${className}`}
    style={{ fontFamily: fonts.body }}
  >
    {children}
  </motion.div>
);
