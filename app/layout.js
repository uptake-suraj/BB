import { Poppins } from 'next/font/google';
import './globals.css';
import Providers from '@/components/providers';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.theburgerbaba.in'),

  title: {
    default: 'The Burger Baba | Vegetarian QSR & Food Franchise',
    template: '%s | The Burger Baba',
  },

  description:
    'The Burger Baba offers vegetarian QSR and food franchise opportunities across India. Explore our franchise models, menu, and business opportunities.',

  keywords: [
    'The Burger Baba',
    'The Burger Baba Franchise',
    'Burger Franchise India',
    'Vegetarian Food Franchise',
    'QSR Franchise India',
    'QSR Franchise Gujarat',
    'Food Franchise Gujarat',
    'Fast Food Franchise India',
  ],

  authors: [{ name: 'The Burger Baba' }],

  alternates: {
    canonical: './',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: 'The Burger Baba | Vegetarian QSR & Food Franchise',
    description:
      'Explore The Burger Baba vegetarian QSR and food franchise opportunities across India.',
    url: 'https://www.theburgerbaba.in',
    siteName: 'The Burger Baba',
    images: [
      {
        url: '/official_logo.png',
        width: 800,
        height: 800,
        alt: 'The Burger Baba Official Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen bg-baba-bg text-baba-black flex flex-col antialiased font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}