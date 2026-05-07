import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  CircleCheck,
  ArrowRight,
} from 'lucide-react';

const cardClass =
  'bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm';

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
      <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center">
        <div className="h-12 w-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-6">
        <div className="bg-white border border-gray-200 rounded-3xl p-10 text-center max-w-lg w-full shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Job not found
          </h1>

          <p className="text-gray-500 mb-6">
            {error || 'This position is no longer available.'}
          </p>

          <Link
            to="/careers"
            className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb] py-14 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100 mb-5">
            Now Hiring
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-5">
            {job.title}
          </h1>

          <div className="flex flex-wrap justify-center gap-3 text-sm mb-6">
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700">
              {job.department}
            </span>

            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700">
              {job.type}
            </span>

            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700">
              {job.location}
            </span>

            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700">
              {job.experienceLevel}
            </span>
          </div>

          <p className="max-w-3xl mx-auto text-gray-500 leading-8 text-[15px]">
            {job.description}
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-6">
          {/* ROLE OVERVIEW */}
          <div className={cardClass}>
            <h2 className="text-2xl font-semibold text-gray-900 mb-5">
              Role Overview
            </h2>

            <p className="text-gray-600 leading-8 text-[15px]">
              {job.description}
            </p>
          </div>

          {/* RESPONSIBILITIES */}
          <div className={cardClass}>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Responsibilities
            </h2>

            <div className="space-y-5">
              {(job.responsibilities || []).map((item, index) => (
                <div key={index} className="flex gap-3">
                  <CircleCheck
                    size={18}
                    className="text-blue-600 mt-1 shrink-0"
                  />

                  <p className="text-gray-600 leading-7 text-[15px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* REQUIREMENTS */}
          <div className={cardClass}>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Requirements
            </h2>

            <div className="space-y-4">
              {(job.requirements || []).map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CircleCheck
                    size={18}
                    className="text-blue-600 mt-1 shrink-0"
                  />

                  <p className="text-gray-600 leading-7 text-[15px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* WHAT WE OFFER */}
          <div className={cardClass}>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              What We Offer
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              {(job.benefits || []).map((benefit, index) => (           
                  <div key={index} className="flex items-start gap-3">
                      <CircleCheck size={18} color='blue' />

                    <p className="text-sm text-gray-600 leading-6">
                      {benefit}
                    </p>
                  </div>
              ))}
            </div>
          </div>

 {/* CTA SECTION */}
<div className="relative mt-14 overflow-hidden rounded-4xl bg-blue-700 px-6 py-8 sm:py-14 sm:px-12 text-center">
  {/* Background Shapes */}
  <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/5 rounded-full" />
  <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-white/5 rounded-full" />

  <div className="relative z-10 max-w-3xl mx-auto">
    <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-5">
      Build the future of intelligence
    </h2>

    <p className="text-blue-100 text-[15px] sm:text-base leading-7 max-w-2xl mx-auto mb-10">
      We’re moving fast and solving some of the hardest problems in AI.
      If you're ready for the challenge, we'd love to meet you.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link
        to={`/apply/${jobId}`}
        className="bg-white text-blue-700 hover:bg-blue-50 transition-all duration-300 px-8 py-3.5 rounded-2xl font-medium min-w-[180px]"
      >
        Apply Now
      </Link>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}