import Script from 'next/script'

export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'REVOLQ',
    'image': 'https://revolq.in/og-image.jpg',
    'description': 'Advanced digital agency in Kerala building Next.js websites, SEO systems, and AI automations.',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Kerala',
      'addressCountry': 'IN'
    },
    'url': 'https://revolq.in',
    'telephone': '+917995617374',
    'founder': [
      {
        '@type': 'Person',
        'name': 'Ajmal Mullapati'
      },
      {
        '@type': 'Person',
        'name': 'Eathen Baby'
      }
    ]
  }

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
