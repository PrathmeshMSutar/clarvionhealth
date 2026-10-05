import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Specialties', path: '/specialties' },
  { label: 'Why Clarvion', path: '/why-clarvion' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Determine if header should use transparent overlay (only on home page top)
  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(23,42,70,0.08)]'
        }`}
      >
        <div className="max-w-9xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-18 py-4">
            <Logo variant={transparent ? 'light' : 'dark'} />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      transparent
                        ? active
                          ? 'text-white'
                          : 'text-white/80 hover:text-white'
                        : active
                          ? 'text-teal-600'
                          : 'text-ink hover:text-navy-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  transparent
                    ? 'bg-white text-navy-900 hover:bg-teal-500 hover:text-white'
                    : 'bg-navy-900 text-white hover:bg-teal-600'
                }`}
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-md transition-colors ${
                  transparent ? 'text-white' : 'text-navy-900'
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-[72px] left-0 right-0 bg-white shadow-2xl border-t border-cloud-dark">
            <nav className="flex flex-col py-4 px-6">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`py-3.5 text-base font-medium border-b border-cloud-dark/60 last:border-0 transition-colors ${
                      active ? 'text-teal-600' : 'text-ink hover:text-navy-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-navy-900 text-white hover:bg-teal-600 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
