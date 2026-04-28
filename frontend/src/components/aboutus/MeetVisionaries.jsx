import React from "react";

const team = [
  {
    name: "David Chen",
    role: "Chief Architect",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Automation",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Marcus Thorne",
    role: "Lead Developer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Elena Rodriguez",
    role: "UX Orchestrator",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
];

const MeetVisionaries = () => {
  return (
    <section className="w-full bg-[#eef4ff] py-16 flex justify-center">
      <div className="max-w-297 px-6 w-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Meet the Visionaries
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-md">
              The architects behind the smart automation systems that scale your business.
            </p>
          </div>

          <a
            href="#"
            className="text-blue-600 text-sm mt-4 md:mt-0 hover:underline"
          >
            View All team →
          </a>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden mb-4">
                <img
                  src={`${member.img}?auto=format&fit=crop&w=400&q=80`}
                  alt={member.name}
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="text-gray-900 font-semibold text-sm">
                {member.name}
              </h3>
              <p className="text-blue-600 text-xs mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MeetVisionaries;