import { useState } from "react";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [{
        name: "Home",
        href: "#"
    }, {
        name: "Services",
        href: "#"
    }, {
        name: "Pricing",
        href: "#"
    }, {
        name: "About",
        href: "#"
    }];

    return (
        <nav className="w-full bg-gray-100 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-blue-600 font-semibold text-lg">
                    Rubous Tech
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-sm text-gray-600">
                    {navLinks.map((link, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer hover:text-blue-600 relative ${link.name === "Home" ? "text-blue-600 font-medium" : ""
                                }`}
                        >
                            <a href={link.href}>{link.name}</a>
                            {link.name === "Home" && (
                                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600"></span>
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
                        {isOpen ? "Close" : "Menu"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
                    <ul className="flex flex-col gap-4 mt-3 text-gray-600">
                        {navLinks.map((link, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer ${link === "Home" ? "text-blue-600 font-medium" : ""
                                    }`}
                            >
                                {link}
                            </li>
                        ))}
                    </ul>

                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;