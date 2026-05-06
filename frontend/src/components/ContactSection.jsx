import { Headset, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

const ContactSection = () => {
  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    time: "",
    date: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setServicesLoading(true);

        const response = await fetch('/api/services');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseJson = await response.json();

        if (responseJson.success && Array.isArray(responseJson.data)) {
          setServices(
            responseJson.data.map((service) => ({
              id: service.id || service._id,
              title: service.title,
            }))
          );
        } else {
          throw new Error('Invalid response format from API');
        }
      } catch (error) {
        console.error('Error fetching services:', error);
        setServices([]);
      } finally {
        setServicesLoading(false);
      }
    };

    fetchServices();
  }, []);

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.service) {
      newErrors.service = "Please select a service";
    }

    if (!form.time) {
      newErrors.time = "Please select a time";
    }

    if (!form.date) {
      newErrors.date = "Please select a date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        setSubmitting(true);
        setSuccess(false);

        const response = await fetch('/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            clientName: form.name,
            clientEmail: form.email,
            service: form.service,
            time: form.time,
            date: form.date,
          }),
        });

        const responseJson = await response.json();

        if (!response.ok || !responseJson.success) {
          throw new Error(responseJson.message || 'Unable to save consultation request');
        }

        setSuccess(true);

        // Reset form
        setForm({ name: "", email: "", service: "", time: "", date: "" });
        setErrors({});
      } catch (error) {
        setSuccess(false);
        setErrors((currentErrors) => ({
          ...currentErrors,
          submit: error.message,
        }));
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="bg-[#f3f6ff] md:py-24 sm:py-16 py-12 px-6">
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-lg grid md:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="bg-linear-to-br from-blue-700 to-blue-500 text-white md:p-10 py-8 px-6">
          <h2 className="text-4xl  max-w-75  font-bold mb-4">
            Scale Faster with Smart Tech
          </h2>

          <p className="text-lg text-blue-100/80 mb-6">
            Ready to see how Rubous Tech can transform your day-to-day operations?
            Our consultants are ready to build your roadmap.
          </p>

          <div className="space-y-4 text-base">
            <div className="flex items-center gap-3">
              <span className="bg-white/20 p-2 rounded-lg ">
              <ShieldCheck size={16} />
              </span>
              Secure Data Handling
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-white/20 p-2 rounded-lg">
              <Headset size={16} />
              </span>
              Priority 24/7 Support
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white md:p-10 py-8 px-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Name */}
            <div>
              <label className="text-xs font-medium text-gray-500">
                FULL NAME
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-lg outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-medium text-gray-500">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                placeholder="info@company.com"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-lg outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Service */}
            <div>
              <label className="text-xs font-medium text-gray-500">
                SERVICE NEEDED
              </label>
              <select
                value={form.service}
                onChange={(e) =>
                  setForm({ ...form, service: e.target.value })
                }
                className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-lg outline-none"
              >
                <option value="">Select a service</option>
                {servicesLoading && (
                  <option value="" disabled>
                    Loading services...
                  </option>
                )}
                {!servicesLoading && services.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.service}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Time */}
              <div>
                <label className="text-xs font-medium text-gray-500">
                  TIME
                </label>
                <input
                  type="time"
                  value={form.time}
                  onChange={(e) =>
                    setForm({ ...form, time: e.target.value })
                  }
                  className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-lg outline-none"
                />
                {errors.time && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.time}
                  </p>
                )}
              </div>

              {/* Date */}
              <div>
                <label className="text-xs font-medium text-gray-500">
                  DATE
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) =>
                    setForm({ ...form, date: e.target.value })
                  }
                  className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-lg outline-none"
                />
                {errors.date && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.date}
                  </p>
                )}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? 'Scheduling...' : 'Schedule Consultation'}
            </button>

            {errors.submit && (
              <p className="text-red-500 text-sm mt-2">{errors.submit}</p>
            )}

            {/* Success */}
            {success && (
              <p className="text-green-600 text-sm mt-2">
                ✅ Consultation request submitted successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
export default ContactSection;