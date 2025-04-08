import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kunal Darekar | MERN Stack Developer',
  description: 'Full Stack Developer specializing in MERN stack development with a strong foundation in Data Structures & Algorithms',
  metadataBase: new URL('https://kunal-portfolio.vercel.app'),
  keywords: [
    'MERN Stack',
    'Web Development',
    'React.js',
    'Node.js',
    'MongoDB',
    'Express.js',
    'JavaScript',
    'TypeScript',
    'Portfolio'
  ],
  authors: [{ name: 'Kunal Darekar' }],
  openGraph: {
    title: 'Kunal Darekar | MERN Stack Developer',
    description: 'Full Stack Developer specializing in MERN stack development',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kunal Darekar Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kunal Darekar | MERN Stack Developer',
    description: 'Full Stack Developer specializing in MERN stack development',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}