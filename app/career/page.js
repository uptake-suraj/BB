import CareerView from '@/components/career/career-view';

export const metadata = {
  title: 'Careers & Job Openings',
  description:
    'Join The Burger Baba team! Explore career opportunities across store management, kitchen operations, franchise sales, and digital marketing.',
  alternates: {
    canonical: 'https://www.theburgerbaba.in/career',
  },
};

export default function CareerPage() {
  return <CareerView />;
}
