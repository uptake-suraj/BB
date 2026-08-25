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
  metadataBase: new URL('https://theburgerbaba.com'),
  title: 'The Burger Baba | Fast Food Franchise & Vegetarian QSR Opportunities',
  description:
    'Official Website of The Burger Baba. Explore high-ROI vegetarian QSR food franchise models (Silver, Gold, Platinum) with 100+ menu items.',
  keywords: [
    'The Burger Baba',
    'Burger Franchise India',
    'QSR Franchise Gujarat',
    'Food Franchise Mehsana',
    'Fast Food Franchise Opportunity',
    'Vegetarian QSR Franchise',
  ],
  authors: [{ name: 'The Burger Baba' }],
  openGraph: {
    title: 'The Burger Baba | Premium Vegetarian QSR Franchise',
    description:
      'WE BELIEVE IN QUALITY. Expand your business with India’s fastest growing vegetarian burger and fast-food franchise.',
    url: 'https://theburgerbaba.com',
    siteName: 'The Burger Baba',
    images: [
      {
        url: '/official_logo.png',
        width: 800,
        height: 800,
        alt: 'The Burger Baba Official Logo',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/official_logo.png',
    shortcut: '/official_logo.png',
    apple: '/official_logo.png',
  },
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
