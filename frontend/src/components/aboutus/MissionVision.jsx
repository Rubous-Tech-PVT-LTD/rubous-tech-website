import React from "react";
import { Rocket, Eye } from "lucide-react";

const data = [
  {
    title: "Our Mission",
    description:
      "To eliminate the friction of repetitive labor by deploying intelligent systems that allow human creativity to thrive at the forefront of business.",
    icon: Rocket,
  },
  {
    title: "Our Vision",
    description:
      "To become the invisible fabric of every digital enterprise, orchestrating millions of daily decisions with absolute precision and ethical integrity.",
    icon: Eye,
  },
];

const MissionVision = () => {
  return (
    <section className="bg-primary/10 py-20">
      <div className="container mx-auto px-5">
        
        <div className="flex flex-col md:flex-row gap-8">
          {data.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex-1 bg-background  rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition hover:scale-[1.02]"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-xl mb-6">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-[#32294F] mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MissionVision;