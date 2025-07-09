'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  animated?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true, animated = true, delay = 0 }) => {
  const baseClasses = 'bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-all duration-300';
  const hoverClasses = hover ? 'hover:shadow-md hover:shadow-blue-100' : '';
  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`;

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay, ease: 'easeOut' }}
        whileHover={{ scale: hover ? 1.02 : 1 }}
        className={combinedClasses}>
        {children}
      </motion.div>
    );
  }

  return <div className={combinedClasses}>{children}</div>;
};

export default Card;
