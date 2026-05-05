const CTASection = () => {
  return (
    <div className="w-full bg-[#f8f9ff] md:py-24 sm:py-16 py-12 px-6 ">
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto bg-linear-to-r from-blue-700 to-blue-500 rounded-3xl px-6 py-10 md:px-12 md:py-14 text-center text-white shadow-lg">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Ready to automate your business?
        </h2>

        {/* Subtext */}
        <p className="text-sm md:text-base text-blue-100 max-w-2xl mx-auto mb-8">
          Join hundreds of industry-leading companies that are saving
          thousands of hours every month with Rubous Tech.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          
          {/* Primary Button */}
          <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
            Get Started
          </button>

          {/* Secondary Button */}
          <button className="border border-blue-300 text-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition">
            Schedule Demo
          </button>

        </div>
      </div>
    </div>
  );
}

export default CTASection;