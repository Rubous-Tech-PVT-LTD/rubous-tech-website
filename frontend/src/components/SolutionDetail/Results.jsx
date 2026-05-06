import React from "react";
import { Clock, TrendingUp, Users, RefreshCw, MessageCircle, Activity } from 'lucide-react';

// --- Feature Cards Data ---
const features = [
  {
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    title: "Instant communication",
    description: "Response times measured in milliseconds, not hours or days.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    title: "Higher engagement",
    description: "Interactive buttons and lists drive meaningful actions from users.",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Reduced manual work",
    description: "Free up your support agents for complex tasks that need a human touch.",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-blue-600" />,
    title: "Real-time updates",
    description: "Dynamic data fetching ensures users always get latest information.",
  },
  {
    icon: <Activity className="w-6 h-6 text-blue-600" />,
    title: "Better insights",
    description: "Track metrics that matter and make data-driven decisions.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-blue-600" />,
    title: "Seamless integration",
    description: "Works effortlessly with your existing tools and workflows.",
  },
];

export default function QuantifiableResults() {
  return (
    <section className="bg-linear-to-br from-gray-50 to-blue-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-297 container 2xl:max-w-360 px-6 mx-auto grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-4">
            Quantifiable Results<br />for Your Team
          </h1>
          <p className="text-gray-600 text-base leading-7">
            Don't just communicate. Dominate your category<br />
            with speed and precision.
          </p>
          <div className="bg-white rounded-2xl p-8 flex flex-col gap-2 shadow-lg">
            <div className="text-4xl sm:text-5xl font-bold text-blue-600 tracking-tight">98%</div>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mt-2">Average Open Rate</div>
          </div>
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-2 h-10 flex items-center justify-start">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-6">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}