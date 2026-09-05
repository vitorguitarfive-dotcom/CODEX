import type { Metadata } from 'next';

const openGraphImage = {
  url: '/og.png',
  width: 1200,
  height: 630,
  alt: 'Denkor — Intelligence for Business',
};

export function createPageMetadata(
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [openGraphImage],
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og.png'],
    },
  };
}
