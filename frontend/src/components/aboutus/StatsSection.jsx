import React from "react";

const stats = [
  { value: "500+", label: "Businesses Powered" },
  { value: "10k+", label: "Tasks Daily" },
  { value: "98%", label: "Satisfaction Rate" },
];

const StatsSection = () => {
  return (
    <section className="bg-primary/10 py-16">
      <div className="container mx-auto px-5">


        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 bg-background rounded-2xl py-8 px-6 text-center shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">
                {item.value}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;