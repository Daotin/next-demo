import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // 医疗科技主题色
        'theme-blue': '#1e40af', // 品牌主色（深蓝色）
        'theme-lightBlue': '#3b82f6', // 辅助色（浅蓝色）
        'theme-text-primary': '#1f2937', // 主文字颜色
        'theme-text-secondary': '#6b7280', // 次文字颜色
        'theme-gradient-start': '#1e40af', // 渐变起始色
        'theme-gradient-end': '#7c3aed', // 渐变结束色（蓝紫）
        'theme-card-bg': '#ffffff', // 卡片背景色
        'theme-card-border': '#e5e7eb', // 卡片边框色
        'theme-success': '#10b981', // 成功色（绿色）
        'theme-warning': '#f59e0b', // 警告色（橙色）
        'theme-error': '#ef4444', // 错误色（红色）
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-card': 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        button: '0 4px 14px 0 rgba(30, 64, 175, 0.39)',
      },
      borderRadius: {
        card: '12px',
        button: '8px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-2': ['3rem', { lineHeight: '1.2', fontWeight: '600' }],
        hero: ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'section-title': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
