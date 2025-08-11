import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => setNavOpen(false);

  return (
    <nav className="shadow-md fixed top-0 left-0 w-full z-50 bg-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <Link to="home" smooth={true} duration={500} onClick={closeNav}>
            <span className="text-black">Eun</span>
            <span className="text-orange-500">ice</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
          <li>
            <Link to="home" smooth={true} duration={500} onClick={closeNav} className="hover:text-orange-500 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={closeNav} className="hover:text-orange-500 cursor-pointer">
              About Me
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} onClick={closeNav} className="hover:text-orange-500 cursor-pointer">
              Services
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} onClick={closeNav} className="hover:text-orange-500 cursor-pointer">
              Skills
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={closeNav} className="hover:text-orange-500 cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Link to="contact" smooth={true} duration={500} onClick={closeNav}>
            <button className="bg-orange-500 text-white px-4 py-2 shadow-lg shadow-black hover:bg-orange-600 transition">
              Contact Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleNav}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-800 font-medium">
            <li>
              <Link to="home" smooth={true} duration={500} onClick={closeNav} className="hover:text-orange-500 cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} onClick={closeNav} className="hover:text-orange-500 cursor-pointer">
                About Me
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500} onClick={closeNav} className="hover:text-orange-500 cursor-pointer">
                Services
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} onClick={closeNav} className="hover:text-orange-500 cursor-pointer">
                Skills
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} onClick={closeNav} className="hover:text-orange-500 cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
