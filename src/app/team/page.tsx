'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Building2, UserCheck, Trophy, BookOpen, Target, Brain, Heart, Lightbulb } from 'lucide-react';
import Button from '@/components/ui/Button';

const TeamPage = () => {
  const teamStats = [
    {
      icon: Users,
      number: '30+',
      title: '团队成员',
      subtitle: '专注AI+脑健康研究',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: GraduationCap,
      number: '85%+',
      title: '硕博学历',
      subtitle: '高学历专业团队',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Building2,
      number: '10+',
      title: '合作院校',
      subtitle: '985/211重点院校',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: UserCheck,
      number: '15+',
      title: '合作医院',
      subtitle: '三甲医院合作',
      gradient: 'from-red-500 to-red-600',
    },
    {
      icon: Trophy,
      number: '20+',
      title: '开源项目',
      subtitle: 'AI医疗项目成功案例',
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      icon: BookOpen,
      number: '100+',
      title: '学术论文',
      subtitle: '团队成员累计发表',
      gradient: 'from-cyan-500 to-cyan-600',
    },
  ];

  const specialties = [
    { name: '深度学习+神经网络', count: 12, percentage: 25, color: 'bg-blue-500' },
    { name: '医学影像AI', count: 15, percentage: 30, color: 'bg-purple-500' },
    { name: '脑机接口技术', count: 10, percentage: 20, color: 'bg-green-500' },
    { name: '数据科学+算法', count: 12, percentage: 25, color: 'bg-orange-500' },
  ];

  const education = [
    { level: '博士后', count: 3, percentage: 15, color: 'bg-purple-600' },
    { level: '博士', count: 8, percentage: 40, color: 'bg-blue-600' },
    { level: '硕士', count: 12, percentage: 35, color: 'bg-green-600' },
    { level: '本科', count: 7, percentage: 10, color: 'bg-orange-600' },
  ];

  const services = [
    {
      icon: BookOpen,
      title: '学术指导',
      description: '提供AI+脑健康研究方向规划、方法选择、技术路线设计等全方位学术指导',
    },
    {
      icon: Users,
      title: '项目合作',
      description: '与高校、医院、企业开展深度合作，共同推进医学AI项目研究',
    },
    {
      icon: Target,
      title: '开源贡献',
      description: '积极参与开源社区，分享研究成果，推动AI医疗技术普及应用',
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
            团队介绍
          </div>
          <h1 className='text-3xl md:text-4xl font-bold mb-4 text-blue-600'>CalculusBrain Team</h1>
          <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
            一个专注于AI+脑健康的开源学习组织，汇聚了众多医学AI项目的探索者，取长补短，互相学习。和探索者一起成长，for the ai project
            learner！
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
            <p className='text-gray-600 max-w-2xl mx-auto'>汇聚国内外顶尖高校/医院的医学AI科研人员，构建高质量专业团队</p>
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

          {/* Charts Section */}
          <div className='grid md:grid-cols-2 gap-8'>
            <motion.div
              className='bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6'
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}>
              <h3 className='text-lg font-bold text-blue-600 mb-4 flex items-center'>
                <Users className='h-5 w-5 mr-2' />
                专业领域分布
              </h3>
              <div className='space-y-3'>
                {specialties.map((specialty, index) => (
                  <div key={index} className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <div className={`w-3 h-3 rounded-full ${specialty.color} mr-3`}></div>
                      <span className='text-gray-700 font-medium'>{specialty.name}</span>
                    </div>
                    <div className='text-right'>
                      <span className='text-blue-600 font-bold'>{specialty.count}人</span>
                      <span className='text-gray-500 text-sm ml-2'>({specialty.percentage}%)</span>
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
                <GraduationCap className='h-5 w-5 mr-2' />
                学历结构分布
              </h3>
              <div className='space-y-3'>
                {education.map((edu, index) => (
                  <div key={index} className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <div className={`w-3 h-3 rounded-full ${edu.color} mr-3`}></div>
                      <span className='text-gray-700 font-medium'>{edu.level}</span>
                    </div>
                    <div className='text-right'>
                      <span className='text-blue-600 font-bold'>{edu.count}人</span>
                      <span className='text-gray-500 text-sm ml-2'>({edu.percentage}%)</span>
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

        {/* Services Section */}
        <motion.div
          className='bg-white rounded-lg shadow-sm p-8 mb-12'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}>
          <h2 className='text-2xl font-bold text-blue-600 text-center mb-8'>团队服务</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            {services.map((service, index) => (
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

        {/* CTA Section */}
        <motion.div
          className='bg-blue-600 text-white rounded-lg p-8 text-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}>
          <h2 className='text-2xl font-bold mb-4'>加入我们的开源学习组织</h2>
          <p className='mb-6 max-w-2xl mx-auto'>
            无论您是医学研究者、AI工程师还是学生，我们都欢迎您加入我们的团队，一起探索AI+脑健康的无限可能
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              variant='secondary'
              className='bg-white text-blue-700 hover:bg-gray-50 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 font-semibold'
              aria-label='联系我们了解更多信息'>
              联系我们
            </Button>
            <Button
              variant='outline'
              className='border-2 border-white text-white hover:bg-white hover:text-blue-700 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 font-semibold transition-all duration-200'
              aria-label='查看我们的开源项目'>
              查看项目
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;
