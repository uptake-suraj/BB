export default function sitemap() {
  const baseUrl = 'https://theburgerbaba.com';

  const routes = [
    '',
    '/about',
    '/franchise',
    '/menu',
    '/career',
    '/outlets',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
