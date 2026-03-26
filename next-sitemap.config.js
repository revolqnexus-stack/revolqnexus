/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://revolq.in',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 1.0,
  exclude: ['/server-sitemap.xml'],
  transform: async (config, path) => {
    // custom transformation for specific paths
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
  additionalPaths: async (config) => {
    // Add any additional paths here if needed
    return []
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://revolq.in/server-sitemap.xml',
    ],
  },
}
