import React from "react";
import { Clock, TrendingUp, Users, RefreshCw, MessageCircle, Activity } from 'lucide-react';

const iconMap = {
  Clock,
  TrendingUp,
  Users,
  RefreshCw,
  MessageCircle,
  Activity,
};

export default function QuantifiableResults({ serviceDetail }) {
  const results = serviceDetail?.results;
  const cards = Array.isArray(results?.cards) ? results.cards : [];
  const highlight = results?.highlight;
  const title = results?.title;
  const description = results?.description;

  if (!results || cards.length === 0 || !highlight) {
    return null;
  }

  return (
    <section className="bg-linear-to-br from-gray-50 to-blue-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-297 container 2xl:max-w-360 px-6 mx-auto grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-4">
            {title}
          </h1>
          <p className="text-gray-600 text-base leading-7">
            {description}
          </p>
          <div className="bg-white rounded-2xl p-8 flex flex-col gap-2 shadow-lg">
            <div className="text-4xl sm:text-5xl font-bold text-blue-600 tracking-tight">{highlight.value}</div>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mt-2">{highlight.label}</div>
          </div>
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Clock;

            return (
              <div key={i} className="bg-white rounded-2xl p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-2 h-10 flex items-center justify-start">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-base font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-6">{feature.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}