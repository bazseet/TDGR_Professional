import { Helmet } from 'react-helmet-async';

export default function LocalBusinessSchema() {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'DrivingSchool',

    name: 'Till Dawn Driving Academy',
    alternateName: 'Till Dawn Global Resources Ltd.',

    description:
      'Till Dawn Driving Academy is an FRSC certified driving academy in Lagos offering professional automatic and manual driving lessons, practical training, theory classes and driver education.',

    url: 'https://tilldawndrivingacademy.com',

    telephone: '+2348140987655',
    email: 'tilldawndrivingacademy@gmail.com',

    address: {
      '@type': 'PostalAddress',
      streetAddress: '45 Aina Street, Ojodu Berger',
      addressLocality: 'Lagos',
      addressCountry: 'NG',
    },

    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.6441342,
      longitude: 3.3665334,
    },

    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '08:00',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],

    sameAs: [
      'https://www.instagram.com/tilldawndriving',
      'https://www.facebook.com/TillDawn',
      'https://www.tiktok.com/@till.dawn.driving',
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
    </Helmet>
  );
}