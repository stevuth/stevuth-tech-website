import { MetadataRoute } from 'next'
 
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://stevuth.web.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/packages',
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
