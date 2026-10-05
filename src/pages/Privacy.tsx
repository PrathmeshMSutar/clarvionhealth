import { ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Privacy() {
  useScrollReveal();

  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'We collect information that you provide directly to us when you fill out contact forms, request information about our services, or engage with us for operational support. This may include your name, email address, phone number, organization name, and any details you share about your operational needs.',
        'We also automatically collect certain technical information when you visit our website, including IP address, browser type, device information, and usage data such as pages visited and time spent on our site. This information is used for analytics and website optimization purposes.',
      ],
    },
    {
      title: 'How We Use Your Information',
      content: [
        'We use the information we collect to respond to your inquiries, provide information about our services, evaluate potential operational partnerships, and communicate with you about matters relevant to your engagement with Clarvion Health.',
        'We may also use contact information to send updates about our services, industry insights, or other communications that may be of interest. You can opt out of these communications at any time.',
        'Technical and usage data is used to analyze website performance, understand how visitors interact with our content, and improve the user experience of our website.',
      ],
    },
    {
      title: 'Information Sharing and Disclosure',
      content: [
        'We do not sell, rent, or trade your personal information to third parties. We may share information with service providers who support our operations — such as hosting, analytics, or communication tools — under agreements that require them to protect your information and use it only for the purposes we specify.',
        'We may disclose information when required by law, court order, or regulatory authority, or when we believe in good faith that disclosure is necessary to protect our rights, comply with legal processes, or ensure the safety of individuals or organizations.',
      ],
    },
    {
      title: 'Data Security',
      content: [
        'We implement reasonable technical and organizational measures to protect the information we collect. These measures include access controls, encryption in transit, regular security reviews, and staff training on data handling practices.',
        'However, no method of transmission or storage is completely secure. While we strive to protect your information, we cannot guarantee absolute security, and you acknowledge that you provide information at your own risk.',
      ],
    },
    {
      title: 'Cookies and Tracking Technologies',
      content: [
        'Our website may use cookies and similar tracking technologies to enhance functionality, analyze traffic patterns, and improve user experience. Cookies are small data files stored on your device that help us recognize you on return visits and understand how you use our site.',
        'You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. Disabling cookies may affect some functionality of our website.',
      ],
    },
    {
      title: 'Your Rights',
      content: [
        'Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or request deletion of your data. You may also have the right to object to certain processing activities or request that we restrict the use of your information.',
        'To exercise any of these rights, please contact us using the information provided on our contact page. We will respond to your request in accordance with applicable legal requirements.',
      ],
    },
    {
      title: 'Children\'s Privacy',
      content: [
        'Our website and services are intended for healthcare organizations and professionals. We do not knowingly collect personal information from children under the age of 16. If you believe we have inadvertently collected such information, please contact us so we can remove it.',
      ],
    },
    {
      title: 'Changes to This Policy',
      content: [
        'We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or operational considerations. We will post the updated policy on this page and revise the effective date below. We encourage you to review this page periodically.',
      ],
    },
    {
      title: 'Contact Us',
      content: [
        'If you have questions about this Privacy Policy or how we handle your information, please contact us at info@clarvionhealth.com or through the contact information provided on our contact page.',
      ],
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Your privacy matters to us. This policy explains how Clarvion Health collects, uses, and protects information when you visit our website or engage with our services."
        image="https://images.pexels.com/photos/358549/pexels-photo-358549.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
        alt="Modern skyscrapers against a clear blue sky"
      />

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          {/* Effective date */}
          <div className="reveal flex items-center gap-3 mb-12 p-5 rounded-xl bg-cloud border border-cloud-dark/50">
            <ShieldCheck className="w-5.5 h-5.5 text-teal-600 flex-shrink-0" />
            <p className="text-sm text-ink-light">
              <span className="font-semibold text-navy-900">Effective Date:</span> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Intro */}
          <div className="reveal mb-12">
            <p className="text-lg text-ink-light leading-relaxed">
              Clarvion Health ("we", "us", "our") is committed to protecting the privacy of visitors to our website and organizations that engage with our services. This Privacy Policy describes our practices regarding the collection, use, and protection of information.
            </p>
          </div>

          {/* Table of contents */}
          <div className="reveal mb-16 p-6 rounded-xl bg-cloud border border-cloud-dark/50">
            <h3 className="font-display text-sm font-bold text-navy-900 uppercase tracking-wider mb-4">
              Contents
            </h3>
            <ol className="space-y-2">
              {sections.map((section, idx) => (
                <li key={idx}>
                  <a
                    href={`#section-${idx}`}
                    className="text-sm text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    {idx + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, idx) => (
              <div key={idx} id={`section-${idx}`} className="reveal scroll-mt-24">
                <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">
                  {idx + 1}. {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-ink-light leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
