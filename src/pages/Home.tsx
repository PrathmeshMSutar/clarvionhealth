import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Sparkles,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { services, specialties, principles, trustStripItems } from '../data/content';

export default function Home() {
  useScrollReveal();

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181738/pexels-photo-1181738.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
            alt="Diverse group of healthcare professionals in a modern corporate meeting"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative z-10 max-w-9xl mx-auto px-6 lg:px-10 w-full pt-32 pb-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Healthcare Services & Technology
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-6">
              Advancing Healthcare Operations Through People, Process and Technology
            </h1>
            <p className="text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl mb-8">
              Clarvion Health helps healthcare organizations strengthen operational performance through specialized services, disciplined processes, and technology-enabled solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-teal-500/20"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/25 text-white font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* ============ TRUST / VALUE STRIP ============ */}
      <section className="bg-navy-900 noise-overlay py-16 lg:py-20">
        <div className="max-w-9xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {trustStripItems.map((item, idx) => (
              <div
                key={item.title}
                className="reveal flex flex-col gap-3"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-400/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT INTRODUCTION (Split layout) ============ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-9xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7433853/pexels-photo-7433853.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200"
                  alt="Business professionals engaged in a strategic meeting in a modern office"
                  className="w-full h-[460px] lg:h-[560px] object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-teal-500/10 border border-teal-500/20 -z-10 hidden lg:block" />
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-navy-900/5 -z-10 hidden lg:block" />
            </div>

            <div className="reveal">
              <span className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-4 block">
                About Clarvion Health
              </span>
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-900 leading-[1.15] mb-6">
                Built Around Better Healthcare Operations
              </h2>
              <p className="text-lg text-ink-light leading-relaxed mb-5">
                Clarvion Health was founded on a simple premise: healthcare organizations perform best when their operational foundations are strong. We bring specialized expertise, disciplined processes, and practical technology to the administrative and revenue cycle functions that enable quality patient care.
              </p>
              <p className="text-lg text-ink-light leading-relaxed mb-8">
                Our approach combines experienced healthcare operations teams with structured workflows and technology-enabled tools. We work alongside existing staff and systems — not around them — helping organizations standardize processes, improve visibility, and scale operations with confidence.
              </p>

              <div className="space-y-3.5 mb-8">
                {[
                  'Specialized teams with healthcare operations expertise',
                  'Documented workflows with built-in quality checkpoints',
                  'Technology-enabled processes that reduce manual effort',
                  'Collaborative partnerships that integrate with your team',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5.5 h-5.5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-ink">{point}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 text-white font-semibold hover:bg-teal-600 transition-colors duration-300"
              >
                Discover Clarvion Health
                <ArrowRight className="w-4.5 h-4.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES SECTION ============ */}
      <section className="py-24 lg:py-32 bg-cloud">
        <div className="max-w-9xl mx-auto px-6 lg:px-10">
          {/* Section header */}
          <div className="reveal max-w-3xl mb-16">
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Services
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-900 leading-[1.15] mb-5">
              Specialized Healthcare Operations Support
            </h2>
            <p className="text-lg text-ink-light leading-relaxed">
              From revenue cycle management to process optimization, our services address the operational challenges that healthcare organizations face every day. Each service is delivered by experienced teams following structured, documented workflows.
            </p>
          </div>

          {/* Services grid — mixed layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link
                key={service.id}
                to="/services"
                className={`reveal group bg-white rounded-2xl overflow-hidden card-hover border border-cloud-dark/50 ${
                  idx === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
                }`}
                style={{ transitionDelay: `${(idx % 3) * 80}ms` }}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${idx === 0 ? 'h-64' : 'h-52'}`}>
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <service.icon className="w-5.5 h-5.5 text-navy-900" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-7">
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-ink-light leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="reveal mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-navy-900 text-white font-semibold hover:bg-teal-600 transition-colors duration-300"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ APPROACH SECTION (Dark band) ============ */}
      <section className="py-24 lg:py-32 bg-navy-900 noise-overlay relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-teal-500/5 blur-3xl" />

        <div className="max-w-9xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="reveal max-w-3xl mb-16">
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Approach
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.15] mb-5">
              People, Process, Technology, Quality
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              We believe that strong healthcare operations are built on four interconnected principles. Each one reinforces the others, creating the reliability and performance that healthcare organizations need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, idx) => (
              <div
                key={principle.title}
                className="reveal group p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-teal-400/30 transition-all duration-400"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-teal-500/15 border border-teal-400/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-400">
                  <principle.icon className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal mt-12">
            <Link
              to="/why-clarvion"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-colors duration-300"
            >
              Why Choose Clarvion
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SPECIALTIES PREVIEW ============ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-9xl mx-auto px-6 lg:px-10">
          <div className="reveal max-w-3xl mb-16">
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-4 block">
              Who We Support
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-900 leading-[1.15] mb-5">
              Specialized Support Across Healthcare Organizations
            </h2>
            <p className="text-lg text-ink-light leading-relaxed">
              Healthcare operations vary significantly across organization types. We tailor our services to the specific workflows, payer environments, and operational demands of each setting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.slice(0, 6).map((specialty, idx) => (
              <div
                key={specialty.id}
                className="reveal group relative rounded-2xl overflow-hidden h-72 card-hover"
                style={{ transitionDelay: `${(idx % 3) * 80}ms` }}
              >
                <img
                  src={specialty.image}
                  alt={specialty.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 flex items-center justify-center mb-3">
                    <specialty.icon className="w-5.5 h-5.5 text-teal-300" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {specialty.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed line-clamp-2">
                    {specialty.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-12 text-center">
            <Link
              to="/specialties"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-navy-900 text-white font-semibold hover:bg-teal-600 transition-colors duration-300"
            >
              Explore All Specialties
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6285379/pexels-photo-6285379.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
            alt="Healthcare professionals working on a computer in a hospital setting"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-navy-950/85" />
        </div>

        <div className="relative z-10 max-w-9xl mx-auto px-6 lg:px-10">
          <div className="reveal max-w-3xl">
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.15] mb-6">
              Let's Strengthen Your Operations Together
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Whether you need support across your revenue cycle, help with process standardization, or technology-enabled operational improvements, our team is ready to help. Let's talk about your organization's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-all duration-300 hover:scale-[1.02]"
              >
                Talk to Our Team
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/25 text-white font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
