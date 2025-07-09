import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '医疗科技有限公司 - 推动医疗科技创新发展',
  description:
    '汇聚国内外顶尖高校/医院的医学AI科研人员，构建高质量专业团队，致力于推动医疗科技创新发展。提供学术指导、项目合作、成果转化、数据分析等专业服务。',
  keywords: '医疗科技,人工智能,精准医疗,数据分析,学术指导,项目合作',
  authors: [{ name: '医疗科技团队' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://medtech.com',
    title: '医疗科技有限公司 - 推动医疗科技创新发展',
    description: '汇聚国内外顶尖高校/医院的医学AI科研人员，致力于推动医疗科技创新发展',
    siteName: '医疗科技',
  },
  twitter: {
    card: 'summary_large_image',
    title: '医疗科技有限公司 - 推动医疗科技创新发展',
    description: '汇聚国内外顶尖高校/医院的医学AI科研人员，致力于推动医疗科技创新发展',
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
