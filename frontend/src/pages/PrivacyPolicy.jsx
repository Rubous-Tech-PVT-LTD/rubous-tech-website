import React from 'react';

const policySections = [
  {
    title: 'Information We Collect',
    points: [
      'Contact details you provide, such as your name, email address, and phone number.',
      'Booking details such as selected date, time slot, and service preferences.',
      'Basic technical details such as browser type, device information, and usage patterns.'
    ]
  },
  {
    title: 'How We Use Information',
    points: [
      'To schedule and manage bookings and service inquiries.',
      'To communicate updates, confirmations, and support responses.',
      'To improve platform reliability, performance, and user experience.'
    ]
  },
  {
    title: 'Data Sharing',
    points: [
      'We do not sell personal information to third parties.',
      'We may share limited data with trusted service providers that support hosting, analytics, and communication.',
      'We may disclose information when required by applicable law or legal process.'
    ]
  },
  {
    title: 'Data Security',
    points: [
      'We use technical and organizational safeguards to protect your information.',
      'Access to personal data is limited to authorized personnel and systems.',
      'No internet transmission is completely secure, but we continuously improve our protections.'
    ]
  },
  {
    title: 'Your Rights',
    points: [
      'You can request access, correction, or deletion of your personal information.',
      'You can request details about how your data is processed.',
      'You may contact us to raise privacy concerns or questions at any time.'
    ]
  },
  {
    title: 'Contact Us',
    points: [
      'Email: info@ruboustech.com',
      'Phone: +1 (555) 123-4567',
      'Address: 1st Floor, Chandrabani Road, Majra, Dehradun, UK 248171'
    ]
  }
];

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-[#f8f9ff] py-16 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-4 py-1 rounded-full mb-5 uppercase">
          Legal
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
          Privacy Policy
        </h1>

        <p className="text-gray-500 mt-5 max-w-md mx-auto">
          Effective Date: April 16, 2026
        </p>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
          Rubous Tech values your privacy. This Privacy Policy explains what information we collect,
          how we use it, and how we protect it when you interact with our website and services.
        </p>

        <section className="mt-12 rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-lg text-left">
          <div className="space-y-8">
            {policySections.map((section, index) => (
              <div
                key={section.title}
                className={index === 0 ? '' : 'border-t border-gray-100 pt-8'}
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
              </div>
            ))}

            <div className="border-t border-gray-100 pt-8">
              <p className="text-gray-500 leading-relaxed">
                This policy may be updated from time to time to reflect service, legal, or operational changes.
                Any updates will be posted on this page with a revised effective date.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;