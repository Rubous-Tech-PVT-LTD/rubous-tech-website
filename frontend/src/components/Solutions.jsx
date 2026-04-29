import React from "react";
import {
  Bot,
  Calendar,
  MessageSquare,
  Users,
  Monitor,
  Rocket,
} from "lucide-react";

const solutions = [
  {
    icon: <Bot size={20} />,
    title: "AI Chatbot Automation",
    desc: "24/7 intelligent customer support that learns and adapts to your user needs.",
    points: [
      "Natural Language Processing",
      "Multi-platform Integration",
      "Dynamic Lead Qualification",
    ],
  },
  {
    icon: <Calendar size={20} />,
    title: "Booking Automation System",
    desc: "Seamless scheduling workflows that eliminate back-and-forth manual coordination.",
    points: [
      "Real-time Syncing",
      "Automated Reminders",
      "Payment Gateway Support",
    ],
  },
  {
    icon: <MessageSquare size={20} />,
    title: "WhatsApp Automation",
    desc: "Reach your customers where they are with automated conversational marketing.",
    points: [
      "Broadcast Management",
      "Order Status Updates",
      "API Driven Flows",
    ],
  },
  {
    icon: <Users size={20} />,
    title: "CRM & Lead Management",
    desc: "Centralize your customer data and automate the entire sales pipeline journey.",
    points: [
      "Auto-lead Routing",
      "Behavioral Tracking",
      "Predictive Analytics",
    ],
  },
  {
    icon: <Monitor size={20} />,
    title: "Web & App Development",
    desc: "High-performance digital products engineered for scalability and speed.",
    points: [
      "Custom SaaS Solutions",
      "Mobile-first Design",
      "Headless Architectures",
    ],
  },
  {
    icon: <Rocket size={20} />,
    title: "Business Automation",
    desc: "End-to-end operational automation to optimize internal business processes.",
    points: [
      "ERP Workflows",
      "Financial Reporting",
      "Supply Chain Logic",
    ],
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="bg-[#f8f9ff] lg:py-32 md:py-20 py-16">
      <div className="max-w-297 mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Our Intelligent Solutions
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
          Tailored automation strategies designed to scale your business
          efficiency across every department.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mb-4">
                {item.desc}
              </p>

              {/* Points */}
              <ul className="space-y-2">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Solutions;