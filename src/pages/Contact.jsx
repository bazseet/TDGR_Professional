import { useState } from 'react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { business } from '../data/business';
import { getPhoneLink, getWhatsAppLink, getMailtoLink } from '../utils/helpers';
import SEO from '../components/SEO';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('https://formspree.io/f/xwlplbkz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...form,
        subject: `New Website Enquiry - ${form.name}`,
      }),
    });

    if (response.ok) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert('There was a problem sending your message. Please try again.');
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    alert(
      'Unable to send your message. Please check your internet connection and try again.'
    );
  }
};

  return (
    <main>
       <SEO
  title="FRSC Certified Driving Academy in Lagos"
  description="Till Dawn Driving Academy is a Licensed driving academy in Lagos offering professional automatic and manual driving lessons, practical training and driver education."
  keywords="driving school Lagos, driving academy Lagos, driving school Ojodu Berger, driving lessons Lagos, FRSC certified driving academy, automatic driving lessons Lagos, manual driving lessons Lagos"/>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with Till Dawn Driving Academy"
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-td-red/10 text-td-red mb-4">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-td-dark leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                {business.brandName}
              </h2>
              <p className="text-td-gray text-lg mb-8">
                {business.name}
              </p>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-td-red/10 p-3 rounded-xl">
                    <MapPin size={22} className="text-td-red" />
                  </div>
                  <div>
                    <p className="font-bold text-td-dark mb-1">Address</p>
                    <p className="text-td-gray">{business.address.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-td-red/10 p-3 rounded-xl">
                    <Phone size={22} className="text-td-red" />
                  </div>
                  <div>
                    <p className="font-bold text-td-dark mb-1">Phone</p>
                    <a href={getPhoneLink()} className="text-td-red hover:text-td-red-dark transition-colors font-semibold">{business.phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-xl">
                    <MessageCircle size={22} className="text-green-500" />
                  </div>
                  <div>
                    <p className="font-bold text-td-dark mb-1">WhatsApp</p>
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors font-semibold">{business.whatsapp}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-td-red/10 p-3 rounded-xl">
                    <Mail size={22} className="text-td-red" />
                  </div>
                  <div>
                    <p className="font-bold text-td-dark mb-1">Email</p>
                    <a href={getMailtoLink()} className="text-td-red hover:text-td-red-dark transition-colors">{business.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-td-red/10 p-3 rounded-xl">
                    <Clock size={22} className="text-td-red" />
                  </div>
                  <div>
                    <p className="font-bold text-td-dark mb-1">Training Hours</p>
                    <p className="text-td-gray">Monday - Friday: {business.weekdayHours}</p>
                    <p className="text-td-gray">Saturday: {business.weekendHours}</p>
                    <p className="text-td-gray">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href={getPhoneLink()} className="flex items-center justify-center gap-2 bg-td-red hover:bg-td-red-dark text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all">
                  <Phone size={18} /> Call Now
                </a>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-td-dark mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Message Sent!</h3>
                  <p className="text-td-gray">Thank you for contacting us. We will respond to your message shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-td-light-gray rounded-3xl p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-td-dark mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Send Us a Message</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-td-dark mb-1.5">Your Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-td-red focus:ring-2 focus:ring-td-red/20 outline-none transition-all bg-white" placeholder="Full name" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-td-dark mb-1.5">Email *</label>
                        <input type="email" name="email" required value={form.email} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-td-red focus:ring-2 focus:ring-td-red/20 outline-none transition-all bg-white" placeholder="Email" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-td-dark mb-1.5">Phone</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-td-red focus:ring-2 focus:ring-td-red/20 outline-none transition-all bg-white" placeholder="Phone" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-td-dark mb-1.5">Subject</label>
                      <input type="text" name="subject" value={form.subject} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-td-red focus:ring-2 focus:ring-td-red/20 outline-none transition-all bg-white" placeholder="What is this about?" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-td-dark mb-1.5">Message *</label>
                      <textarea name="message" rows={4} required value={form.message} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-td-red focus:ring-2 focus:ring-td-red/20 outline-none transition-all bg-white resize-none" placeholder="Your message..." />
                    </div>
                    <button type="submit" className="w-full flex items-center justify-center gap-2 bg-td-red hover:bg-td-red-dark text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg">
                      <Send size={18} /> Send Message
                    </button>
                  </div>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
<section className="py-16 bg-td-light-gray">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <AnimatedSection>
      <h3
        className="text-2xl font-bold text-td-dark text-center mb-3"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Our Location
      </h3>

      <p className="text-td-gray text-center mb-8">
        Visit Till Dawn Driving Academy at our convenient location.
      </p>
    </AnimatedSection>

    <AnimatedSection>
      <div className="grid lg:grid-cols-3 gap-8 items-stretch">

        {/* Address */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center">

          <div className="bg-td-red/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
            <MapPin size={28} className="text-td-red" />
          </div>

          <h4
            className="text-xl font-bold text-td-dark mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Till Dawn Driving Academy
          </h4>

          <p className="text-td-gray leading-relaxed mb-6">
            {business.address.full}
          </p>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=6.6441342,3.3665334"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-td-red text-white px-5 py-3 rounded-xl font-semibold hover:bg-td-red-dark transition-all"
          >
            Get Directions
          </a>

        </div>

        {/* Exact Google Maps Pin */}
        <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg bg-gray-200 min-h-[400px]">

          <iframe
            src="https://www.google.com/maps?q=6.6441342,3.3665334&z=17&output=embed"
            width="100%"
            height="100%"
            style={{
              border: 0,
              minHeight: '400px'
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Till Dawn Driving Academy Location"
          ></iframe>

        </div>

      </div>
    </AnimatedSection>

  </div>
</section>
    </main>
  );
}