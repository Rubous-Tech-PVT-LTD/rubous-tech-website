import React from "react";

const OurMission = () => {
  return (
    <section className="w-full bg-gray-100 py-16  flex justify-center">
      <div className="max-w-297 container 2xl:max-w-360 w-full px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-blue-600 text-xs tracking-[0.2em] font-semibold mb-4">
            OUR MISSION
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Driving efficiency through <br />
            smart technology.
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed space-y-2">
            At Rubous Tech, we believe that complexity is the enemy of growth. 
            Our journey began with a simple observation: businesses are drowning 
            in manual tasks that stifle creativity. We’ve dedicated ourselves to 
            orchestrating digital intelligence that acts as a silent force—
            automating the routine so you can focus on the remarkable. It's not 
            just about code; it's about human-centric engineering.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="rounded-2xl overflow-hidden shadow-sm w-70 sm:w-[320px] md:w-90">
            <img
              src="/mission-img.webp "
              alt="Team discussion"
              className="w-full h-full object-cover shadow-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default OurMission;