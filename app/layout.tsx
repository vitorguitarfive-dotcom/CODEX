import type { Metadata } from 'next';
import Script from 'next/script';
import { WhatsAppFloating } from '@/components/whatsapp';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://denkor.com.br'),
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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18427985890"
          strategy="beforeInteractive"
        />
        <Script id="google-ads-tag" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18427985890');
          `}
        </Script>
      </head>
      <body className="antialiased">
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
