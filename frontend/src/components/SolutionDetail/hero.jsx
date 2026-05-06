import { useState } from "react";
import { Video, Phone, MoreHorizontal } from 'lucide-react';

export default function WhatsAppHero() {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Text content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Now with AI-Powered Workflows
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4">
            WhatsApp
            <br className="hidden sm:block" />
            Automation for
            <br className="hidden sm:block" />
            <span className="text-blue-600 block">
              Smart Customer
              <br className="hidden sm:block" />
              Engagement
            </span>
          </h1>

          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
            Automate conversations, send instant updates, and manage customer
            interactions using intelligent workflows designed for modern
            digital scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button
              className={`bg-blue-600 text-white rounded-lg px-8 py-3 font-semibold transition-all duration-200 hover:bg-blue-700 hover:shadow-lg ${
                primaryHover ? "bg-blue-700 shadow-lg" : ""
              }`}
              onMouseEnter={() => setPrimaryHover(true)}
              onMouseLeave={() => setPrimaryHover(false)}
            >
              Book Demo
            </button>
            <button
              className={`bg-white text-gray-800 border border-gray-300 rounded-lg px-8 py-3 font-medium transition-all duration-200 hover:border-blue-600 hover:text-blue-600 ${
                secondaryHover ? "border-blue-600 text-blue-600" : ""
              }`}
              onMouseEnter={() => setSecondaryHover(true)}
              onMouseLeave={() => setSecondaryHover(false)}
            >
              See How It Works
            </button>
          </div>
        </div>

        {/* Right: WhatsApp Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLPXVvrZb89hahDsa48hpfy_ha8Rqb5eHRg&s" 
                alt="WhatsApp Automation Demo" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}