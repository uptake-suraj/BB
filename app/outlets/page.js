import OutletsView from '@/components/outlets/outlets-view';

export const metadata = {
  title: 'Outlet Locations & Network',
  description:
    'Locate 7 live operational outlets of The Burger Baba across Mehsana, Vijapur, Visnagar, Ahmedabad, and Surat in Gujarat.',
  alternates: {
    canonical: 'https://www.theburgerbaba.in/outlets',
  },
};

export default function OutletsPage() {
  return <OutletsView />;
}
