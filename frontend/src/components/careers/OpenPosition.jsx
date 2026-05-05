import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";

// Add to index.html:
// <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>

const badgeStyles = {
  engineering: "bg-blue-100 text-blue-600",
  product: "bg-blue-100 text-blue-600",
  growth: "bg-green-100 text-green-600",
};

export default function OpenPositions() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch positions from backend Career model
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/careers');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const responseJson = await response.json();
        
        // Backend returns: { success: true, data: [...] }
        if (responseJson.success && responseJson.data) {
          // Map backend Career model fields to frontend format
          const mappedPositions = responseJson.data.map(career => ({
            id: career._id,
            title: career.title,
            badge: career.department,
            badgeType: career.department.toLowerCase(),
            desc: career.description,
            location: career.location,
            type: career.type,
            department: career.department,
            description: career.description,
            responsibilities: career.responsibilities || [],
            requirements: career.requirements || [],
            benefits: career.benefits || [], // Remove hardcoded benefits, use from backend
            experienceLevel: career.experienceLevel
          }));
          setPositions(mappedPositions);
        } else {
          throw new Error('Invalid response format from API');
        }
      } catch (err) {
        console.error('Error fetching positions:', err);
        setError(err.message);
        setPositions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseJobCard = () => {
    setSelectedJob(null);
  };

  return (
    <>
      <div className="bg-[#f8f9ff] py-16 overflow-hidden">
        <div className="max-w-297 container 2xl:max-w-360 mx-auto px-6">

          {/* ── Header ── */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight mb-2">
                Open Positions
              </h2>
              <p className="text-gray-500">
                Find your next challenge in our growing team.
              </p>
            </div>
            <div className="bg-blue-100 text-blue-600 text-xs font-semibold px-4 py-2 rounded-lg uppercase">
              {positions.length} Open Roles
            </div>
          </div>

          {/* ── Loading State ── */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          )}

          {/* ── Error State ── */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-600 mb-2">Unable to load positions</p>
              <p className="text-red-500 text-sm">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Try Again
              </button>
            </div>
          )}

          {/* ── Cards ── */}
          {!loading && !error && (
            <div className="space-y-4">
              {positions.map((pos) => (
                <div
                  key={pos.id || pos.title}
                  className="bg-white p-6 rounded-xl shadow-lg flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
                >
                  {/* Left */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-800">
                        {pos.title}
                      </h3>
                      <span className={`text-xs font-semibold uppercase px-3 py-1 rounded-md ${badgeStyles[pos.badgeType]}`}>
                        {pos.badge}
                      </span>
                    </div>
                    <p className="text-gray-500 leading-relaxed max-w-2xl">
                      {pos.desc}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-6 flex-shrink-0 mt-4 lg:mt-0">
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-800 mb-1">
                        {pos.location}
                      </div>
                      <div className="text-xs text-gray-400">{pos.type}</div>
                    </div>
                    <button
                      onClick={() => handleApplyClick(pos)}
                      className="bg-blue-100 text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-200 transition"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Job Card Modal */}
      {selectedJob && (
        <JobCard 
          job={selectedJob} 
          onClose={handleCloseJobCard} 
        />
      )}
    </>
  );
}