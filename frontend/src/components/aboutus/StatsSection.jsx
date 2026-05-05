import React from "react";

const stats = [
  { value: "5K+", label: "CLIENTS" },
  { value: "10K+", label: "AUTOMATIONS" },
  { value: "50+", label: "PROJECTS" },
  { value: "4.9", label: "RATING" },
];

const StatsSection = () => {
  return (
    <div className="w-full bg-[#eef4ff] py-20 flex justify-center">
      <div className="w-full max-w-5xl 2xl:max-w-7xl px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl py-6 flex flex-col items-center justify-center shadow-sm"
            >
              <h2 className="text-blue-600 text-2xl sm:text-3xl font-bold">
                {item.value}
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm tracking-wide mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsSection;