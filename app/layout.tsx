import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://bodasandeepsai.vercel.app'),
  title: 'Boda Sandeep Sai - Software Developer',
  description: 'Professional portfolio of Boda Sandeep Sai, a Computer Science Engineering student specializing in full-stack development, Java, Python, and modern web technologies.',
  keywords: 'Boda Sandeep Sai, Full Stack Developer, Software Engineer, Java, Python, React, Next.js, Web Development, Computer Science, Portfolio',
  authors: [{ name: 'Boda Sandeep Sai' }],
  creator: 'Boda Sandeep Sai',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bodasandeepsai.vercel.app',
    title: 'Boda Sandeep Sai - Software Engineer',
    description: 'Professional portfolio showcasing modern web development projects, skills, and experience in software engineering.',
    siteName: 'Boda Sandeep Sai Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boda Sandeep Sai - Software Engineer',
    description: 'Professional portfolio showcasing modern web development projects, skills, and experience in software engineering.',
    creator: '@bodasandeepsai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}