import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const challenges = await fetchChallenges();

  const staticPages = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/faqs', changefreq: 'monthly', priority: 0.8 },
    { url: '/challenges', changefreq: 'weekly', priority: 0.9 },
    { url: '/terms', changefreq: 'monthly', priority: 0.8 },
  ];

  // Step 3: Map over challenge slugs to create URLs
  const dynamicPages = challenges.map((challenge) => ({
    url: `/challenges/${challenge.slug.current}`,
    changefreq: 'monthly',
    priority: 0.7,
  }));

  // Combine static and dynamic pages
  const allPages = [...staticPages, ...dynamicPages];

  // Step 4: Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
      .map(
        ({ url, changefreq, priority }) => `
        <url>
          <loc>${process.env.NEXT_PUBLIC_URL}${url}</loc>
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
        </url>
      `
      )
      .join('')}
    </urlset>`;

  // Set headers and return XML as a response
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

// Placeholder for fetching resources from a CMS, database, or other source
async function fetchChallenges() {
  const data = await client.fetch(`*[_type == 'challenge']`, {}, { next: { revalidate: 60 } })

  return data
}
