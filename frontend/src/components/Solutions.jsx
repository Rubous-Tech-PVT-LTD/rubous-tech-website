import React, { useEffect, useState } from "react";
import {
  Bot,
  Calendar,
  MessageCircle,
  LayoutDashboard,
  Globe,
  Zap,
  Shield,
} from "lucide-react";

const iconMap = {
  Bot,
  Calendar,
  MessageCircle,
  LayoutDashboard,
  Globe,
  Zap,
};

const colorStyles = {
  blue: "bg-blue-100 text-blue-600",
  purple: "bg-purple-100 text-purple-600",
  green: "bg-green-100 text-green-600",
  orange: "bg-orange-100 text-orange-600",
  indigo: "bg-indigo-100 text-indigo-600",
  yellow: "bg-yellow-100 text-yellow-700",
};

const Solutions = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/services');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseJson = await response.json();

        if (responseJson.success && Array.isArray(responseJson.data)) {
          setServices(
            responseJson.data.map((service) => ({
              id: service.id || service._id,
              icon: service.icon,
              title: service.title,
              desc: service.tagline,
              points: Array.isArray(service.features) ? service.features : [],
              color: service.color || 'blue',
            }))
          );
        } else {
          throw new Error('Invalid response format from API');
        }
      } catch (err) {
        console.error('Error fetching services:', err);
        setError(err.message);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section id="solutions" className="bg-[#f8f9ff] lg:py-32 md:py-20 py-16">
      <div className="max-w-297 mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Our Intelligent Solutions
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
          Tailored automation strategies designed to scale your business
          efficiency across every department.
        </p>

        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600" />
          </div>
        )}

        {error && !loading && (
          <div className="mt-12 rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-600">
            <p className="font-semibold">Unable to load services</p>
            <p className="mt-1 text-sm text-red-500">{error}</p>
          </div>
        )}

        {!loading && !error && services.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left">
            {services.map((item) => {
              const Icon = iconMap[item.icon] || Shield;
              const iconClasses = colorStyles[item.color] || colorStyles.blue;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className={`w-10 h-10 flex items-center justify-center rounded-lg mb-4 ${iconClasses}`}>
                    <Icon size={20} />
                  </div>

                  <h3 className="font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-4">
                    {item.desc}
                  </p>

                  <ul className="space-y-2">
                    {item.points.map((point, i) => (
                      <li key={`${item.id}-${i}`} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}

        {!loading && !error && services.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-gray-300 bg-white/70 p-8 text-gray-500">
            No services are available right now.
          </div>
        )}

      </div>
    </section>
  );
};

export default Solutions;