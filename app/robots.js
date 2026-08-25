export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/private/'],
    },
    sitemap: 'https://theburgerbaba.com/sitemap.xml',
  };
}
