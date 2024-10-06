import React from "react";

const WhyChooseMe = () => {
   return (
      <section className="text-gray-600 body-font">
         <div className="mt-10">
            <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
               About Us
            </h2>
            <div className="flex justify-center">
               <hr className="w-24 border-t-2 border-blue-400 mt-2 mb-4" />
            </div>
            <p className="text-center text-lg mb-10 text-gray-700">
               Discover our passion for delivering outstanding service and
               commitment to excellence.
            </p>
         </div>
         <div
            className="container mx-auto flex px-5 py-20 gap-10 md:flex-row flex-col items-start"
            style={{ width: "80%", margin: "auto", marginTop: "-60px" }}
         >
            <div
               className="lg:max-w-lg lg:w-full md:w-1/2 w-full"
               style={{ height: "50vh", flex: 1 }}
            >
               <img
                  className="object-cover object-center rounded-lg shadow-lg"
                  alt="hero"
                  src="https://images.pexels.com/photos/7579828/pexels-photo-7579828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
               />
            </div>
            <div
               className="lg:flex-grow md:w-1/2 w-full flex flex-col md:items-start md:text-left items-start justify-start"
               style={{ flex: 1 }}
            >
               <p className="mb-8 leading-relaxed text-gray-800 text-lg">
                  We are committed to providing exceptional services that go
                  above and beyond expectations. With years of experience in the
                  industry, our team ensures that each project is completed with
                  the utmost attention to detail and care. Join us on our
                  journey as we continue to innovate and deliver excellence.
               </p>
            </div>
         </div>
      </section>
   );
};

export default WhyChooseMe;
