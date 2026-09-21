import { useState } from 'react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import CTAButton from '../components/CTAButton';
import { CheckCircle2, Calendar, BookOpen, Car } from 'lucide-react';
import { pricing, weekdayTraining, weekendTraining } from '../data/pricing';
import { formatPrice, getWhatsAppLink } from '../utils/helpers';
import SEO from '../components/SEO';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('weekday');

  return (
    <main>
       <SEO
  title="FRSC Certified Driving Academy in Lagos"
  description="Till Dawn Driving Academy is a Licensed driving academy in Lagos offering professional automatic and manual driving lessons, practical training and driver education."
  keywords="driving school Lagos, driving academy Lagos, driving school Ojodu Berger, driving lessons Lagos, FRSC certified driving academy, automatic driving lessons Lagos, manual driving lessons Lagos"/>
      <PageHero
        title="Course Pricing"
        subtitle="Transparent and upfront pricing for all driving programmes"
        breadcrumbs={[{ label: 'Pricing' }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Training Fees"
              title="Choose Your Training Package"
              subtitle="Clear pricing with no hidden costs"
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {pricing.map((plan, i) => (
              <AnimatedSection key={plan.id} delay={i * 150}>
                <div className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all h-full relative ${plan.popular ? 'ring-2 ring-td-red' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-td-red text-white px-5 py-1.5 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-td-dark mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{plan.title}</h3>
                    <p className="text-td-gray text-sm">{plan.description}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-td-gray">Training Fee</span>
                      <span className="font-bold text-td-dark text-lg">{formatPrice(plan.trainingFee)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-td-gray">Highway Code</span>
                      <span className="font-bold text-td-dark text-lg">{formatPrice(plan.highwayCode)}</span>
                    </div>
                    <div className="bg-td-red/5 rounded-2xl p-4 mt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-td-dark text-lg">Total Package</span>
                        <span className="text-3xl font-extrabold text-td-red">{formatPrice(plan.total)}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-td-gray">
                        <CheckCircle2 size={16} className="text-td-red flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <CTAButton
                    to="/booking"
                    variant={plan.popular ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    Register for {plan.title.replace(' Training', '')} Training
                  </CTAButton>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="bg-td-light-gray rounded-xl p-6 max-w-2xl mx-auto text-center mb-16">
              <p className="text-td-gray">
                The ₦5,000 Highway Code fee is required in addition to the training fee. This brings the total packages to: <strong>Automatic: ₦65,000</strong> | <strong>Manual: ₦75,000</strong>
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <SectionHeading
              badge="Training Schedule"
              title="Weekday & Weekend Options"
              subtitle="Flexible scheduling to suit your availability"
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex justify-center gap-4 mb-10">
              <button
                onClick={() => setActiveTab('weekday')}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  activeTab === 'weekday' ? 'bg-td-red text-white shadow-lg' : 'bg-gray-100 text-td-charcoal hover:bg-gray-200'
                }`}
              >
                Weekday Programme
              </button>
              <button
                onClick={() => setActiveTab('weekend')}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  activeTab === 'weekend' ? 'bg-td-red text-white shadow-lg' : 'bg-gray-100 text-td-charcoal hover:bg-gray-200'
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
                  <Calendar size={40} className="text-td-yellow mx-auto mb-3" />
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{weekdayTraining.title}</h3>
                  <p className="text-gray-400 text-lg">{weekdayTraining.duration}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-2xl p-6">
                    <h4 className="font-bold text-td-yellow mb-4 flex items-center gap-2">
                      <BookOpen size={20} /> Theory Classes
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Number of classes</span>
                        <span className="font-semibold">{weekdayTraining.theory.classes}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Duration per class</span>
                        <span className="font-semibold">{weekdayTraining.theory.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6">
                    <h4 className="font-bold text-td-yellow mb-4 flex items-center gap-2">
                      <Car size={20} /> Practical Lessons
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Number of lessons</span>
                        <span className="font-semibold">{weekdayTraining.practical.lessons}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Duration per lesson</span>
                        <span className="font-semibold">{weekdayTraining.practical.duration}</span>
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
                  <Calendar size={40} className="text-td-yellow mx-auto mb-3" />
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{weekendTraining.title}</h3>
                  <p className="text-gray-400 text-lg">{weekendTraining.duration}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-2xl p-6">
                    <h4 className="font-bold text-td-yellow mb-4 flex items-center gap-2">
                      <BookOpen size={20} /> Theory Classes
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Number of classes</span>
                        <span className="font-semibold">{weekendTraining.theory.classes}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Duration per class</span>
                        <span className="font-semibold">{weekendTraining.theory.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6">
                    <h4 className="font-bold text-td-yellow mb-4 flex items-center gap-2">
                      <Car size={20} /> Practical Lessons
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Number of lessons</span>
                        <span className="font-semibold">{weekendTraining.practical.lessons}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Duration per lesson</span>
                        <span className="font-semibold">{weekendTraining.practical.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-td-red to-td-red-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready to Register?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Choose your training package and start your driving journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton to="/booking" variant="white" size="lg" icon>Register Now</CTAButton>
              <CTAButton href={getWhatsAppLink()} variant="green" size="lg" icon>Chat on WhatsApp</CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
