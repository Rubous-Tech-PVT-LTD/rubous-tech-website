import React from 'react';
import { Cpu, Search, Calendar, ShieldCheck, Zap } from 'lucide-react';

const AI_TASKS = [
  { icon: Search, text: "Analyzing client inquiry patterns..." },
  { icon: Calendar, text: "Optimizing calendar availability..." },
  { icon: Zap, text: "Real-time conflict resolution active" },
  { icon: ShieldCheck, text: "Verification layer processing..." },
  { icon: Cpu, text: "Neural routing for high-priority bookings" },
  { icon: Search, text: "Deep-scanning slot 402..." },
];

const AIProcessingMarquee = () => {
  return (
    <div className="w-full bg-navy/5 border-y border-navy/5 py-4 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
        {[...AI_TASKS, ...AI_TASKS].map((task, index) => (
          <div key={index} className="flex items-center gap-3 text-navy/40 font-medium text-xs uppercase tracking-widest">
            <task.icon size={14} className="text-primary/50" />
            {task.text}
          </div>
        ))}
      </div>
      
      {/* Gradients to fade out edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
    </div>
  );
};

export default AIProcessingMarquee;
