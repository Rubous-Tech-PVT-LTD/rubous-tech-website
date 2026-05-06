import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "/", route: true },
    { name: "Services", href: "#solutions", route: false, scrollTo: true },
    { name: "Pricing", href: "#pricing", route: false, scrollTo: true },
    { name: "Careers", href: "/careers", route: true },
    { name: "About", href: "/about", route: true },
  ];

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    // If not on home page, navigate to home with hash
    if (location.pathname !== '/') {
      navigate('/' + sectionId);
      setIsOpen(false);
      return;
    }
    
    // Smooth scroll to section
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Close mobile menu if open
    setIsOpen(false);
  };

  // Handle hash-based scrolling on page load
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Small delay to ensure DOM is fully loaded
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <nav className="w-full bg-gray-100 border-b border-gray-200 relative">
      <div className="max-w-297 2xl:max-w-360 container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Rubous Tech"
            className="h-12 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="cursor-pointer hover:text-blue-600"
            >
              {link.scrollTo ? (
                <a
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-medium" : ""
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-blue-600 text-white text-sm px-4 py-2 rounded-md shadow hover:bg-blue-700 transition">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 px-4 overflow-hidden transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "max-h-96 opacity-100 translate-y-0 py-4"
            : "max-h-0 opacity-0 -translate-y-2 py-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 text-gray-600">
          {navLinks.map((link) => (
            <li key={link.name} className="cursor-pointer">
              {link.scrollTo ? (
                <a
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-medium" : ""
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;