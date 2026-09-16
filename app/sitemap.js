export default function sitemap() {
  return [
    {
      url: 'https://theburgerbaba.in',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },

    // Add your actual public pages here
    {
      url: 'https://theburgerbaba.in/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: 'https://theburgerbaba.in/franchise',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    {
      url: 'https://theburgerbaba.in/menu',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    {
      url: 'https://theburgerbaba.in/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}