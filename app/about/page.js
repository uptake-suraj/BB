import AboutView from '@/components/about/about-view';

export const metadata = {
  title: 'Our Story & Leadership',
  description:
    'Learn about The Burger Baba journey from a cloud kitchen in 2020 to a 7-outlet QSR franchise brand led by Manan Panchal & Himanshu Goswami.',
  alternates: {
    canonical: 'https://www.theburgerbaba.in/about',
  },
};

export default function AboutPage() {
  return <AboutView />;
}
