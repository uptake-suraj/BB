export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/private/'],
    },
    sitemap: 'https://www.theburgerbaba.in/sitemap.xml',
  };
}
