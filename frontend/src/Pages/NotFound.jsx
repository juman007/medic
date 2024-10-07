import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
   }, []); // Empty dependency array means this runs only on mount

   return (
      <section className="bg-white mt-32">
         <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
               <h1 className="mb-4 text-7xl text-blue-500 tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                  404
               </h1>
               <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
                  Something's missing.
               </p>
               <p className="mb-4 text-lg font-light text-gray-500 ">
                  Sorry, we can't find that page. You'll find lots to explore on
                  the home page.
               </p>
               <Link
                  to={"/"}
                  className="bg-blue-500 text-white font-medium py-2 px-3 rounded-lg"
               >
                  Go Home!
               </Link>
            </div>
         </div>
      </section>
   );
};

export default NotFound;
