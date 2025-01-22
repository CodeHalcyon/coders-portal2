import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    // State to manage hamburger menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu visibility
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className='flex items-center justify-between w-full p-3 text-white bg-black'>
            <h1 className='text-2xl font-bold'>Coders Portal</h1>

            <div className='md:hidden'>
                {/* Hamburger Menu Icon */}
                <button onClick={toggleMenu} className='text-2xl'>
                    {isMenuOpen ? '×' : '≡'}
                </button>
            </div>

            {/* Navigation menu */}
            <div className={`flex-1 md:flex items-center justify-end ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                <nav>
                    <ul className='flex flex-col gap-6 md:flex-row pr-9'>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? "text-orange-300" : "text-white"}
                                to="/home"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? "text-orange-300" : "text-white"}
                                to="/events"
                            >
                                Events
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? "text-orange-300" : "text-white"}
                                to="/blogs"
                            >
                                Blogs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? "text-orange-300" : "text-white"}
                                to="/communities"
                            >
                                Communities
                            </NavLink>
                        </li>
                        <li>
                            <a
                                className="text-white"
                                href="https://cp-tracker-rho.vercel.app/"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                CP Tracker
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
