'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: '关于我们', href: '/about' },
    { name: '团队介绍', href: '/team' },
    { name: '服务项目', href: '/services' },
    { name: '案例展示', href: '/cases' },
  ];

  const services = [
    { name: '学术指导', href: '/services#academic' },
    { name: '项目合作', href: '/services#cooperation' },
    { name: '成果转化', href: '/services#transformation' },
    { name: '数据分析', href: '/services#analysis' },
  ];

  const socialLinks = [
    { icon: Github, href: '#', name: 'GitHub' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Twitter, href: '#', name: 'Twitter' },
  ];

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* 公司信息 */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-xl'>M</span>
              </div>
              <span className='text-xl font-bold'>医疗科技</span>
            </div>
            <p className='text-gray-400 leading-relaxed'>
              汇聚国内外顶尖高校/医院的医学AI科研人员，构建高质量专业团队，致力于推动医疗科技创新发展。
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className='w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200'>
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>快速链接</h3>
            <ul className='space-y-2'>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className='text-gray-400 hover:text-white transition-colors duration-200'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 服务项目 */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>服务项目</h3>
            <ul className='space-y-2'>
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className='text-gray-400 hover:text-white transition-colors duration-200'>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>联系我们</h3>
            <div className='space-y-3'>
              <div className='flex items-center space-x-3'>
                <Mail size={18} className='text-blue-400' />
                <span className='text-gray-400'>contact@medtech.com</span>
              </div>
              <div className='flex items-center space-x-3'>
                <Phone size={18} className='text-blue-400' />
                <span className='text-gray-400'>+86 400-123-4567</span>
              </div>
              <div className='flex items-center space-x-3'>
                <MapPin size={18} className='text-blue-400' />
                <span className='text-gray-400'>北京市海淀区科技园</span>
              </div>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className='border-t border-gray-800 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-400 text-sm'>© 2024 医疗科技有限公司. 保留所有权利.</p>
            <div className='flex space-x-6 text-sm'>
              <Link href='/privacy' className='text-gray-400 hover:text-white transition-colors'>
                隐私政策
              </Link>
              <Link href='/terms' className='text-gray-400 hover:text-white transition-colors'>
                服务条款
              </Link>
              <Link href='/sitemap' className='text-gray-400 hover:text-white transition-colors'>
                网站地图
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
