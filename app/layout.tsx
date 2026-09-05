import type { Metadata } from 'next';
import Script from 'next/script';
import { TrafficAttribution } from '@/components/traffic-attribution';
import { WhatsAppFloating } from '@/components/whatsapp';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://denkor.com.br'),
  title: 'Denkor — IA aplicada a negócios',
  description:
    'Educação e transformação empresarial através da inteligência artificial.',
  openGraph: {
    title: 'Denkor — Intelligence for Business',
    description: 'IA aplicada a processos, decisões e crescimento.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Denkor — Intelligence for Business',
      },
    ],
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
          strategy="lazyOnload"
        />
        <Script id="google-ads-tag" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18427985890');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P88G5NDM');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P88G5NDM"
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <TrafficAttribution />
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
