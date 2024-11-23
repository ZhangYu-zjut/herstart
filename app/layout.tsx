import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '她的导航 - 智慧女性的网络起点',
  description: '专为都市女性打造的一站式导航平台，涵盖购物、美妆、健康、职场等多个领域的精选网站。',
  keywords: '女性导航,购物网站,美妆时尚,健康养生,职场发展,生活服务',
  openGraph: {
    title: '她的导航 - 智慧女性的网络起点',
    description: '专为都市女性打造的一站式导航平台',
    type: 'website',
    locale: 'zh_CN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen bg-background">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}