import { MetadataRoute } from 'next'
import { getPosts } from '@/lib/blog-data';
 
const siteUrl = "https://stevuthtech.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/pricing',
    '/blog',
    '/contact',
    '/faq',
    '/privacy-policy',
    '/terms-of-service',
  ];

  const staticRouteObjects = staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
  }));

  const posts = await getPosts();
  const postRouteObjects = posts.map(post => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRouteObjects, ...postRouteObjects];
}
