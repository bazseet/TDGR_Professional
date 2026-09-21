import { useState } from 'react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import CTAButton from '../components/CTAButton';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { faqs } from '../data/faqs';
import { getWhatsAppLink } from '../utils/helpers';
import SEO from '../components/SEO';

export default function FAQs() {
  const [expanded, setExpanded] = useState(null);

  return (
    <main>
       <SEO
  title="FRSC Certified Driving Academy in Lagos"
  description="Till Dawn Driving Academy is a Licensed driving academy in Lagos offering professional automatic and manual driving lessons, practical training and driver education."
  keywords="driving school Lagos, driving academy Lagos, driving school Ojodu Berger, driving lessons Lagos, FRSC certified driving academy, automatic driving lessons Lagos, manual driving lessons Lagos"/>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Quick answers to common questions about our training programmes"
        breadcrumbs={[{ label: 'FAQs' }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.id} delay={i * 60}>
                <div className={`rounded-2xl overflow-hidden transition-all border ${
                  expanded === faq.id ? 'border-td-red/20 shadow-lg bg-white' : 'border-gray-100 bg-td-light-gray hover:shadow-md'
                }`}>
                  <button
                    onClick={() => setExpanded(expanded === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-td-dark pr-4 text-base" style={{ fontFamily: 'var(--font-heading)' }}>
                      {faq.question}
                    </span>
                    {expanded === faq.id ? (
                      <ChevronUp size={22} className="text-td-red flex-shrink-0" />
                    ) : (
                      <ChevronDown size={22} className="text-td-gray flex-shrink-0" />
                    )}
                  </button>
                  {expanded === faq.id && (
                    <div className="px-6 pb-6">
                      <p className="text-td-gray leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-td-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h3 className="text-2xl font-bold text-td-dark mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Still Have Questions?
            </h3>
            <p className="text-td-gray mb-8">
              Contact us directly for any additional questions about our training programmes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href={getWhatsAppLink()} variant="green" size="lg" icon>
                Chat on WhatsApp
              </CTAButton>
              <CTAButton to="/contact" secondary size="lg" icon>
                Contact Us
              </CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
