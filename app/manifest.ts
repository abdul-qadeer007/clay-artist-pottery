import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Clay Artist',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF3EA',
    theme_color: '#B5532A',
    icons: [
      {
        src: '/images/logo1.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/logo1.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/images/logo1.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
