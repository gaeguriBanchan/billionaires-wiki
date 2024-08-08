import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import styles from '@/app/layout.module.css';
import Navigation from '@/components/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Billionaires-Wiki',
    default: 'The rich',
  },
  description: 'Billionaires-List,Info. NextJs StudyProject.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.main}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
