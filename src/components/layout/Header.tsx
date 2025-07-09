'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: '首页', href: '/' },
    { name: '团队介绍', href: '/team' },
    // { name: '服务项目', href: '/services' },
    // { name: '案例展示', href: '/cases' },
    // { name: '联系我们', href: '/contact' },
  ];

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-3'>
            <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-xl'>M</span>
            </div>
            <span className='text-xl font-bold text-gray-900'>医疗科技</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium'>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className='hidden md:block'>
            <Button variant='primary' size='sm'>
              预约咨询
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='md:hidden border-t border-gray-200'>
              <nav className='py-4 space-y-2'>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}>
                    <Link
                      href={item.href}
                      className='block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200'
                      onClick={() => setIsMenuOpen(false)}>
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className='px-4 pt-4'>
                  <Button variant='primary' size='sm' className='w-full'>
                    预约咨询
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
