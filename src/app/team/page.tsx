'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  GraduationCap,
  Building2,
  UserCheck,
  Trophy,
  BookOpen,
  Target,
  Brain,
  Heart,
  Lightbulb,
  Cpu,
  Network,
  Database,
  Award,
} from 'lucide-react';
import Button from '@/components/ui/Button';

const TeamPage = () => {
  const teamStats = [
    {
      icon: Users,
      number: '30+',
      title: '核心团队',
      subtitle: 'AI+脑健康专家',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: GraduationCap,
      number: '85%+',
      title: '硕博学历',
      subtitle: '985/211院校背景',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Building2,
      number: '15+',
      title: '合作院校',
      subtitle: '顶尖高校科研合作',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: UserCheck,
      number: '20+',
      title: '医院合作',
      subtitle: '三甲医院深度协作',
      gradient: 'from-red-500 to-red-600',
    },
    {
      icon: Trophy,
      number: '50+',
      title: '知识产权',
      subtitle: 'PCT国际专利布局',
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      icon: BookOpen,
      number: '100+',
      title: 'SCI论文',
      subtitle: '2区以上高质量成果',
      gradient: 'from-cyan-500 to-cyan-600',
    },
  ];

  const technicalExpertise = [
    { name: '大模型+知识图谱', count: 8, percentage: 20, color: 'bg-blue-500' },
    { name: '多模态AI融合', count: 10, percentage: 25, color: 'bg-purple-500' },
    { name: '医学影像AI', count: 12, percentage: 30, color: 'bg-green-500' },
    { name: '脑机接口技术', count: 10, percentage: 25, color: 'bg-orange-500' },
  ];

  const diseaseSpecialization = [
    { level: '帕金森病AI', count: 8, percentage: 25, color: 'bg-purple-600' },
    { level: '阿尔茨海默症AI', count: 7, percentage: 22, color: 'bg-blue-600' },
    { level: '自闭症谱系AI', count: 6, percentage: 19, color: 'bg-green-600' },
    { level: '脑肿瘤+脑卒中AI', count: 9, percentage: 28, color: 'bg-orange-600' },
    { level: '心理健康AI', count: 2, percentage: 6, color: 'bg-red-600' },
  ];

  const coreServices = [
    {
      icon: Cpu,
      title: '算法研发',
      description: '前沿AI算法创新，大模型训练优化，多模态数据融合技术开发',
    },
    {
      icon: Network,
      title: '产品转化',
      description: '从科研成果到医疗器械产品的完整转化链条，NMPA/FDA认证支持',
    },
    {
      icon: Database,
      title: '平台构建',
      description: '脑健康AI应用平台搭建，数据标准化处理，知识图谱构建',
    },
  ];

  const values = [
    {
      icon: Brain,
      title: '愿景',
      description: '将AI融入机器，为机器注入灵魂',
    },
    {
      icon: Heart,
      title: '使命',
      description: '医学AI为人类健康保驾护航！',
    },
    {
      icon: Lightbulb,
      title: '价值观',
      description: '专注、极致、口碑、less is more，守正出奇、快',
    },
  ];

  const platformCapabilities = [
    {
      icon: Award,
      title: '技术创新能力',
      description: '深度学习、大语言模型、知识图谱等核心技术自主研发',
    },
    {
      icon: Building2,
      title: '产业化能力',
      description: '完整的医疗AI产品化流程，从算法到监管认证的全链条服务',
    },
    {
      icon: Users,
      title: '生态合作能力',
      description: '与高校、医院、企业构建开放合作的医学AI创新生态',
    },
  ];

  return (
    <div className='bg-blue-50 min-h-screen pt-24 pb-8'>
      <div className='container mx-auto px-4 md:px-6'>
        {/* Header Section */}
        <motion.div
          className='text-center mb-12'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <div className='inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors bg-blue-100 text-blue-600 border-blue-300 mb-4'>
            脑健康AI创新团队
          </div>
          <h1 className='text-3xl md:text-4xl font-bold mb-4 text-blue-600'>CalculusBrain Team</h1>
          <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
            专注于AI+脑健康的开源学习型组织，汇聚医学AI领域的顶尖人才，致力于推动脑健康人工智能应用与创新转化。我们不仅是技术的探索者，更是医学AI产业化的引领者。
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          className='bg-white rounded-lg shadow-sm p-8 mb-12'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          <div className='text-center mb-8'>
            <h2 className='text-2xl font-bold text-blue-600 mb-4'>团队实力</h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              汇聚国内外顶尖高校医院的医学AI科研人员，构建从算法研发到产品转化的完整能力体系
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12'>
            {teamStats.map((stat, index) => (
              <motion.div
                key={index}
                className='text-center group'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}>
                <div
                  className={`bg-gradient-to-br ${stat.gradient} text-white rounded-xl p-6 mb-3 group-hover:shadow-lg transition-shadow`}>
                  <stat.icon className='h-8 w-8 mx-auto mb-2' />
                  <div className='text-2xl font-bold'>{stat.number}</div>
                </div>
                <div className='text-gray-700 font-medium'>{stat.title}</div>
                <div className='text-sm text-gray-500'>{stat.subtitle}</div>
              </motion.div>
            ))}
          </div>

          {/* Technical Charts Section */}
          <div className='grid md:grid-cols-2 gap-8'>
            <motion.div
              className='bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6'
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}>
              <h3 className='text-lg font-bold text-blue-600 mb-4 flex items-center'>
                <Cpu className='h-5 w-5 mr-2' />
                核心技术栈分布
              </h3>
              <div className='space-y-3'>
                {technicalExpertise.map((tech, index) => (
                  <div key={index} className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <div className={`w-3 h-3 rounded-full ${tech.color} mr-3`}></div>
                      <span className='text-gray-700 font-medium'>{tech.name}</span>
                    </div>
                    <div className='text-right'>
                      <span className='text-blue-600 font-bold'>{tech.count}人</span>
                      <span className='text-gray-500 text-sm ml-2'>({tech.percentage}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className='bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6'
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}>
              <h3 className='text-lg font-bold text-blue-600 mb-4 flex items-center'>
                <Brain className='h-5 w-5 mr-2' />
                疾病专业领域分布
              </h3>
              <div className='space-y-3'>
                {diseaseSpecialization.map((disease, index) => (
                  <div key={index} className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <div className={`w-3 h-3 rounded-full ${disease.color} mr-3`}></div>
                      <span className='text-gray-700 font-medium'>{disease.level}</span>
                    </div>
                    <div className='text-right'>
                      <span className='text-blue-600 font-bold'>{disease.count}人</span>
                      <span className='text-gray-500 text-sm ml-2'>({disease.percentage}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className='bg-white rounded-lg shadow-sm p-8 mb-12'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}>
          <h2 className='text-2xl font-bold text-blue-600 text-center mb-8'>愿景、使命、价值观</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            {values.map((value, index) => (
              <motion.div
                key={index}
                className='text-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + 0.1 * index }}
                whileHover={{ scale: 1.05 }}>
                <div className='bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                  <value.icon className='h-8 w-8 text-blue-600' />
                </div>
                <h3 className='font-bold text-blue-600 mb-2 text-lg'>{value.title}</h3>
                <p className='text-gray-600 text-sm leading-relaxed'>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Services Section */}
        <motion.div
          className='bg-white rounded-lg shadow-sm p-8 mb-12'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}>
          <h2 className='text-2xl font-bold text-blue-600 text-center mb-8'>核心服务能力</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                className='text-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + 0.1 * index }}
                whileHover={{ scale: 1.05 }}>
                <div className='bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                  <service.icon className='h-8 w-8 text-blue-600' />
                </div>
                <h3 className='font-bold text-blue-600 mb-2'>{service.title}</h3>
                <p className='text-gray-600 text-sm'>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platform Capabilities Section */}
        <motion.div
          className='bg-white rounded-lg shadow-sm p-8 mb-12'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}>
          <h2 className='text-2xl font-bold text-blue-600 text-center mb-8'>平台化能力</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            {platformCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                className='text-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + 0.1 * index }}
                whileHover={{ scale: 1.05 }}>
                <div className='bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                  <capability.icon className='h-8 w-8 text-blue-600' />
                </div>
                <h3 className='font-bold text-blue-600 mb-2'>{capability.title}</h3>
                <p className='text-gray-600 text-sm'>{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className='bg-blue-600 text-white rounded-lg p-8 text-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}>
          <h2 className='text-2xl font-bold mb-4'>携手构建脑健康AI未来</h2>
          <p className='mb-6 max-w-2xl mx-auto'>
            无论您是医学研究者、AI工程师、产业合作伙伴，还是对脑健康AI充满热情的学习者，我们都欢迎您加入CalculusBrain生态，共同推动医学人工智能的创新与转化
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='bg-white text-blue-700 hover:bg-blue-50 focus:ring-4 focus:ring-white focus:ring-opacity-50 focus:outline-none font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl min-h-[48px] min-w-[120px]'
              aria-label='联系CalculusBrain团队进行合作咨询，了解脑健康AI项目合作机会'
              role='button'
              tabIndex={0}>
              合作咨询
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-700 focus:ring-4 focus:ring-white focus:ring-opacity-50 focus:outline-none font-semibold px-8 py-4 rounded-lg transition-all duration-200 min-h-[48px] min-w-[120px]'
              aria-label='查看CalculusBrain团队的开源项目、技术成果和产品展示'
              role='button'
              tabIndex={0}>
              技术展示
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;
