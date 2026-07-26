import { useEffect } from 'react';
import { siteConfig } from '@/data/seo';

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function Seo({ title, description, path = '', image }: SeoProps) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${siteConfig.shortName}`
      : siteConfig.title;
    const desc = description ?? siteConfig.description;
    const url = `${siteConfig.url}${path}`;
    const img = image ?? siteConfig.ogImage;

    document.title = fullTitle;
    setMeta('name', 'description', desc);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', img);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', desc);
    setMeta('name', 'twitter:image', img);
    setLink('canonical', url);
  }, [title, description, path, image]);

  return null;
}
