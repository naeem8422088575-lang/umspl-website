import { COMPANY_METADATA } from '../lib/constants';

interface JsonLdProps {
  type: string;
  data?: Record<string, unknown>;
}

export default function JsonLd({ type, data }: JsonLdProps) {
  let schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": type,
    ...(data || {})
  };

  if (type === 'Organization' && !data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: COMPANY_METADATA.officialName,
      url: COMPANY_METADATA.seo.url,
      logo: `${COMPANY_METADATA.seo.url}/logo.png`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: COMPANY_METADATA.phones[0],
        contactType: "customer service"
      },
      sameAs: [
        COMPANY_METADATA.socials.linkedin,
        COMPANY_METADATA.socials.facebook,
        COMPANY_METADATA.socials.twitter,
        COMPANY_METADATA.socials.instagram
      ]
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}