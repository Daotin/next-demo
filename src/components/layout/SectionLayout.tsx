'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionLayoutProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({
  children,
  className = '',
  background = 'white',
  padding = 'lg',
  animated = true,
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100',
  };

  const paddings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  };

  const sectionClasses = `${backgrounds[background]} ${paddings[padding]} ${className}`;

  if (animated) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={sectionClasses}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>{children}</div>
      </motion.section>
    );
  }

  return (
    <section className={sectionClasses}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>{children}</div>
    </section>
  );
};

export default SectionLayout;
