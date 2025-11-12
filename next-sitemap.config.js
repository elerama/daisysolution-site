/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://daisysolution.it',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://daisysolution.it'}/sitemap.xml`,
    ],
  },
  exclude: [
    '/api/*', // Exclude API routes
    '/admin/*', // Exclude admin routes if any
    '/_*', // Exclude Next.js internals
  ],
  generateIndexSitemap: false, // Single sitemap for now (can enable when > 5000 URLs)
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority for different page types
    let priority = 0.7;
    let changefreq = 'weekly';

    // High priority for main pages
    if (path === '/' || path === '/prodotto' || path === '/prezzi' || path === '/contatti') {
      priority = 1.0;
      changefreq = 'daily';
    }

    // High priority for settori pages
    if (path.startsWith('/settori')) {
      priority = 0.9;
      changefreq = 'weekly';
    }

    // High priority for customer stories
    if (path === '/settori/customer-stories') {
      priority = 0.9;
      changefreq = 'weekly';
    }

    // Medium-high priority for product pages
    if (path.startsWith('/prodotto/')) {
      priority = 0.8;
      changefreq = 'weekly';
    }

    // Medium-high priority for tecnologie
    if (path.startsWith('/tecnologie')) {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
