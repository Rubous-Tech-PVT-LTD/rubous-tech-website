import React from 'react';

const termsSections = [
  {
    title: 'Acceptance of Terms',
    points: [
      'By using Rubous Tech services, you agree to these Terms of Service.',
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
    <main className="min-h-screen bg-[#f8f9ff] py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-4 py-1 rounded-full mb-5 uppercase">
            Legal
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Terms of Service
          </h1>

          <p className="text-gray-500 mt-5 max-w-md mx-auto">
            Effective Date: April 16, 2026
          </p>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            These Terms of Service govern your access to and use of Rubous Tech services,
            website features, and project engagement workflows.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-6">
          {termsSections.map((section) => (
            <section
              key={section.title}
              className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
              <ul className="mt-5 space-y-3">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-gray-500 leading-relaxed">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-lg">
            <p className="text-gray-500 leading-relaxed">
              We may revise these terms periodically for legal, operational, or service-related reasons.
              Continued use of the platform after updates indicates acceptance of revised terms.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;