import { useState } from 'react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import CTAButton from '../components/CTAButton';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { curriculum, curriculumOverview } from '../data/curriculum';
import { getWhatsAppLink } from '../utils/helpers';
import SEO from '../components/SEO';

export default function Curriculum() {
  const [expanded, setExpanded] = useState(null);

  return (
    <main>
       <SEO
  title="FRSC Certified Driving Academy in Lagos"
  description="Till Dawn Driving Academy is a Licensed driving academy in Lagos offering professional automatic and manual driving lessons, practical training and driver education."
  keywords="driving school Lagos, driving academy Lagos, driving school Ojodu Berger, driving lessons Lagos, FRSC certified driving academy, automatic driving lessons Lagos, manual driving lessons Lagos"/>
      <PageHero
        title="Training Curriculum"
        subtitle="A structured 18-module programme from BLC 101 to BLC 118"
        breadcrumbs={[{ label: 'Curriculum' }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-td-red/10 text-td-red mb-4">Curriculum Overview</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-td-dark leading-tight mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Beginner Driver Programme
              </h2>
              <p className="text-td-gray text-lg leading-relaxed">
                {curriculumOverview.description}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 bg-td-red/5 px-4 py-2 rounded-full">
                <BookOpen size={16} className="text-td-red" />
                <span className="text-sm font-semibold text-td-red">{curriculumOverview.totalModules} Modules</span>
              </div>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-4">
            {curriculum.map((mod, i) => (
              <AnimatedSection key={mod.id} delay={i * 60}>
                <div className={`bg-white rounded-2xl overflow-hidden transition-all border ${
                  expanded === mod.id ? 'border-td-red/20 shadow-lg' : 'border-gray-100 shadow-sm hover:shadow-md'
                }`}>
                  <button
                    onClick={() => setExpanded(expanded === mod.id ? null : mod.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-5">
                      <div className="bg-td-red text-white w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold">{mod.code}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-td-dark" style={{ fontFamily: 'var(--font-heading)' }}>{mod.title}</h3>
                        {expanded !== mod.id && (
                          <p className="text-td-gray text-sm mt-1 line-clamp-1">{mod.description}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {expanded === mod.id ? (
                        <ChevronUp size={22} className="text-td-red" />
                      ) : (
                        <ChevronDown size={22} className="text-td-gray" />
                      )}
                    </div>
                  </button>
                  {expanded === mod.id && (
                    <div className="px-6 pb-6 pl-[5.5rem]">
                      <p className="text-td-gray leading-relaxed">{mod.description}</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-td-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-md max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-td-dark text-center mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Curriculum Highlights
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Basic vehicle operation",
                  "Driver responsibilities and psychology",
                  "Vehicle simulator training",
                  "Defensive driving techniques",
                  "Hazard recognition",
                  "Vehicle components and care",
                  "Road traffic laws (NRTR 2012)",
                  "Crash prevention",
                  "Effective parking techniques",
                  "Road signs, markings and traffic lights"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-td-light-gray rounded-lg">
                    <div className="bg-td-red text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</div>
                    <span className="text-sm text-td-dark font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-td-red to-td-red-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready to Begin Your Training?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Start with BLC 101 and work your way through our comprehensive curriculum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton to="/booking" variant="white" size="lg" icon>Book Your Training</CTAButton>
              <CTAButton href={getWhatsAppLink()} variant="green" size="lg" icon>Chat on WhatsApp</CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
