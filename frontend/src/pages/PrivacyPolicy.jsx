import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    <div className="min-h-screen bg-background text-navy selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <section className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-primary mb-4">Legal</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Privacy Policy</h1>
              <p className="text-navy/60 font-medium text-lg">
                Effective Date: April 16, 2026
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur rounded-3xl border border-navy/10 shadow-xl p-7 md:p-10 space-y-10">
              <p className="text-base md:text-lg text-navy/75 leading-relaxed">
                Rubous Tech values your privacy. This Privacy Policy explains what information we collect,
                how we use it, and how we protect it when you interact with our website and services.
              </p>

              {policySections.map((section) => (
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
                  This policy may be updated from time to time to reflect service, legal, or operational changes.
                  Any updates will be posted on this page with a revised effective date.
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

export default PrivacyPolicy;