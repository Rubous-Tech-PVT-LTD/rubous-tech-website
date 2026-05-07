import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const socialLinkStyles = 'inline-flex items-center justify-center rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-200 hover:text-blue-700 hover:bg-blue-50';

const socialIconMap = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 1 0-4 0v6h-4V8h4v2a4 4 0 0 1 2-2Z" />
      <rect x="2" y="9" width="4" height="11" rx="1" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Twitter: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <path d="M22 5.5c-.7.3-1.4.5-2.2.6a3.8 3.8 0 0 0-6.6 3.4A10.8 10.8 0 0 1 3.4 6.1a3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.1-.2-1.7-.5v.1a3.8 3.8 0 0 0 3.1 3.7c-.5.1-1 .2-1.5.1.4 1.5 1.8 2.6 3.5 2.6A7.7 7.7 0 0 1 2 18.7a10.8 10.8 0 0 0 16.7-9.6v-.5c.8-.5 1.5-1.1 2.1-1.8Z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <path d="M9 19c-4.7 1.5-4.7-2.8-6.6-3.3" />
      <path d="M15 22v-3.1a3.2 3.2 0 0 0-.9-2.5c3-.4 6.2-1.5 6.2-7a5.4 5.4 0 0 0-1.4-3.7 5 5 0 0 0-.1-3.7s-1.1-.4-3.6 1.4a12.5 12.5 0 0 0-6.6 0C6.1 1.7 5 2.1 5 2.1a5 5 0 0 0-.1 3.7A5.4 5.4 0 0 0 3.5 9.5c0 5.5 3.2 6.6 6.2 7a3.2 3.2 0 0 0-.9 2.5V22" />
      <path d="M9 19c-4.7 1.5-4.7-2.8-6.6-3.3" />
    </svg>
  ),
};

export default function TeamMemberDetail() {
  const { memberId } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/team/${memberId}`);
        const responseJson = await response.json();

        if (!response.ok || !responseJson.success) {
          throw new Error(responseJson.message || 'Unable to load team member');
        }

        setMember(responseJson.data);
      } catch (fetchError) {
        setError(fetchError.message);
        setMember(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [memberId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#eef4ff] flex items-center justify-center px-6">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (error || !member) {
    return (
      <div className="min-h-screen bg-[#eef4ff] px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">Team member not found</h1>
          <p className="text-gray-500 mb-6">{error || 'This profile is no longer available.'}</p>
          <Link
            to="/about"
            className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Back to About Us
          </Link>
        </div>
      </div>
    );
  }

  const socialLinks = [
    member.socialLinks?.linkedin ? { label: 'LinkedIn', href: member.socialLinks.linkedin } : null,
    member.socialLinks?.twitter ? { label: 'Twitter', href: member.socialLinks.twitter } : null,
    member.socialLinks?.github ? { label: 'GitHub', href: member.socialLinks.github } : null,
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-[#eef4ff] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link to="/about" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to About Us
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[360px_1fr] items-start">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <img src={member.image} alt={member.name} className="w-full h-[420px] object-cover" />
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Team Member</p>
              <h1 className="text-3xl font-bold text-gray-900 mt-2">{member.name}</h1>
              <p className="text-blue-600 font-medium mt-2">{member.role}</p>
              {member.email ? (
                <a href={`mailto:${member.email}`} className="mt-4 inline-block text-sm text-gray-600 hover:text-blue-700">
                  {member.email}
                </a>
              ) : null}
            </div>
          </div>

          <div className="space-y-6">
            <section className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About {member.name}</h2>
              <p className="text-gray-600 leading-8 text-lg">
                {member.bio || 'No description is available for this team member yet.'}
              </p>
            </section>

            {socialLinks.length > 0 && (
              <section className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect</h2>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className={socialLinkStyles}
                      aria-label={social.label}
                      title={social.label}
                    >
                      {socialIconMap[social.label] || social.label}
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}