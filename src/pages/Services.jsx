import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import CTAButton from '../components/CTAButton';
import { Target, Wrench, Container, Shield, Building, CheckCircle2 } from 'lucide-react';
import { services, servicesDisclaimer } from '../data/services';
import { getWhatsAppLink } from '../utils/helpers';
import SEO from '../components/SEO';

const iconMap = { Target, Wrench, Container, Shield, Building, Truck: Target };

export default function Services() {
  return (
    <main>
       <SEO
  title="FRSC Certified Driving Academy in Lagos"
  description="Till Dawn Driving Academy is a Licensed driving academy in Lagos offering professional automatic and manual driving lessons, practical training and driver education."
  keywords="driving school Lagos, driving academy Lagos, driving school Ojodu Berger, driving lessons Lagos, FRSC certified driving academy, automatic driving lessons Lagos, manual driving lessons Lagos"/>
      <PageHero
        title="Our Services"
        subtitle="Professional driving services and specialized facilities"
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Specialized Services"
              title="Professional Driving Services"
              subtitle="Beyond driving training, Till Dawn offers a range of professional services"
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || Target;
              return (
                <AnimatedSection key={s.id} delay={i * 100}>
                  <div className="bg-td-light-gray rounded-3xl p-8 hover:shadow-lg transition-all h-full">
                    <div className="bg-td-red/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                      <Icon size={32} className="text-td-red" />
                    </div>
                    <h3 className="text-xl font-bold text-td-dark mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{s.title}</h3>
                    <p className="text-td-gray leading-relaxed">{s.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection>
            <div className="mt-12 bg-td-light-gray rounded-xl p-6 max-w-3xl mx-auto text-center">
              <p className="text-td-gray text-sm italic">{servicesDisclaimer}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Fleet Management"
              title="Fleet Management Solutions"
              subtitle="Comprehensive fleet safety and management programmes"
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-td-dark to-td-charcoal rounded-3xl p-8 lg:p-12 text-white">
              <div className="space-y-6">
                {[
                  "Driver training and assessment",
                  "Vehicle maintenance coordination",
                  "Fleet safety audits",
                  "Defensive driving programmes",
                  "Incident prevention strategies",
                  "Compliance monitoring"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-td-yellow flex-shrink-0" />
                    <span>{item}</span>
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
              Need Our Services?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Contact us to learn more about our specialized services and facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton to="/contact" variant="white" size="lg" icon>Contact Us</CTAButton>
              <CTAButton href={getWhatsAppLink()} variant="green" size="lg" icon>Chat on WhatsApp</CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
