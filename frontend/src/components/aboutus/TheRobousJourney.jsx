import React from "react";

const timelineData = [
  {
    year: "2018",
    title: "The Spark",
    description:
      "Founded in a garage with a mission to make AI accessible for every operational scale.",
  },
  {
    year: "2021",
    title: "Global Launch",
    description:
      "Released our core automation engine, serving over 100 enterprise clients in the first year.",
  },
  {
    year: "2024",
    title: "Next Gen AI",
    description:
      "Integrating generative models to create truly autonomous workflows that learn and adapt.",
  },
];

const TheRobousJourney = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-5 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#32294F] mb-3">
          The Rubous Journey
        </h2>
        <p className="text-gray-600 mb-16">
          From a small lab in 2018 to a global leader in AI automation.
        </p>

        {/* Timeline */}
        <div className="relative">
          
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-indigo-300 transform -translate-x-1/2"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex items-center mb-16 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className="w-1/2 px-6">
                <div className="bg-primary/10 rounded-xl p-6 text-left shadow-sm">
                  <h3 className="text-xl font-semibold text-[#32294F] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="relative flex items-center justify-center ">
                <div className="w-[40px] h-[40px] rounded-full bg-indigo-600 text-white text-sm flex items-center justify-center shadow-md z-10">
                  {item.year}
                </div>
              </div>

              {/* Empty Space */}
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TheRobousJourney;