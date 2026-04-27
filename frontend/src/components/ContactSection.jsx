import { Headset, ShieldCheck } from "lucide-react";
import { useState } from "react";

const services = [
  "AI Automation",
  "Web Development",
  "CRM Solutions",
  "Business Automation",
];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Data:", form);
      setSuccess(true);

      // Reset form
      setForm({ name: "", email: "", service: "" });
      setErrors({});
    }
  };

  return (
    <section className="bg-[#f3f6ff] md:py-24 sm:py-16 py-12 px-6">
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-lg grid md:grid-cols-2">
        
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
                placeholder="John Doe"
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
                placeholder="john@company.com"
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
                {services.map((s, i) => (
                  <option key={i} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.service}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Schedule Consultation
            </button>

            {/* Success */}
            {success && (
              <p className="text-green-600 text-sm mt-2">
                ✅ Form submitted successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
export default ContactSection;