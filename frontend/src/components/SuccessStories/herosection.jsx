import React from "react";
import { ArrowRight, Settings2, Sparkles, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: <Sparkles className="h-5 w-5 text-[#2952e3]" />,
    value: "70%",
    label: "Faster Response Time",
  },
  {
    icon: <TrendingUp className="h-5 w-5 text-[#2952e3]" />,
    value: "3x",
    label: "More Lead Conversion",
  },
  {
    icon: <Settings2 className="h-5 w-5 text-[#2952e3]" />,
    value: "50+",
    label: "Automated Workflows",
  },
];

export default function HeroSection() {
  return (
    <div className="bg-[#f8f9ff] pt-[62px] pb-20 lg:pb-24 overflow-hidden">
      <div className="max-w-297 2xl:max-w-360 mx-auto px-6 grid lg:grid-cols-[1.02fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left Content */}
          <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight wrap-break-words">
            Real results from <br />
    
            <span className="text-blue-600">Intelligent</span> <br />
            <span className="text-blue-600">Automation</span> <br />
          </h1>
          <p className="text-gray-500 mt-6 max-w-md text-[15px] leading-7">
            Discover how global enterprises leverage Rubous Tech to orchestrate
            digital intelligence, eliminating friction and scaling operational
            excellence.
          </p>
          <div className="flex items-center gap-4 mt-9 flex-wrap">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition inline-flex items-center gap-2">
              Book Consultation
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="bg-blue-100 text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-200 transition">
              View Solutions
            </button>
          </div>
        </div>

        {/* Right Stats */}
        <div className="relative h-[420px] sm:h-[460px] lg:h-[500px] w-full">
          <div className="absolute top-[64px] right-2 sm:right-8 lg:right-12 w-[320px] sm:w-[360px] rounded-2xl bg-white px-6 py-5 shadow-[0_10px_35px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#f0f2f8] rounded-full flex items-center justify-center shrink-0">
                {stats[0].icon}
              </div>
              <div>
                <div className="text-2xl font-black text-[#0f172a] leading-none">{stats[0].value}</div>
                <div className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.18em] mt-1">{stats[0].label}</div>
              </div>
            </div>
          </div>

          <div className="absolute top-[184px] left-3 sm:left-12 lg:left-10 w-[320px] sm:w-[360px] rounded-2xl bg-white px-6 py-5 shadow-[0_10px_35px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#f0f2f8] rounded-full flex items-center justify-center shrink-0">
                {stats[1].icon}
              </div>
              <div>
                <div className="text-2xl font-black text-[#0f172a] leading-none">{stats[1].value}</div>
                <div className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.18em] mt-1">{stats[1].label}</div>
              </div>
            </div>
          </div>

          <div className="absolute top-[304px] right-0 sm:right-6 lg:right-6 w-[320px] sm:w-[360px] rounded-2xl bg-white px-6 py-5 shadow-[0_10px_35px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#f0f2f8] rounded-full flex items-center justify-center shrink-0">
                {stats[2].icon}
              </div>
              <div>
                <div className="text-2xl font-black text-[#0f172a] leading-none">{stats[2].value}</div>
                <div className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.18em] mt-1">{stats[2].label}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}