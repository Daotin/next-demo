# Next.js 脑健康 AI 项目 - Cursor 编码规范

## 📋 规范文件索引

本项目的 Cursor 编码规范已完整生成，包含以下规范文件：

### 🏗️ 核心架构规范

1. **[development-overview.mdc](./development-overview.mdc)** - 开发总览和快速参考

   - 应用范围：所有开发工作
   - 包含：技术栈、架构原则、常用模式

2. **[project-structure.mdc](./project-structure.mdc)** - 项目结构规范

   - 应用范围：所有文件和目录
   - 包含：目录命名、模块组织、导入顺序

3. **[code-quality-standards.mdc](./code-quality-standards.mdc)** - 代码质量和团队协作
   - 应用范围：所有代码文件
   - 包含：设计原则、命名规范、错误处理、团队协作

### ⚛️ 技术专项规范

4. **[typescript-standards.mdc](./typescript-standards.mdc)** - TypeScript 编码规范

   - 应用范围：_.ts, _.tsx 文件
   - 包含：类型定义、函数签名、性能优化

5. **[react-component-standards.mdc](./react-component-standards.mdc)** - React 组件开发规范

   - 应用范围：\*.tsx 文件
   - 包含：组件架构、状态管理、事件处理、动画集成

6. **[nextjs-standards.mdc](./nextjs-standards.mdc)** - Next.js 开发规范

   - 应用范围：_.tsx, _.ts, page.tsx, layout.tsx 文件
   - 包含：App Router、数据获取、SEO 优化、性能优化

7. **[styling-standards.mdc](./styling-standards.mdc)** - 样式和 CSS 规范
   - 应用范围：_.css, _.tsx, \*.ts 文件
   - 包含：Tailwind CSS、响应式设计、动画效果

### 🎯 特定功能规范

8. **[post-excerpt.mdc](./post-excerpt.mdc)** - 文章摘要规范
   - 应用范围：内容相关功能
   - 包含：摘要生成、SEO 优化、显示组件

## 🚀 使用方法

### 自动应用的规范

以下规范会自动应用到所有相关文件：

- `development-overview.mdc` - 开发总览
- `project-structure.mdc` - 项目结构
- `code-quality-standards.mdc` - 代码质量

### 按文件类型应用的规范

根据文件扩展名自动应用：

- `*.ts, *.tsx` → TypeScript 规范
- `*.tsx` → React 组件规范
- `*.css, *.tsx, *.ts` → 样式规范
- `page.tsx, layout.tsx` → Next.js 规范

### 手动获取的规范

可以通过 Cursor 的 fetch_rules 工具获取：

- `post.excerpt` → 文章摘要规范

## 📖 核心编码原则

### 设计哲学

1. **第一性原理** - 从问题本质出发，理解核心需求
2. **DRY 原则** - 避免重复代码，提取可复用组件
3. **KISS 原则** - 保持代码简洁明了
4. **SOLID 原则** - 面向对象设计的五个基本原则
5. **YAGNI 原则** - 不要过度设计，只实现当前需要的功能

### 代码质量要求

- **函数**: 少于 50 行
- **组件**: 少于 200 行
- **文件**: 少于 500 行（超过需要拆分）
- **最小化改动**: 只修改与任务相关的代码
- **向后兼容**: 确保新功能不影响现有功能

## 🛠️ 技术栈规范

### 核心技术

- **Next.js 15** (App Router) - 全栈 React 框架
- **TypeScript 5+** - 类型安全的 JavaScript 超集
- **Tailwind CSS 3.4** - 实用优先的 CSS 框架
- **Framer Motion 11** - 动画库
- **Lucide React** - 图标库

### 开发工具

- **clsx + tailwind-merge** - 条件样式处理
- **ESLint + Prettier** - 代码格式化和检查
- **Git** - 版本控制（遵循约定式提交）

## 📁 项目结构概览

```
next-demo/
├── .cursor/rules/           # Cursor编码规范（本目录）
├── src/
│   ├── app/                 # Next.js App Router页面
│   │   ├── globals.css      # 全局样式
│   │   ├── layout.tsx       # 根布局
│   │   └── [feature]/       # 功能模块
│   ├── components/          # 可复用组件
│   │   ├── layout/          # 布局组件
│   │   └── ui/              # 基础UI组件
│   └── lib/                 # 工具函数和配置
├── public/                  # 静态资源
├── docs/                    # 项目文档
└── 配置文件                 # next.config.ts, tailwind.config.ts等
```

## 🎨 样式系统

### 颜色规范

- **主色调**: `primary-500` (#3b82f6) - 蓝色系
- **次要色**: `secondary-500` (#64748b) - 灰色系
- **医疗主题**: 蓝色和紫色渐变

### 组件样式类

- `.card-medical` - 医疗主题卡片
- `.btn-primary` - 主要按钮样式
- `.text-gradient` - 渐变文字效果
- `.section-padding` - 标准区块间距

## 🔍 代码质量检查

### 开发时检查清单

- [ ] 遵循命名规范（camelCase/PascalCase）
- [ ] 添加适当的 TypeScript 类型注解
- [ ] 处理错误和边界情况
- [ ] 使用语义化的 HTML 和 ARIA 属性
- [ ] 实现响应式设计
- [ ] 性能优化（React.memo、useCallback）
- [ ] 符合可访问性标准

### Git 提交规范

```bash
feat: 添加新功能
fix: 修复bug
docs: 更新文档
style: 代码格式调整
refactor: 代码重构
test: 添加测试
chore: 构建过程或辅助工具的变动
```

## 📚 扩展阅读

- [Next.js 官方文档](https://nextjs.org/docs)
- [TypeScript 手册](https://www.typescriptlang.org/docs/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Framer Motion 文档](https://www.framer.com/motion/)
- [React 官方文档](https://react.dev/)

## 🤝 团队协作

### 代码审查要求

- 所有代码必须经过代码审查
- 遵循项目编码规范
- 确保测试通过
- 验证向后兼容性

### 问题报告和建议

如有规范改进建议或发现问题，请：

1. 在团队会议中讨论
2. 更新相应的规范文件
3. 确保团队成员了解变更

---

**最后更新**: 2024 年 12 月
**维护者**: CalculusBrain 开发团队
**版本**: v1.0.0
