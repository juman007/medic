import React, { useEffect } from "react";
import { Carousel } from "antd";
import ScrollReveal from "scrollreveal";

const Carousal = () => {
   useEffect(() => {
      // Initialize ScrollReveal
      ScrollReveal().reveal(".reveal", {
         duration: 2000, // Animation duration (1 second)
         delay: 300, // Delay before the animation starts
         easing: "ease-in-out",
         reset: true, // If true, animation resets every time the element scrolls into view
      });
   }, []);
   return (
      <Carousel autoplay className="mt-8 reveal">
         <div>
            <img
               src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt="carousel-img-1"
               style={{ width: "100%", height: "550px", objectFit: "cover" }}
            />
         </div>
         <div>
            <img
               src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt="carousel-img-2"
               style={{ width: "100%", height: "550px", objectFit: "cover" }}
            />
         </div>
         <div>
            <img
               src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt="carousel-img-3"
               style={{ width: "100%", height: "550px", objectFit: "cover" }}
            />
         </div>
         <div>
            <img
               src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt="carousel-img-4"
               style={{ width: "100%", height: "550px", objectFit: "cover" }}
            />
         </div>
      </Carousel>
   );
};

export default Carousal;
