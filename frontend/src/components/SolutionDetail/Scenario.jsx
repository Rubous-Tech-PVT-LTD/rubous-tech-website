import React from "react";
import { Send } from 'lucide-react';

const tabs = [
  "Customer support",
  "Order tracking",
  "Promotions",
  "Appointment reminders",
  "Lead nurturing",
];

const SendIcon = () => (
  <Send className="w-4 h-4 text-white" />
);

export default function BuiltForEveryScenario() {
  return (
    <section className="bg-linear-to-br from-blue-50 via-white to-indigo-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl container 2xl:max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8">
          Built for Every Scenario
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {tabs.map((tab) => (
            <div key={tab} className="bg-white border border-gray-300 rounded-full px-6 py-2 text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50 transition-colors">
              {tab}
            </div>
          ))}
        </div>

        {/* Chat Window Image */}
        <div className="bg-white rounded-2xl p-8 shadow-xl max-w-3xl mx-auto">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLPXVvrZb89hahDsa48hpfy_ha8Rqb5eHRg&s" 
            alt="WhatsApp Chat Scenario" 
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}