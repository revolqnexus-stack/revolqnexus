export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'REVOLQ',
    description: 'Digital agency building Next.js websites, SEO systems, and AI automations',
    url: 'https://revolq.in',
    logo: 'https://revolq.in/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91 79956 17374',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Kerala',
    },
    founders: [
      {
        '@type': 'Person',
        name: 'Ajmal Mullapati',
      },
      {
        '@type': 'Person',
        name: 'Eathen Baby',
      },
    ],
    sameAs: [
      'https://wa.me/917995617374',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
