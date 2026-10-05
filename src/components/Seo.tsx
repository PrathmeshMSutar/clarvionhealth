import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import pageMetadata from '../../seo-pages.json';

const siteUrl = 'https://www.clarvionhealth.com';
const defaultDescription = pageMetadata['/'].description;

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pageMetadata[pathname as keyof typeof pageMetadata] ?? {
      title: 'Page Not Found | Clarvion Health',
      description: defaultDescription,
    };
    const canonicalUrl = `${siteUrl}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`;

    document.title = page.title;
    setMeta('name', 'description', page.description);
    setMeta('property', 'og:title', page.title);
    setMeta('property', 'og:description', page.description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('name', 'twitter:title', page.title);
    setMeta('name', 'twitter:description', page.description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
}
