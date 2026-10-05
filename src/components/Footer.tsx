import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import Logo from './Logo';

const footerLinks = {
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Why Clarvion', path: '/why-clarvion' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ],
  Services: [
    { label: 'Revenue Cycle Management', path: '/services' },
    { label: 'Medical Billing & Claims', path: '/services' },
    { label: 'AR & Denial Management', path: '/services' },
    { label: 'Patient Access & Eligibility', path: '/services' },
    { label: 'Process Optimization', path: '/services' },
    { label: 'Technology Support', path: '/services' },
  ],
  Specialties: [
    { label: 'Physician Practices', path: '/specialties' },
    { label: 'Specialty Practices', path: '/specialties' },
    { label: 'Multi-Specialty Groups', path: '/specialties' },
    { label: 'Hospitals & Health Systems', path: '/specialties' },
    { label: 'Ambulatory Organizations', path: '/specialties' },
    { label: 'Healthcare Technology', path: '/specialties' },
  ],
  Legal: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white noise-overlay">
      <div className="max-w-9xl mx-auto px-6 lg:px-10 pt-20 pb-10 relative z-10">
        {/* CTA banner */}
        <div className="mb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-2">
              Ready to strengthen your healthcare operations?
            </h3>
            <p className="text-white/70 max-w-xl">
              Talk to our team about how Clarvion Health can support your organization with specialized services, disciplined processes, and technology-enabled solutions.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-colors whitespace-nowrap"
          >
            Talk to Our Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-xs">
              Clarvion Health helps healthcare organizations strengthen operational performance through people, process, and technology.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4.5 h-4.5 text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors" aria-label="Twitter">
                <Twitter className="w-4.5 h-4.5 text-white" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-white/90 mb-4 uppercase tracking-wider">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/60 hover:text-teal-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 text-sm text-white/60">
            <Mail className="w-4.5 h-4.5 text-teal-400 flex-shrink-0" />
            <span>info@clarvionhealth.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/60">
            <Phone className="w-4.5 h-4.5 text-teal-400 flex-shrink-0" />
            <span>+1 (800) 555-0140</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/60">
            <MapPin className="w-4.5 h-4.5 text-teal-400 flex-shrink-0" />
            <span>Remote-first operations, serving healthcare organizations nationwide</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Clarvion Health. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-white/50 hover:text-teal-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-white/50 hover:text-teal-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
