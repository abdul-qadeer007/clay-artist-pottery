import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { siteConfig } from '@/config/site';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Pottery Studio in Clifton Karachi`,
    template: `%s | ${siteConfig.name} Karachi`,
  },
  description: siteConfig.description,
  keywords: [
    'pottery classes in Karachi',
    'pottery studio Clifton Karachi',
    'kids birthday pottery party Karachi',
    'school pottery trip Karachi',
    'pottery wheel throwing Karachi',
    'clay sculpting workshops Clifton',
    'corporate pottery team building Karachi',
    'ceramic art Karachi',
    'Clay Artist Pottery',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: siteConfig.url,
    title: `${siteConfig.name} — Handcrafted Pottery Studio Karachi`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 800,
        alt: 'Clay Artist Pottery Studio Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Karachi's Premier Pottery Studio`,
    description: siteConfig.description,
    images: ['/images/logo.png'],
  },
  icons: {
    icon: [
      { url: '/images/logo1.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo1.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/logo1.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: ['/images/logo1.png'],
    apple: [
      { url: '/images/logo1.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/images/logo1.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    image: `${siteConfig.url}/images/logo.png`,
    '@id': siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: 'PKR 3500 - 45000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Clifton Block 4, Near Dolmen Mall',
      addressLocality: 'Karachi',
      addressRegion: 'Sindh',
      postalCode: '75600',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.824707,
      longitude: 67.026136,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '11:00',
        closes: '21:00',
      },
    ],
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
      siteConfig.socials.whatsapp,
    ],
  };

  return (
    <html 
      lang="en" 
      className={`${playfair.variable} ${jakarta.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body 
        className="min-h-screen flex flex-col antialiased selection:bg-[#B5532A] selection:text-white"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
