import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Telegram Clone',
  description: 'Another clone telegram',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
