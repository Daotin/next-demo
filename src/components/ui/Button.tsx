'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    | 'onDrag'
    | 'onDragEnd'
    | 'onDragEnter'
    | 'onDragExit'
    | 'onDragLeave'
    | 'onDragOver'
    | 'onDragStart'
    | 'onDrop'
    | 'onAnimationStart'
    | 'onAnimationEnd'
    | 'onAnimationIteration'
  > {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  children,
  className = '',
  ...props
}) => {
  const baseClasses =
    'font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105 active:scale-95 focus:ring-blue-600',
    secondary: 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg focus:ring-blue-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-600',
    ghost: 'text-blue-600 hover:bg-blue-50 hover:text-blue-600 focus:ring-blue-500 focus:bg-blue-50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      className={combinedClasses}
      disabled={disabled || loading}
      aria-busy={loading}
      aria-disabled={disabled || loading}
      {...props}>
      {loading && <Loader2 className='w-4 h-4 animate-spin' aria-hidden='true' />}
      {loading ? '处理中...' : children}
    </motion.button>
  );
};

export default Button;
