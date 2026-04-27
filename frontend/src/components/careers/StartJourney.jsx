import React, { useState } from "react";

// Add to index.html:
// <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>

const inputClass = "text-gray-900 bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 outline-none w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent";

const labelClass = "text-sm font-semibold text-gray-700 mb-2 block";

function Field({ label, children }) {
  return (
    <div className="mb-4">
      <label className={labelClass}>{label}</label>
      {children}
    </div>
  );
}

const UploadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6 stroke-gray-400 fill-none stroke-2 stroke-linecap-round stroke-linejoin-round"
  >
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="18" x2="12" y2="12" />
    <line x1="9" y1="15" x2="15" y2="15" />
  </svg>
);

export default function StartYourJourney() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    position: "Frontend Developer",
    coverMessage: "",
  });
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) setFileName(file.name);
  };

  return (
    <div id="start-journey" className="bg-gray-100 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* ── FORM CARD ── */}
        <div className="bg-white rounded-2xl p-10 w-full max-w-2xl mx-auto shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-4">
            Start Your Journey
          </h2>
          <p className="text-gray-500 text-center mb-8 leading-relaxed">
            Ready to join Rubous Tech? Fill out the form below and our team will get in touch.
          </p>

          {/* Full Name + Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                className={inputClass}
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={form.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClass}>Email Address</label>
              <input
                className={inputClass}
                type="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Desired Position */}
          <Field label="Desired Position">
            <select
              name="position"
              value={form.position}
              onChange={handleChange}
              className={`${inputClass} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7799' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_14px_center] pr-10 cursor-pointer`}
            >
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Automation Engineer</option>
              <option>Marketing Intern</option>
            </select>
          </Field>

          {/* Resume Upload */}
          <Field label="Resume / CV (PDF)">
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => document.getElementById("resume-input").click()}
              className={`${dragOver ? "bg-blue-50" : "bg-gray-50"} border-2 ${dragOver ? "border-blue-500" : "border-gray-300"} border-dashed rounded-lg p-8 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-200`}
            >
              <UploadIcon />
              <span className="text-sm text-gray-400 font-medium">
                {fileName ? fileName : "Click to upload or drag and drop"}
              </span>
              <input
                id="resume-input"
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) setFileName(file.name);
                }}
              />
            </div>
          </Field>

          {/* Cover Message */}
          <Field label="Cover Message">
            <textarea
              name="coverMessage"
              placeholder="Tell us why you're a great fit for Rubous Tech..."
              value={form.coverMessage}
              onChange={handleChange}
              className={`${inputClass} resize-none h-24 leading-relaxed`}
            />
          </Field>

          {/* Submit */}
          <button
            className="w-full bg-blue-600 text-white font-semibold py-4 rounded-lg border-none cursor-pointer mt-4 transition-all duration-200 hover:bg-blue-700 hover:transform hover:-translate-y-0.5"
          >
            Submit Application
          </button>
        </div>

        {/* ── BLUE CTA CARD ── */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl w-full max-w-4xl mx-auto mt-12 p-14 text-center shadow-lg">
          <h3 className="text-3xl font-semibold text-white mb-4">
            Didn't find a role?
          </h3>
          <p className="text-base text-blue-100 leading-relaxed mb-8 max-w-2xl mx-auto">
            We're always on the lookout for exceptional talent. If you don't see a current opening that fits your skills, send us your resume anyway.
          </p>
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <button className="bg-white text-blue-600 font-medium py-3 px-6 rounded-lg border-none cursor-pointer shadow-md transition-colors duration-200 hover:bg-gray-50">
              Send Resume
            </button>

            <button className="bg-transparent text-white font-medium py-3 px-6 rounded-lg border border-blue-400 cursor-pointer transition-all duration-200 hover:bg-white hover:text-blue-600">
              Contact HR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}