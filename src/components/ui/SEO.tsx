import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schema?: Record<string, any>;
}

export default function SEO({ title, description, canonicalPath, schema }: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = `${title} | ModFlowPlumbing`;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 3. Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    const host = window.location.origin || 'https://modflowplumbing.co.uk';
    linkCanonical.setAttribute('href', `${host}${canonicalPath || ''}`);

    // 4. Inject LocalBusiness Schema JSON-LD
    let scriptSchema = document.getElementById('seo-schema-jsonld') as HTMLScriptElement;
    if (!scriptSchema) {
      scriptSchema = document.createElement('script');
      scriptSchema.id = 'seo-schema-jsonld';
      scriptSchema.type = 'application/ld+json';
      document.head.appendChild(scriptSchema);
    }

    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'PlumbingService',
      'name': 'ModFlowPlumbing Engineering',
      'image': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600',
      'description': description,
      'telephone': '0800 123 4567',
      'url': host,
      'priceRange': '££',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'London',
        'addressRegion': 'Greater London',
        'addressCountry': 'UK'
      },
      'areaServed': [
        'Central London', 'Croydon & South London', 'Bromley', 'Greenwich', 'Lambeth', 'Ealing', 'Islington', 'Tower Hamlets'
      ],
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
        ],
        'opens': '00:00',
        'closes': '23:59'
      }
    };

    scriptSchema.textContent = JSON.stringify(schema || defaultSchema, null, 2);

    return () => {
      // Clean up the schema on component unmount to prevent stale schemas on other routes
      const scriptToRemove = document.getElementById('seo-schema-jsonld');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, canonicalPath, schema]);

  return null;
}
