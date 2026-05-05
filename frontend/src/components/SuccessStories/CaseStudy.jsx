import { useEffect, useRef } from "react";
import { BarChart3 } from "lucide-react";

const barData = [
  { day: "M", pct: 38 }, { day: "T", pct: 62 }, { day: "W", pct: 55 },
  { day: "T", pct: 80 }, { day: "F", pct: 95 }, { day: "S", pct: 45 }, { day: "S", pct: 28 },
];

const routes = [
  { from: "SHG → LAX", status: "On track", color: "#5DCAA5", bg: "rgba(29,158,117,.2)", eta: "Apr 30" },
  { from: "DXB → AMS", status: "Rerouted", color: "#EF9F27", bg: "rgba(239,159,39,.18)", eta: "May 02" },
  { from: "MUM → LHR", status: "In transit", color: "#6ea4f5", bg: "rgba(41,82,227,.25)", eta: "May 03" },
];

export default function CaseStudyCard() {
  return (
    <div className="bg-[#f8f9ff] py-16 overflow-hidden">
      <div className="max-w-297 2xl:max-w-360 mx-auto px-6">
          <div className="max-w-4xl">
          <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Featured Success Story</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight mb-6">Global Logistics Overhaul</h2>
        </div>
      </div>

      <div className="max-w-297 2xl:max-w-360 mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden min-h-[340px]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT PANEL */}
            <div className="w-full h-full p-7 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-7 bg-[#1a2d6e] rounded-md flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 text-[#6ea4f5]" />
                </div>
                <span className="text-sm font-semibold text-gray-500">Nexus Global Logistics</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">The Challenge</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Manual freight tracking and documentation were causing significant delays,
                    leading to 15% annual revenue leakage.
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">The Solution</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Implemented Rubous AI Orchestrator to automate 90% of shipping manifests
                    and real-time cargo rerouting.
                  </p>
                </div>

                <div className="flex gap-8">
                  <div>
                    <div className="text-2xl font-black text-gray-800 tracking-tight">$1.2M</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">Annual Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-800 tracking-tight">-45%</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">Ops Overhead</div>
                  </div>
                </div>

                <blockquote className="border-l-3 border-gray-300 pl-4">
                  <p className="text-sm italic text-gray-500 leading-relaxed mb-2">
                    "Rubous Tech didn't just give us a tool; they redefined our entire
                    operational backbone. The ROI was visible within the first quarter."
                  </p>
                  <cite className="text-xs font-bold text-gray-800 not-italic">— Sarah Jenkins, COO</cite>
                </blockquote>
              </div>
            </div>

            {/* RIGHT PANEL — dark dashboard */}
            <div className="w-full h-full bg-[#0d1526] p-5 lg:p-6 lg:rounded-r-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Distribution Hub</span>
                <span className="text-xs font-bold px-2 py-1 rounded-full bg-blue-600/25 text-blue-400 tracking-wider">Live</span>
              </div>

              {/* Top metrics */}
              <div className="flex gap-3 mb-4">
                <div className="flex-1 bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="text-lg font-black text-gray-100 tracking-tight">98.4%</div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">On-time</div>
                </div>
                <div className="flex-1 bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="text-lg font-black text-gray-100 tracking-tight">14.2k</div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Shipments</div>
                </div>
                <div className="flex items-center justify-center">
                  <svg width="52" height="52" viewBox="0 0 52 52">
                    <circle cx="26" cy="26" r="20" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="6"/>
                    <circle cx="26" cy="26" r="20" fill="none" stroke="#2952e3" strokeWidth="6"
                      strokeDasharray="113" strokeDashoffset="14"
                      strokeLinecap="round" transform="rotate(-90 26 26)"/>
                    <text x="26" y="30" textAnchor="middle" fontSize="10" fontWeight="800"
                      fill="#e2e8f8" fontFamily="Manrope,sans-serif">88%</text>
                  </svg>
                </div>
              </div>

              {/* Bar chart */}
              <div className="bg-white/4 rounded-lg p-3 mb-4 border border-white/10">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Weekly Volume</div>
                <div className="flex items-end gap-1 h-13">
                  {barData.map((b, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full">
                      <div 
                        className="w-full rounded-t-sm"
                        style={{
                          height: `${b.pct}%`,
                          background: b.pct >= 90 ? "#2952e3" : `rgba(41,82,227,${(b.pct/100)*0.7 + 0.2})`
                        }}
                      />
                      <span className="text-xs text-gray-600 font-semibold">{b.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sparklines */}
              <div className="flex gap-3 mb-4">
                <div className="flex-1 bg-white/4 rounded-lg p-3 border border-white/10">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Revenue</div>
                  <svg width="100%" height="32" viewBox="0 0 140 32" preserveAspectRatio="none">
                    <polyline points="0,28 20,22 40,25 60,14 80,16 100,8 120,10 140,4"
                      fill="none" stroke="#2952e3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="0,28 20,22 40,25 60,14 80,16 100,8 120,10 140,4 140,32 0,32"
                      fill="rgba(41,82,227,.12)" stroke="none"/>
                  </svg>
                </div>
                <div className="flex-1 bg-white/4 rounded-lg p-3 border border-white/10">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Incidents</div>
                  <svg width="100%" height="32" viewBox="0 0 140 32" preserveAspectRatio="none">
                    <polyline points="0,6 20,10 40,8 60,14 80,12 100,18 120,22 140,26"
                      fill="none" stroke="#e24b4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="0,6 20,10 40,8 60,14 80,12 100,18 120,22 140,26 140,32 0,32"
                      fill="rgba(226,75,74,.12)" stroke="none"/>
                  </svg>
                </div>
              </div>

              {/* Route table */}
              <div className="flex justify-between border-t border-white/10 pt-2 mb-2">
                <span className="text-xs font-semibold text-gray-600 tracking-wider">ROUTE</span>
                <span className="text-xs font-semibold text-gray-600 tracking-wider">STATUS</span>
                <span className="text-xs font-semibold text-gray-600 tracking-wider">ETA</span>
              </div>
              <div className="space-y-1">
                {routes.map((r, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-gray-400">{r.from}</span>
                    <span 
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{color:r.color, background:r.bg}}
                    >
                      {r.status}
                    </span>
                    <span className="text-xs text-gray-500">{r.eta}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}