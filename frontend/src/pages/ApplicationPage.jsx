import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  User,
  Mail,
  Phone,
  Briefcase,
  UploadCloud,
} from 'lucide-react';

export default function ApplicationPage() {
  const { jobId } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resume: null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);

        const response = await fetch(`/api/careers/${jobId}`);
        const responseJson = await response.json();

        if (!response.ok || !responseJson.success) {
          throw new Error(responseJson.message || 'Unable to load job details');
        }

        setJob(responseJson.data);
      } catch (error) {
        setErrors({ fetch: error.message });
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.experience) {
      newErrors.experience = 'Experience level is required';
    }

    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitting(true);

    try {
      const submitData = new FormData();

      submitData.append('fullName', formData.fullName);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('position', job.title);
      submitData.append('experience', formData.experience);
      submitData.append('coverLetter', formData.coverLetter);
      submitData.append('resume', formData.resume);
      submitData.append('jobId', jobId);

      const response = await fetch('/api/applications', {
        method: 'POST',
        body: submitData,
      });

      const responseJson = await response.json();

      if (!response.ok || !responseJson.success) {
        throw new Error(responseJson.message || 'Failed to submit application');
      }

      setSuccess(true);

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        coverLetter: '',
        resume: null,
      });
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center">
        <div className="h-12 w-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
      </div>
    );
  }

  if (errors.fetch || !job) {
    return (
      <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-10 text-center max-w-lg w-full">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Error
          </h1>

          <p className="text-gray-500 mb-6">
            {errors.fetch || 'Unable to load job details.'}
          </p>

          <Link
            to="/careers"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition"
          >
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-10 text-center max-w-xl w-full">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Application Submitted!
          </h1>

          <p className="text-gray-500 leading-7 mb-8">
            Thank you for applying for the{' '}
            <span className="font-semibold text-gray-800">
              {job.title}
            </span>{' '}
            position. Our team will review your application and contact you soon.
          </p>

          <Link
            to="/careers"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-2xl font-medium"
          >
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb] py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="text-left mb-10">
          <Link
            to={`/careers/${jobId}`}
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 mb-5"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>

            Back to Job Details
          </Link>

          <h1 className="text-4xl sm:text-5xl  font-bold tracking-tight text-gray-900 mb-4">
            Apply for {job.title}
          </h1>

          <p className="text-gray-500 max-w-2xl text-left leading-7">
            Fill out the application form below and upload your resume
            to get started with your journey.
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-white border border-gray-200 rounded-4xl shadow-sm p-6 sm:p-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Candidate Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* INPUT GRID */}
            <div className="grid md:grid-cols-2 gap-5">
              {/* FULL NAME */}
              <div>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full h-14 rounded-full border border-gray-300 bg-white pl-14 pr-5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                  />
                </div>

                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-2 ml-2">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full h-14 rounded-full border border-gray-300 bg-white pl-14 pr-5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                  />
                </div>

                {errors.email && (
                  <p className="text-red-500 text-xs mt-2 ml-2">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full h-14 rounded-full border border-gray-300 bg-white pl-14 pr-5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                  />
                </div>

                {errors.phone && (
                  <p className="text-red-500 text-xs mt-2 ml-2">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* EXPERIENCE */}
              <div>
                <div className="relative">
                  <Briefcase
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full h-14 rounded-full border border-gray-300 bg-white pl-14 pr-5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition appearance-none"
                  >
                    <option value="">Years of Experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                {errors.experience && (
                  <p className="text-red-500 text-xs mt-2 ml-2">
                    {errors.experience}
                  </p>
                )}
              </div>
            </div>

            {/* POSITION */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-3">
                Position
              </label>

              <input
                type="text"
                value={job.title}
                readOnly
                className="w-full h-14 rounded-2xl border border-gray-300 bg-gray-50 px-5 text-sm text-gray-600 outline-none"
              />
            </div>

            {/* RESUME */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-3">
                Resume / CV
              </label>

              <div className="relative border-2 border-dashed border-gray-300 rounded-[28px] p-10 text-center hover:border-blue-400 hover:bg-blue-50/30 transition">
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                    <UploadCloud className="text-blue-600" size={28} />
                  </div>

                  <p className="text-gray-800 font-medium mb-2">
                    {formData.resume
                      ? formData.resume.name
                      : 'Click or drag and drop to upload'}
                  </p>

                  <p className="text-sm text-gray-500">
                    PDF, DOCX up to 10MB
                  </p>
                </div>
              </div>

              {errors.resume && (
                <p className="text-red-500 text-xs mt-2 ml-2">
                  {errors.resume}
                </p>
              )}
            </div>

            {/* COVER LETTER */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-gray-800">
                  Cover Letter
                </label>

                <span className="text-xs text-gray-400">
                  {formData.coverLetter.length} / 2000
                </span>
              </div>

              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={7}
                maxLength={2000}
                placeholder="Tell us why you're a great fit for this role..."
                className="w-full rounded-[28px] border border-gray-300 px-5 py-5 text-sm text-gray-700 outline-none resize-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full h-14 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-medium shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>

            {errors.submit && (
              <p className="text-red-500 text-sm text-center">
                {errors.submit}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}