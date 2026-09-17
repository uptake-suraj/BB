import HomeView from '@/components/home/home-view';

export const metadata = {
  title: {
    absolute: 'The Burger Baba | Premium Vegetarian QSR & Fast Food Franchise',
  },
  description:
    'Official Website of The Burger Baba. Explore turnkey vegetarian QSR food franchise models (Silver, Gold, Platinum) with 100+ menu items.',
  alternates: {
    canonical: 'https://www.theburgerbaba.in',
  },
};

export default function HomePage() {
  return <HomeView />;
}
