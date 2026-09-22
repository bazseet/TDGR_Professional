import {
  Shield,
  Users,
  BookOpen,
  Clock,
  MapPin,
  Car,
  Settings,
  Cog,
  Award,
  Building2,
  CheckCircle2,
  Star,
  Zap,
  Target,
  Wrench,
  Container,
  Truck,
  GraduationCap,
  Eye,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react';

import { useState, useEffect } from 'react';

import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import CTAButton from '../components/CTAButton';

import { mainCourses } from '../data/courses';
import { pricing } from '../data/pricing';
import { testimonials } from '../data/testimonials';

import {
  getWhatsAppLink,
  formatPrice,
} from '../utils/helpers';

import SEO from '../components/SEO';


/* =========================================================
   ICON MAP
========================================================= */

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
  Target,
  Wrench,
  Container,
};


/* =========================================================
   HERO
========================================================= */

function HeroSection() {
  const heroImages = [
    '/gallery/academy-building.png',
    '/gallery/classroom.png',
    '/gallery/simulator-student.png',
    '/gallery/simulator-instructor.png',
    '/gallery/frsc-visit.png',
  ];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(
        (current) => (current + 1) % heroImages.length
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden">

      {/* Hero Images */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeImage === index
              ? 'opacity-100'
              : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt="Till Dawn Driving Academy"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Brand Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-td-dark/80 via-td-dark/50 to-td-red-dark/40" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-28 w-full">
        <div className="max-w-3xl">

          {/* FRSC Badge */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2 w-fit mb-5">

              <img
                src="/gallery/frsc-logo.jpg"
                alt="FRSC"
                className="w-6 h-6 object-contain"
              />

              <span className="text-xs sm:text-sm font-semibold text-white">
                FRSC Certified Driving Academy
              </span>

            </div>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-5 animate-fade-in-up delay-100"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Learn to Drive from{' '}
            <span className="text-td-yellow">
              the Professionals
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
            Professional driver training designed to build
            confidence, practical skills and safer drivers.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-300">

            <CTAButton
              to="/booking"
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

        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">

        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveImage(index)}
            aria-label={`Show hero image ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeImage === index
                ? 'w-8 bg-td-yellow'
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}

      </div>

    </section>
  );
}


/* =========================================================
   TRUST BAR
========================================================= */

function TrustBar() {
  const items = [
    {
      icon: Shield,
      text: 'FRSC Certified',
    },
    {
      icon: Users,
      text: 'Professional Training',
    },
    {
      icon: BookOpen,
      text: 'Theory + Practical',
    },
    {
      icon: Clock,
      text: 'Monday - Saturday',
    },
    {
      icon: MapPin,
      text: 'Ojodu Berger, Lagos',
    },
  ];

  return (
    <section className="bg-td-red py-4 sm:py-6 relative z-10 shadow-xl">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">

          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2 text-white py-2"
            >

              <item.icon
                size={17}
                className="text-td-yellow flex-shrink-0"
              />

              <span className="text-xs sm:text-sm font-medium text-center">
                {item.text}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   INTRO
========================================================= */

function IntroSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <AnimatedSection>

            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-td-red/10 text-td-red mb-4">
              About Till Dawn
            </span>

            <h2
              className="text-3xl md:text-4xl font-extrabold text-td-dark leading-tight mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Professional Driver Training Built Around Real-World Skills
            </h2>

            <p className="text-td-gray text-base sm:text-lg leading-relaxed mb-6">
              Till Dawn Driving Academy provides structured driver
              education combining theory, practical driving,
              simulator training, road experience, safety awareness
              and driver assessment.
            </p>

            <p className="text-td-gray text-base sm:text-lg leading-relaxed mb-7">
              Our programmes are designed to help learners become
              competent, confident and responsible drivers.
            </p>

            <CTAButton
              to="/about"
              icon
            >
              Explore Our Academy
            </CTAButton>

          </AnimatedSection>


          <AnimatedSection delay={200}>

            <div className="bg-linear-to-br from-td-dark to-td-charcoal rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 text-white">

              <div className="space-y-5">

                <div className="flex items-start gap-4">

                  <div className="bg-td-red/20 p-3 rounded-xl">
                    <ShieldCheck
                      size={23}
                      className="text-td-yellow"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg">
                      FRSC Certified
                    </h4>

                    <p className="text-gray-400 text-sm">
                      Certified professional driving academy
                    </p>
                  </div>

                </div>


                <div className="flex items-start gap-4">

                  <div className="bg-td-red/20 p-3 rounded-xl">
                    <GraduationCap
                      size={23}
                      className="text-td-yellow"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg">
                      Structured Training
                    </h4>

                    <p className="text-gray-400 text-sm">
                      Comprehensive theory and practical training
                    </p>
                  </div>

                </div>


                <div className="flex items-start gap-4">

                  <div className="bg-td-red/20 p-3 rounded-xl">
                    <Car
                      size={23}
                      className="text-td-yellow"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg">
                      Practical Experience
                    </h4>

                    <p className="text-gray-400 text-sm">
                      Simulator and real-road driving experience
                    </p>
                  </div>

                </div>


                <div className="flex items-start gap-4">

                  <div className="bg-td-red/20 p-3 rounded-xl">
                    <Building2
                      size={23}
                      className="text-td-yellow"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg">
                      Corporate Training
                    </h4>

                    <p className="text-gray-400 text-sm">
                      Driver training programmes for organizations
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </AnimatedSection>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   TRAINING PROGRAMMES
========================================================= */

function TrainingPrograms() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-td-light-gray">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>

          <SectionHeading
            badge="Training Programmes"
            title="Professional Driving Courses"
            subtitle="Structured training programmes designed for different levels of driving experience"
          />

        </AnimatedSection>


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">

          {mainCourses.map((course, i) => {

            const Icon =
              iconMap[course.icon] || Car;

            return (
              <AnimatedSection
                key={course.id}
                delay={i * 80}
              >

                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full">

                  <div className="bg-td-red/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">

                    <Icon
                      size={25}
                      className="text-td-red"
                    />

                  </div>


                  <h3
                    className="text-lg sm:text-xl font-bold text-td-dark mb-2"
                    style={{
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {course.title}
                  </h3>


                  <p className="text-td-gray text-sm leading-relaxed mb-4">
                    {course.description}
                  </p>


                  <ul className="space-y-2">

                    {course.features
                      .slice(0, 4)
                      .map((feature, j) => (

                        <li
                          key={j}
                          className="flex items-center gap-2 text-sm text-td-gray"
                        >

                          <CheckCircle2
                            size={14}
                            className="text-td-red flex-shrink-0"
                          />

                          {feature}

                        </li>

                      ))}

                  </ul>

                </div>

              </AnimatedSection>
            );
          })}

        </div>


        <AnimatedSection>

          <div className="text-center mt-8">

            <CTAButton
              to="/training"
              secondary
              icon
            >
              View All Training
            </CTAButton>

          </div>

        </AnimatedSection>

      </div>

    </section>
  );
}


/* =========================================================
   PRICING
========================================================= */

function PricingSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>

          <SectionHeading
            badge="Course Pricing"
            title="Transparent Training Fees"
            subtitle="Clear and upfront pricing for our driving training programmes"
          />

        </AnimatedSection>


        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">

          {pricing.map((plan, i) => (

            <AnimatedSection
              key={plan.id}
              delay={i * 100}
            >

              <div className="bg-white border border-gray-100 rounded-2xl lg:rounded-3xl p-6 sm:p-8 shadow-lg h-full">

                <div className="text-center mb-6">

                  <h3
                    className="text-2xl font-bold text-td-dark mb-2"
                    style={{
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {plan.title}
                  </h3>

                  <p className="text-td-gray text-sm">
                    {plan.description}
                  </p>

                </div>


                <div className="space-y-3 mb-7">

                  <div className="flex justify-between items-center py-2 border-b border-gray-100">

                    <span className="text-td-gray text-sm">
                      Training Fee
                    </span>

                    <span className="font-semibold text-td-dark">
                      {formatPrice(plan.trainingFee)}
                    </span>

                  </div>


                  <div className="flex justify-between items-center py-2 border-b border-gray-100">

                    <span className="text-td-gray text-sm">
                      Highway Code
                    </span>

                    <span className="font-semibold text-td-dark">
                      {formatPrice(plan.highwayCode)}
                    </span>

                  </div>


                  <div className="flex justify-between items-center py-3 bg-td-red/5 rounded-xl px-4">

                    <span className="font-bold text-td-dark">
                      Total
                    </span>

                    <span className="text-xl sm:text-2xl font-extrabold text-td-red">
                      {formatPrice(plan.total)}
                    </span>

                  </div>

                </div>


                <ul className="space-y-2 mb-7">

                  {plan.features
                    .slice(0, 5)
                    .map((feature, j) => (

                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-td-gray"
                      >

                        <CheckCircle2
                          size={16}
                          className="text-td-red flex-shrink-0"
                        />

                        {feature}

                      </li>

                    ))}

                </ul>


                <CTAButton
                  to="/booking"
                  variant="primary"
                  className="w-full"
                >
                  Register for{' '}
                  {plan.title.replace(
                    ' Training',
                    ''
                  )}{' '}
                  Training
                </CTAButton>

              </div>

            </AnimatedSection>

          ))}

        </div>


        <AnimatedSection>

          <p className="text-center text-td-gray text-xs sm:text-sm mt-7">
            ₦5,000 Highway Code fee included in the
            total package.
          </p>

        </AnimatedSection>

      </div>

    </section>
  );
}


/* =========================================================
   WHY CHOOSE US
========================================================= */

function WhyChooseUs() {

  const reasons = [
    {
      icon: Shield,
      title: 'FRSC Certified',
      desc: 'Certified professional driving academy',
    },
    {
      icon: GraduationCap,
      title: 'Structured Curriculum',
      desc: 'Comprehensive driver education programme',
    },
    {
      icon: Car,
      title: 'Practical + Theory',
      desc: 'Complete hands-on training approach',
    },
    {
      icon: Users,
      title: 'Experienced Instructors',
      desc: 'Professional driving instructors',
    },
    {
      icon: Target,
      title: 'Defensive Driving',
      desc: 'Safety-focused driving techniques',
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      desc: 'Weekday and weekend options',
    },
  ];


  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-td-red to-td-red-dark relative overflow-hidden">

      <div className="absolute inset-0 opacity-10">

        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-white rounded-full blur-3xl" />

        <div className="absolute bottom-0 left-0 w-56 sm:w-72 h-56 sm:h-72 bg-td-yellow rounded-full blur-3xl" />

      </div>


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>

          <SectionHeading
            badge="Why Choose Us"
            title="Why Choose Till Dawn"
            subtitle="Professional driver training focused on safety, skill and confidence"
            light
          />

        </AnimatedSection>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

          {reasons.map((reason, i) => (

            <AnimatedSection
              key={i}
              delay={i * 80}
            >

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10 h-full">

                <reason.icon
                  size={27}
                  className="text-td-yellow mb-4"
                />

                <h3
                  className="text-white font-bold text-lg mb-2"
                  style={{
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {reason.title}
                </h3>

                <p className="text-white/70 text-sm">
                  {reason.desc}
                </p>

              </div>

            </AnimatedSection>

          ))}

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   SIMULATOR
========================================================= */

function SimulatorSection() {

  const features = [
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


  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-td-light-gray">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <AnimatedSection>

            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-td-red/10 text-td-red mb-4">
              Simulator Training
            </span>

            <h2
              className="text-3xl md:text-4xl font-extrabold text-td-dark leading-tight mb-5"
              style={{
                fontFamily: 'var(--font-heading)',
              }}
            >
              Prepare Before You Hit the Road
            </h2>

            <p className="text-td-gray text-base sm:text-lg leading-relaxed mb-6">
              Our vehicle simulator provides a practical
              training environment before road driving,
              helping students become familiar with essential
              vehicle controls and driving situations.
            </p>


            <div className="grid grid-cols-2 gap-3 mb-7">

              {features.slice(0, 8).map((feature, i) => (

                <div
                  key={i}
                  className="flex items-center gap-2"
                >

                  <CheckCircle2
                    size={14}
                    className="text-td-red flex-shrink-0"
                  />

                  <span className="text-xs sm:text-sm text-td-gray">
                    {feature}
                  </span>

                </div>

              ))}

            </div>


            <CTAButton
              to="/training"
              secondary
              icon
            >
              Learn More
            </CTAButton>

          </AnimatedSection>


          <AnimatedSection delay={150}>

            <div className="bg-gradient-to-br from-td-dark to-td-charcoal rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 text-white">

              <div className="text-center mb-6">

                <div className="bg-td-red/20 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">

                  <Car
                    size={36}
                    className="text-td-yellow"
                  />

                </div>

                <h3
                  className="text-xl font-bold"
                  style={{
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  Vehicle Simulator
                </h3>

              </div>


              <div className="space-y-3">

                <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3">

                  <div className="bg-td-yellow/20 p-2 rounded-lg">

                    <Eye
                      size={18}
                      className="text-td-yellow"
                    />

                  </div>

                  <div>

                    <p className="text-sm font-semibold">
                      Practice Environment
                    </p>

                    <p className="text-xs text-gray-400">
                      Safe simulated conditions
                    </p>

                  </div>

                </div>


                <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3">

                  <div className="bg-td-yellow/20 p-2 rounded-lg">

                    <Lightbulb
                      size={18}
                      className="text-td-yellow"
                    />

                  </div>

                  <div>

                    <p className="text-sm font-semibold">
                      Multiple Conditions
                    </p>

                    <p className="text-xs text-gray-400">
                      Different road scenarios
                    </p>

                  </div>

                </div>


                <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3">

                  <div className="bg-td-yellow/20 p-2 rounded-lg">

                    <Shield
                      size={18}
                      className="text-td-yellow"
                    />

                  </div>

                  <div>

                    <p className="text-sm font-semibold">
                      Structured Preparation
                    </p>

                    <p className="text-xs text-gray-400">
                      Before real road driving
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </AnimatedSection>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   TESTIMONIALS
========================================================= */

function TestimonialsSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>

          <SectionHeading
            badge="Testimonials"
            title="What Our Students Say"
            subtitle="Hear from students who have trained with Till Dawn"
          />

        </AnimatedSection>


        <AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            {testimonials.slice(0, 4).map(
              (testimonial, index) => (

                <div
                  key={testimonial.id}
                  className="bg-td-light-gray rounded-2xl p-5 sm:p-6 h-full flex flex-col"
                >

                  <div className="flex gap-1 mb-4">

                    {[1, 2, 3, 4, 5].map(
                      (star) => (
                        <Star
                          key={star}
                          size={15}
                          className="fill-td-yellow text-td-yellow"
                        />
                      )
                    )}

                  </div>


                  <p className="text-td-gray text-sm leading-relaxed flex-1">
                    “{testimonial.message}”
                  </p>


                  <div className="mt-5 pt-4 border-t border-gray-200">

                    <p className="font-bold text-td-dark">
                      {testimonial.name}
                    </p>

                    <p className="text-xs text-td-gray">
                      Student
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </AnimatedSection>


        <AnimatedSection>

          <div className="text-center mt-8">

            <CTAButton
              to="/testimonials"
              secondary
              icon
            >
              Read More Reviews
            </CTAButton>

          </div>

        </AnimatedSection>

      </div>

    </section>
  );
}


/* =========================================================
   FINAL CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-td-red to-td-red-dark relative overflow-hidden">

      <div className="absolute inset-0 opacity-10">

        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-white rounded-full blur-3xl" />

        <div className="absolute bottom-0 left-0 w-56 sm:w-72 h-56 sm:h-72 bg-td-yellow rounded-full blur-3xl" />

      </div>


      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <AnimatedSection>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5"
            style={{
              fontFamily: 'var(--font-heading)',
            }}
          >
            Ready to Start Your Driving Journey?
          </h2>


          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Learn to drive with a structured training
            programme from a certified professional driving
            academy.
          </p>


          <div className="flex flex-col sm:flex-row gap-3 justify-center">

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
  );
}


/* =========================================================
   HOME PAGE
========================================================= */

export default function Home() {
  return (
    <main>

      <SEO
        title="FRSC Certified Driving Academy in Lagos"
        description="Till Dawn Driving Academy is a licensed driving academy in Lagos offering professional automatic and manual driving lessons, practical training and driver education."
        keywords="driving school Lagos, driving academy Lagos, driving school Ojodu Berger, driving lessons Lagos, FRSC certified driving academy, automatic driving lessons Lagos, manual driving lessons Lagos"
      />


      {/* 1. HERO */}
      <HeroSection />


      {/* 2. TRUST */}
      <TrustBar />


      {/* 3. ABOUT */}
      <IntroSection />


      {/* 4. TRAINING */}
      <TrainingPrograms />


      {/* 5. PRICING */}
      <PricingSection />


      {/* 6. WHY CHOOSE US */}
      <WhyChooseUs />


      {/* 7. SIMULATOR */}
      <SimulatorSection />


      {/* 8. TESTIMONIALS */}
      <TestimonialsSection />


      {/* 9. FINAL CTA */}
      <FinalCTA />

    </main>
  );
}
