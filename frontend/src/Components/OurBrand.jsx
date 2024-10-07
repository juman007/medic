import React, { useEffect } from "react"; // Import useEffect
import "./LogoCarousel.css";
import tesla from "../assets/car_rantal_logo_animation/tesla-9.svg";
import audi from "../assets/car_rantal_logo_animation/audi.svg";
import volvo from "../assets/car_rantal_logo_animation/Volvo Wordmark.svg";
import jaguar from "../assets/car_rantal_logo_animation/jaguar-1.svg";
import honda from "../assets/car_rantal_logo_animation/honda.svg";
import nissan from "../assets/car_rantal_logo_animation/nissan-next-logo.svg";
import acura from "../assets/car_rantal_logo_animation/acura.svg";
import kia from "../assets/car_rantal_logo_animation/kia-svgrepo-com.svg";
import ScrollReveal from "scrollreveal";

const OurBrand = () => {
   useEffect(() => {
      // Initialize ScrollReveal
      ScrollReveal().reveal(".reveal", {
         origin: "left", // Animation starts from the left
         distance: "100px", // Distance to travel during animation
         duration: 1000, // Animation duration (1 second)
         delay: 200, // Delay before the animation starts
         easing: "ease-in-out",
         opacity: 0, // Start fully transparent
         reset: true, // If true, animation resets every time the element scrolls into view
      });
   }, []);

   return (
      <section className="bg-white dark:bg-white">
         <div className="py-8 lg:py-4 mx-auto max-w-screen-xl px-4 overflow-hidden">
            <div className="flex items-center space-x-12 animate-scroll reveal">
               {/* Use consistent size for all logos */}
               <img
                  src={tesla}
                  alt="Tesla Logo"
                  className="h-[50px] w-[150px] object-contain mr-10"
               />
               <img
                  src={audi}
                  alt="Audi Logo"
                  className="h-[76px] w-[150px] object-contain mr-10"
               />
               <img
                  src={volvo}
                  alt="Volvo Logo"
                  className="h-[100px] w-[150px] object-contain mr-10"
               />
               <img
                  src={jaguar}
                  alt="Jaguar Logo"
                  className="h-[76px] w-[150px] object-contain mr-10"
               />
               <img
                  src={nissan}
                  alt="Nissan Logo"
                  className="h-[50px] w-[150px] object-contain mr-10"
               />
               <img
                  src={honda}
                  alt="Honda Logo"
                  className="h-[100px] w-[150px] object-contain mr-10"
               />
               <img
                  src={acura}
                  alt="Acura Logo"
                  className="h-[76px] w-[150px] object-contain mr-10"
               />
               <img
                  src={kia}
                  alt="Kia Logo"
                  className="h-[76px] w-[150px] object-contain mr-10"
               />

               {/* Duplicate logos again for continuous scrolling */}
               <img
                  src={tesla}
                  alt="Tesla Logo"
                  className="h-[50px] w-[150px] object-contain mr-10"
               />
               <img
                  src={audi}
                  alt="Audi Logo"
                  className="h-[76px] w-[150px] object-contain mr-10"
               />
               <img
                  src={volvo}
                  alt="Volvo Logo"
                  className="h-[100px] w-[150px] object-contain mr-10"
               />
               <img
                  src={jaguar}
                  alt="Jaguar Logo"
                  className="h-[76px] w-[150px] object-contain mr-10"
               />
               <img
                  src={nissan}
                  alt="Nissan Logo"
                  className="h-[50px] w-[150px] object-contain mr-10"
               />
               <img
                  src={honda}
                  alt="Honda Logo"
                  className="h-[100px] w-[150px] object-contain mr-10"
               />
               <img
                  src={acura}
                  alt="Acura Logo"
                  className="h-[76px] w-[150px] object-contain mr-10"
               />
               <img
                  src={kia}
                  alt="Kia Logo"
                  className="h-[76px] w-[150px] object-contain mr-10"
               />
            </div>
         </div>
      </section>
   );
};

export default OurBrand;
