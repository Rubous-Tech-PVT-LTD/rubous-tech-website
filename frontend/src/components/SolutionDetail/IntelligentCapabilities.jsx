import React from 'react';
import { Play, TrendingUp, Users, Settings, Bell } from 'lucide-react';

const capabilities = [
  {
    icon: <Play className="w-5 h-5 text-blue-600" />,
    title: "Broadcast Messaging",
    body: "Reach your entire audience at once with personalized broadcast campaigns that feel like 1:1 conversations.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
    title: "Order Status Updates",
    body: "Keep customers informed with real-time tracking, shipping notifications, and delivery confirmations automatically.",
  },
  {
    icon: <Users className="w-5 h-5 text-blue-600" />,
    title: "Automated Replies",
    body: "Instant responses to common queries powered by decision trees and natural language processing.",
  },
  {
    icon: <Settings className="w-5 h-5 text-blue-600" />,
    title: "API-Driven Workflows",
    body: "Connect with your existing CRM, ERP, or e-commerce platform via our robust REST API for seamless data flow.",
  },
  {
    icon: <Users className="w-5 h-5 text-blue-600" />,
    title: "Customer Segmentation",
    body: "Tag and group your customers based on behavior, purchase history, or location for hyper-targeted messaging.",
  },
  {
    icon: <Bell className="w-5 h-5 text-blue-600" />,
    title: "Smart Notifications",
    body: "Contextual alerts and reminders that trigger based on specific customer journey milestones.",
  },
];

const IntelligentCapabilities = () => {
  return (
    <section className="bg-linear-to-br from-blue-50 via-white to-indigo-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-297 container 2xl:max-w-360 px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Intelligent Capabilities
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
            Designed for modern businesses requiring high throughput and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                {cap.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {cap.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {cap.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligentCapabilities;