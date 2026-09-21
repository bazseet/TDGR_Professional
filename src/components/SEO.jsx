import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://tilldawndrivingacademy.com';
const SITE_NAME = 'Till Dawn Driving Academy';
const DEFAULT_IMAGE = '/gallery/academy-sign.png';

export default function SEO({
  title,
  description,
  keywords = '',
  image = DEFAULT_IMAGE,
}) {
  const location = useLocation();

  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : SITE_NAME;

  // Build the correct URL for the current page
  const currentUrl = `${SITE_URL}${location.pathname}`;

  // Convert relative image paths into absolute URLs
  const imageUrl = image.startsWith('http')
    ? image
    : `${SITE_URL}${image}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      {keywords && (
        <meta
          name="keywords"
          content={keywords}
        />
      )}

      <meta
        name="robots"
        content="index, follow"
      />

      <meta
        name="author"
        content="Till Dawn Driving Academy"
      />

      {/* Canonical URL */}
      <link
        rel="canonical"
        href={currentUrl}
      />

      {/* Open Graph / WhatsApp / Facebook */}
      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content={currentUrl}
      />

      <meta
        property="og:site_name"
        content={SITE_NAME}
      />

      <meta
        property="og:image"
        content={imageUrl}
      />

      <meta
        property="og:image:alt"
        content="Till Dawn Driving Academy"
      />

      <meta
        property="og:locale"
        content="en_NG"
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={imageUrl}
      />

      {/* Location */}
      <meta
        name="geo.region"
        content="NG-LA"
      />

      <meta
        name="geo.placename"
        content="Lagos, Nigeria"
      />
    </Helmet>
  );
}
