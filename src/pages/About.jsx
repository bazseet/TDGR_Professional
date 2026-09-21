import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import CTAButton from '../components/CTAButton';
import SEO from '../components/SEO';
import {
  Shield,
  Users,
  BookOpen,
  Car,
  Target,
  Building2,
  CheckCircle2,
  GraduationCap,
  Award,
} from 'lucide-react';

import { business } from '../data/business';
import { getWhatsAppLink } from '../utils/helpers';

export default function About() {
  const highlights = [
    {
      icon: Shield,
      title: 'FRSC Certified',
      desc: 'Till Dawn Driving Academy is FRSC certified.',
    },
    {
      icon: GraduationCap,
      title: 'Structured Training',
      desc: 'A structured training programme covering theory, practical driving and road safety.',
    },
    {
      icon: Users,
      title: 'Professional Instructors',
      desc: 'Students receive guidance throughout their training from experienced instructors.',
    },
    {
      icon: Car,
      title: 'Theory & Practical',
      desc: 'Training combines classroom knowledge with practical driving experience.',
    },
    {
      icon: Target,
      title: 'Defensive Driving',
      desc: 'Students are introduced to hazard awareness and defensive driving techniques.',
    },
    {
      icon: Building2,
      title: 'Corporate Training',
      desc: 'Driver training programmes are also available for organizations and company staff.',
    },
  ];

  const trainingAreas = [
    'Beginners driving training',
    'Learner driver training',
    'Advanced driver training',
    'Automatic and manual driving',
    'Vehicle simulator training',
    'Defensive driving',
    'Corporate driver training',
    'Fleet management',
    'Specialized driving courses',
    'Driver licence preparation',
  ];

  return (
    <main> 
       <SEO
  title="FRSC Certified Driving Academy in Lagos"
  description="Till Dawn Driving Academy is a certified driving academy in Lagos offering professional automatic and manual driving lessons, practical training and driver education."
  keywords="driving school Lagos, driving academy Lagos, driving school Ojodu Berger, driving lessons Lagos, FRSC certified driving academy, automatic driving lessons Lagos, manual driving lessons Lagos"/>

      <PageHero
        title="About Till Dawn Driving Academy"
        subtitle="Learn to Drive from the Professionals"
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* INTRODUCTION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-td-red/10 text-td-red mb-4">
                About Us
              </span>

              <h2
                className="text-3xl md:text-4xl font-extrabold text-td-dark leading-tight mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Till Dawn Driving Academy
              </h2>

              <p className="text-td-gray text-lg leading-relaxed mb-5">
                Till Dawn Global Resources Ltd. operates Till Dawn Driving
                Academy, a professional driving academy located at 45 Aina
                Street, Ojodu Berger, Lagos.
              </p>

              <p className="text-td-gray leading-relaxed mb-5">
                Our training is designed to help learners develop the
                knowledge, practical skills and road awareness required to
                become responsible and confident drivers.
              </p>

              <p className="text-td-gray leading-relaxed mb-7">
                Training combines theory lessons, practical driving,
                simulator-based learning, road safety education and
                defensive driving techniques.
              </p>

              {/* Certification */}
              <div className="flex items-start gap-4 bg-td-red/5 border border-td-red/10 rounded-2xl p-5">
                <div className="bg-td-red/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="text-td-red" size={25} />
                </div>

                <div>
                  <h3 className="font-bold text-td-dark mb-1">
                    FRSC Certified Driving Academy
                  </h3>

                  <p className="text-sm text-td-gray leading-relaxed">
                    Till Dawn Driving Academy is FRSC certified and provides
                    structured driver training programmes.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* WHAT WE OFFER */}
            <AnimatedSection delay={150}>
              <div className="bg-gradient-to-br from-td-dark to-td-charcoal rounded-3xl p-8 lg:p-10 text-white">
                <div className="flex items-center gap-4 mb-7">
                  <div className="bg-td-red/20 w-14 h-14 rounded-xl flex items-center justify-center">
                    <BookOpen className="text-td-yellow" size={28} />
                  </div>

                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      What We Offer
                    </h3>

                    <p className="text-sm text-white/60">
                      Professional driver training programmes
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {trainingAreas.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={17}
                        className="text-td-yellow flex-shrink-0"
                      />

                      <span className="text-sm text-white/90">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WHY TILL DAWN */}
      <section className="py-20 lg:py-28 bg-td-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Why Till Dawn"
              title="Professional Training With a Structured Approach"
              subtitle="Our programmes combine knowledge, practical experience and road safety awareness."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <AnimatedSection
                  key={item.title}
                  delay={index * 80}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                    <div className="bg-td-red/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                      <Icon
                        size={27}
                        className="text-td-red"
                      />
                    </div>

                    <h3
                      className="text-lg font-bold text-td-dark mb-2"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-td-gray text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRAINING APPROACH */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                number: '01',
                title: 'Theory',
                text: 'Learn road signs, traffic laws, vehicle knowledge, driver responsibilities and road safety.',
              },
              {
                icon: Car,
                number: '02',
                title: 'Practical',
                text: 'Build practical driving skills through guided hands-on training.',
              },
              {
                icon: Award,
                number: '03',
                title: 'Assessment',
                text: 'Track progress through training and prepare for the required assessment and CBT process.',
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <AnimatedSection
                  key={item.number}
                  delay={index * 120}
                >
                  <div className="relative bg-td-light-gray rounded-2xl p-7 h-full">
                    <span className="text-5xl font-extrabold text-td-red/10 absolute top-5 right-6">
                      {item.number}
                    </span>

                    <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-5 relative">
                      <Icon className="text-td-red" size={26} />
                    </div>

                    <h3
                      className="text-xl font-bold text-td-dark mb-3"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-sm text-td-gray leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section className="py-20 lg:py-28 bg-td-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="bg-td-red/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Users size={30} className="text-td-red" />
              </div>

              <h2
                className="text-2xl md:text-3xl font-bold text-td-dark mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Professional Driving Instructors
              </h2>

              <p className="text-td-gray leading-relaxed max-w-2xl mx-auto">
                Till Dawn Driving Academy has a team of approximately 4–5
                instructors supporting students through their driving
                training. Each student receives practical guidance as they
                progress through the programme.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-td-red to-td-red-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Ready to Start Your Driving Journey?
            </h2>

            <p className="text-lg text-white/80 mb-9">
              Learn to drive from the professionals at Till Dawn Driving
              Academy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                to="/training"
                variant="white"
                size="lg"
                icon
              >
                Book Your Training
              </CTAButton>

              <CTAButton
                href={getWhatsAppLink()}
                variant="green"
                size="lg"
                icon
              >
                Chat on WhatsApp
              </CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}