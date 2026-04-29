import React from "react";
import { Settings, Brain, Cloud, Share2 } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Workflow Automation",
    desc: "Streamline repetitive tasks with intelligent robotic process automation.",
  },
  {
    icon: Brain,
    title: "Custom AI Solutions",
    desc: "Bespoke machine learning models tailored to your specific business needs.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Scalable and secure cloud architecture designed for high-performance automation.",
  },
  {
    icon: Share2,
    title: "Data Orchestration",
    desc: "Centralize and synchronize your data streams for real-time decision making.",
  },
];

const KeyFeatures = () => {
  return (
    <section className="w-full bg-gray-100 py-16  flex justify-center">
      <div className="max-w-297 px-6 w-full">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Our Key Features
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 mb-4">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>

                {/* Title */}
                <h3 className="text-gray-900 font-semibold mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default KeyFeatures;