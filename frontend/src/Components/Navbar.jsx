import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   const handleLinkClick = () => {
      setIsMobileMenuOpen(false); // Close mobile menu on link click
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 0) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <div>
         <nav
            className={`${
               isScrolled ? "top-0" : "top-8"
            } fixed left-0 w-full bg-white shadow-lg border-b border-gray-200 z-50 transition-all duration-150 ease-in-out`}
         >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
               {/* Logo */}
               <Link
                  to="/"
                  onClick={() => scrollTo(0, 0)}
                  className="flex items-center space-x-3"
               >
                  <img src={logo} className="max-w-[40px] h-auto" alt="Logo" />
               </Link>
               {/* Mobile Menu Button */}
               <button
                  onClick={toggleMobileMenu}
                  type="button"
                  className="inline-flex items-center p-2 text-gray-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="navbar-multi-level"
                  aria-expanded={isMobileMenuOpen ? "true" : "false"}
               >
                  <span className="sr-only">Open main menu</span>
                  <svg
                     className="w-6 h-6"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     strokeWidth={2}
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                     />
                  </svg>
               </button>
               {/* Navbar Links */}
               <div
                  className={`${
                     isMobileMenuOpen ? "block" : "hidden"
                  } w-full md:flex md:items-center md:w-auto transition-all ease-in-out duration-300`}
                  id="navbar-multi-level"
               >
                  <ul className="flex flex-col md:flex-row md:space-x-12 font-medium items-center">
                     <li>
                        <Link
                           to="/"
                           onClick={handleLinkClick} // Close menu on click
                           className="block py-2 px-4 text-gray-800 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                           aria-current="page"
                        >
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/about"
                           onClick={handleLinkClick} // Close menu on click
                           className="block py-2 px-4 text-gray-800 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                        >
                           About
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/our-products"
                           onClick={handleLinkClick} // Close menu on click
                           className="block py-2 px-4 text-gray-800 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                        >
                           Our Products
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/career"
                           onClick={handleLinkClick} // Close menu on click
                           className="block py-2 px-4 text-gray-800 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                        >
                           Career
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/contact"
                           onClick={handleLinkClick} // Close menu on click
                           className="block py-2 px-4 text-gray-800 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                        >
                           Contact Us
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/contact"
                           onClick={handleLinkClick} // Close menu on click
                           className="block py-2 px-3 text-white bg-indigo-600  md:hover:bg-indigo-800  md:border-0 rounded-xl"
                        >
                           Call Us
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;
