import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Clock,
  Building2,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { services } from '../data/content';

export default function Contact() {
  useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About Your Operational Needs"
        subtitle="Whether you need support across your revenue cycle, help with process standardization, or want to explore a broader operational partnership, our team is ready to listen and help you find the right approach."
        image="https://images.pexels.com/photos/7108454/pexels-photo-7108454.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
        alt="Diverse group of professionals in a meeting at a modern office"
      />

      {/* Contact form + info */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-9xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3 reveal">
              <div className="bg-cloud rounded-2xl p-8 lg:p-10 border border-cloud-dark/50">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 rounded-full bg-teal-500/15 border border-teal-500/20 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-teal-600" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">
                      Thank You for Reaching Out
                    </h2>
                    <p className="text-ink-light max-w-md mb-8">
                      Your message has been received. A member of our team will get back to you within one business day to discuss your needs.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 text-white font-semibold hover:bg-teal-600 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy-900 mb-3">
                      Send Us a Message
                    </h2>
                    <p className="text-ink-light mb-8">
                      Fill out the form below and our team will respond within one business day.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-navy-900 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white border border-cloud-dark text-ink placeholder-ink-light/50 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                            placeholder="Jane"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-navy-900 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white border border-cloud-dark text-ink placeholder-ink-light/50 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                            placeholder="Smith"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-navy-900 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white border border-cloud-dark text-ink placeholder-ink-light/50 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                            placeholder="jane@organization.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-navy-900 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            className="w-full px-4 py-3 rounded-lg bg-white border border-cloud-dark text-ink placeholder-ink-light/50 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-navy-900 mb-2">
                            Organization
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg bg-white border border-cloud-dark text-ink placeholder-ink-light/50 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                            placeholder="Your organization name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-navy-900 mb-2">
                            Area of Interest
                          </label>
                          <select
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white border border-cloud-dark text-ink focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                            defaultValue=""
                          >
                            <option value="" disabled>Select a service</option>
                            {services.map((service) => (
                              <option key={service.id} value={service.title}>
                                {service.title}
                              </option>
                            ))}
                            <option value="general">General Inquiry</option>
                            <option value="careers">Careers</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-navy-900 mb-2">
                          Message
                        </label>
                        <textarea
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-cloud-dark text-ink placeholder-ink-light/50 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all resize-none"
                          placeholder="Tell us about your organization and what you're looking for..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-navy-900 text-white font-semibold hover:bg-teal-600 transition-colors duration-300"
                      >
                        Send Message
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2 reveal space-y-6">
              <div className="p-7 rounded-2xl bg-navy-900 noise-overlay relative">
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-bold text-white mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-teal-500/15 border border-teal-400/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-teal-400" />
                      </div>
                      <div>
                        <p className="text-sm text-white/50 mb-1">Email</p>
                        <p className="text-white font-medium">info@clarvionhealth.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-teal-500/15 border border-teal-400/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-teal-400" />
                      </div>
                      <div>
                        <p className="text-sm text-white/50 mb-1">Phone</p>
                        <p className="text-white font-medium">+1 (800) 555-0140</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-teal-500/15 border border-teal-400/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-teal-400" />
                      </div>
                      <div>
                        <p className="text-sm text-white/50 mb-1">Location</p>
                        <p className="text-white font-medium">Remote-first operations</p>
                        <p className="text-white/60 text-sm mt-1">Serving healthcare organizations nationwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7 rounded-2xl bg-cloud border border-cloud-dark/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy-900">
                    Response Time
                  </h3>
                </div>
                <p className="text-sm text-ink-light leading-relaxed">
                  Our team responds to all inquiries within one business day. For urgent operational matters, please call us directly.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-cloud border border-cloud-dark/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy-900">
                    What to Expect
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    'An initial conversation about your needs',
                    'Assessment of your current operational environment',
                    'Recommended service configuration and approach',
                    'Clear proposal with scope, timelines, and expectations',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-ink">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
