import React, { useEffect, useState } from "react";

const MeetVisionaries = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/team');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseJson = await response.json();

        if (responseJson.success && Array.isArray(responseJson.data)) {
          const mappedTeam = responseJson.data.map((member) => ({
            name: member.name,
            role: member.role,
            img: member.image,
            bio: member.bio,
            email: member.email,
            socialLinks: member.socialLinks,
          }));

          setTeam(mappedTeam);
        } else {
          throw new Error('Invalid response format from API');
        }
      } catch (err) {
        console.error('Error fetching team members:', err);
        setError(err.message);
        setTeam([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <section className="w-full bg-[#eef4ff] py-16 flex justify-center">
      <div className="max-w-297 px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Meet the Visionaries
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-md">
              The architects behind the smart automation systems that scale your business.
            </p>
          </div>

         
        </div>

        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {error && !loading && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600 mb-2">Unable to load team members</p>
            <p className="text-red-500 text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-gray-50 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="rounded-xl overflow-hidden mb-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-56 object-cover"
                  />
                </div>

                <h3 className="text-gray-900 font-semibold text-sm">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-xs mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MeetVisionaries;