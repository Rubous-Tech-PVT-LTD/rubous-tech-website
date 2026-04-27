import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        {
            name: 'Home',
            href: '/',
            route: true,
        },
        {
            name: 'Services',
            href: '/services',
            route: true,
        },
        {
            name: 'Pricing',
            href: '/pricing',
            route: true,
        },
        {
            name: 'Careers',
            href: '/careers',
            route: true,
        },
        {
            name: 'About',
            href: '/about',
            route: true,
        },
    ]

    return (
        <nav className='w-full bg-gray-100 border-b border-gray-200'>
            <div className='max-w-297 container mx-auto px-6 py-3 flex items-center justify-between'>
                {/* Logo */}
                <h1 className='text-blue-600 font-semibold text-lg'>Rubous Tech</h1>

                {/* Desktop Menu */}
                <ul className='hidden md:flex items-center gap-8 text-sm text-gray-600'>
                    {navLinks.map((link) => (
                        <li
                            key={link.name}
                            className='cursor-pointer hover:text-blue-600 relative'
                        >
                            {link.route ? (
                                <NavLink
                                    to={link.href}
                                    className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : ''}
                                >
                                    {link.name}
                                </NavLink>
                            ) : (
                                <a href={link.href}>{link.name}</a>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Desktop Button */}
                <button className='hidden md:block bg-blue-600 text-white text-sm px-4 py-2 rounded-md shadow hover:bg-blue-700 transition'>
                    Get Started
                </button>

                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <button
                        type='button'
                        aria-expanded={isOpen}
                        aria-controls='mobile-menu'
                        aria-label='Toggle navigation menu'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div id='mobile-menu' className='md:hidden bg-white border-t border-gray-200 px-4 pb-4'>
                    <ul className='flex flex-col gap-4 mt-3 text-gray-600'>
                        {navLinks.map((link) => (
                            <li
                                key={link.name}
                                    className='cursor-pointer'
                            >
                                    {link.route ? (
                                        <NavLink
                                            to={link.href}
                                            className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : ''}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </NavLink>
                                    ) : (
                                        <a href={link.href}>{link.name}</a>
                                    )}
                            </li>
                        ))}
                    </ul>

                    <button className='mt-4 w-full bg-blue-600 text-white py-2 rounded-md'>
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    )
}

export default Navbar
