import { useState } from 'react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { Send, CheckCircle } from 'lucide-react';
import { courses } from '../data/courses';
import { locations } from '../data/locations';
import SEO from '../components/SEO';

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    whatsapp: '',
    email: '',
    course: '',
    transmission: '',
    schedule: '',
    location: '',
    startDate: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('https://formspree.io/f/myezejgw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
  ...form,
  subject: `New Driving Registration - ${form.fullName}`,
}),
    });

    if (response.ok) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert('There was a problem submitting your registration. Please try again.');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    alert('Unable to submit your registration. Please check your internet connection and try again.');
  }
};

  if (submitted) {
    return (
      <main>
         <SEO
  title="FRSC Certified Driving Academy in Lagos"
  description="Till Dawn Driving Academy is a Licensed driving academy in Lagos offering professional automatic and manual driving lessons, practical training and driver education."
  keywords="driving school Lagos, driving academy Lagos, driving school Ojodu Berger, driving lessons Lagos, FRSC certified driving academy, automatic driving lessons Lagos, manual driving lessons Lagos"/>
        <PageHero
          title="Registration Submitted"
          breadcrumbs={[{ label: 'Booking' }]}
        />
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <div className="bg-green-50 border border-green-200 rounded-3xl p-12">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-td-dark mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Registration Successfully Submitted!
                </h2>
                <p className="text-td-gray text-lg leading-relaxed mb-6">
                  Thank you for your interest in {form.course ? courses.find(c => c.id === form.course)?.title || 'training' : 'our training programmes'}. We have received your registration details.
                </p>
                <p className="text-td-gray mb-8">
                  Our team will contact you shortly to confirm your registration and schedule your training sessions.
                </p>
                <div className="bg-white rounded-xl p-6 mb-6">
                  <p className="text-sm text-td-gray mb-2">What happens next:</p>
                  <div className="space-y-3 text-left">
                    {["We review your registration details", "You receive a confirmation call or WhatsApp message", "Your training schedule is arranged", "You begin your training programme"].map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="bg-td-red text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</div>
                        <span className="text-sm text-td-dark">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-td-gray text-sm">
                  You can also reach us via WhatsApp at <strong>08140987655</strong> for immediate assistance.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
       <SEO
  title="FRSC Certified Driving Academy in Lagos"
  description="Till Dawn Driving Academy is a Licensed driving academy in Lagos offering professional automatic and manual driving lessons, practical training and driver education."
  keywords="driving school Lagos, driving academy Lagos, driving school Ojodu Berger, driving lessons Lagos, FRSC certified driving academy, automatic driving lessons Lagos, manual driving lessons Lagos"/>
      <PageHero
        title="Book Your Training"
        subtitle="Complete the form below to register for driving training"
        breadcrumbs={[{ label: 'Booking' }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="bg-td-light-gray rounded-3xl p-6 sm:p-10">
              <h3 className="text-2xl font-bold text-td-dark mb-8 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
                Registration Form
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-td-dark mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-td-red focus:ring-2 focus:ring-td-red/20 outline-none transition-all bg-white text-td-dark"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-td-dark mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-td-red focus:ring-2 focus:ring-td-red/20 outline-none transition-all bg-white text-td-dark"
                    placeholder="e.g. 08012345678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-td-dark mb-2">WhatsApp Number</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-td-red focus:ring-2 focus:ring-td-red/20 outline-none transition-all bg-white text-td-dark"
                    placeholder="If different from phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-td-dark mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-td-red focus:ring-2 focus:ring-td-red/20 outline-none transition-all bg-white text-td-dark"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-td-dark mb-2">Preferred Course *</label>
                  <select
                    name="course"
                    required
                    value={form.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-td-red focus:ring-2 focus:ring-td-red/20 outline-none transition-all bg-white text-td-dark"
                  >
                    <option value="">Select a course</option>
                    {courses.map((c) => (
                      <option key={c.id} value={c.id}>{c.title}</option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-td-dark mb-2">Transmission Type *</label>
                  <select
                    name="transmission"
                    required
                    value={form.transmission}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-td-red focus:ring-2 focus:ring-td-red/20 outline-none transition-all bg-white text-td-dark"
                  >
                    <option value="">Select type</option>
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-td-dark mb-2">Preferred Schedule *</label>
                  <select
                    name="schedule"
                    required
                    value={form.schedule}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-td-red focus:ring-2 focus:ring-td-red/20 outline-none transition-all bg-white text-td-dark"
                  >
                    <option value="">Select schedule</option>
                    <option value="weekday">Weekday (Mon-Fri)</option>
                    <option value="weekend">Weekend (Saturday)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-td-dark mb-2">Preferred Location *</label>
                  <select
                    name="location"
                    required
                    value={form.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-td-red focus:ring-2 focus:ring-td-red/20 outline-none transition-all bg-white text-td-dark"
                  >
                    <option value="">Select location</option>
                    {locations.map((loc) => (
                      <option key={loc.id} value={loc.name}>{loc.area || loc.name}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-td-dark mb-2">Preferred Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={form.startDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-td-red focus:ring-2 focus:ring-td-red/20 outline-none transition-all bg-white text-td-dark"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-td-dark mb-2">Additional Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-td-red focus:ring-2 focus:ring-td-red/20 outline-none transition-all bg-white text-td-dark resize-none"
                    placeholder="Any additional information or questions..."
                  />
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-td-red hover:bg-td-red-dark text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-lg hover:shadow-xl"
                >
                  <Send size={18} />
                  Submit Registration
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
