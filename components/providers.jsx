'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FranchiseModal from '@/components/interactive/franchise-modal';
import LenisProvider from '@/components/lenis-provider';
import SeoSchema from '@/components/seo-schema';

export default function Providers({ children }) {
  const [isFranchiseModalOpen, setIsFranchiseModalOpen] = useState(false);

  return (
    <LenisProvider>
      <SeoSchema />
      <Navbar onOpenFranchiseModal={() => setIsFranchiseModalOpen(true)} />
      <main className="flex-grow">{children}</main>
      <Footer onOpenFranchiseModal={() => setIsFranchiseModalOpen(true)} />
      <FranchiseModal
        isOpen={isFranchiseModalOpen}
        onClose={() => setIsFranchiseModalOpen(false)}
      />
    </LenisProvider>
  );
}
