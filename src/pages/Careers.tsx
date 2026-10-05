import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Briefcase,
  Heart,
  Globe,
  GraduationCap,
  TrendingUp,
  Users,
  CheckCircle2,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { careerDepartments } from '../data/content';

export default function Careers() {
  useScrollReveal();

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Your Career in Healthcare Operations"
        subtitle="Join a team that's helping healthcare organizations run better. We offer opportunities across revenue cycle, patient access, administration, process improvement, and technology — with structured training, clear growth paths, and a culture that values reliability and continuous learning."
        image="https://images.pexels.com/photos/18999145/pexels-photo-18999145.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
        alt="Diverse group of professionals engaged in a workshop in a modern office"
      />

      {/* Why work here */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-9xl mx-auto px-6 lg:px-10">
          <div className="reveal max-w-3xl mb-16">
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-4 block">
              Why Join Clarvion
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-900 leading-[1.15] mb-5">
              A Career That Makes Healthcare Better
            </h2>
            <p className="text-lg text-ink-light leading-relaxed">
              Our work directly supports the operational health of healthcare organizations. When you join Clarvion Health, you become part of a team that helps providers focus on patient care by strengthening the operations that enable it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: 'Meaningful Work', description: 'Every role contributes to helping healthcare organizations operate more effectively, which ultimately supports better patient care.' },
              { icon: GraduationCap, title: 'Structured Training', description: 'We invest in our teams with documented training programs, ongoing development, and clear pathways for skill advancement.' },
              { icon: TrendingUp, title: 'Growth Opportunities', description: 'As we grow, our team members grow with us. We promote from within whenever possible and support career progression across departments.' },
              { icon: Globe, title: 'Remote-First Culture', description: 'Our remote-first operations model provides flexibility while maintaining strong team collaboration and structured workflows.' },
              { icon: Users, title: 'Collaborative Teams', description: 'We work in coordinated teams with clear roles, shared goals, and a culture of mutual support and knowledge sharing.' },
              { icon: Briefcase, title: 'Healthcare Specialization', description: 'You will develop specialized expertise in healthcare operations — a field with depth, complexity, and long-term career potential.' },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="reveal p-8 rounded-2xl bg-cloud border border-cloud-dark/50 card-hover"
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

      {/* Departments */}
      <section className="py-24 lg:py-32 bg-cloud">
        <div className="max-w-9xl mx-auto px-6 lg:px-10">
          <div className="reveal max-w-3xl mb-16">
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-4 block">
              Career Areas
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-900 leading-[1.15] mb-5">
              Explore Our Departments
            </h2>
            <p className="text-lg text-ink-light leading-relaxed">
              We hire across multiple functional areas, each playing a distinct role in supporting healthcare organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerDepartments.map((dept, idx) => (
              <div
                key={dept.title}
                className="reveal group p-7 lg:p-8 rounded-2xl bg-white border border-cloud-dark/50 card-hover flex gap-5"
                style={{ transitionDelay: `${(idx % 2) * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 transition-colors duration-300">
                  <Briefcase className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-900 mb-2">
                    {dept.title}
                  </h3>
                  <p className="text-sm text-ink-light leading-relaxed">
                    {dept.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we look for */}
      <section className="py-24 lg:py-32 bg-navy-900 noise-overlay relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl" />

        <div className="max-w-9xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="reveal max-w-3xl mb-16">
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-wider mb-4 block">
              What We Look For
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.15] mb-5">
              Qualities We Value
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              We look for team members who share our commitment to healthcare operational excellence. Here are the qualities that matter most to us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Attention to detail and commitment to accuracy in every task',
              'Ability to follow documented workflows while identifying improvement opportunities',
              'Comfort with healthcare systems, billing concepts, and operational technology',
              'Strong communication skills for working with internal teams and client stakeholders',
              'Reliability and consistency in meeting quality and turnaround expectations',
              'Curiosity and willingness to learn continuously about healthcare operations',
              'Problem-solving mindset for addressing exceptions and complex cases',
              'Collaborative approach that supports team goals over individual preferences',
            ].map((quality, idx) => (
              <div
                key={quality}
                className="reveal flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10"
                style={{ transitionDelay: `${(idx % 2) * 60}ms` }}
              >
                <CheckCircle2 className="w-5.5 h-5.5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">{quality}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-9xl mx-auto px-6 lg:px-10">
          <div className="reveal max-w-3xl mx-auto text-center">
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-4 block">
              How to Apply
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-900 leading-[1.15] mb-6">
              Interested in Joining Our Team?
            </h2>
            <p className="text-lg text-ink-light leading-relaxed mb-8">
              We are always interested in connecting with experienced healthcare operations professionals. Send us your information and area of interest, and our team will reach out when opportunities align with your background.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-navy-900 text-white font-semibold hover:bg-teal-600 transition-colors duration-300"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
