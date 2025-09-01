import { MetadataRoute } from 'next'
 
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-live-url.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/blog',
    '/contact',
    '/faq',
    '/privacy-policy',
    '/terms-of-service',
  ];

  return staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
    }));
}
