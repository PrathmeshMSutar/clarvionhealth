import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { principles, valueItems } from '../data/content';

export default function WhyClarvion() {
  useScrollReveal();

  return (
    <>
      <PageHero
        eyebrow="Why Clarvion"
        title="Why Healthcare Organizations Choose Clarvion Health"
        subtitle="Our approach is built on four core principles and delivered through practical, measurable operational support that integrates with your team and adapts to your environment."
        image="https://images.pexels.com/photos/7433853/pexels-photo-7433853.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
        alt="Business professionals engaged in a strategic meeting in a modern office"
      />

      {/* Core principles — large feature sections */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-9xl mx-auto px-6 lg:px-10">
          <div className="reveal max-w-3xl mb-20">
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-4 block">
              Core Principles
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-900 leading-[1.15] mb-5">
              Four Principles. One Operational Philosophy.
            </h2>
            <p className="text-lg text-ink-light leading-relaxed">
              Everything we do is grounded in four interconnected principles. They guide how we build teams, design workflows, apply technology, and maintain the quality standards that healthcare organizations depend on.
            </p>
          </div>

          {/* Principle feature blocks */}
          <div className="space-y-20">
            {principles.map((principle, idx) => {
              const isEven = idx % 2 === 0;
              const images = [
                'https://images.pexels.com/photos/1181394/pexels-photo-1181394.jpeg?auto=compress&cs=tinysrgb&h=600&w=1000',
                'https://images.pexels.com/photos/7793118/pexels-photo-7793118.jpeg?auto=compress&cs=tinysrgb&h=600&w=1000',
                'https://images.pexels.com/photos/37685036/pexels-photo-37685036.jpeg?auto=compress&cs=tinysrgb&h=600&w=1000',
                'https://images.pexels.com/photos/33642009/pexels-photo-33642009.jpeg?auto=compress&cs=tinysrgb&h=600&w=1000',
              ];

              return (
                <div key={principle.title} className="reveal grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="rounded-2xl overflow-hidden shadow-xl relative">
                      <img
                        src={images[idx]}
                        alt={`${principle.title} principle in action`}
                        className="w-full h-[400px] object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <principle.icon className="w-8 h-8 text-navy-900" />
                      </div>
                    </div>
                  </div>

                  <div className={isEven ? '' : 'lg:order-1'}>
                    <span className="font-display text-5xl font-bold text-teal-500/20 mb-2 block">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-navy-900 leading-[1.15] mb-5">
                      {principle.title}
                    </h3>
                    <p className="text-lg text-ink-light leading-relaxed mb-6">
                      {principle.description}
                    </p>
                    <div className="space-y-3">
                      {getPrincipleDetails(idx).map((detail) => (
                        <div key={detail} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5.5 h-5.5 text-teal-500 flex-shrink-0 mt-0.5" />
                          <span className="text-ink text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value proposition grid */}
      <section className="py-24 lg:py-32 bg-cloud">
        <div className="max-w-9xl mx-auto px-6 lg:px-10">
          <div className="reveal max-w-3xl mb-16">
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-4 block">
              What You Get
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-900 leading-[1.15] mb-5">
              The Clarvion Health Difference
            </h2>
            <p className="text-lg text-ink-light leading-relaxed">
              Our principles translate into practical value for healthcare organizations. Here's what that looks like in day-to-day operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueItems.map((item, idx) => (
              <div
                key={item.title}
                className="reveal p-8 rounded-2xl bg-white border border-cloud-dark/50 card-hover"
                style={{ transitionDelay: `${(idx % 3) * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-9xl mx-auto px-6 lg:px-10">
          <div className="reveal max-w-3xl mb-16 text-center mx-auto">
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-4 block">
              The Difference
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-900 leading-[1.15] mb-5">
              Structured Operations vs. Ad Hoc Effort
            </h2>
          </div>

          <div className="reveal grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Without Clarvion */}
            <div className="p-8 lg:p-10 rounded-2xl bg-cloud border border-cloud-dark/50">
              <h3 className="font-display text-xl font-bold text-ink-light mb-6">
                Without Structured Operations
              </h3>
              <div className="space-y-4">
                {[
                  'Inconsistent workflows across team members and departments',
                  'Tribal knowledge that creates risk when staff changes',
                  'Limited visibility into operational performance and trends',
                  'Reactive problem-solving instead of proactive identification',
                  'Manual processes that do not scale with growth',
                  'Difficulty onboarding new staff quickly and effectively',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5.5 h-5.5 rounded-full bg-ink-light/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-ink-light/50" />
                    </div>
                    <span className="text-sm text-ink-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* With Clarvion */}
            <div className="p-8 lg:p-10 rounded-2xl bg-navy-900 noise-overlay relative">
              <div className="relative z-10">
                <h3 className="font-display text-xl font-bold text-white mb-6">
                  With Clarvion Health
                </h3>
                <div className="space-y-4">
                  {[
                    'Standardized, documented workflows across all team members',
                    'Process documentation that reduces dependency on individuals',
                    'Reporting and analytics that provide real-time operational visibility',
                    'Proactive trend identification and continuous improvement cycles',
                    'Technology-enabled processes that scale without proportional headcount',
                    'Structured onboarding with clear procedures and training support',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5.5 h-5.5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/85">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-navy-900 noise-overlay relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="max-w-9xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="reveal max-w-3xl text-center mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.15] mb-6">
              Ready to Experience the Clarvion Difference?
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Let's talk about how our approach can strengthen your healthcare operations.
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

function getPrincipleDetails(idx: number): string[] {
  const details = [
    [
      'Healthcare operations specialists with relevant domain experience',
      'Structured training and ongoing development for every team member',
      'Clear roles, responsibilities, and performance expectations',
      'Teams that integrate with your staff as an extension of your organization',
    ],
    [
      'Documented standard operating procedures for every workflow',
      'Quality checkpoints built into each process step',
      'Clear escalation paths for exceptions and complex cases',
      'Performance tracking against defined service level expectations',
    ],
    [
      'Practical application of existing technology investments',
      'Reporting and dashboards that provide actionable visibility',
      'Workflow automation that reduces manual, repetitive tasks',
      'Data integration that eliminates reconciliation work',
    ],
    [
      'Built-in quality review at key workflow stages',
      'Continuous improvement cycles driven by performance data',
      'Root-cause analysis for recurring issues',
      'Regular performance reporting and collaborative improvement planning',
    ],
  ];
  return details[idx] || details[0];
}
