import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", route: true },
    { name: "Services", href: "/services", route: true },
    { name: "Pricing", href: "/pricing", route: true },
    { name: "Careers", href: "/careers", route: true },
    { name: "About", href: "/about", route: true },
  ];

  return (
    <nav className="w-full bg-gray-100 border-b border-gray-200 relative">
      <div className="max-w-297 container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-blue-600 font-semibold text-lg">
          Rubous Tech
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="cursor-pointer hover:text-blue-600"
            >
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-medium" : ""
                }
              >
                {link.name}
              </NavLink>
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
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-medium" : ""
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
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