import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Activity } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { specialties } from '../data/content';

export default function Specialties() {
  useScrollReveal();

  return (
    <>
      <PageHero
        eyebrow="Specialties"
        title="Specialized Support for Every Healthcare Setting"
        subtitle="Healthcare operations vary significantly across organization types. We tailor our services to the specific workflows, payer environments, regulatory considerations, and operational demands of each setting."
        image="https://images.pexels.com/photos/6129204/pexels-photo-6129204.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
        alt="Two doctors reviewing a patient chart in a hospital room"
      />

      {/* Intro section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-9xl mx-auto px-6 lg:px-10">
          <div className="reveal max-w-3xl mx-auto text-center">
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-4 block">
              Understanding the Landscape
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-900 leading-[1.15] mb-6">
              One Size Does Not Fit All in Healthcare Operations
            </h2>
            <p className="text-lg text-ink-light leading-relaxed">
              A physician practice with three providers faces very different operational challenges than a multi-site health system with hundreds of departments. Payer mixes vary. Regulatory requirements differ. Technology environments range from basic practice management systems to complex integrated platforms. Effective operational support must account for these differences.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties detailed sections */}
      {specialties.map((specialty, idx) => {
        const isEven = idx % 2 === 0;

        return (
          <section
            key={specialty.id}
            className={`py-20 lg:py-28 ${isEven ? 'bg-cloud' : 'bg-white'}`}
          >
            <div className="max-w-9xl mx-auto px-6 lg:px-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Image */}
                <div className={`reveal relative ${isEven ? '' : 'lg:order-2'}`}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={specialty.image}
                      alt={specialty.alt}
                      className="w-full h-[420px] lg:h-[480px] object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className={`absolute ${isEven ? '-bottom-5 -right-5' : '-bottom-5 -left-5'} w-28 h-28 rounded-2xl bg-teal-500/10 border border-teal-500/20 -z-10 hidden lg:block`} />
                </div>

                {/* Content */}
                <div className={`reveal ${isEven ? '' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-navy-900 flex items-center justify-center">
                      <specialty.icon className="w-7 h-7 text-teal-400" />
                    </div>
                    <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
                      Specialty {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl lg:text-3xl xl:text-4xl font-bold text-navy-900 leading-[1.15] mb-5">
                    {specialty.title}
                  </h2>
                  <p className="text-lg text-ink-light leading-relaxed mb-6">
                    {specialty.description}
                  </p>

                  {/* Key operational considerations */}
                  <div className="space-y-3">
                    {getSpecialtyConsiderations(idx).map((consideration) => (
                      <div key={consideration} className="flex items-start gap-3">
                        <div className="w-5.5 h-5.5 rounded-full bg-teal-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-teal-500" />
                        </div>
                        <span className="text-sm text-ink">{consideration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* How operations vary */}
      <section className="py-24 lg:py-32 bg-navy-900 noise-overlay relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl" />

        <div className="max-w-9xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="reveal max-w-3xl mb-16">
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-wider mb-4 block">
              Operational Variation
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.15] mb-5">
              How Healthcare Operations Vary Across Organizations
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Understanding these variations is essential to providing operational support that actually fits. Here are some of the key dimensions along which healthcare operations differ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Layers, title: 'Scale & Complexity', description: 'A solo practice operates differently than a 500-bed hospital system. Staff structures, department configurations, and process complexity all scale with organizational size.' },
              { icon: Activity, title: 'Payer Mix & Reimbursement', description: 'Organizations serve different payer combinations — commercial, Medicare, Medicaid, self-pay. Each payer has its own rules, timelines, and requirements that shape billing workflows.' },
              { icon: Layers, title: 'Technology Environment', description: 'Some organizations run on single integrated platforms. Others manage multiple systems that require manual integration. Technology maturity varies widely across the industry.' },
              { icon: Activity, title: 'Regulatory Environment', description: 'Different organization types face different regulatory requirements, reporting obligations, and compliance workflows that influence how operations must be structured.' },
              { icon: Layers, title: 'Patient Demographics', description: 'Patient populations differ in age, insurance status, language needs, and care patterns. These factors influence front-end workflows, communication, and financial processes.' },
              { icon: Activity, title: 'Growth Stage', description: 'A growing organization faces different operational challenges than a mature one. Scaling processes, onboarding new locations, and managing change all require different support approaches.' },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="reveal p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-400/30 transition-colors duration-400"
                style={{ transitionDelay: `${(idx % 3) * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-400/20 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-colors duration-300"
            >
              Discuss Your Specialty
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function getSpecialtyConsiderations(idx: number): string[] {
  const considerations = [
    [
      'Smaller teams require flexible support that adapts to changing workloads',
      'Billing and eligibility workflows must be efficient without adding overhead',
      'Technology is often lean, requiring practical rather than complex solutions',
    ],
    [
      'Complex payer requirements and prior authorization workflows',
      'Specialty-specific coding and documentation requirements',
      'Higher denial rates requiring structured denial management processes',
    ],
    [
      'Diverse billing rules across multiple service lines',
      'Need for standardized processes that accommodate specialty variation',
      'Consolidated reporting across specialties with department-level visibility',
    ],
    [
      'High claim volumes requiring scalable processing capacity',
      'Complex departmental structures with cross-departmental dependencies',
      'Multiple systems requiring integration and reconciliation support',
    ],
    [
      'High patient throughput with time-sensitive front-end workflows',
      'Eligibility verification critical to reducing downstream denials',
      'Need for efficient registration and patient communication processes',
    ],
    [
      'Understanding of both healthcare workflows and technology environments',
      'Process optimization that complements platform capabilities',
      'Operational reporting that enhances product value for end users',
    ],
  ];
  return considerations[idx] || considerations[0];
}
