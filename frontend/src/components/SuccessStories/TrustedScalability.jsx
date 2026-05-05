import React from "react";
import {
  GraduationCap,
  HeartPulse,
  House,
  ShoppingCart,
  Star,
  Truck,
  Cloud,
} from "lucide-react";

const StarIcon = () => <Star className="h-3.5 w-3.5 fill-[#c8d0e7] text-[#c8d0e7]" />;

const reviews = [
  {
    quote:
      '"The implementation phase was the smoothest I\'ve seen in my 20-year career. The platform literally paid for itself in 3 months."',
    name: "Marcus Thorne",
    title: "CTO, DATASTREAM INC",
  },
  {
    quote:
      '"Our support team went from drowning in tickets to proactively solving problems thanks to Rubous\'s predictive AI workflows."',
    name: "Elena Rodriguez",
    title: "DIRECTOR OF EXPERIENCE, ELEVATE",
  },
];

const domains = [
  {
    label: "Healthcare",
    icon: <HeartPulse className="h-7 w-7 text-[#2952e3]" />,
  },
  {
    label: "Real Estate",
    icon: <House className="h-7 w-7 text-[#2952e3]" />,
  },
  {
    label: "SaaS",
    icon: <Cloud className="h-7 w-7 text-[#2952e3]" />,
  },
  {
    label: "Education",
    icon: <GraduationCap className="h-7 w-7 text-[#2952e3]" />,
  },
  {
    label: "E-Commerce",
    icon: <ShoppingCart className="h-7 w-7 text-[#2952e3]" />,
  },
  {
    label: "Logistics",
    icon: <Truck className="h-7 w-7 text-[#2952e3]" />,
  },
];

export default function TrustedScalability() {
  return (
    <div className="bg-[#f8f9ff]">

      {/* ── TRUSTED BY INDUSTRY PIONEERS ── */}
      <section className="bg-[#f0f2f8] py-16">
        <div className="max-w-297 2xl:max-w-360 mx-auto px-6 grid grid-cols-1 lg:grid-cols-[220px_1fr_1fr] gap-7 items-start">

          {/* Left */}
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 tracking-tight leading-tight mb-3">Trusted by Industry Pioneers</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4.5">
              Join the elite organizations that have fundamentally changed how they operate.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex">
                <div className="w-7 h-7 rounded-full bg-blue-700 border-2 border-white flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  A
                </div>
                <div className="w-7 h-7 rounded-full bg-orange-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold flex-shrink-0 -ml-2">
                  B
                </div>
                <div className="w-7 h-7 rounded-full bg-green-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold flex-shrink-0 -ml-2">
                  C
                </div>
              </div>
              <span className="text-xs font-semibold text-gray-600">500+ Reviews</span>
            </div>
          </div>

          {/* Review Cards */}
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 md:p-6 flex flex-col gap-3.5 shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
              </div>
              <p className="text-sm text-gray-600 italic leading-relaxed flex-1">{r.quote}</p>
              <div>
                <div className="text-sm font-bold text-gray-800 mb-0.5">{r.name}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">{r.title}</div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ── SCALABILITY ACROSS ANY DOMAIN ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-297 2xl:max-w-360 mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2.5">Our Reach</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 tracking-tight mb-12">Scalability Across Any Domain</h2>
          <div className="flex flex-wrap justify-center gap-0">
            {domains.map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-2.5 w-28 py-2">
                <div className="w-12 h-12 border border-blue-200 rounded-xl flex items-center justify-center bg-white">
                  {d.icon}
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}