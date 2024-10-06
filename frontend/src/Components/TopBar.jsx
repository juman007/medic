import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
   return (
      <div className="bg-blue-500 w-full">
         <div className="hidden md:flex justify-between items-center w-[80%] mx-auto text-white px-5 h-8">
            {" "}
            {/* Height increased */}
            <div className="flex items-center gap-8">
               {" "}
               {/* Increased gap */}
               <p className="text-xs flex items-center gap-1">
                  {" "}
                  {/* Added gap for better spacing */}
                  <i className="fa-solid fa-envelope"></i>
                  <span>xyz@gmail.com</span>
               </p>
               <p className="text-xs flex items-center gap-1">
                  {" "}
                  {/* Added gap for better spacing */}
                  <i className="fa-solid fa-phone"></i>
                  <span>+123456789</span>
               </p>
            </div>
            <div className="flex justify-end gap-x-4">
               <Link className="text-gray-200 hover:text-white" to="#">
                  <i className="fa-brands fa-x-twitter text-xs"></i>
               </Link>
               <Link className="text-gray-200 hover:text-white" to="#">
                  <i className="fa-brands fa-facebook text-xs"></i>
               </Link>
               <Link className="text-gray-200 hover:text-white" to="#">
                  <i className="fa-brands fa-instagram text-xs"></i>
               </Link>
               <Link className="text-gray-200 hover:text-white" to="#">
                  <i className="fa-brands fa-linkedin text-xs"></i>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default TopBar;
