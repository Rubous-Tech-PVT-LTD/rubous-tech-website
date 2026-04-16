import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const termsSections = [
  {
    title: 'Acceptance of Terms',
    points: [
      'By using Rubous Tech services, you agree to these Terms and Conditions.',
      'If you do not agree with these terms, please discontinue use of the platform.',
      'These terms apply to all visitors, clients, and users of our website and services.'
    ]
  },
  {
    title: 'Services and Scope',
    points: [
      'Rubous Tech provides digital automation, booking workflow, and related technology services.',
      'Project timelines, pricing, and deliverables are finalized through separate client agreements.',
      'All quoted plans are indicative and may vary based on actual business requirements.'
    ]
  },
  {
    title: 'User Responsibilities',
    points: [
      'You agree to provide accurate and complete information during inquiries and bookings.',
      'You must not use the platform for unlawful, harmful, or fraudulent activities.',
      'You are responsible for maintaining the confidentiality of any account or access credentials.'
    ]
  },
  {
    title: 'Payments and Refunds',
    points: [
      'Payment schedules and billing terms are defined in project contracts or invoices.',
      'Any refund terms, where applicable, are governed by the signed commercial agreement.',
      'Late payments may affect project timelines, support availability, or service continuity.'
    ]
  },
  {
    title: 'Intellectual Property',
    points: [
      'All proprietary frameworks, codebases, designs, and materials remain protected by law.',
      'Ownership transfer of deliverables, if any, is subject to contract terms and full payment.',
      'You may not reproduce, resell, or redistribute protected material without written permission.'
    ]
  },
  {
    title: 'Limitation of Liability',
    points: [
      'Services are provided with reasonable care, but no guarantee is made for uninterrupted operation.',
      'Rubous Tech is not liable for indirect, incidental, or consequential losses from platform use.',
      'Total liability, where permitted by law, is limited to amounts paid for the related service.'
    ]
  },
  {
    title: 'Termination',
    points: [
      'We may suspend or terminate access for breach of these terms or misuse of services.',
      'Either party may terminate project engagement as outlined in the governing agreement.',
      'Relevant payment, confidentiality, and IP clauses survive termination where applicable.'
    ]
  },
  {
    title: 'Contact',
    points: [
      'Email: info@ruboustech.com',
      'Phone: +1 (555) 123-4567',
      'Address: 1st Floor, Chandrabani Road, Majra, Dehradun, UK 248171'
    ]
  }
];

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background text-navy selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <section className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-primary mb-4">Legal</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Terms and Conditions</h1>
              <p className="text-navy/60 font-medium text-lg">Effective Date: April 16, 2026</p>
            </div>

            <div className="bg-white/90 backdrop-blur rounded-3xl border border-navy/10 shadow-xl p-7 md:p-10 space-y-10">
              <p className="text-base md:text-lg text-navy/75 leading-relaxed">
                These Terms and Conditions govern your access to and use of Rubous Tech services,
                website features, and project engagement workflows.
              </p>

              {termsSections.map((section) => (
                <section key={section.title} className="space-y-4">
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-navy/75 leading-relaxed">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}

              <section className="pt-2 border-t border-navy/10">
                <p className="text-sm text-navy/55 leading-relaxed">
                  We may revise these terms periodically for legal, operational, or service-related reasons.
                  Continued use of the platform after updates indicates acceptance of revised terms.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;