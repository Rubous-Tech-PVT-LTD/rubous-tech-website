import React from 'react';

// Add CSS for hiding scrollbar
const style = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
`;

const JobCard = ({ job, onClose }) => {
  return (
    <>
      <style>{style}</style>
      <div className="fixed inset-0  bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[85vh] shadow-xl overflow-y-auto scrollbar-hide">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{job.title}</h2>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-lg uppercase">
                {job.department}
              </span>
              <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-lg uppercase">
                {job.type}
              </span>
              <span>{job.location}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold leading-none self-start"
          >
            ×
          </button>
        </div>

        {/* Job Description */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">About the Role</h3>
            <p className="text-gray-500 leading-relaxed">{job.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Responsibilities</h3>
            <ul className="space-y-2 text-gray-500">
              {job.responsibilities?.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Requirements</h3>
            <ul className="space-y-2 text-gray-500">
              {job.requirements?.map((requirement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">What We Offer</h3>
            <ul className="space-y-2 text-gray-500">
              {job.benefits?.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Apply Button */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => {
              // Scroll to application form
              onClose();
              const formElement = document.getElementById('start-journey');
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="flex-1 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Apply for This Position
          </button>
        
        </div>
      </div>
      </div>
    </>
  );
};

export default JobCard;
