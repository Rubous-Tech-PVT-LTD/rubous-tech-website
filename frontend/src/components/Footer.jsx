import React from 'react';
import { MessageSquare, Share2, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Rubous Tech" className="h-14 w-auto brightness-0 invert" />
              <span className="text-xl font-bold">Rubous Tech</span>
            </div>
            <p className="text-white/60 leading-relaxed font-medium">
              Revolutionizing the digital landscape with intelligent, 
              AI-driven booking automation solutions. Empowering businesses 
              to focus on growth, not schedules.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <MessageSquare size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Solution</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Booking Automation</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">AI Inquiry Handler</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Calendar Sync</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Enterprise Tools</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/60 hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Success Stories</a></li>
              <li><Link to="/careers" className="text-white/60 hover:text-white transition-colors">Careers</Link></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex gap-3 text-white/60">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="text-sm">info@ruboustech.com</span>
              </li>
              <li className="flex gap-3 text-white/60">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3 text-white/60">
                <MapPin size={18} className="text-primary shrink-0" />
                <span className="text-sm">
                  1st Floor, Chandrabani Road, <br />
                  Majra, Dehradun, UK 248171
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            &copy; 2026 Rubous Tech Private Limited. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="text-white/40 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-white/40 hover:text-white text-sm transition-colors">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
