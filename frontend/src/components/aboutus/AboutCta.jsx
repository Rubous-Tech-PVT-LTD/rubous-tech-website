import React from "react";

const AboutCta = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-4 flex justify-center">
      <div className="w-full max-w-5xl bg-blue-700 rounded-3xl py-12 px-6 text-center shadow-lg">
        
        {/* Heading */}
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
          Let’s build your automation
        </h2>

        {/* Subtext */}
        <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto mb-8">
          Ready to reclaim your time? Join thousands of businesses scaling faster with Rubous Tech.
        </p>

        {/* Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded-xl shadow-md transition">
          Contact Us
        </button>

      </div>
    </section>
  );
}
export default AboutCta;