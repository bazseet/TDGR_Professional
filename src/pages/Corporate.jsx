import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import CTAButton from '../components/CTAButton';
import { Building2, Users, Shield, Target, Truck, CheckCircle2 } from 'lucide-react';
import { business } from '../data/business';
import { getWhatsAppLink } from '../utils/helpers';
import SEO from '../components/SEO';

export default function Corporate() {
  const offerings = [
    {
      icon: Users,
      title: "Corporate Staff Training",
      desc: "Professional driver training programmes for company staff who drive as part of their job responsibilities."
    },
    {
      icon: Truck,
      title: "Existing Company Driver Training",
      desc: "Skill update and safety refresher courses for organizations with existing professional drivers."
    },
    {
      icon: Target,
      title: "Fleet Management Training",
      desc: "Comprehensive fleet safety programmes including driver training, vehicle maintenance awareness, and operational efficiency."
    },
    {
      icon: Shield,
      title: "Defensive Driving Courses",
      desc: "Specialized defensive driving training for corporate fleets to reduce accidents and improve road safety."
    },
    {
      icon: Building2,
      title: "Specialized Corporate Programmes",
      desc: "Tailored training solutions designed to meet specific organizational requirements and industry standards."
    }
  ];

  return (
    <main>
       <SEO
  title="FRSC Certified Driving Academy in Lagos"
  description="Till Dawn Driving Academy is a Licensed driving academy in Lagos offering professional automatic and manual driving lessons, practical training and driver education."
  keywords="driving school Lagos, driving academy Lagos, driving school Ojodu Berger, driving lessons Lagos, FRSC certified driving academy, automatic driving lessons Lagos, manual driving lessons Lagos"/>
      <PageHero
        title="Corporate Training"
        subtitle="Professional driver development programmes for organizations"
        breadcrumbs={[{ path: '/training', label: 'Training' }, { label: 'Corporate' }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-td-yellow/20 text-td-yellow mb-4">Corporate Solutions</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-td-dark leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Professional Driver Training for Organizations
              </h2>
              <p className="text-td-gray text-lg leading-relaxed mb-6">
                {business.brandName} provides structured corporate training programmes for companies that need professional driver development for their staff and fleet operations.
              </p>
              <p className="text-td-gray leading-relaxed mb-8">
                Our corporate programmes are designed to improve driver competence, reduce fleet incidents, and ensure compliance with road safety standards.
              </p>
              <CTAButton to="/booking" icon>Request Corporate Training</CTAButton>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-linear-to-br from-td-yellow to-td-yellow-light rounded-3xl p-8 lg:p-12">
                <Building2 size={48} className="text-td-dark mb-6" />
                <h3 className="text-2xl font-bold text-td-dark mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Why Corporate Training?</h3>
                <div className="space-y-3">
                  {[
                    "Reduce fleet accidents",
                    "Improve driver competence",
                    "Ensure road safety compliance",
                    "Professional driver development",
                    "Training tailored to organizational needs"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-td-dark flex-shrink-0" />
                      <span className="text-td-dark font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-td-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="What We Offer"
              title="Corporate Training Programmes"
              subtitle="Comprehensive driver training solutions for organizations"
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all h-full">
                  <div className="bg-td-red/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                    <o.icon size={28} className="text-td-red" />
                  </div>
                  <h3 className="text-lg font-bold text-td-dark mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{o.title}</h3>
                  <p className="text-td-gray text-sm leading-relaxed">{o.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-td-red to-td-red-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Need Corporate Training?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Contact us to discuss your organization's driver training requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton to="/booking" variant="white" size="lg" icon>Request Corporate Training</CTAButton>
              <CTAButton href={getWhatsAppLink()} variant="green" size="lg" icon>Chat on WhatsApp</CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
