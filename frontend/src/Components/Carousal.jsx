import React from "react";
import { Carousel } from "antd";

const Carousal = () => {
   return (
      <Carousel autoplay className="mt-8">
         <div>
            <img
               src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt="carousel-img-1"
               style={{ width: "100%", height: "500px", objectFit: "cover" }}
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
               style={{ width: "100%", height: "500px", objectFit: "cover" }}
            />
         </div>
         <div>
            <img
               src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt="carousel-img-4"
               style={{ width: "100%", height: "500px", objectFit: "cover" }}
            />
         </div>
      </Carousel>
   );
};

export default Carousal;
