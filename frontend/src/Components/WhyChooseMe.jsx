import React from "react";

const WhyChooseMe = () => {
   return (
      <section className="text-gray-600 body-font">
         <div className="container mx-auto flex px-5 py-20 gap-10 md:flex-row flex-col items-center">
            <div
               className="lg:max-w-lg lg:w-full md:w-1/2 w-full"
               style={{ height: "60vh", flex: 1 }}
            >
               <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://images.pexels.com/photos/7579828/pexels-photo-7579828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
               />
            </div>
            <div
               className="lg:flex-grow md:w-1/2 w-full flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
               style={{ height: "60vh", flex: 1 }}
            >
               <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                  About Us
               </h1>
               <p className="mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente voluptates non doloremque aliquid atque porro,
                  doloribus molestias repellendus veniam, repudiandae autem
                  nobis, obcaecati fugit? Officia voluptatum assumenda quae
                  quibusdam, quis et quam sint ducimus sunt atque magni, cum,
                  est molestias sit minima deleniti laborum ad odit. Possimus
                  suscipit est saepe? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quia nostrum mollitia libero molestiae enim
                  deserunt cum atque in, exercitationem magni quos a beatae..
               </p>
            </div>
         </div>
      </section>
   );
};

export default WhyChooseMe;
