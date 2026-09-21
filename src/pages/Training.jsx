import { useState } from 'react';

import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import CTAButton from '../components/CTAButton';
import SEO from '../components/SEO';

import {
  Car,
  Settings,
  Cog,
  Award,
  Building2,
  Users,
  Shield,
  Zap,
  Truck,
  CheckCircle2,
  Eye,
  Lightbulb,
  ShieldCheck,
  GraduationCap,
  BookOpen,
} from 'lucide-react';

import {
  courses,
  mainCourses,
  additionalCourses,
} from '../data/courses';

import { curriculum } from '../data/curriculum';
import { business } from '../data/business';
import { getWhatsAppLink } from '../utils/helpers';

const iconMap = {
  Car,
  Settings,
  Cog,
  Award,
  Building2,
  Users,
  Shield,
  Zap,
  Truck,
  GraduationCap,
  BookOpen,
  ShieldCheck,
};


export default function Training() {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedCurriculum, setExpandedCurriculum] = useState(null);

  const displayCourses =
    activeTab === 'all'
      ? courses
      : activeTab === 'main'
        ? mainCourses
        : additionalCourses;

  const simulatorFeatures = [
    'Seat adjustment',
    'Mirror adjustment',
    'Steering control',
    'Turn signals & headlights',
    'Seat belts',
    'Wipers & emergency lights',
    'Parking brake',
    'Starting/stopping engine',
    'Accelerator, brake & clutch',
    'Dashboard warning indicators',
  ];

  const defensiveDriving = [
    {
      icon: Eye,
      title: 'Recognize the hazard',
      desc: 'Identify potential dangers on the road early.',
    },
    {
      icon: Lightbulb,
      title: 'Understand the defence',
      desc: 'Understand the appropriate response to road hazards.',
    },
    {
      icon: ShieldCheck,
      title: 'Act correctly, in time',
      desc: 'Respond promptly and appropriately to avoid danger.',
    },
  ];

  return (
    <main>
       <SEO
  title="FRSC Certified Driving Academy in Lagos"
  description="Till Dawn Driving Academy is a Licensed driving academy in Lagos offering professional automatic and manual driving lessons, practical training and driver education."
  keywords="driving school Lagos, driving academy Lagos, driving school Ojodu Berger, driving lessons Lagos, FRSC certified driving academy, automatic driving lessons Lagos, manual driving lessons Lagos"/>
      <PageHero
        title="Training & Courses"
        subtitle="Comprehensive driving training programmes for different levels and needs"
        breadcrumbs={[{ label: 'Training' }]}
      />

      {/* COURSES */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Our Programmes"
              title="Professional Driving Training"
              subtitle="Choose the programme that matches your driving experience and training needs."
            />
          </AnimatedSection>

          {/* TABS */}
          <AnimatedSection>
            <div className="flex justify-center gap-3 mb-10 flex-wrap">
              {[
                { key: 'all', label: 'All Courses' },
                { key: 'main', label: 'Main Training' },
                { key: 'additional', label: 'Specialized Training' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    activeTab === tab.key
                      ? 'bg-td-red text-white shadow-lg'
                      : 'bg-gray-100 text-td-charcoal hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* COURSE CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayCourses.map((course, index) => {
              const Icon = iconMap[course.icon] || Car;

              return (
                <AnimatedSection
                  key={course.id}
                  delay={index * 80}
                >
                  <div className="bg-td-light-gray rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300">
                    <div className="bg-td-red/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                      <Icon
                        size={28}
                        className="text-td-red"
                      />
                    </div>

                    <h3
                      className="text-xl font-bold text-td-dark mb-3"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {course.title}
                    </h3>

                    <p className="text-td-gray text-sm leading-relaxed mb-5">
                      {course.description}
                    </p>

                    {course.features?.length > 0 && (
                      <ul className="space-y-2">
                        {course.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-2 text-sm text-td-gray"
                          >
                            <CheckCircle2
                              size={15}
                              className="text-td-red flex-shrink-0 mt-0.5"
                            />

                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROGRAMME SCHEDULE */}
      <section className="py-20 lg:py-28 bg-td-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Training Schedule"
              title="Weekday & Weekend Programmes"
              subtitle="Choose a training schedule that works for you."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {/* WEEKDAY */}
            <AnimatedSection>
              <div className="bg-white rounded-3xl p-8 h-full shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-td-red/10 w-14 h-14 rounded-xl flex items-center justify-center">
                    <BookOpen className="text-td-red" size={27} />
                  </div>

                  <div>
                    <h3
                      className="text-xl font-bold text-td-dark"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Weekday Programme
                    </h3>

                    <p className="text-sm text-td-gray">
                      3 weeks / 15 working days
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    '5 theory classes',
                    '10 practical lessons',
                    'Theory: 1 hour',
                    'Practical: 30 minutes',
                    'Training Monday – Friday',
                    'Training hours: 8:00 AM – 4:00 PM',
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={17}
                        className="text-td-red flex-shrink-0"
                      />

                      <span className="text-sm text-td-gray">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* WEEKEND */}
            <AnimatedSection delay={150}>
              <div className="bg-white rounded-3xl p-8 h-full shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-td-yellow/20 w-14 h-14 rounded-xl flex items-center justify-center">
                    <Car className="text-td-dark" size={27} />
                  </div>

                  <div>
                    <h3
                      className="text-xl font-bold text-td-dark"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Weekend Programme
                    </h3>

                    <p className="text-sm text-td-gray">
                      7 Saturdays
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    '2 theory classes',
                    '5 practical lessons',
                    'Theory: 1 hour',
                    'Practical: 1 hour',
                    'Saturday lessons available',
                    'Training hours: 10:00 AM – 4:00 PM',
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={17}
                        className="text-td-red flex-shrink-0"
                      />

                      <span className="text-sm text-td-gray">
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

      {/* SIMULATOR */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Simulator Training"
              title="Prepare Before You Hit the Road"
              subtitle="Practical simulator training introduces students to vehicle controls and driving procedures."
            />
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mt-12">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-td-dark to-td-charcoal rounded-3xl p-8 text-white">
                <div className="text-center mb-6">
                  <div className="bg-td-red/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Car
                      size={40}
                      className="text-td-yellow"
                    />
                  </div>

                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Vehicle Simulator
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    A controlled environment for practical preparation
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {simulatorFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white/5 rounded-lg p-3 text-center text-xs text-gray-300"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <h3
                className="text-2xl font-bold text-td-dark mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Structured Pre-Road Training
              </h3>

              <p className="text-td-gray leading-relaxed mb-6">
                Till Dawn's training curriculum includes vehicle simulator
                practice before road driving. Students are introduced to
                vehicle controls and basic operating procedures in a
                controlled training environment.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    icon: Eye,
                    label: 'Practice Environment',
                  },
                  {
                    icon: Lightbulb,
                    label: 'Multiple Conditions',
                  },
                  {
                    icon: Shield,
                    label: 'Safe Learning',
                  },
                  {
                    icon: ShieldCheck,
                    label: 'Structured Approach',
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-td-red/5 rounded-lg p-3"
                    >
                      <Icon
                        size={18}
                        className="text-td-red"
                      />

                      <span className="text-sm font-medium text-td-dark">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* DEFENSIVE DRIVING */}
      <section className="py-20 lg:py-28 bg-td-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Defensive Driving"
              title="Drive Safely, Drive Defensively"
              subtitle="Build awareness and learn how to recognize and respond to hazards."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {defensiveDriving.map((item, index) => {
              const Icon = item.icon;

              return (
                <AnimatedSection
                  key={item.title}
                  delay={index * 100}
                >
                  <div className="bg-white rounded-2xl p-7 text-center h-full shadow-sm">
                    <div className="bg-td-red/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
                      <Icon
                        size={30}
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

          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto mt-8">
              <h4
                className="font-bold text-td-dark text-lg mb-5 text-center"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Qualities of a Defensive Driver
              </h4>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Awareness',
                  'Caution',
                  'Patience',
                  'Skill',
                  'Consideration for others',
                  'Knowledge of road signs',
                ].map((quality, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-td-red flex-shrink-0"
                    />

                    <span className="text-sm text-td-gray font-medium">
                      {quality}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="BLC 101 – BLC 118"
              title="Structured Training Curriculum"
              subtitle="Our beginner driver programme covers essential driving knowledge, vehicle care, road safety and practical skills."
            />
          </AnimatedSection>

          <div className="space-y-3 mt-12">
            {curriculum.map((item, index) => {
              const isOpen = expandedCurriculum === index;

              return (
                <AnimatedSection
                  key={item.code || index}
                  delay={index * 30}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedCurriculum(
                        isOpen ? null : index
                      )
                    }
                    className="w-full text-left bg-td-light-gray hover:bg-gray-100 rounded-xl p-5 transition-all"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="bg-td-red text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap">
                          {item.code}
                        </span>

                        <span className="font-semibold text-td-dark">
                          {item.title}
                        </span>
                      </div>

                      <span className="text-td-red text-xl">
                        {isOpen ? '−' : '+'}
                      </span>
                    </div>

                    {isOpen && item.description && (
                      <p className="text-sm text-td-gray leading-relaxed mt-4 pl-0 md:pl-20">
                        {item.description}
                      </p>
                    )}
                  </button>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* LICENCE PREPARATION */}
      <section className="py-20 lg:py-28 bg-td-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Licence Preparation"
              title="Driver Licence Training"
              subtitle="Training and assessment as part of the driver's licence preparation pathway."
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-sm mt-12">
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Registration',
                  'Training',
                  'Assessment',
                  'CBT',
                  'Certificate',
                  'Licence Processing',
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-2"
                  >
                    <div className="bg-td-red text-white w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>

                    <span className="text-sm font-medium text-td-dark">
                      {step}
                    </span>

                    {index < 5 && (
                      <span className="text-td-gray hidden sm:inline">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-td-gray text-sm leading-relaxed text-center mt-7 max-w-2xl mx-auto">
                Students progress through registration, training and
                assessment before the CBT and certificate stage. Driver
                licence processing can then commence according to the
                applicable process.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-td-red to-td-red-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
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
              Choose your training programme and take the next step with
              Till Dawn Driving Academy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                to="/booking"
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