import React from "react";
import { Sparkles, Zap, Heart, ShieldCheck } from "lucide-react";

const topValues = [
  {
    title: "Innovation First",
    description:
      "We don't just follow trends; we set them. Our R&D team works tirelessly to integrate the latest neural architectures into your daily tools.",
    icon: Sparkles,
    large: true,
  },
  {
    title: "Simplicity",
    description:
      "Complex logic, simple experience. That is our hallmark.",
    icon: Zap,
  },
  {
    title: "Customer First",
    description:
      "Your success metrics are our internal KPIs.",
    icon: Heart,
  },
];

const bottomValue = {
  title: "Reliability as a Standard",
  description:
    "With 99.99% uptime and enterprise-grade security protocols, your business stays running while you sleep. We handle the heavy lifting, 24/7.",
  icon: ShieldCheck,
};

const Values = () => {
  return (
    <section className=" py-20">
      <div className="container mx-auto px-5">
        
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#32294F] mb-14">
          Values that Drive Us
        </h2>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {topValues.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`rounded-3xl p-8 shadow-sm transition hover:shadow-md ${
                  item.large
                    ? "md:col-span-2 bg-background"
                    : "bg-primary/10"
                }`}
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-xl mb-6">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#32294F] mb-3">
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

        {/* Bottom Gradient Card */}
        <div className="rounded-3xl p-10 bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-md">
          <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl mb-6">
            <bottomValue.icon size={22} />
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-white">
            {bottomValue.title}
          </h3>

          <p className="text-white/90 max-w-2xl leading-relaxed">
            {bottomValue.description}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Values;