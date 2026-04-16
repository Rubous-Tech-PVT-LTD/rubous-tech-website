import React from "react";
import { Brain, Clock, Puzzle, Shield } from "lucide-react";

const features = [
  {
    title: "AI-Powered Workflows",
    description:
      "Automations that don't just follow rules, but understand context and intent.",
    icon: Brain,
  },
  {
    title: "24/7 Automation",
    description:
      "Uninterrupted operations that maintain peak efficiency round the clock.",
    icon: Clock,
  },
  {
    title: "Easy Integrations",
    description:
      "Connect with your existing tech stack in minutes, not months.",
    icon: Puzzle,
  },
  {
    title: "Data Sovereignty",
    description:
      "Your data remains yours. Secure, encrypted, and isolated environments.",
    icon: Shield,
  },
];

const WhyCompanies = () => {
  return (
    <section className="bg-navy/5 py-20">
      <div className="container mx-auto px-5">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#32294F] mb-6">
              Why the world’s best companies choose Rubous.
            </h2>

            <p className="text-gray-600 mb-6 max-w-md">
              We provide the technical edge that turns standard operations into competitive advantages.
            </p>

            <button className="text-indigo-600 font-medium hover:underline">
              Explore all features →
            </button>
          </div>

          {/* Right Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition hover:scale-[1.02]"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-lg mb-4">
                    <Icon size={20} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#32294F] mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyCompanies;