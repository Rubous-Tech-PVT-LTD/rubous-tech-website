import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section className="w-full min-h-[calc(100vh-60px)] bg-[#f3f3f3] flex items-center px-6 py-12">
      <div className="max-w-297 container 2xl:max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left Content */}
        <div className="space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Intelligent Systems
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">
            We Build{" "}
            <span className="text-blue-600">Smart Automation</span>{" "}
            Systems
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed">
            Helping businesses save time and scale faster through Liquid
            Architecture and orchestrated digital intelligence.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition shadow-md">
              Learn More
            </button>

            <Link
              to="/our-process"
              className="text-blue-600 font-semibold hover:text-blue-700 transition"
            >
              Our Process
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative bg-[#dfe3f0] rounded-[40px] p-4 rotate-[-4deg] shadow-lg max-w-md w-full">
            <img
              src="/aboutHero.webp"
              alt="Smart automation system"
              className="w-full rounded-4xl object-cover rotate-[4deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;