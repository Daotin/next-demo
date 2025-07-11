import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CalculusBrain - 脑健康AI全栈解决方案与创新转化平台',
  description:
    '专注于脑健康AI的开源学习型组织，汇聚医学AI领域顶尖人才，致力于推动脑健康人工智能应用与创新转化。提供大模型+知识图谱、多模态AI、算法研发、产品转化等全栈技术服务。',
  keywords: '脑健康AI,人工智能,大模型,知识图谱,多模态AI,医学影像,脑机接口,帕金森,阿尔茨海默症,自闭症,CalculusBrain',
  authors: [{ name: 'CalculusBrain Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  icons: {
    icon: '/logo.webp',
    apple: '/logo.webp',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://calculusbrain.ai',
    title: 'CalculusBrain - 脑健康AI全栈解决方案与创新转化平台',
    description: '专注于脑健康AI的开源学习型组织，致力于推动脑健康人工智能应用与创新转化，构建从算法研发到产品落地的完整AI技术栈',
    siteName: 'CalculusBrain',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'CalculusBrain - 脑健康AI全栈解决方案',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CalculusBrain - 脑健康AI全栈解决方案',
    description: '专注脑健康AI创新，大模型+知识图谱技术，推动医学人工智能产业化',
    images: ['/logo.webp'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='zh-CN' className='scroll-smooth'>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
