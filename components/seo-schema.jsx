'use client';

import React from 'react';

export default function SeoSchema() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.theburgerbaba.in/#organization',
        name: 'The Burger Baba',
        url: 'https://www.theburgerbaba.in',
        logo: 'https://www.theburgerbaba.in/official_logo.png',
        image: 'https://www.theburgerbaba.in/official_logo.png',
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
          availableLanguage: ['English', 'Gujarati', 'Hindi'],
        },
        sameAs: ['https://instagram.com/theburgerbabaofficial'],
      },
      {
        '@type': 'FastFoodRestaurant',
        '@id': 'https://www.theburgerbaba.in/#restaurant',
        name: 'THE BURGER BABA',
        image: 'https://www.theburgerbaba.in/official_logo.png',
        servesCuisine: ['Vegetarian', 'Fast Food', 'Burgers', 'Wraps', 'Coffee & Shakes'],
        priceRange: '₹₹',
        telephone: '+918866208063',
        email: 'theburgerbaba20@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'F-36, 37, Saket Business Hub, Radhanpur Road',
          addressLocality: 'Mehsana',
          addressRegion: 'Gujarat',
          postalCode: '384002',
          addressCountry: 'IN',
        },
        hasMenu: 'https://www.theburgerbaba.in/menu',
      },
      {
        '@type': 'Service',
        '@id': 'https://www.theburgerbaba.in/#franchise-service',
        name: 'The Burger Baba Franchise Expansion Opportunity',
        serviceType: 'QSR Food Franchise Opportunity',
        description:
          'High-ROI vegetarian QSR food franchise investment opportunities in Gujarat, Rajasthan, Maharashtra and across India.',
        provider: {
          '@type': 'Organization',
          '@id': 'https://www.theburgerbaba.in/#organization',
          name: 'The Burger Baba',
        },
        areaServed: [
          { '@type': 'State', name: 'Gujarat' },
          { '@type': 'State', name: 'Rajasthan' },
          { '@type': 'State', name: 'Maharashtra' },
          { '@type': 'Country', name: 'India' },
        ],
        offers: {
          '@type': 'Offer',
          name: 'Franchise Business Opportunity',
          url: 'https://www.theburgerbaba.in/franchise',
          category: 'Franchise Business Opportunity',
          priceCurrency: 'INR',
          price: '0.00',
          priceValidUntil: '2030-12-31',
          availability: 'https://schema.org/InStock',
          validFrom: '2020-01-01',
          seller: {
            '@type': 'Organization',
            name: 'The Burger Baba',
          },
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
