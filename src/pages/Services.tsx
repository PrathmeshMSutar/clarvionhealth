import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Workflow,
  AlertTriangle,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { services } from '../data/content';

export default function Services() {
  useScrollReveal();

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Healthcare Operations Services Built for Results"
        subtitle="From revenue cycle management to process optimization and technology support, our services address the full spectrum of healthcare operational needs — delivered by experienced teams following structured, documented workflows."
        image="https://images.pexels.com/photos/6285362/pexels-photo-6285362.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
        alt="Healthcare workers collaborating on data analysis at a computer"
      />

      {/* Service overview grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-9xl mx-auto px-6 lg:px-10">
          <div className="reveal max-w-3xl mb-16">
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-4 block">
              Service Overview
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-900 leading-[1.15] mb-5">
              Seven Core Services, One Integrated Approach
            </h2>
            <p className="text-lg text-ink-light leading-relaxed">
              Each service can be engaged independently or combined into an integrated operational support model. All services are delivered by teams that understand healthcare workflows and follow documented procedures with built-in quality checkpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, idx) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="reveal group flex items-start gap-4 p-5 rounded-xl bg-cloud border border-cloud-dark/50 hover:border-teal-500/30 hover:bg-white transition-all duration-300"
                style={{ transitionDelay: `${(idx % 4) * 60}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/20 transition-colors">
                  <service.icon className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-navy-900 group-hover:text-teal-600 transition-colors leading-tight">
                    {service.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed service sections */}
      {services.map((service, idx) => {
        const isEven = idx % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-24 lg:py-32 scroll-mt-20 ${isEven ? 'bg-cloud' : 'bg-white'}`}
          >
            <div className="max-w-9xl mx-auto px-6 lg:px-10">
              {/* Service header */}
              <div className="reveal grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-[400px] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className={isEven ? '' : 'lg:order-1'}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-navy-900 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-teal-400" />
                    </div>
                    <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
                      Service {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-900 leading-[1.15] mb-5">
                    {service.title}
                  </h2>
                  <p className="text-lg text-ink-light leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              {/* Detail blocks */}
              <div className="reveal grid lg:grid-cols-3 gap-6">
                {/* What it involves */}
                <div className="lg:col-span-3 p-8 rounded-2xl bg-white border border-cloud-dark/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-navy-900">
                      What This Service Involves
                    </h3>
                  </div>
                  <p className="text-ink-light leading-relaxed">
                    {service.detail.whatItInvolves}
                  </p>
                </div>

                {/* Typical workflow */}
                <div className="lg:col-span-2 p-8 rounded-2xl bg-navy-900 noise-overlay relative">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-teal-500/15 border border-teal-400/20 flex items-center justify-center">
                        <Workflow className="w-5 h-5 text-teal-400" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-white">
                        Typical Workflow
                      </h3>
                    </div>
                    <div className="space-y-0">
                      {service.detail.typicalWorkflow.map((step, stepIdx) => (
                        <div key={stepIdx} className="flex items-start gap-4 group">
                          <div className="flex flex-col items-center flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-xs font-bold text-teal-300">
                              {stepIdx + 1}
                            </div>
                            {stepIdx < service.detail.typicalWorkflow.length - 1 && (
                              <div className="w-px h-8 bg-white/15" />
                            )}
                          </div>
                          <p className="text-white/80 text-sm leading-relaxed pt-1.5 pb-2">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Operational challenges */}
                <div className="p-8 rounded-2xl bg-white border border-cloud-dark/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-amber-500" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy-900">
                      Operational Challenges
                    </h3>
                  </div>
                  <p className="text-sm text-ink-light leading-relaxed">
                    {service.detail.operationalChallenges}
                  </p>
                </div>

                {/* Clarvion approach */}
                <div className="p-8 rounded-2xl bg-white border border-cloud-dark/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy-900">
                      Clarvion's Approach
                    </h3>
                  </div>
                  <p className="text-sm text-ink-light leading-relaxed">
                    {service.detail.clarvionApproach}
                  </p>
                </div>

                {/* Business value */}
                <div className="p-8 rounded-2xl bg-white border border-cloud-dark/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy-900">
                      Potential Business Value
                    </h3>
                  </div>
                  <p className="text-sm text-ink-light leading-relaxed">
                    {service.detail.businessValue}
                  </p>
                </div>

                {/* Who it supports */}
                <div className="lg:col-span-3 p-8 rounded-2xl bg-cloud border border-cloud-dark/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center">
                      <Users className="w-5 h-5 text-teal-400" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy-900">
                      Who This Service Supports
                    </h3>
                  </div>
                  <p className="text-ink-light leading-relaxed">
                    {service.detail.whoItSupports}
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-navy-900 noise-overlay relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="max-w-9xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="reveal max-w-3xl text-center mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.15] mb-6">
              Need a Service Tailored to Your Organization?
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Our services can be combined and configured to meet your specific operational needs. Talk to our team about building the right support model for your organization.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-colors duration-300"
            >
              Talk to Our Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
