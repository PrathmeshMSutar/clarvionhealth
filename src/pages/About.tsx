import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Eye,
  Compass,
  Users,
  Workflow,
  Cpu,
  ShieldCheck,
  HeartPulse,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  useScrollReveal();

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Healthcare Operations Partner Built for Modern Challenges"
        subtitle="Clarvion Health brings specialized expertise, disciplined processes, and practical technology to the operational functions that enable quality healthcare delivery."
        image="https://images.pexels.com/photos/7433840/pexels-photo-7433840.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
        alt="Business professionals discussing documents in a modern meeting room"
      />

      {/* Mission & Vision split */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-9xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Mission */}
            <div className="reveal p-8 lg:p-10 rounded-2xl bg-cloud border border-cloud-dark/50">
              <div className="w-14 h-14 rounded-2xl bg-navy-900 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-teal-400" />
              </div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy-900 mb-5">
                Our Mission
              </h2>
              <p className="text-lg text-ink-light leading-relaxed">
                To help healthcare organizations strengthen their operational foundations through specialized services, disciplined processes, and technology-enabled solutions — so they can focus on what matters most: delivering quality care to the communities they serve.
              </p>
            </div>

            {/* Vision */}
            <div className="reveal p-8 lg:p-10 rounded-2xl bg-navy-900 noise-overlay relative">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/15 border border-teal-400/20 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-teal-400" />
                </div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-5">
                  Our Vision
                </h2>
                <p className="text-lg text-white/70 leading-relaxed">
                  A healthcare industry where operational excellence is the standard — where every organization, regardless of size or specialty, has access to the people, processes, and technology needed to run efficiently, adapt to change, and sustain quality over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story section with image */}
      <section className="py-24 lg:py-32 bg-cloud">
        <div className="max-w-9xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal order-2 lg:order-1">
              <span className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-4 block">
                Our Story
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-900 leading-[1.15] mb-6">
                Operational Expertise Applied to Healthcare
              </h2>
              <div className="space-y-5 text-lg text-ink-light leading-relaxed">
                <p>
                  Clarvion Health was built around a clear observation: many healthcare organizations have strong clinical capabilities but face ongoing challenges with the operational functions that support them. Revenue cycle workflows, administrative processes, and technology adoption often lag behind the quality of care being delivered.
                </p>
                <p>
                  We bring a different perspective. Rather than viewing these functions as isolated tasks, we see them as interconnected systems that, when well-designed and well-managed, create the operational stability that healthcare organizations need to grow and adapt.
                </p>
                <p>
                  Our teams combine healthcare operations experience with process discipline and technology fluency. We work alongside existing staff, integrating with current systems and workflows, helping organizations build operational capabilities that are reliable, scalable, and sustainable.
                </p>
              </div>
            </div>

            <div className="reveal order-1 lg:order-2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7433919/pexels-photo-7433919.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200"
                  alt="Professionals in a business meeting discussing and signing documents"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-9xl mx-auto px-6 lg:px-10">
          <div className="reveal max-w-3xl mb-16 text-center mx-auto">
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Values
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-900 leading-[1.15] mb-5">
              What Guides Us
            </h2>
            <p className="text-lg text-ink-light leading-relaxed">
              Our values shape how we work with healthcare organizations and how we operate internally as a team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: HeartPulse, title: 'Healthcare First', description: 'Every decision starts with what serves healthcare organizations and the patients they support. We understand the industry, its constraints, and its responsibilities.' },
              { icon: ShieldCheck, title: 'Reliability', description: 'Healthcare operations require consistency. We commit to documented processes, quality checkpoints, and the kind of follow-through that organizations can depend on.' },
              { icon: Users, title: 'Partnership', description: 'We work alongside your team, not around it. Our approach integrates with existing staff, systems, and workflows to build lasting operational capability.' },
              { icon: Workflow, title: 'Discipline', description: 'Structured workflows produce better outcomes than ad hoc effort. We bring documentation, standardization, and process rigor to every function we support.' },
              { icon: Cpu, title: 'Practical Innovation', description: 'Technology should serve operations, not the other way around. We apply tools and systems in ways that reduce manual effort and create useful visibility.' },
              { icon: Compass, title: 'Continuous Improvement', description: 'Operations are never finished. We track performance, identify trends, and look for ways to improve — treating every engagement as an ongoing opportunity to do better.' },
            ].map((value, idx) => (
              <div
                key={value.title}
                className="reveal p-8 rounded-2xl bg-cloud border border-cloud-dark/50 card-hover"
                style={{ transitionDelay: `${(idx % 3) * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-ink-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 lg:py-32 bg-navy-900 noise-overlay relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl" />

        <div className="max-w-9xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="reveal max-w-3xl mb-16">
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-wider mb-4 block">
              How We Work
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.15] mb-5">
              A Collaborative, Structured Approach
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { step: '01', title: 'Understand', description: 'We begin by understanding your organization — its structure, workflows, systems, challenges, and goals. This assessment informs everything that follows.' },
              { step: '02', title: 'Design', description: 'Based on the assessment, we design operational workflows tailored to your environment, with clear documentation, quality checkpoints, and defined handoffs.' },
              { step: '03', title: 'Implement', description: 'Our teams integrate with your existing staff and systems, following the designed workflows with structured training, supervision, and quality assurance.' },
              { step: '04', title: 'Optimize', description: 'We track performance, identify trends, and continuously look for improvements — refining workflows, sharing insights, and adapting to changing needs.' },
            ].map((phase, idx) => (
              <div
                key={phase.step}
                className="reveal flex flex-col md:flex-row gap-6 p-7 lg:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-400/30 transition-colors duration-400"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="font-display text-4xl font-bold text-teal-400/40 flex-shrink-0 md:w-24">
                  {phase.step}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
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
    </>
  );
}
