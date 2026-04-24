import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JobCard from '../components/careers/JobCard';
import { Briefcase, Clock, ArrowRight } from 'lucide-react';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/careers');
        const result = await response.json();
        if (result.success) {
          setJobs(result.data);
        } else {
          setError(result.message);
        }
      } catch (err) {
        setError('Failed to fetch career opportunities. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-20 text-center">
          <div className="badge mb-6">Join Our Team</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Shape the Future of <span className="text-gradient">Intelligence</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-12">
            We're looking for visionary thinkers and bold developers to help us build 
            invisible engines that power the next generation of automation.
          </p>
        </section>

        {/* Jobs Listing */}
        <section className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Open Positions</h2>
            <div className="text-muted font-medium">{jobs.length} roles available</div>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="glass-card p-12 text-center border-red-500/20">
              <p className="text-red-400 font-medium">{error}</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <p className="text-muted text-lg">No open positions at the moment. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {jobs.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </div>
          )}
        </section>

        {/* Culture / Perks Section */}
        <section className="container mx-auto px-6 mt-32">
          <div className="glass-card p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Why Rubous?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-primary/10 rounded-lg text-primary">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold">Cutting Edge</h4>
                      <p className="text-sm text-muted">Work with the latest in AI and LLM orchestration.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-primary/10 rounded-lg text-primary">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold">Flexible Flow</h4>
                      <p className="text-sm text-muted">Remote-first culture with flexible hours for focused output.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                <blockquote className="text-xl italic font-medium mb-4">
                  "At Rubous, we don't just build software. We build the machinery that makes complexity vanish."
                </blockquote>
                <div className="font-bold">— CTO, Rubous Tech</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
