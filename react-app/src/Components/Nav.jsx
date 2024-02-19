import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-white text-lg font-semibold">Logo</span>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex space-x-4 text-white">
                            <NavLink to="Home">Home</NavLink>
                            <NavLink to="Service">Service</NavLink>
                            <NavLink to="About">About</NavLink>
                            <NavLink to="Contact">Contact</NavLink>
                            <NavLink to="Projects">Projects</NavLink>
                        </ul>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-white hover:text-gray-400 focus:outline-none"
                            onClick={toggleMenu}
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-gray-700">
                    <ul className="flex flex-col space-y-4 text-white">
                        <NavLink to="Home" onClick={toggleMenu}>Home</NavLink>
                        <NavLink to="Service" onClick={toggleMenu}>Service</NavLink>
                        <NavLink to="About" onClick={toggleMenu}>About</NavLink>
                        <NavLink to="Contact" onClick={toggleMenu}>Contact</NavLink>
                        <NavLink to="Projects" onClick={toggleMenu}>Projects</NavLink>
                    </ul>
                </div>
            )}
        </nav>
    );
};

const NavLink = ({ to, children, onClick }) => (
    <li>
        <Link
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700"
            to={to}
            spy={true}
            smooth={true}
            onClick={onClick}
        >
            {children}
        </Link>
    </li>
);

export default Nav;
