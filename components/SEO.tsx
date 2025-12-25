import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, path = "" }) => {
  const fullTitle = `${title} | 株式会社TEN`;
  
  useEffect(() => {
    document.title = fullTitle;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://incten.com${path}`);
  }, [fullTitle, description, path]);

  return null;
};

export default SEO;