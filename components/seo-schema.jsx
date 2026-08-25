'use client';

import React from 'react';

export default function SeoSchema() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://theburgerbaba.com/#organization',
        name: 'The Burger Baba Pvt. Ltd.',
        url: 'https://theburgerbaba.com',
        logo: 'https://theburgerbaba.com/burger_baba_logo.jpg',
        description:
          'The Burger Baba is a premium vegetarian QSR and fast food franchise brand in India providing high-ROI franchise business opportunities.',
        founder: {
          '@type': 'Person',
          name: 'Manan Panchal',
          jobTitle: 'Founder & CEO',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'F-36, 37, Saket Business Hub, Opp. Domino’s Pizza, Radhanpur Road',
          addressLocality: 'Mehsana',
          addressRegion: 'Gujarat',
          postalCode: '384002',
          addressCountry: 'IN',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-8866208063',
          contactType: 'franchise sales',
          email: 'theburgerbaba20@gmail.com',
        },
        sameAs: ['https://instagram.com/theburgerbabaofficial'],
      },
      {
        '@type': 'FastFoodRestaurant',
        '@id': 'https://theburgerbaba.com/#restaurant',
        name: 'THE BURGER BABA',
        servesCuisine: ['Vegetarian', 'Fast Food', 'Burgers', 'Wraps', 'Coffee & Shakes'],
        priceRange: '₹₹',
        telephone: '+918866208063',
        email: 'theburgerbaba20@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Radhanpur Road',
          addressLocality: 'Mehsana',
          addressRegion: 'Gujarat',
          addressCountry: 'IN',
        },
        hasMenu: 'https://theburgerbaba.com/menu',
      },
      {
        '@type': 'BusinessEvent',
        name: 'The Burger Baba Franchise Expansion',
        description:
          'Franchise investment opportunities in Gujarat, Rajasthan, Maharashtra and across India.',
        offers: {
          '@type': 'Offer',
          category: 'Franchise Business Opportunity',
          priceCurrency: 'INR',
          price: '651000',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
