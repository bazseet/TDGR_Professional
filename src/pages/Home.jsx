import { Link } from 'react-router-dom';
import {
  Shield, Users, BookOpen, Clock, MapPin, Car, Settings, Cog,
  Award, Building2, ChevronRight, ChevronDown, ChevronUp,
  CheckCircle2, ArrowRight, Star, Zap, Target, Wrench,
  Container, Truck, GraduationCap, AlertTriangle, Eye, HandHeart,
  Lightbulb, ShieldCheck, Route, Timer, Calendar
} from 'lucide-react';
import { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import CTAButton from '../components/CTAButton';
import { business } from '../data/business';
import { mainCourses, additionalCourses } from '../data/courses';
import { pricing, weekdayTraining, weekendTraining } from '../data/pricing';
import { curriculum } from '../data/curriculum';
import { services } from '../data/services';
import { locations, locationNote } from '../data/locations';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faqs';
import { getWhatsAppLink, formatPrice, getPhoneLink } from '../utils/helpers';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';


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
  Container
};
function HeroSection() {
  const heroImages = [
    '/gallery/academy-building.png',
    '/gallery/classroom.png',
    '/gallery/simulator-student.png',
    '/gallery/simulator-instructor.png',
    '/gallery/frsc-visit.png'
  ];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Hero Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeImage === index ? 'opacity-100' : 'opacity-0'
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

      {/* Brand Colour Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-td-dark/80 via-td-dark/50 to-td-red-dark/40" />

      {/* Existing Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28 w-full">
        <div className="max-w-3xl">

          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 w-fit mb-6">
              <img
                src="/gallery/frsc-logo.jpg"
                alt="FRSC"
                className="w-6 h-6 object-contain"
              />

              <span className="text-sm font-semibold text-white">
                FRSC Certified Driving Academy
              </span>
            </div>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up delay-100"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Learn to Drive from{' '}
            <span className="text-td-yellow">the Professionals</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
            Professional driver training designed to build confidence, practical skills and safer drivers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <CTAButton to="/booking" size="lg" icon>
              Book Your Training
            </CTAButton>

            <CTAButton href={getWhatsAppLink()} variant="green" size="lg" icon>
              Chat on WhatsApp
            </CTAButton>
          </div>

        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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

function TrustBar() {
  const items = [
    { icon: Shield, text: "FRSC Certified" },
    { icon: Users, text: "Professional Training" },
    { icon: BookOpen, text: "Theory + Practical" },
    { icon: Clock, text: "Monday - Saturday" },
    { icon: MapPin, text: "Ojodu Berger, Lagos" }
  ];

  return (
    <section className="bg-td-red py-6 relative z-10 -mt-1 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2 text-white py-2"
            >
              <item.icon
                size={18}
                className="text-td-yellow flex-shrink-0"
              />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-td-red/10 text-td-red mb-4">
              About Till Dawn
            </span>

            <h2
              className="text-3xl md:text-4xl font-extrabold text-td-dark leading-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Professional Driver Training Built Around Real-World Skills
            </h2>

           <p className="text-td-gray text-lg leading-relaxed mb-8">
  Till Dawn Driving Academy provides structured driver education combining theory, practical driving, simulator training, road experience, safety awareness and driver assessment.
</p>

<p className="text-td-gray text-lg leading-relaxed mb-8">
  As a licensed driving academy, we are committed to producing competent, confident, and responsible drivers through our comprehensive training programmes.
</p>



            <div className="mt-3">
  <CTAButton to="/about" icon>
    Explore Our Training
  </CTAButton>
</div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-linear-to-br from-td-dark to-td-charcoal rounded-3xl p-8 lg:p-12 text-white">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-td-red/20 p-3 rounded-xl">
                    <ShieldCheck size={24} className="text-td-yellow" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      FRSC Certified
                    </h4>
                    <p className="text-gray-400 text-sm">
                      FRSC certified academy
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-td-red/20 p-3 rounded-xl">
                    <GraduationCap size={24} className="text-td-yellow" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Structured Curriculum
                    </h4>
                    <p className="text-gray-400 text-sm">
                      18-module comprehensive training programme
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-td-red/20 p-3 rounded-xl">
                    <Car size={24} className="text-td-yellow" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Practical Training
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Simulator + real road driving experience
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-td-red/20 p-3 rounded-xl">
                    <Building2 size={24} className="text-td-yellow" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Corporate Training
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Professional programmes for organizations
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

function TrainingPrograms() {
  return (
    <section className="py-20 lg:py-28 bg-td-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="Training Programmes"
            title="Professional Driving Courses"
            subtitle="Structured training programmes designed for every level of driving experience"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainCourses.map((course, i) => {
            const Icon = iconMap[course.icon] || Car;

            return (
              <AnimatedSection key={course.id} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="bg-td-red/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                    <Icon size={28} className="text-td-red" />
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

                  <ul className="space-y-2 mb-5">
                    {course.features.map((f, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-td-gray"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-td-red flex-shrink-0"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection>
          <div className="text-center mt-10">
            <CTAButton to="/training" secondary icon>
              View All Training
            </CTAButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function AdditionalTraining() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="Specialized Training"
            title="Additional Programmes"
            subtitle="Specialized driver training for specific professional needs"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalCourses.map((course, i) => {
            const Icon = iconMap[course.icon] || Car;

            return (
              <AnimatedSection key={course.id} delay={i * 100}>
                <div className="bg-gradient-to-br from-td-dark to-td-charcoal rounded-2xl p-6 text-white h-full">
                  <div className="bg-td-red/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-td-yellow" />
                  </div>

                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {course.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="py-20 lg:py-28 bg-td-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="Course Pricing"
            title="Transparent Training Fees"
            subtitle="Clear and upfront pricing for all our driving training programmes"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricing.map((plan, i) => (
            <AnimatedSection key={plan.id} delay={i * 150}>
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative">

                <div className="text-center mb-6">
                  <h3
                    className="text-2xl font-bold text-td-dark mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {plan.title}
                  </h3>

                  <p className="text-td-gray text-sm">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-td-gray">Training Fee</span>
                    <span className="font-semibold text-td-dark">
                      {formatPrice(plan.trainingFee)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-td-gray">Highway Code</span>
                    <span className="font-semibold text-td-dark">
                      {formatPrice(plan.highwayCode)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-3 bg-td-red/5 rounded-xl px-4">
                    <span className="font-bold text-td-dark">
                      Total Package
                    </span>

                    <span className="text-2xl font-extrabold text-td-red">
                      {formatPrice(plan.total)}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((feature, j) => (
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
                  Register for {plan.title.replace(' Training', '')} Training
                </CTAButton>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <p className="text-center text-td-gray text-sm mt-8">
            The ₦5,000 Highway Code fee brings the total packages to: Automatic: ₦65,000 | Manual: ₦75,000
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ScheduleSection() {
  const [activeTab, setActiveTab] = useState('weekday');

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <SectionHeading
            badge="Training Schedule"
            title="Weekday & Weekend Programmes"
            subtitle="Flexible scheduling options to suit your availability"
          />
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setActiveTab('weekday')}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeTab === 'weekday'
                  ? 'bg-td-red text-white shadow-lg'
                  : 'bg-gray-100 text-td-charcoal hover:bg-gray-200'
              }`}
            >
              Weekday Programme
            </button>

            <button
              onClick={() => setActiveTab('weekend')}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeTab === 'weekend'
                  ? 'bg-td-red text-white shadow-lg'
                  : 'bg-gray-100 text-td-charcoal hover:bg-gray-200'
              }`}
            >
              Weekend Programme
            </button>
          </div>
        </AnimatedSection>

        {activeTab === 'weekday' ? (
          <AnimatedSection>
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-td-dark to-td-charcoal rounded-3xl p-8 lg:p-12 text-white">
              <div className="text-center mb-8">
                <Calendar
                  size={40}
                  className="text-td-yellow mx-auto mb-3"
                />

                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {weekdayTraining.title}
                </h3>

                <p className="text-gray-400">
                  {weekdayTraining.duration}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-2xl p-6">
                  <h4 className="font-bold text-td-yellow mb-4 flex items-center gap-2">
                    <BookOpen size={20} /> Theory Classes
                  </h4>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">
                        Number of classes
                      </span>
                      <span className="font-semibold">
                        {weekdayTraining.theory.classes}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-400">
                        Duration per class
                      </span>
                      <span className="font-semibold">
                        {weekdayTraining.theory.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6">
                  <h4 className="font-bold text-td-yellow mb-4 flex items-center gap-2">
                    <Car size={20} /> Practical Lessons
                  </h4>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">
                        Number of lessons
                      </span>
                      <span className="font-semibold">
                        {weekdayTraining.practical.lessons}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-400">
                        Duration per lesson
                      </span>
                      <span className="font-semibold">
                        {weekdayTraining.practical.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ) : (
          <AnimatedSection>
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-td-dark to-td-charcoal rounded-3xl p-8 lg:p-12 text-white">
              <div className="text-center mb-8">
                <Calendar
                  size={40}
                  className="text-td-yellow mx-auto mb-3"
                />

                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {weekendTraining.title}
                </h3>

                <p className="text-gray-400">
                  {weekendTraining.duration}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-2xl p-6">
                  <h4 className="font-bold text-td-yellow mb-4 flex items-center gap-2">
                    <BookOpen size={20} /> Theory Classes
                  </h4>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">
                        Number of classes
                      </span>
                      <span className="font-semibold">
                        {weekendTraining.theory.classes}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-400">
                        Duration per class
                      </span>
                      <span className="font-semibold">
                        {weekendTraining.theory.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6">
                  <h4 className="font-bold text-td-yellow mb-4 flex items-center gap-2">
                    <Car size={20} /> Practical Lessons
                  </h4>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">
                        Number of lessons
                      </span>
                      <span className="font-semibold">
                        {weekendTraining.practical.lessons}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-400">
                        Duration per lesson
                      </span>
                      <span className="font-semibold">
                        {weekendTraining.practical.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "FRSC Certified",
      desc: "FRSC certified academy"
    },
    {
      icon: GraduationCap,
      title: "Structured Curriculum",
      desc: "18-module comprehensive training"
    },
    {
      icon: Car,
      title: "Practical + Theory",
      desc: "Complete hands-on training approach"
    },
    {
      icon: Users,
      title: "Experienced Instructors",
      desc: "Professional driving instructors"
    },
    {
      icon: Target,
      title: "Defensive Driving",
      desc: "Safety-focused training techniques"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      desc: "Weekday and weekend options"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-td-red to-td-red-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-td-yellow rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="Why Choose Us"
            title="Why Choose Till Dawn"
            subtitle="Trusted by students across Ojodu Berger and surrounding areas"
            light
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all">
                <r.icon
                  size={28}
                  className="text-td-yellow mb-4"
                />

                <h3
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {r.title}
                </h3>

                <p className="text-white/70 text-sm">
                  {r.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function CurriculumPreview() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="py-20 lg:py-28 bg-td-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <SectionHeading
            badge="Training Curriculum"
            title="Structured Learning Programme"
            subtitle="Our curriculum covers BLC 101 to BLC 118 for comprehensive driver education"
          />
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-3">
          {curriculum.slice(0, 6).map((mod, i) => (
            <AnimatedSection key={mod.id} delay={i * 80}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <button
                  onClick={() =>
                    setExpanded(
                      expanded === mod.id ? null : mod.id
                    )
                  }
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-td-red text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {mod.code}
                    </div>

                    <div>
                      <h4
                        className="font-bold text-td-dark"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {mod.title}
                      </h4>

                      {expanded !== mod.id && (
                        <p className="text-td-gray text-sm mt-0.5 line-clamp-1">
                          {mod.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {expanded === mod.id ? (
                    <ChevronUp
                      size={20}
                      className="text-td-red flex-shrink-0"
                    />
                  ) : (
                    <ChevronDown
                      size={20}
                      className="text-td-gray flex-shrink-0"
                    />
                  )}
                </button>

                {expanded === mod.id && (
                  <div className="px-5 pb-5 pl-[4.5rem]">
                    <p className="text-td-gray leading-relaxed">
                      {mod.description}
                    </p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center mt-8">
            <CTAButton to="/curriculum" secondary icon>
              View Full Curriculum
            </CTAButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function SimulatorSection() {
  const features = [
    "Seat adjustment",
    "Mirror adjustment",
    "Steering control",
    "Turn signals & headlights",
    "Seat belts",
    "Wipers & emergency lights",
    "Parking brake",
    "Starting/stopping engine",
    "Accelerator, brake & clutch",
    "Dashboard warning indicators"
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-td-red/10 text-td-red mb-4">
              Simulator Training
            </span>

            <h2
              className="text-3xl md:text-4xl font-extrabold text-td-dark leading-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Prepare Before You Hit the Road
            </h2>

            <p className="text-td-gray text-lg leading-relaxed mb-6">
              Our vehicle simulator provides a practical training environment used before road driving, capable of simulating different driving conditions for a safe and structured learning experience.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-td-red flex-shrink-0"
                  />
                  <span className="text-sm text-td-gray">
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <CTAButton to="/training" secondary icon>
              Learn More
            </CTAButton>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-gradient-to-br from-td-dark to-td-charcoal rounded-3xl p-8 lg:p-12 text-white">

              <div className="text-center mb-6">
                <div className="bg-td-red/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Car size={40} className="text-td-yellow" />
                </div>

                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Vehicle Simulator
                </h3>
              </div>

              <div className="space-y-3">
                <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3">
                  <div className="bg-td-yellow/20 p-2 rounded-lg">
                    <Eye size={18} className="text-td-yellow" />
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
                    <Lightbulb size={18} className="text-td-yellow" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Multiple Conditions
                    </p>
                    <p className="text-xs text-gray-400">
                      Different weather and road scenarios
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3">
                  <div className="bg-td-yellow/20 p-2 rounded-lg">
                    <Shield size={18} className="text-td-yellow" />
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

function DefensiveDrivingSection() {
  const principles = [
    {
      icon: Eye,
      title: "Recognize the hazard",
      desc: "Identify potential dangers on the road early"
    },
    {
      icon: Lightbulb,
      title: "Understand the defence",
      desc: "Know the appropriate response to each hazard"
    },
    {
      icon: ShieldCheck,
      title: "Act correctly, in time",
      desc: "React promptly and appropriately to avoid danger"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-td-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <SectionHeading
            badge="Defensive Driving"
            title="Drive Safely, Drive Defensively"
            subtitle="Our defensive driving programme teaches critical safety awareness"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {principles.map((p, i) => (
            <AnimatedSection key={i} delay={i * 150}>
              <div className="text-center bg-white rounded-2xl p-8 shadow-md">
                <div className="bg-td-red/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <p.icon
                    size={32}
                    className="text-td-red"
                  />
                </div>

                <h3
                  className="text-lg font-bold text-td-dark mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {p.title}
                </h3>

                <p className="text-td-gray text-sm">
                  {p.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-md max-w-4xl mx-auto">
            <h4
              className="font-bold text-td-dark text-lg mb-4 text-center"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Qualities of a Defensive Driver
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Awareness",
                "Caution",
                "Patience",
                "Skill",
                "Consideration",
                "Knowledge of Road Signs"
              ].map((q, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-td-red flex-shrink-0"
                  />
                  <span className="text-sm text-td-gray font-medium">
                    {q}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function CorporatePreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-td-yellow/20 text-td-yellow mb-4">
              Corporate Training
            </span>

            <h2
              className="text-3xl md:text-4xl font-extrabold text-td-dark leading-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Professional Driver Training for Organizations
            </h2>

            <p className="text-td-gray text-lg leading-relaxed mb-6">
              Till Dawn provides structured corporate training programmes for companies that need professional driver development for their staff and fleet operations.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Corporate staff training",
                "Existing company driver training",
                "Fleet management",
                "Driver safety programmes",
                "Defensive driving courses"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-td-red flex-shrink-0"
                  />
                  <span className="text-td-gray">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <CTAButton to="/corporate" icon>
              Request Corporate Training
            </CTAButton>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-gradient-to-br from-td-yellow to-td-yellow-light rounded-3xl p-8 lg:p-12">
              <Building2
                size={48}
                className="text-td-dark mb-6"
              />

              <h3
                className="text-2xl font-bold text-td-dark mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Corporate Solutions
              </h3>

              <p className="text-td-dark/70 leading-relaxed mb-6">
                From individual driver training to fleet-wide safety programmes, we tailor our corporate offerings to meet organizational needs.
              </p>

             <div className="mt-5">
  <CTAButton to="/corporate" variant="dark">
    <span className="text-td-yellow">
      Request Corporate Training
    </span>
  </CTAButton>
</div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-td-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <SectionHeading
            badge="Our Services"
            title="Specialized Services"
            subtitle="Beyond driving training, Till Dawn offers professional services"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Target;

            return (
              <AnimatedSection key={s.id} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all h-full">
                  <div className="bg-td-red/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Icon
                      size={24}
                      className="text-td-red"
                    />
                  </div>

                  <h3
                    className="font-bold text-td-dark mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {s.title}
                  </h3>

                  <p className="text-td-gray text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection>
          <div className="text-center mt-8">
            <CTAButton to="/services" secondary icon>
              View All Services
            </CTAButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function LocationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <SectionHeading
            badge="Training Locations"
            title="Where We Train"
            subtitle="Multiple convenient training locations across Lagos"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto mb-8">
          {locations.map((loc, i) => (
            <AnimatedSection key={loc.id} delay={i * 80}>
              <div
                className={`rounded-xl p-4 text-center transition-all ${
                  loc.primary
                    ? 'bg-td-red text-white'
                    : 'bg-td-light-gray text-td-dark'
                }`}
              >
                <MapPin
                  size={20}
                  className={`mx-auto mb-2 ${
                    loc.primary
                      ? 'text-td-yellow'
                      : 'text-td-red'
                  }`}
                />

                <p className="text-sm font-semibold">
                  {loc.name}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="bg-td-light-gray rounded-xl p-6 max-w-2xl mx-auto text-center">
            <AlertTriangle
              size={20}
              className="text-td-yellow mx-auto mb-2"
            />

            <p className="text-td-gray text-sm">
              {locationNote}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Registration",
      desc: "Student completes registration and provides required details."
    },
    {
      num: "02",
      title: "Payment & Confirmation",
      desc: "Registration and training fees are confirmed."
    },
    {
      num: "03",
      title: "Student Information",
      desc: "Student is informed about course structure, schedule and requirements."
    },
    {
      num: "04",
      title: "Scheduling",
      desc: "Theory and practical training days/times are arranged."
    },
    {
      num: "05",
      title: "Theory Training",
      desc: "Student begins classroom/theory lessons."
    },
    {
      num: "06",
      title: "Practical Training",
      desc: "Student is assigned an instructor for hands-on driving."
    },
    {
      num: "07",
      title: "Assessment",
      desc: "Student progress is monitored throughout training."
    },
    {
      num: "08",
      title: "CBT & Certificate",
      desc: "Students take CBT and receive certificate for licence processing."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-td-dark to-td-charcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-td-yellow rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="Training Process"
            title="How Your Training Journey Works"
            subtitle="A structured 8-step process from registration to certification"
            light
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all h-full">

                <div
                  className="text-td-yellow font-extrabold text-3xl mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {step.num}
                </div>

                <h3
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-td-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <SectionHeading
            badge="Testimonials"
            title="Student Reviews"
          />
        </AnimatedSection>

        <AnimatedSection>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {testimonials.map((testimonial, index) => (
      <AnimatedSection
        key={testimonial.id}
        delay={index * 100}
      >
        <div className="bg-white rounded-2xl p-6 shadow-md h-full flex flex-col">

          <div className="text-td-red text-4xl font-serif mb-4">
            “
          </div>

          <p className="text-td-gray leading-relaxed flex-1">
            {testimonial.message}
          </p>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="font-bold text-td-dark">
              {testimonial.name}
            </p>

            <p className="text-sm text-td-gray">
              Student
            </p>
          </div>

        </div>
      </AnimatedSection>
    ))}
  </div>
</AnimatedSection>
      </div>
    </section>
  );
}

function FAQPreview() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <SectionHeading
            badge="FAQs"
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions"
          />
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.slice(0, 6).map((faq, i) => (
            <AnimatedSection key={faq.id} delay={i * 80}>
              <div className="bg-td-light-gray rounded-xl overflow-hidden">

                <button
                  onClick={() =>
                    setExpanded(
                      expanded === faq.id ? null : faq.id
                    )
                  }
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span
                    className="font-semibold text-td-dark pr-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {faq.question}
                  </span>

                  {expanded === faq.id ? (
                    <ChevronUp
                      size={20}
                      className="text-td-red flex-shrink-0"
                    />
                  ) : (
                    <ChevronDown
                      size={20}
                      className="text-td-gray flex-shrink-0"
                    />
                  )}
                </button>

                {expanded === faq.id && (
                  <div className="px-5 pb-5">
                    <p className="text-td-gray leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center mt-8">
            <CTAButton to="/faqs" secondary icon>
              View All FAQs
            </CTAButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-td-red to-td-red-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-td-yellow rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to Start Your Driving Journey?
          </h2>

          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Learn to drive with a structured training programme from a certified professional driving academy.
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
  );
}

export default function Home() {
  return (
    <main>
       <SEO
  title="FRSC Certified Driving Academy in Lagos"
  description="Till Dawn Driving Academy is a Licensed driving academy in Lagos offering professional automatic and manual driving lessons, practical training and driver education."
  keywords="driving school Lagos, driving academy Lagos, driving school Ojodu Berger, driving lessons Lagos, FRSC certified driving academy, automatic driving lessons Lagos, manual driving lessons Lagos"/>
      <HeroSection />
      <TrustBar />
      <IntroSection />
      <TrainingPrograms />
      <PricingSection />
      <ScheduleSection />
      <WhyChooseUs />
      <CurriculumPreview />
      <SimulatorSection />
      <DefensiveDrivingSection />
      <CorporatePreview />
      <ServicesPreview />
      <LocationsSection />
      <HowItWorks />
      <TestimonialsSection />
      <FAQPreview />
      <FinalCTA />
    </main>
  );
}