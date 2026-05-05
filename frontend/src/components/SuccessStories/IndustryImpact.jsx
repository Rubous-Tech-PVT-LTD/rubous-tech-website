import React, { useState } from "react";
import { Cloud, House, ShieldCheck } from "lucide-react";

const badges = {
  healthcare: { label: "Healthcare", bg: "#e9efff", color: "#2952e3" },
  realestate: { label: "Real Estate", bg: "#eef2ff", color: "#2952e3" },
  saas: { label: "SaaS", bg: "#f2f5ff", color: "#2952e3" },
};

const ShieldIcon = () => (
  <ShieldCheck className="h-[18px] w-[18px] text-[#2952e3]" />
);

const HomeIcon = () => (
  <House className="h-[18px] w-[18px] text-[#2952e3]" />
);

const CloudIcon = () => (
  <Cloud className="h-[18px] w-[18px] text-[#2952e3]" />
);

const cards = [
  {
    icon: <ShieldIcon />,
    badge: "healthcare",
    title: "Patient Lifecycle Automation",
    description:
      "Reducing administrative burden for providers while improving patient engagement through AI-driven scheduling.",
    statValue: "88%",
    statLabel: "Engagement Increase",
  },
  {
    icon: <HomeIcon />,
    badge: "realestate",
    title: "PropTech Lead Management",
    description:
      "Consolidating disparate listing data into a unified AI agent for instant multi-channel lead response.",
    statValue: "14x",
    statLabel: "Response Speed",
  },
  {
    icon: <CloudIcon />,
    badge: "saas",
    title: "Hyper-Scale Customer Support",
    description:
      "Deploying cognitive agents that handle 60% of tier-1 support tickets without human intervention.",
    statValue: "$400k",
    statLabel: "Saved Monthly",
  },
];

const stats = [
  { value: "1200+", label: "Workflows Automated" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "40%", label: "Reduction in Tasks" },
  { value: "24/7", label: "AI Response Coverage" },
];

export default function IndustryImpacts() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => setActiveIndex((i) => Math.max(i - 1, 0));
  const handleNext = () => setActiveIndex((i) => Math.min(i + 1, cards.length - 1));

  return (
    <div className="bg-[#f8f9ff] py-16 overflow-hidden">
      <div className="max-w-297 2xl:max-w-360 mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight mb-6">
          Industry Impacts
        </h2>
        <p className="text-gray-500 mt-5 max-w-2xl mx-auto mb-12">
          How intelligent automation scales across different verticals.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                {card.icon}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-3">
                {card.title}
              </div>
              <div className="text-gray-500 leading-relaxed mb-5">
                {card.description}
              </div>
              <div className="text-2xl font-black text-gray-800 mb-1">{card.statValue}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">{card.statLabel}</div>
              <span 
                className="inline-block text-xs font-bold tracking-wider uppercase px-2 py-1 rounded-full"
                style={{background: badges[card.badge].bg, color: badges[card.badge].color}}
              >
                {badges[card.badge].label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white py-16">
        <div className="max-w-297 2xl:max-w-360 mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-600 mb-2">{s.value}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}