import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0b1f3a] text-gray-300 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10">
          
          {/* LOGO + DESC */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-3">
              Rubous Tech
            </h2>
            <p className="text-sm text-gray-400 mb-6">
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
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/booking" className="hover:text-white">Booking Automation</NavLink></li>
              <li><NavLink to="/ai-handler" className="hover:text-white">AI Inquiry Handler</NavLink></li>
              <li><NavLink to="/calendar" className="hover:text-white">Calendar Sync</NavLink></li>
              <li><NavLink to="/enterprise" className="hover:text-white">Enterprise Tools</NavLink></li>
            </ul>
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
                <Mail size={16} className="text-blue-500" />
                <a href="mailto:hello@ruboustech.com" className="hover:text-white">
                  hello@ruboustech.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-500" />
                <a href="tel:+15550001234" className="hover:text-white">
                  +1 (555) 000-1234
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-blue-500 mt-1" />
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
          
          <p> 2026 Rubous Tech Private Limited. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <NavLink to="/privacy" className="hover:text-white">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="hover:text-white">
              Terms and Conditions
            </NavLink>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;