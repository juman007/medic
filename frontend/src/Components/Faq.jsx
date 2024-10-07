import React, { useEffect, useState } from "react";
import { faqData } from "../assets/Products";
import ScrollReveal from "scrollreveal";

const Faq = () => {
   const [openIndex, setOpenIndex] = useState(null); // State to track the open accordion index

   const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index); // Toggle the accordion state
   };

   useEffect(() => {
      // Initialize ScrollReveal for the accordion and heading
      ScrollReveal().reveal(".reveal", {
         origin: "top", // Animation starts from the top
         distance: "30px", // Distance to travel during animation
         duration: 1000, // Animation duration (1 second)
         delay: 200, // Delay before the animation starts
         easing: "ease-in-out",
         opacity: 0, // Start with opacity 0
         reset: true, // Reset animation on scroll
      });

      ScrollReveal().reveal(".accordion-group", {
         origin: "bottom", // Animation for the accordion group starts from the bottom
         distance: "30px", // Distance to travel during animation
         duration: 1000, // Animation duration (1 second)
         delay: 300, // Slight delay for the accordion group
         easing: "ease-in-out",
         opacity: 0, // Start with opacity 0
         reset: true, // Reset animation on scroll
      });
   }, []);

   return (
      <section className="py-16 bg-[#F1F7FC]">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
               <h2 className="reveal text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
                  Frequently Asked Questions
               </h2>
               <div className="flex justify-center">
                  <hr className="w-32 border-t-2 border-blue-400 mt-2 mb-2 reveal" />{" "}
               </div>
               <p className="reveal text-center text-md">
                  Necessitatibus eius consequatur ex aliquid fuga eum quidem
                  sint consectetur velit
               </p>
            </div>

            <div className="accordion-group" data-accordion="default-accordion">
               {faqData.map((faq, index) => (
                  <div
                     key={index}
                     className={`cursor-pointer accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
                        openIndex === index
                           ? "accordion-active:bg-indigo-50"
                           : ""
                     }`}
                     onClick={() => toggleAccordion(index)}
                  >
                     <button
                        className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
                        aria-controls={`basic-collapse-${index}`}
                     >
                        <h5 className="font-bold">{faq.question}</h5>
                        <svg
                           className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${
                              openIndex === index ? "rotate-180" : ""
                           }`}
                           width={22}
                           height={22}
                           viewBox="0 0 22 22"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                     </button>
                     <div
                        id={`basic-collapse-${index}`}
                        className={`accordion-content w-full px-0 overflow-hidden transition-all duration-500 ${
                           openIndex === index ? "max-h-40" : "max-h-0"
                        }`}
                        aria-labelledby={`basic-heading-${index}`}
                     >
                        <p className="text-base text-gray-900 leading-6">
                           {faq.answer}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Faq;
