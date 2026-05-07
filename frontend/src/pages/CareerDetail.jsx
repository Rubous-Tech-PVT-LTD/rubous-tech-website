import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const listItemClass = 'flex items-start gap-3 text-gray-600 leading-relaxed';

export default function CareerDetail() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/careers/${jobId}`);
        const responseJson = await response.json();

        if (!response.ok || !responseJson.success) {
          throw new Error(responseJson.message || 'Unable to load job details');
        }

        setJob(responseJson.data);
      } catch (fetchError) {
        setError(fetchError.message);
        setJob(null);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8f9ff] flex items-center justify-center px-6">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-[#f8f9ff] px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">Job not found</h1>
          <p className="text-gray-500 mb-6">{error || 'This position is no longer available.'}</p>
          <Link
            to="/careers"
            className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9ff] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <section className="pb-8 border-b border-gray-200">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">{job.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-5">
            <span>{job.type}</span>
            <span className="text-gray-400">|</span>
            <span>{job.location}</span>
            <span className="text-gray-400">|</span>
            <span>Experience: {job.experienceLevel}</span>
          </div>
         
        </section>

        <section className="py-8 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Role Overview</h2>
          <p className="text-gray-600 leading-8">{job.description}</p>
        </section>

        <section className="py-8 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Responsibilities</h2>
          <ul className="space-y-4">
            {(job.responsibilities || []).map((responsibility, index) => (
              <li key={index} className={listItemClass}>
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="py-8 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Requirements</h2>
          <ul className="space-y-4">
            {(job.requirements || []).map((requirement, index) => (
              <li key={index} className={listItemClass}>
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />
                <span>{requirement}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="py-8 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h2>
          <ul className="space-y-4">
            {(job.benefits || []).map((benefit, index) => (
              <li key={index} className={listItemClass}>
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="py-8">
          <Link
            to={`/apply/${jobId}`}
            className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Apply for This Position
          </Link>
        </section>
      </div>
    </div>
  );
}