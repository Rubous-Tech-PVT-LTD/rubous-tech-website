import React from "react";
import { Link, Settings, Zap } from 'lucide-react';

const iconMap = {
  Link,
  Settings,
  Zap,
};

export default function ThreeSteps({ serviceDetail }) {
  const stepData = Array.isArray(serviceDetail?.steps?.items) ? serviceDetail.steps.items : [];
  const title = serviceDetail?.steps?.title;

  if (!title || stepData.length === 0) {
    return null;
  }

  return (
    <section className="bg-linear-to-br from-gray-50 to-blue-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-297 container 2xl:max-w-360 px-6 mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-12">
          {title}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-start gap-0 relative max-w-4xl mx-auto">
          {stepData.map((step, index) => {
            const Icon = iconMap[step.icon] || Link;

            return (
            <div key={index} className="flex flex-col items-center relative flex-1">
              {index < stepData.length && (
                <div className="absolute top-7 left-1/2 w-full h-0.5 bg-gray-300 z-0 transform -translate-x-1/2"></div>
              )}
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-5 relative z-10 shadow-lg">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-2.5">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-6 max-w-xs">
                {step.body}
              </p>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}