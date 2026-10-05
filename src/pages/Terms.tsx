import { FileText } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Terms() {
  useScrollReveal();

  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using the Clarvion Health website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, please do not use our website or engage with our services.',
        'These terms apply to all visitors, users, and others who access or use our website. By using our website, you represent that you are of legal age and have the authority to enter into this agreement on behalf of yourself or your organization.',
      ],
    },
    {
      title: 'Description of Services',
      content: [
        'Clarvion Health provides healthcare operational support services including revenue cycle management, medical billing and claims support, accounts receivable and denial management, patient access and eligibility support, healthcare administrative services, healthcare process optimization, and healthcare technology support.',
        'Our website provides information about these services and a means to contact us. The specific terms of any service engagement are governed by a separate agreement between Clarvion Health and the engaging organization.',
      ],
    },
    {
      title: 'Use of Website',
      content: [
        'You may use our website for lawful purposes only. You agree not to use our website in any way that could damage, disable, overload, or impair the site, or interfere with any other party\'s use of the site.',
        'You agree not to attempt to gain unauthorized access to any part of the website, its server, or any database connected to the website. You also agree not to use the website to transmit any material that is unlawful, harmful, defamatory, or otherwise objectionable.',
      ],
    },
    {
      title: 'Intellectual Property',
      content: [
        'All content on this website — including text, graphics, logos, images, and software — is the property of Clarvion Health or its content providers and is protected by intellectual property laws. You may not reproduce, distribute, modify, or otherwise use any content from this website without our prior written consent.',
        'The Clarvion Health name and logo are trademarks of Clarvion Health. All other trademarks, service marks, and trade names referenced on this website are the property of their respective owners.',
      ],
    },
    {
      title: 'Service Information',
      content: [
        'The information provided on our website about our services is for general informational purposes. It does not constitute a guarantee of specific results, outcomes, or performance levels. Actual results depend on many factors unique to each organization, including current operational state, systems, staff, and engagement scope.',
        'We reserve the right to modify, suspend, or discontinue any aspect of our services at any time. We will provide reasonable notice of significant changes to engaged organizations.',
      ],
    },
    {
      title: 'No Professional Advice',
      content: [
        'The content on our website is provided for general informational purposes and does not constitute professional, legal, financial, or healthcare regulatory advice. Organizations should consult with appropriate professionals before making decisions based on information found on this website.',
      ],
    },
    {
      title: 'Third-Party Links',
      content: [
        'Our website may contain links to third-party websites or resources. We are not responsible for the content, accuracy, or practices of any third-party sites. Accessing third-party links is at your own risk, and you should review the terms and privacy policies of any third-party sites you visit.',
      ],
    },
    {
      title: 'Limitation of Liability',
      content: [
        'To the fullest extent permitted by law, Clarvion Health shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use our website or services. This includes damages for loss of profits, data, or other intangible losses.',
        'You agree to hold Clarvion Health harmless from any claims or damages arising from your use of our website or your violation of these terms.',
      ],
    },
    {
      title: 'Indemnification',
      content: [
        'You agree to indemnify and hold Clarvion Health and its affiliates harmless from any claims, damages, losses, or expenses — including reasonable attorney fees — arising from your use of our website, your violation of these terms, or your infringement of any third-party rights.',
      ],
    },
    {
      title: 'Changes to Terms',
      content: [
        'We may revise these Terms of Service from time to time. The most current version will always be posted on this page with a revised effective date. Your continued use of our website after changes are posted constitutes your acceptance of the revised terms.',
      ],
    },
    {
      title: 'Governing Law',
      content: [
        'These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these terms or your use of our website shall be resolved through appropriate legal channels in the applicable jurisdiction.',
      ],
    },
    {
      title: 'Contact Information',
      content: [
        'If you have questions about these Terms of Service, please contact us at info@clarvionhealth.com or through the contact information provided on our contact page.',
      ],
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="These terms govern your use of the Clarvion Health website and outline the conditions under which we provide access to our content and service information."
        image="https://images.pexels.com/photos/1313534/pexels-photo-1313534.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
        alt="Contemporary building facade with reflective glass windows"
      />

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          {/* Effective date */}
          <div className="reveal flex items-center gap-3 mb-12 p-5 rounded-xl bg-cloud border border-cloud-dark/50">
            <FileText className="w-5.5 h-5.5 text-teal-600 flex-shrink-0" />
            <p className="text-sm text-ink-light">
              <span className="font-semibold text-navy-900">Effective Date:</span> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Intro */}
          <div className="reveal mb-12">
            <p className="text-lg text-ink-light leading-relaxed">
              Please read these Terms of Service carefully before using the Clarvion Health website. By accessing or using our website, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our website.
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
