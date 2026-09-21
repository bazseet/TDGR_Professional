import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://tilldawndrivingacademy.com';
const SITE_NAME = 'Till Dawn Driving Academy';

export default function SEO({
  title,
  description,
  keywords = '',
  image = '/till-dawn-logo.png',
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : SITE_NAME;

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

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      {/* Canonical URL */}
      <link
        rel="canonical"
        href={SITE_URL}
      />

      {/* Open Graph */}
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
        content={SITE_URL}
      />

      <meta
        property="og:site_name"
        content={SITE_NAME}
      />

      <meta
        property="og:image"
        content={imageUrl}
      />

      {/* Twitter / Social Sharing */}
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