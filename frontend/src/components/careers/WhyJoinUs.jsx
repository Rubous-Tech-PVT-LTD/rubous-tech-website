import React from "react";

// Add to index.html:
// <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap" rel="stylesheet"/>

const iconSvgClass = "w-[22px] h-[22px] stroke-[#5b72e8] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round";

const cards = [
  {
    title: "Flexible Work",
    desc: "Work from where you are most productive, whether it's our hub or your home.",
    icon: (
      <svg viewBox="0 0 24 24" className={iconSvgClass}>
        <path d="M3 9.5L12 4l9 5.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    title: "Growth Opportunities",
    desc: "Clear career paths and mentorship programs to help you reach your full potential.",
    icon: (
      <svg viewBox="0 0 24 24" className={iconSvgClass}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    title: "Learning Culture",
    desc: "Generous learning budgets for courses, conferences, and new technologies.",
    icon: (
      <svg viewBox="0 0 24 24" className={iconSvgClass}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
        <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
      </svg>
    ),
  },
  {
    title: "Real Impact",
    desc: "Work on projects that matter and see the direct results of your contributions.",
    icon: (
      <svg viewBox="0 0 24 24" className={iconSvgClass}>
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function WhyJoinUs() {
  return (
    <div className="bg-[#f8f9ff] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight mb-6">
          Why Join Us
        </h2>
        <p className="text-gray-500 mt-5 max-w-2xl mx-auto mb-12">
          We provide environment, tools, and freedom you need to do the best
          work of your life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="bg-white p-6 rounded-xl shadow-lg text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                {card.icon}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-3">
                {card.title}
              </div>
              <div className="text-gray-500 leading-relaxed">
                {card.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}