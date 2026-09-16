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
      {
        '@type': 'BusinessEvent',
        '@id': 'https://www.theburgerbaba.in/#franchise-event',
        name: 'The Burger Baba Franchise Expansion',
        description:
          'Franchise investment opportunities in Gujarat, Rajasthan, Maharashtra and across India.',
        startDate: '2026-01-01T09:00:00+05:30',
        endDate: '2030-12-31T18:00:00+05:30',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
        image: 'https://www.theburgerbaba.in/official_logo.png',
        location: [
          {
            '@type': 'Place',
            name: 'The Burger Baba Corporate HQ',
            address: {
              '@type': 'PostalAddress',
              streetAddress:
                'F-36, 37, Saket Business Hub, Opp. Domino’s Pizza, Radhanpur Road',
              addressLocality: 'Mehsana',
              addressRegion: 'Gujarat',
              postalCode: '384002',
              addressCountry: 'IN',
            },
          },
          {
            '@type': 'VirtualLocation',
            url: 'https://www.theburgerbaba.in/franchise',
          },
        ],
        organizer: {
          '@type': 'Organization',
          name: 'The Burger Baba',
          url: 'https://www.theburgerbaba.in',
        },
        performer: {
          '@type': 'Organization',
          name: 'The Burger Baba Leadership Team',
          url: 'https://www.theburgerbaba.in',
        },
        offers: {
          '@type': 'Offer',
          name: 'Franchise Investment Opportunity',
          category: 'Franchise Business Opportunity',
          priceCurrency: 'INR',
          price: '0.00',
          url: 'https://www.theburgerbaba.in/franchise',
          availability: 'https://schema.org/InStock',
          validFrom: '2020-01-01T00:00:00+05:30',
          priceValidUntil: '2030-12-31T23:59:59+05:30',
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
