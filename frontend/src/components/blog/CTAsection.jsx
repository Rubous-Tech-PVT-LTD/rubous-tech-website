import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <div className="w-full bg-[#f8f9ff] py-16 sm:py-20 md:py-24 px-6">
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto bg-linear-to-r from-blue-600 to-blue-500 rounded-3xl px-6 sm:px-12 py-12 sm:py-16 text-center text-white shadow-lg">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto mb-8">
          Our team of experts can help you orchestrate a digital ecosystem tailored to your unique business logic.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          
          {/* Primary Button */}
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition inline-flex items-center gap-2">
            Book Consultation
          </button>

          {/* Secondary Button */}
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition font-semibold inline-flex items-center gap-2">
            Explore Services
            <ArrowRight className="h-5 w-5" />
          </button>

        </div>
      </div>
    </div>
  );
}

export default CTASection;