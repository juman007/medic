import React, { useState } from "react";

const Navbar = () => {
   // State to track if mobile menu is open
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   // Toggle mobile menu open/close state
   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   return (
      <div>
         <nav className="bg-white border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
               {/* Logo */}
               <a href="#" className="flex items-center">
                  <img
                     src="https://c8.alamy.com/comp/R4FP1D/circle-letter-w-or-m-icon-or-logo-clean-and-simple-logo-template-availble-in-resizable-eps-vector-file-format-R4FP1D.jpg"
                     className="h-8"
                     alt=""
                  />
               </a>

               {/* Mobile Menu Button */}
               <button
                  onClick={toggleMobileMenu} // Toggle menu on click
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="navbar-multi-level"
                  aria-expanded={isMobileMenuOpen ? "true" : "false"}
               >
                  <span className="sr-only">Open main menu</span>
                  <svg
                     className="w-5 h-5"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 17 14"
                  >
                     <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 1h15M1 7h15M1 13h15"
                     />
                  </svg>
               </button>

               {/* Navbar Links */}
               <div
                  className={`${
                     isMobileMenuOpen ? "block" : "hidden"
                  } w-full md:flex md:items-center md:w-auto`}
                  id="navbar-multi-level"
               >
                  <ul className="flex flex-col md:flex-row md:space-x-8 font-medium items-center">
                     <li>
                        <a
                           href="#"
                           className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                           aria-current="page"
                        >
                           Home
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                        >
                           About
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                        >
                           Services
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                        >
                           Departments
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                        >
                           Doctors
                        </a>
                     </li>
                     <li>
                        <button
                           id="dropdownNavbarLink"
                           data-dropdown-toggle="dropdownNavbar"
                           className="flex items-center justify-between w-full py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                        >
                           Dropdown
                           <svg
                              className="w-2.5 h-2.5 ms-2.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 10 6"
                           >
                              <path
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 d="m1 1 4 4 4-4"
                              />
                           </svg>
                        </button>
                        {/* Dropdown Menu */}
                        <div
                           id="dropdownNavbar"
                           className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                        >
                           <ul
                              className="py-2 text-sm text-black"
                              aria-labelledby="dropdownLargeButton"
                           >
                              <li>
                                 <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                 >
                                    Dashboard
                                 </a>
                              </li>
                              <li>
                                 <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                 >
                                    Profile
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                        >
                           Contact
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="block py-2 px-3 text-white bg-blue-600 rounded hover:bg-blue-700 md:bg-blue-600 md:text-white md:hover:bg-blue-700 md:p-2"
                        >
                           Call Us
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;
