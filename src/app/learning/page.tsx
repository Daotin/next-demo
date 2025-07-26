'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen } from 'lucide-react';
import { videos, categories, instructors } from '@/data/videos';
import { SearchFilters } from '@/types/video';
import VideoCard from '@/components/ui/VideoCard';
import Button from '@/components/ui/Button';

const LearningPage: React.FC = () => {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    query: '',
    category: 'all',
    instructor: '',
  });

  const [showFilters, setShowFilters] = useState(false);

  // 过滤视频
  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const matchQuery = searchFilters.query === '' || 
        video.title.toLowerCase().includes(searchFilters.query.toLowerCase()) ||
        video.description.toLowerCase().includes(searchFilters.query.toLowerCase()) ||
        video.instructor.toLowerCase().includes(searchFilters.query.toLowerCase());

      const matchCategory = searchFilters.category === 'all' ||
        video.category === searchFilters.category;

      const matchInstructor = searchFilters.instructor === '' ||
        video.instructor === searchFilters.instructor;

      return matchQuery && matchCategory && matchInstructor;
    });
  }, [searchFilters]);

  const handleSearch = (query: string) => {
    setSearchFilters(prev => ({ ...prev, query }));
  };

  const handleCategoryFilter = (category: string) => {
    const categoryName = categories.find(c => c.id === category)?.name || 'all';
    setSearchFilters(prev => ({ 
      ...prev, 
      category: categoryName === '全部' ? 'all' : categoryName 
    }));
  };

  const handleInstructorFilter = (instructor: string) => {
    setSearchFilters(prev => ({ ...prev, instructor }));
  };

  const clearFilters = () => {
    setSearchFilters({ query: '', category: 'all', instructor: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">学习中心</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            B站视频课程一站式获取
          </p>
        </motion.div>

        {/* 搜索和筛选区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8"
        >
          {/* 搜索框 */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="搜索课程标题、讲师或内容..."
              value={searchFilters.query}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          {/* 筛选器切换按钮 */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter size={16} />
              筛选器
            </Button>

            {(searchFilters.query || searchFilters.category !== 'all' || searchFilters.instructor) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-gray-500"
              >
                清除筛选
              </Button>
            )}
          </div>

          {/* 筛选器面板 */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-gray-200 space-y-4"
            >
              {/* 分类筛选 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  课程分类
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryFilter(category.id)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        (searchFilters.category === 'all' && category.id === 'all') ||
                        searchFilters.category === category.name
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* 讲师筛选 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  讲师
                </label>
                <select
                  value={searchFilters.instructor}
                  onChange={(e) => handleInstructorFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">所有讲师</option>
                  {instructors.map((instructor) => (
                    <option key={instructor} value={instructor}>
                      {instructor}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* 结果统计 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            找到 <span className="font-semibold text-blue-600">{filteredVideos.length}</span> 个课程
          </p>
        </motion.div>

        {/* 视频卡片网格 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredVideos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* 无结果提示 */}
        {filteredVideos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              没有找到相关课程
            </h3>
            <p className="text-gray-600 mb-4">
              尝试调整搜索条件或清除筛选器
            </p>
            <Button variant="primary" onClick={clearFilters}>
              清除所有筛选
            </Button>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default LearningPage; 