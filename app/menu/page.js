import MenuView from '@/components/menu/menu-view';

export const metadata = {
  title: 'Our 100+ Vegetarian Menu Categories',
  description:
    'Discover 100+ Pure Veg product categories: Craft Veg Burgers, Sub Toasties, Crispy Wraps, Cheese Shots, Loaded Bowls, and Shakes.',
  alternates: {
    canonical: 'https://www.theburgerbaba.in/menu',
  },
};

export default function MenuPage() {
  return <MenuView />;
}
