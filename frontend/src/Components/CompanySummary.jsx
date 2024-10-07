import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const CompanySummary = () => {
   useEffect(() => {
      // Initialize ScrollReveal for left elements
      ScrollReveal().reveal(".reveal-left", {
         origin: "left", // Animation starts from the left
         distance: "100px", // Distance to travel during animation
         duration: 1000, // Animation duration (1 second)
         delay: 200, // Delay before the animation starts
         easing: "ease-in-out",
         reset: true, // Animation resets every time the element scrolls into view
      });

      // Initialize ScrollReveal for right elements
      ScrollReveal().reveal(".reveal-right", {
         origin: "right", // Animation starts from the right
         distance: "100px", // Distance to travel during animation
         duration: 1000, // Animation duration (1 second)
         delay: 200, // Delay before the animation starts
         easing: "ease-in-out",
         reset: true, // Animation resets every time the element scrolls into view
      });
   }, []);

   return (
      <section className="text-gray-600 body-font my-10 bg-[#F1F7FC]">
         <div
            className="container px-5 py-10 mx-auto"
            style={{ marginTop: "-44px" }}
         >
            <div
               className="flex flex-wrap justify-center items-center -m-4 text-center"
               style={{ width: "80%", margin: "auto" }}
            >
               <div className="p-4 md:w-1/4 sm:w-1/2 w-full reveal-left">
                  <div className="bg-white shadow-lg px-4 py-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                     <i className="fa-solid fa-user-doctor text-5xl text-[#6366F1] mb-1"></i>
                     <h2 className="title-font font-bold text-3xl text-gray-900">
                        2.7K
                     </h2>
                     <p className="leading-relaxed font-bold">Doctors</p>
                  </div>
               </div>
               <div className="p-4 md:w-1/4 sm:w-1/2 w-full reveal-right">
                  <div className="bg-white shadow-lg px-4 py-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                     <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                        viewBox="0 0 24 24"
                     >
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                     </svg>
                     <h2 className="title-font font-bold text-3xl text-gray-900">
                        1.3K
                     </h2>
                     <p className="leading-relaxed font-bold">Departments</p>
                  </div>
               </div>
               <div className="p-4 md:w-1/4 sm:w-1/2 w-full reveal-left">
                  <div className="bg-white shadow-lg px-4 py-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                     <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                        viewBox="0 0 24 24"
                     >
                        <path d="M3 18v-6a9 9 0 0118 0v6" />
                        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                     </svg>
                     <h2 className="title-font font-bold text-3xl text-gray-900">
                        74
                     </h2>
                     <p className="leading-relaxed font-bold">Research Labs</p>
                  </div>
               </div>
               <div className="p-4 md:w-1/4 sm:w-1/2 w-full reveal-right">
                  <div className="bg-white shadow-lg px-4 py-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                     <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                        viewBox="0 0 24 24"
                     >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                     </svg>
                     <h2 className="title-font font-bold text-3xl text-gray-900">
                        46
                     </h2>
                     <p className="leading-relaxed font-bold">Awards</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default CompanySummary;
