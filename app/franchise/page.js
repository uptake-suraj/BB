import FranchiseView from '@/components/franchise/franchise-view';

export const metadata = {
  title: 'Franchise Business Models & ROI',
  description:
    'Explore Silver QSR, Gold Café, and Platinum Lounge franchise models with fee structures, ROI calculations, and onboarding roadmap.',
  alternates: {
    canonical: 'https://www.theburgerbaba.in/franchise',
  },
};

export default function FranchisePage() {
  return <FranchiseView />;
}
