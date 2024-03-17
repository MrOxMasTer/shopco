import { cn } from '@/shared/lib/utils';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { PreloadResources } from './preload-resources';
import { Toaster } from 'sonner';

const satoshi = localFont({
  src: '../shared/assets/fonts/Satoshi-Variable.ttf',
  display: 'block',
  variable: '--font-satoshi',
  weight: '400 700',
  style: 'normal',
});

const interfralCF = localFont({
  src: '../shared/assets/fonts/IntegralCF-Bold.woff2',
  display: 'block',
  variable: '--font-intergralCF-bold',
  weight: '600',
  style: 'normal',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(`${satoshi.variable} ${interfralCF.variable}`, {
          'debug-screens': process.env.NODE_ENV === 'development',
        })}>
        <PreloadResources />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
