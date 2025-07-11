'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Network, Cpu, Shield, Database, BookOpen, Award, Microscope } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import SectionLayout from '@/components/layout/SectionLayout';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';

export default function HomePage() {
  const coreCapabilities = [
    {
      icon: Brain,
      title: '脑健康AI大模型',
      description: '构建帕金森、阿尔茨海默症、自闭症、脑肿瘤等疾病专用大模型与知识图谱，提供精准智能诊断',
    },
    {
      icon: Network,
      title: '多模态AI融合',
      description: '整合影像、生理信号、临床数据等多源信息，实现跨模态智能分析与决策支持',
    },
    {
      icon: Cpu,
      title: '全栈算法平台',
      description: '涵盖机器学习、深度学习、大语言模型的完整AI技术栈，支持端到端产品化开发',
    },
    {
      icon: Shield,
      title: '监管合规认证',
      description: '具备NMPA、FDA、CE等国际医疗器械认证能力，确保产品合规上市',
    },
  ];

  const platformAdvantages = [
    { name: '知识产权', count: '50+', description: 'PCT国际专利布局' },
    { name: '学术成果', count: '100+', description: 'SCI 2区以上论文' },
    { name: '产品转化', count: '20+', description: '医疗AI产品落地' },
    { name: '数据处理', count: '10PB+', description: '多模态医疗数据' },
  ];

  const technicalFeatures = [
    {
      icon: Database,
      title: '数据智能处理',
      description: '从EEG、影像、病理到基因组学数据的标准化处理与质控体系',
    },
    {
      icon: BookOpen,
      title: '算法创新研发',
      description: '前沿算法研究与开源贡献，推动AI+脑健康技术发展',
    },
    {
      icon: Award,
      title: '产业化转化',
      description: '完整的产品化流程，从科研成果到临床应用的无缝转化',
    },
    {
      icon: Microscope,
      title: '科研合作',
      description: '与985/211高校及三甲医院深度合作，共建医学AI生态',
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <HeroGeometric
        badge='脑健康AI创新平台'
        title1='脑健康AI全栈解决方案'
        title2='引领医学AI产业化'
        description='CalculusBrain专注于脑健康领域的人工智能应用与创新转化，通过大模型+知识图谱技术，为医疗机构提供从算法研发到产品落地的全栈AI解决方案。'
        showButtons={true}
      />

      {/* Core Capabilities Section */}
      <SectionLayout background='white' padding='xl'>
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            核心技术能力
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className='text-lg text-gray-600 max-w-2xl mx-auto'>
            基于深度学习与大模型技术，构建覆盖数据层到应用层的完整AI技术栈
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {coreCapabilities.map((capability, index) => (
            <Card key={capability.title} delay={index * 0.1} className='text-center group'>
              <div className='service-icon mx-auto mb-4'>
                <capability.icon size={24} />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>{capability.title}</h3>
              <p className='text-gray-600 leading-relaxed'>{capability.description}</p>
            </Card>
          ))}
        </div>
      </SectionLayout>

      {/* Platform Advantages Section */}
      <SectionLayout background='gray' padding='xl'>
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            平台优势
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className='text-lg text-gray-600 max-w-2xl mx-auto'>
            深厚的技术积累与丰富的产业化经验，为脑健康AI创新提供坚实保障
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {platformAdvantages.map((advantage, index) => (
            <Card key={advantage.name} delay={index * 0.1} className='stats-card'>
              <div className='stats-number'>{advantage.count}</div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>{advantage.name}</h3>
              <p className='stats-label'>{advantage.description}</p>
            </Card>
          ))}
        </div>
      </SectionLayout>

      {/* Technical Features Section */}
      <SectionLayout background='white' padding='xl'>
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            技术服务体系
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className='text-lg text-gray-600 max-w-2xl mx-auto'>
            为医疗机构、科研院所、医疗器械企业提供端到端的AI技术服务
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {technicalFeatures.map((feature, index) => (
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

      {/* CTA Section */}
      <SectionLayout background='gray' padding='xl'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
            携手构建脑健康AI未来
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className='text-lg text-gray-600 mb-8 leading-relaxed'>
            无论您是医疗机构寻求AI升级，科研院所探索技术创新，还是企业谋求产品转化，CalculusBrain都能为您提供专业的脑健康AI解决方案。让我们一起推动医学人工智能的产业化进程。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button variant='primary' size='lg'>
              技术咨询
            </Button>
            <Button variant='outline' size='lg'>
              产品演示
            </Button>
          </motion.div>
        </div>
      </SectionLayout>
    </div>
  );
}
