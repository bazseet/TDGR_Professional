import { useState } from 'react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { X, Image as ImageIcon } from 'lucide-react';
import SEO from '../components/SEO';

const categories = [
  'All',
  'Training Vehicles',
  'Driving Lessons',
  'Classroom Training',
  'Simulator Training',
  'Academy',
  'Events'
];

const galleryImages = [
  {
    id: 1,
    category: 'Training Vehicles',
    src: '/gallery/training-vehicle-1.png',
    alt: 'Till Dawn Driving Academy training vehicle'
  },
  {
    id: 2,
    category: 'Training Vehicles',
    src: '/gallery/training-vehicle-2.png',
    alt: 'Till Dawn Driving Academy training vehicle'
  },
  {
    id: 3,
    category: 'Academy',
    src: '/gallery/academy-building.png',
    alt: 'Till Dawn Driving Academy premises'
  },
  {
    id: 4,
    category: 'Academy',
    src: '/gallery/academy-sign.png',
    alt: 'Till Dawn Driving Academy building and signage'
  },
  {
    id: 5,
    category: 'Classroom Training',
    src: '/gallery/classroom.png',
    alt: 'Driver training and vehicle inspection lesson'
  },
  {
    id: 6,
    category: 'Classroom Training',
    src: '/gallery/classroom-training.jpeg',
    alt: 'Till Dawn Driving Academy classroom training'
  },
  {
    id: 7,
    category: 'Simulator Training',
    src: '/gallery/simulator-student.png',
    alt: 'Student receiving driving simulator training'
  },
  {
    id: 8,
    category: 'Simulator Training',
    src: '/gallery/simulator-instructor.png',
    alt: 'Driving simulator training session'
  },
  {
    id: 9,
    category: 'Events',
    src: '/gallery/frsc-visit.png',
    alt: 'FRSC visit to Till Dawn Driving Academy'
  },

{
    id: 10,
    category: 'Driving Lessons',
    src: '/gallery/driving-lessons.png',
    alt: 'Practical driving lesson at Till Dawn Driving Academy'
  },


];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  return (
    <main>
      <SEO
  title="Driving Academy Gallery"
  description="View photos from Till Dawn Driving Academy including driving lessons, training vehicles, classroom training, simulator training, academy facilities and events."
  keywords="driving school gallery Lagos, driving lessons photos, driving academy Lagos, Till Dawn Driving Academy gallery"
/>
      <PageHero
        title="Gallery"
        subtitle="A look inside Till Dawn Driving Academy"
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category Filters */}
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    activeCategory === category
                      ? 'bg-td-red text-white shadow-lg'
                      : 'bg-td-light-gray text-td-charcoal hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <AnimatedSection
                key={image.id}
                delay={index * 80}
              >
                <button
                  type="button"
                  onClick={() => setLightbox(image)}
                  className="w-full bg-td-light-gray rounded-2xl aspect-square cursor-pointer overflow-hidden relative group hover:shadow-xl transition-all text-left"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-semibold">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <ImageIcon
                size={40}
                className="text-td-red/30 mx-auto mb-3"
              />

              <p className="text-td-gray">
                Photos for this category will be added soon.
              </p>
            </div>
          )}

          

        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close */}
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute -top-3 -right-3 z-10 bg-white rounded-full p-2 text-td-charcoal hover:text-td-red shadow-lg"
              aria-label="Close image"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <div className="bg-black rounded-2xl overflow-hidden">
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full max-h-[80vh] object-contain"
              />
            </div>

            {/* Caption */}
            <div className="bg-white rounded-b-2xl px-5 py-4">
              <p className="text-td-charcoal font-semibold text-center">
                {lightbox.alt}
              </p>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}