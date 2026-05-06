import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logoDark.png";

const ServiceLinks = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/services');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setServices(json.data.map(s => ({ id: s.id || s._id, title: s.title })));
        } else {
          setServices([]);
        }
      } catch (err) {
        console.error('Failed to load services', err);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <p className="text-sm text-gray-400">Loading...</p>;

  if (!services || services.length === 0) return null;

  return (
    <ul className="space-y-2 text-sm">
      {services.map((s) => (
        <li key={s.id}>
          <NavLink to={`/services/${s.id}`} className="hover:text-white">{s.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-gray-300 pt-14 pb-6">
      <div className="max-w-297 container 2xl:max-w-360 mx-auto px-6">
        
        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10">
          
          {/* LOGO + DESC */}
          <div>
             <NavLink to="/" className="flex items-center">
                    <img
                      src={Logo}
                      alt="Rubous Tech"
                      className="h-14 w-auto object-contain"
                    />
                  </NavLink>
                 <br/>
            <p className="text-sm text-white mb-6">
              Revolutionizing the digital landscape with intelligent,
              AI-driven automation solutions.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <div className="w-9 h-9 flex items-center justify-center border border-gray-600 rounded-full hover:bg-blue-600 hover:border-blue-600 transition cursor-pointer">
                💬
              </div>
              <div className="w-9 h-9 flex items-center justify-center border border-gray-600 rounded-full hover:bg-blue-600 hover:border-blue-600 transition cursor-pointer">
                🔗
              </div>
              <div className="w-9 h-9 flex items-center justify-center border border-gray-600 rounded-full hover:bg-blue-600 hover:border-blue-600 transition cursor-pointer">
                🌐
              </div>
            </div>
          </div>

          {/* SOLUTION */}
          <div>
            <h3 className="text-white font-medium mb-4">Solution</h3>
            <ServiceLinks />
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/about" className="hover:text-white">About Us</NavLink></li>
              <li><NavLink to="/case-studies" className="hover:text-white">Success Stories</NavLink></li>
              <li><NavLink to="/careers" className="hover:text-white">Careers</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-white">Blog</NavLink></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-white" />
                <a href="mailto:hello@ruboustech.com" className="hover:text-white">
                  hello@ruboustech.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-white" />
                <a href="tel:+15550001234" className="hover:text-white">
                  +1 (555) 000-1234
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-white mt-1" />
                <span>
                  123 Innovation Drive,<br />
                  Silicon Valley, CA 94025
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 mt-10 text-center pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          
          <p className="text-white" >&copy; 2026 Rubous Tech Private Limited. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <NavLink to="/privacy" className="text-white hover:text-gray-300">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="text-white hover:text-gray-300">
              Terms and Conditions
            </NavLink>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;