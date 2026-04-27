import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#f8f9ff] py-16 lg:h-[calc(100vh-62px)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-4 py-1 rounded-full mb-5">
            AI-POWERED AUTOMATION
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight wrap-break-words">
            Automate Your <br />
            Workflows &{" "}
            <span className="text-blue-600">Save Hours</span> <br />
            Every Day
          </h1>

          {/* Description */}
          <p className="text-gray-500 mt-5 max-w-md">
            We build smart automation systems to simplify your business
            operations, allowing your team to focus on high-impact strategic
            growth.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-8 flex-wrap">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
              Get Started
            </button>

            <button className="flex items-center gap-2 bg-blue-100 text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-200 transition">
              ▶ Watch Demo
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="relative flex justify-center">
          <div className="bg-white p-4 rounded-3xl shadow-lg">
            <img
              src="/hero-img.webp"
              alt="dashboard"
              className="rounded-xl w-full max-w-md lg:max-w-lg"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-2 left-2 sm:left-10 md:left-6 bg-white px-4 py-2 rounded-xl shadow flex items-center gap-2">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              ⚡
            </div>
            <div>
              <p className="font-semibold text-lg">1200+</p>
              <p className="text-xs text-gray-500">Automations</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;