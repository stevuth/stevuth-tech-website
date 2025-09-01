export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  category: string;
  content: string; // Full markdown/html content
  aiHint: string;
}

export const posts: Post[] = [
  {
    id: 1,
    slug: 'mastering-web-development-in-2024',
    title: 'Mastering Web Development in 2024',
    excerpt: 'Discover the latest trends and essential skills for modern web development. From front-end frameworks to back-end technologies, this guide covers everything you need to know.',
    imageUrl: 'https://picsum.photos/600/400',
    date: '2024-07-28',
    author: 'John Doe',
    category: 'Web Development',
    aiHint: 'web development code',
    content: `
      <p>The world of web development is constantly evolving. In 2024, staying ahead of the curve means mastering a new set of tools and technologies. This post will guide you through the essentials.</p>
      <h3 class="text-2xl font-bold mt-6 mb-4">Key Front-End Trends</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Component-Based Architecture:</strong> Frameworks like React, Vue, and Svelte continue to dominate the landscape.</li>
        <li><strong>Server-Side Rendering (SSR):</strong> Next.js and Nuxt.js are crucial for performance and SEO.</li>
        <li><strong>Utility-First CSS:</strong> Tailwind CSS has become the go-to for rapid and consistent UI development.</li>
      </ul>
      <p>On the back-end, Node.js remains a popular choice, but languages like Go and Rust are gaining traction for their performance benefits. Understanding databases, both SQL and NoSQL, is as important as ever.</p>
      <div class="relative aspect-video rounded-lg overflow-hidden shadow-lg my-6">
          <img src="https://picsum.photos/800/450" alt="Code on a screen" class="w-full h-full object-cover" data-ai-hint="developer workspace" />
      </div>
      <h3 class="text-2xl font-bold mt-6 mb-4">The Rise of AI</h3>
      <p>AI and machine learning are no longer just buzzwords. Tools like GitHub Copilot and Genkit are changing how we write code, and understanding how to integrate AI into applications is becoming a key skill for developers.</p>
    `
  },
  {
    id: 2,
    slug: 'the-importance-of-ui-ux-design',
    title: 'Why UI/UX Design is Crucial for Business Success',
    excerpt: 'A great product can fail without a good user experience. This article explores why investing in UI/UX design is a game-changer for retaining customers and driving growth.',
    imageUrl: 'https://picsum.photos/600/400',
    date: '2024-07-25',
    author: 'Jane Smith',
    category: 'Design',
    aiHint: 'user interface sketch',
    content: `
      <p>In today's competitive market, a functional product is not enough. User Interface (UI) and User Experience (UX) design are critical components that can make or break a business.</p>
      <h3 class="text-2xl font-bold mt-6 mb-4">First Impressions Matter</h3>
      <p>UI is the first thing a user sees. A clean, intuitive, and aesthetically pleasing interface builds trust and encourages users to explore further. A clunky or confusing UI, on the other hand, can drive them away in seconds.</p>
       <div class="relative aspect-video rounded-lg overflow-hidden shadow-lg my-6">
          <img src="https://picsum.photos/800/450" alt="UI design wireframes" class="w-full h-full object-cover" data-ai-hint="design wireframe" />
      </div>
      <h3 class="text-2xl font-bold mt-6 mb-4">The Power of a Seamless Experience</h3>
      <p>UX goes beyond visuals. It's about how the product feels. Is it easy to navigate? Does it solve the user's problem efficiently? A positive user experience leads to higher satisfaction, better retention rates, and more conversions. It's an investment that pays for itself many times over.</p>
    `
  },
  {
    id: 3,
    slug: 'seo-strategies-for-higher-rankings',
    title: 'Effective SEO Strategies to Rank Higher on Google',
    excerpt: 'Unlock the secrets to improving your website\'s visibility on search engines. Learn about on-page SEO, keyword research, and the importance of quality content.',
    imageUrl: 'https://picsum.photos/600/400',
    date: '2024-07-22',
    author: 'Samuel Green',
    category: 'Marketing',
    aiHint: 'seo analytics chart',
    content: `
      <p>Search Engine Optimization (SEO) is fundamental to digital marketing. Ranking higher on Google can dramatically increase your organic traffic and lead to more business.</p>
      <h3 class="text-2xl font-bold mt-6 mb-4">On-Page SEO Essentials</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Keyword Research:</strong> Identify the terms your target audience is searching for.</li>
        <li><strong>Quality Content:</strong> Create valuable, informative, and engaging content that answers user queries.</li>
        <li><strong>Meta Tags:</strong> Optimize your title tags and meta descriptions to improve click-through rates.</li>
        <li><strong>Page Speed:</strong> A fast-loading website is a key ranking factor.</li>
      </ul>
       <div class="relative aspect-video rounded-lg overflow-hidden shadow-lg my-6">
          <img src="https://picsum.photos/800/450" alt="SEO strategy mind map" class="w-full h-full object-cover" data-ai-hint="marketing strategy" />
      </div>
      <p>Beyond on-page factors, building high-quality backlinks and ensuring your site is mobile-friendly are also crucial. SEO is a long-term game, but the results are well worth the effort.</p>
    `
  },
];
