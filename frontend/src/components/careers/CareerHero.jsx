import React from "react";
import WhyJoinUs from "./WhyJoinUs";
import OurCulture from "./OurCulture";
import OpenPositions from "./OpenPosition";
import StartJourney from "./StartJourney";
import Footer from "../Footer";

export default function CareerHero() {
  return (
    <>
      <div className="bg-[#f8f9ff] py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-4 py-1 rounded-full mb-5 uppercase">
              We Are Hiring
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Join Our <span className="text-blue-600">Team</span>
            </h1>

            <p className="text-gray-500 mt-5 max-w-md">
              Build the future of automation with us. We're looking for
              visionaries, makers, and problem solvers to orchestrate digital
              intelligence.
            </p>

            <div className="flex items-center gap-4 mt-8 flex-wrap">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
                View Openings
              </button>
              <button className="bg-blue-100 text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-200 transition">
                Our Culture
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="bg-white p-4 rounded-3xl shadow-lg">
              <img
                src="https://i.ibb.co/KxSfs6QR/abouthero.png"
                alt="Two colleagues collaborating at a desk"
                className="rounded-xl w-full max-w-md lg:max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}