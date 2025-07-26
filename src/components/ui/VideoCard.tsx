'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Eye, Calendar, ExternalLink } from 'lucide-react';
import { Video } from '@/types/video';
import Button from './Button';

interface VideoCardProps {
  video: Video;
  delay?: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, delay = 0 }) => {
  const formatViews = (views: number): string => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case '免费技能提升班':
        return 'bg-blue-100 text-blue-800';
      case '免费公开课':
        return 'bg-green-100 text-green-800';
      case '免费教程分享':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100"
    >
      {/* 缩略图区域 */}
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        
        {/* 类型标签 */}
        <div className="absolute top-3 left-3">
          <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
            {video.type}
          </span>
        </div>
        
        {/* 时长标签 */}
        <div className="absolute bottom-3 right-3">
          <span className="bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
            <Clock size={12} />
            {video.duration}
          </span>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="p-5 space-y-4">
        {/* 标题 */}
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 leading-tight">
          {video.title}
        </h3>

        {/* 描述 */}
        <p className="text-gray-600 text-sm line-clamp-2">
          {video.description}
        </p>

        {/* 讲师信息 */}
        <div className="space-y-1">
          <p className="text-sm">
            <span className="text-gray-500">讲师:</span>
            <span className="text-gray-900 font-medium ml-1">{video.instructor}</span>
          </p>
          <p className="text-xs text-gray-500">
            {video.instructorTitle}
          </p>
        </div>

        {/* 统计信息 */}
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Eye size={12} />
            <span>播放量:{formatViews(video.views)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>发布:{formatDate(video.publishDate)}</span>
          </div>
        </div>

        {/* 分类标签 */}
        <div className="flex items-center justify-between">
          <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(video.category)}`}>
            {video.category}
          </span>
        </div>

        {/* 观看按钮 */}
        <div className="pt-2">
          <Button
            variant="primary"
            size="sm"
            className="w-full"
            onClick={() => window.open(video.url, '_blank')}
          >
            <ExternalLink size={16} />
            在B站观看
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard; 