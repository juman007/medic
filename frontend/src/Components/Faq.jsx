import React, { useState } from "react";

const Faq = () => {
   const [openIndex, setOpenIndex] = useState(null); // State to track the open accordion index

   const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index); // Toggle the accordion state
   };

   return (
      <section className="py-16">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
               <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
                  Frequently Asked Questions
               </h2>
               <div className="flex justify-center">
                  <hr className="w-32 border-t-2 border-blue-400 mt-2 mb-2" />{" "}
                  {/* Custom top and bottom margin */}
               </div>
               <p className="text-center text-md">
                  Necessitatibus eius consequatur ex aliquid fuga eum quidem
                  sint consectetur velit
               </p>
            </div>

            <div className="accordion-group" data-accordion="default-accordion">
               {faqData.map((faq, index) => (
                  <div
                     key={index}
                     className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
                        openIndex === index
                           ? "accordion-active:bg-indigo-50"
                           : ""
                     }`}
                  >
                     <button
                        className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
                        onClick={() => toggleAccordion(index)} // Toggle accordion on click
                        aria-controls={`basic-collapse-${index}`}
                     >
                        <h5>{faq.question}</h5>
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
                        }`} // Adjust max-height based on the state
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

// Sample FAQs data
const faqData = [
   {
      question: "How do I update my billing information?",
      answer:
         "To update your billing information, go to your account settings and look for the billing section to make changes.",
   },
   {
      question: "How can I contact customer support?",
      answer:
         'To contact customer support, look for a "Contact us" or "Help" button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.',
   },
   {
      question: "How do I update my profile information?",
      answer:
         "To update your profile information, log in to your account and navigate to the profile settings section.",
   },
   {
      question: "How do I find my purchase history?",
      answer:
         'You can find your purchase history in the order section of your account. Look for a "Purchase History" or "Orders" tab.',
   },
];

export default Faq;
