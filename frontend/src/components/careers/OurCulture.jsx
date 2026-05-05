import React from "react";

// Add to index.html:
// <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap" rel="stylesheet"/>

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="flex-shrink-0 w-[17px] h-[17px] stroke-[#2b4ff5] fill-none stroke-2 stroke-linecap-round stroke-linejoin-round"
  >
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const features = [
  "Monthly team hackathons",
  "Radical transparency policy",
  "High-autonomy work environment",
];

export default function OurCulture() {
  return (
    <div className="bg-[#f8f9ff] py-16 overflow-hidden">
      <div className="max-w-297 container 2xl:max-w-360 mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        {/* ── LEFT ── */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight mb-6">
            Our Culture
          </h2>

          <p className="text-gray-500 mt-5 max-w-md 2xl:max-w-xl">
            At Rubous Tech, we've traded traditional hierarchies for a culture
            of ownership and collaboration. We are a collection of experts who
            trust each other to excel.
          </p>

          <p className="text-gray-500 mt-4 max-w-md 2xl:max-w-xl">
            Our team thrives on transparency, intellectual honesty, and a
            shared passion for solving complex digital puzzles. We work hard,
            but we also value the space needed to recharge.
          </p>

          <div className="mt-6 space-y-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3 text-blue-600 font-medium">
                <CheckIcon />
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT PHOTO GRID ── */}
        <div className="flex 2xl:justify-end">
          <div className="w-full md:w-[480px] grid grid-cols-2 grid-rows-[210px_190px] md:grid-rows-[210px_190px] gap-2 md:gap-[10px]">
            {/* Top-left: team on dark bg with label */}
            <div className="col-span-1 row-span-1 bg-[#111c3a] rounded-[14px] overflow-hidden relative">
              <img
                src="https://i.ibb.co/zVJMfFpJ/Team-activity.png"
                alt="Team activity"
                className="w-full h-full object-cover block"
              />
              <div className="absolute bottom-[10px] left-0 right-0 text-center text-[9.5px] font-bold tracking-[0.14em] text-[rgba(255,255,255,0.55)] uppercase">
                Team Activity
              </div>
            </div>
            {/* Top-right: modern office */}
            <div className="col-span-1 row-span-1 bg-[#8a9ab0] rounded-[14px] overflow-hidden">
              <img
                src="https://i.ibb.co/xSfyBsn4/Office-space.png"
                alt="Modern office"
                className="w-full h-full object-cover block"
              />
            </div>
            {/* Bottom-left: two colleagues */}
            <div className="col-span-1 row-span-1 bg-[#c8cdd8] rounded-[14px] overflow-hidden">
              <img
                src="https://i.ibb.co/1t4PbVQG/Collaboration.png"
                alt="Colleagues collaborating"
                className="w-full h-full object-cover block"
              />
            </div>
            {/* Bottom-right: dark abstract red burst */}
            <div className="col-span-1 row-span-1 bg-[#0a0a14] rounded-[14px] overflow-hidden">
              <img
                src="https://i.ibb.co/35XjJm09/Celebration.png"
                alt="Creative energy"
                className="w-full h-full object-cover block mix-blend-screen opacity-[0.85]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}