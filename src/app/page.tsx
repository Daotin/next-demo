'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Microscope, Heart, Brain, Shield } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import SectionLayout from '@/components/layout/SectionLayout';

export default function HomePage() {
  const features = [
    {
      icon: Microscope,
      title: '精准医疗',
      description: '基于基因组学、蛋白质组学等多组学数据，为患者提供个性化精准医疗解决方案',
    },
    {
      icon: Brain,
      title: 'AI智能诊断',
      description: '运用深度学习算法，辅助医生进行疾病诊断，提高诊断准确性和效率',
    },
    {
      icon: Heart,
      title: '智慧健康',
      description: '通过物联网设备和大数据分析，实现健康监测、预警和管理的智能化',
    },
    {
      icon: Shield,
      title: '数据安全',
      description: '采用领先的加密技术和隐私保护机制，确保医疗数据的安全性和私密性',
    },
  ];

  const services = [
    { name: '学术指导', count: '200+', description: '项目指导经验' },
    { name: '技术咨询', count: '150+', description: '企业合作案例' },
    { name: '数据分析', count: '300+', description: '数据处理项目' },
    { name: '成果转化', count: '50+', description: '转化成功案例' },
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <SectionLayout background='gradient' padding='xl' className='pt-32'>
        <div className='text-center max-w-4xl mx-auto'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
            推动医疗科技创新
            <span className='block text-gradient mt-2'>构建智慧医疗未来</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className='text-xl text-gray-600 mb-8 leading-relaxed'>
            汇聚国内外顶尖高校/医院的医学AI科研人员，构建高质量专业团队， 致力于推动医疗科技创新发展，为人类健康事业贡献力量。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button variant='primary' size='lg' className='group'>
              了解更多
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </Button>
            <Button variant='outline' size='lg'>
              联系我们
            </Button>
          </motion.div>
        </div>
      </SectionLayout>

      {/* Features Section */}
      <SectionLayout background='white' padding='xl'>
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            核心技术优势
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className='text-lg text-gray-600 max-w-2xl mx-auto'>
            结合前沿科技与临床实践，为医疗行业提供创新解决方案
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <Card key={feature.title} delay={index * 0.1} className='text-center group'>
              <div className='service-icon mx-auto mb-4'>
                <feature.icon size={24} />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>{feature.title}</h3>
              <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
            </Card>
          ))}
        </div>
      </SectionLayout>

      {/* Services Stats Section */}
      <SectionLayout background='gray' padding='xl'>
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            专业服务领域
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className='text-lg text-gray-600 max-w-2xl mx-auto'>
            凭借丰富的实战经验和专业技能，为客户提供全方位的医疗科技服务
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service, index) => (
            <Card key={service.name} delay={index * 0.1} className='stats-card'>
              <div className='stats-number'>{service.count}</div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>{service.name}</h3>
              <p className='stats-label'>{service.description}</p>
            </Card>
          ))}
        </div>
      </SectionLayout>

      {/* CTA Section */}
      <SectionLayout background='white' padding='xl'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
            准备开始您的医疗科技项目？
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className='text-lg text-gray-600 mb-8 leading-relaxed'>
            我们的专业团队随时为您提供咨询服务，帮助您实现医疗科技创新的目标。 立即联系我们，开启合作之旅。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button variant='primary' size='lg'>
              免费咨询
            </Button>
            <Button variant='outline' size='lg'>
              查看案例
            </Button>
          </motion.div>
        </div>
      </SectionLayout>
    </div>
  );
}
