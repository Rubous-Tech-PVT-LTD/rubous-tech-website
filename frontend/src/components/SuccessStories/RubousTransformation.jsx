import React from "react";
import { ArrowRight } from "lucide-react";

export default function RubousTransformation() {
  return (
    <div className="bg-[#f8f9ff] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight mb-6">
          The Rubous Transformation
        </h2>
        <p className="text-gray-500 mt-5 max-w-2xl mx-auto mb-12">
          We don't just change the tools; we change the velocity of your business.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#f0f2f8] rounded-2xl p-7 md:p-8 flex flex-col lg:flex-row items-stretch gap-0 relative">

          {/* LEFT — Before */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5.5 h-5.5 rounded-full bg-gray-300 text-gray-600 text-xs font-bold flex items-center justify-center flex-shrink-0">
                1
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Before Rubous Tech</span>
            </div>

            <div className="bg-white rounded-xl p-4 md:p-5 mb-5 flex-1">
              {/* Skeleton lines */}
              <div className="h-2.5 bg-gray-200 rounded-md mb-2" style={{width: "80%"}} />
              <div className="h-2.5 bg-gray-200 rounded-md mb-2" style={{width: "60%"}} />
              <div className="flex gap-2 mb-3.5 mt-2.5">
                <div className="h-5.5 bg-red-100 rounded-full" style={{width: "70px"}} />
                <div className="h-5.5 bg-red-100 rounded-full" style={{width: "70px"}} />
              </div>
              <p className="text-xs text-gray-500 italic leading-relaxed mt-3">
                "Processes were siloed, documentation was manual, and response
                times averaged 48 hours."
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-1">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Error Rate</span>
                <span className="text-xl font-black text-gray-800 tracking-tight">12.5%</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Manual Hours</span>
                <span className="text-xl font-black text-gray-800 tracking-tight">40h / week</span>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center self-center flex-shrink-0 mx-4 lg:mx-7 lg:-mt-6">
            <ArrowRight className="h-4 w-4 text-white" />
          </div>

          {/* RIGHT — After */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5.5 h-5.5 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                2
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">After Rubous Tech</span>
            </div>

            <div className="bg-white rounded-xl p-4 md:p-5 mb-4 flex-1">
              {/* Skeleton lines */}
              <div className="h-2.5 bg-blue-100 rounded-md mb-2" style={{width: "75%"}} />
              <div className="h-2.5 bg-blue-100 rounded-md mb-2" style={{width: "50%"}} />
              <div className="flex gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-600 text-white">Automated</span>
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-700 text-white">Optimized</span>
              </div>
              <p className="text-xs text-gray-500 italic leading-relaxed mt-3">
                "Real-time visibility, zero manual hand-offs, and response
                times under 5 minutes."
              </p>
            </div>

            {/* After Stats */}
            <div className="flex gap-2.5">
              <div className="flex-1 bg-blue-50 rounded-lg p-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Error Rate</div>
                <div className="text-xl font-black text-blue-600 tracking-tight">0.2%</div>
              </div>
              <div className="flex-1 bg-blue-50 rounded-lg p-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Manual Hours</div>
                <div className="text-xl font-black text-blue-600 tracking-tight">2h / week</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}