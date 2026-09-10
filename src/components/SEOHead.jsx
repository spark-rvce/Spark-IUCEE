import { useEffect } from 'react';

const BASE_URL = 'https://spark-iucee-rvce.vercel.app';

/**
 * Lightweight per-page SEO component.
 * Dynamically sets document title, meta description, canonical URL,
 * Open Graph, Twitter Card meta tags, and optional JSON-LD structured data.
 *
 * @param {string} title - Page title
 * @param {string} description - Meta description
 * @param {string} path - Route path (e.g. "/activities")
 * @param {object} [jsonLd] - Optional JSON-LD structured data object
 */
const SEOHead = ({ title, description, path = '/', jsonLd }) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper: set or create a <meta> tag
    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper: set or create a <link> tag
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    const canonicalUrl = `${BASE_URL}${path}`;
    const imageUrl = `${BASE_URL}/spark.png`;

    // Standard meta
    setMeta('name', 'description', description);
    setMeta('name', 'robots', 'index, follow');

    // Canonical
    setLink('canonical', canonicalUrl);

    // Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', imageUrl);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'SPARK IUCEE RVCE');

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', imageUrl);

    // JSON-LD
    const jsonLdId = 'seo-jsonld';
    let scriptEl = document.getElementById(jsonLdId);
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = jsonLdId;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    // Cleanup: remove page-specific JSON-LD on unmount
    return () => {
      const el = document.getElementById(jsonLdId);
      if (el) el.remove();
    };
  }, [title, description, path, jsonLd]);

  return null;
};

export default SEOHead;
