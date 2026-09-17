'use client';

import React from 'react';

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
        'The Burger Baba is a premium vegetarian QSR and fast food franchise brand in India providing franchise business opportunities.',
      founder: {
        '@type': 'Person',
        name: 'Manan Panchal',
        jobTitle: 'Founder & CEO',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'F-36, 37, Saket Business Hub, Opp. Domino’s Pizza, Radhanpur Road',
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
      '@type': 'WebSite',
      '@id': 'https://www.theburgerbaba.in/#website',
      url: 'https://www.theburgerbaba.in',
      name: 'The Burger Baba',
      alternateName: ['Burger Baba', 'TheBurgerBaba', 'The Burger Baba Franchise'],
      publisher: {
        '@id': 'https://www.theburgerbaba.in/#organization',
      },
    },

    {
      '@type': 'FastFoodRestaurant',
      '@id': 'https://www.theburgerbaba.in/#restaurant',
      name: 'THE BURGER BABA',
      image: 'https://www.theburgerbaba.in/official_logo.png',
      servesCuisine: [
        'Vegetarian',
        'Fast Food',
        'Burgers',
        'Wraps',
        'Coffee & Shakes',
      ],
      priceRange: '₹₹',
      telephone: '+918866208063',
      email: 'theburgerbaba20@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'F-36, 37, Saket Business Hub, Radhanpur Road',
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
      name: 'The Burger Baba Franchise Opportunity',
      serviceType: 'QSR Food Franchise Opportunity',
      description:
        'Vegetarian QSR food franchise opportunities in Gujarat, Rajasthan, Maharashtra and across India.',
      provider: {
        '@type': 'Organization',
        '@id': 'https://www.theburgerbaba.in/#organization',
      },
      areaServed: [
        {
          '@type': 'State',
          name: 'Gujarat',
        },
        {
          '@type': 'State',
          name: 'Rajasthan',
        },
        {
          '@type': 'State',
          name: 'Maharashtra',
        },
        {
          '@type': 'Country',
          name: 'India',
        },
      ],
    },
  ],
};

export default function SeoSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
}