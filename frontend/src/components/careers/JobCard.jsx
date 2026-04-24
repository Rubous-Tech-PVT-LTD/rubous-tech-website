import React from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

const JobCard = ({ job }) => (
  <div className="glass-card p-8 hover-lift group border-primary/10 hover:border-primary/30 transition-all duration-300">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="badge">{job.department}</span>
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">{job.type}</span>
        </div>
        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors text-white">{job.title}</h3>
        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-primary" />
            {job.location}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-primary" />
            {job.experienceLevel}
          </div>
        </div>
      </div>
      <button className="btn btn-primary whitespace-nowrap">
        Apply Now
        <ArrowRight size={18} />
      </button>
    </div>
  </div>
);

export default JobCard;
