import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const WHy = () => {
   useEffect(() => {
      // Fade in effect for the heading
      ScrollReveal().reveal(".reveal-heading", {
         origin: "top",
         distance: "50px",
         duration: 1000,
         delay: 200,
         easing: "ease-in-out",
         opacity: 0,
         reset: true,
      });

      // Left image div slides in from the left
      ScrollReveal().reveal(".reveal-left", {
         origin: "left",
         distance: "100px",
         duration: 1000,
         delay: 200,
         easing: "ease-in-out",
         opacity: 0,
         reset: true,
      });

      // Right text div slides in from the right
      ScrollReveal().reveal(".reveal-right", {
         origin: "right",
         distance: "100px",
         duration: 1000,
         delay: 200,
         easing: "ease-in-out",
         opacity: 0,
         reset: true,
      });

      // Additional left fade-in effect
      ScrollReveal().reveal(".fade-left", {
         origin: "left",
         distance: "50px",
         duration: 1000,
         delay: 300,
         easing: "ease-in-out",
         opacity: 0,
         reset: true,
      });

      // Additional right fade-in effect
      ScrollReveal().reveal(".fade-right", {
         origin: "right",
         distance: "50px",
         duration: 1000,
         delay: 300,
         easing: "ease-in-out",
         opacity: 0,
         reset: true,
      });
   }, []);

   return (
      <div className="mb-[1400px] md:mb-0">
         <div className="mt-10">
            <h2 className="reveal-heading text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
               About Us
            </h2>
            <div className="flex justify-center reveal-heading">
               <hr className="w-24 border-t-2 border-blue-400 mt-2 mb-4" />
            </div>
            <p className="text-center text-lg mb-10 text-gray-700 reveal-heading">
               Discover our passion for delivering outstanding service and
               commitment to excellence.
            </p>
         </div>

         <div className="flex flex-col md:flex-row w-[80%] m-auto mb-20 h-[460px] justify-start items-center">
            <div className="md:w-2/6 mb-8 md:mb-0 h-full fade-left">
               <img
                  className="shadow-lg rounded-xl h-full w-[500px] md:w-[360px] object-cover"
                  src="https://images.pexels.com/photos/7579828/pexels-photo-7579828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
               />
            </div>
            <div className="md:w-4/6 fade-right">
               <p className="text-justify">
                  Toyenbee Pharma Pvt Ltd, a pharmaceutical company committed to
                  providing quality medicines at affordable prices, embarks on a
                  new chapter of growth and success as we transition from a
                  proprietorship firm to a private limited company. Allow us to
                  present an overview of our company profile. Founded in
                  November 2022, Toyenbee Pharma Pvt Ltd has built a strong
                  foundation of trust and excellence over the past four years as
                  a proprietorship firm. With a relentless focus on delivering
                  superior healthcare solutions, we have now expanded our
                  operations and diversified our product portfolio. At Toyenbee
                  Pharma, our mission is to make quality medicines accessible to
                  all, ensuring that health and well-being are not compromised
                  due to financial constraints. We believe that everyone
                  deserves affordable healthcare options without compromising on
                  effectiveness or safety. Our commitment to quality is
                  unwavering. Toyenbee Pharma Pvt Ltd adheres to stringent
                  manufacturing standards, following Good Manufacturing
                  Practices (GMP) and ensuring that every step of the production
                  process is closely monitored and controlled. We take pride in
                  our state-of-the-art manufacturing facilities equipped with
                  advanced technology and operated by a team of highly skilled
                  professionals. Our team comprises experienced scientists,
                  researchers, and technicians who work tirelessly to develop
                  innovative formulations that meet the highest standards of
                  efficacy and safety. As we transition to a private limited
                  company, we look forward to expanding our reach and
                  introducing new therapeutic offerings to cater to a broader
                  range of healthcare needs. Our commitment to affordability,
                  quality, and innovation remains steadfast as we continue to
                  make a positive impact on the lives of people around the
                  world. Toyenbee Pharma Pvt Ltd is a dynamic pharmaceutical
                  company dedicated to providing quality medicines at affordable
                  prices. We are excited about the journey ahead and invite you
                  to join us as we strive to improve healthcare outcomes and
                  make a difference in the lives of millions.
               </p>
            </div>
         </div>
      </div>
   );
};

export default WHy;
