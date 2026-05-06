import React from "react";
import { Link, Settings, Zap } from 'lucide-react';

const steps = [
  {
    icon: <Link className="w-6 h-6 text-white" />,
    title: "Connect WhatsApp API",
    description: "Seamlessly link your official WhatsApp Business account through our secure portal.",
  },
  {
    icon: <Settings className="w-6 h-6 text-white" />,
    title: "Configure Workflows",
    description: "Design complex interaction paths using our intuitive drag-and-drop automation builder.",
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Automate Conversations",
    description: "Go live and watch your system handle thousands of queries while you focus on growth.",
  },
];

export default function ThreeSteps() {
  return (
    <section className="bg-linear-to-br from-gray-50 to-blue-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-297 container 2xl:max-w-360 px-6 mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-12">
          Three Steps to Intelligence
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-start gap-0 relative max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative flex-1">
              {index < steps.length  && (
                <div className="absolute top-7 left-1/2 w-full h-0.5 bg-gray-300 z-0 transform -translate-x-1/2"></div>
              )}
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-5 relative z-10 shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-2.5">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-6 max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}