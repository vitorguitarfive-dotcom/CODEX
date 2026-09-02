import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://denkor-intelligence.vitor-guitarfive.chatgpt.site'),
  title: {
    default: 'Denkor — Intelligence for Business',
    template: '%s — Denkor',
  },
  description:
    'Educação e transformação empresarial através da inteligência artificial.',
  openGraph: {
    title: 'Denkor — Intelligence for Business',
    description: 'IA aplicada a processos, decisões e crescimento.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Denkor — Intelligence for Business' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denkor — Intelligence for Business',
    description: 'IA aplicada a processos, decisões e crescimento.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
