import type { Metadata } from 'next';
import '@/styles/main.css';
import { gabarito } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'Noted Musical Accessories | Cebu City',
  description: `Your trusty music shop for all your needs.`
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gabarito.variable} antialiased`}>{children}</body>
    </html>
  );
}
