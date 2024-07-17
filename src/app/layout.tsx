import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans as FontSans } from 'next/font/google';
import './globals.css';

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Hugo Hsi',
  description: "Hugo's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased overflow-x-hidden',
          fontSans.variable
        )}>
        {children}
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
