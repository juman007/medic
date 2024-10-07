import React from "react";

const OurMission = () => {
   return (
      <section className="text-gray-600 body-font md:-mt-16 mt-[1300px]">
         <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-wrap justify-center -m-4">
               {" "}
               {/* Added justify-center */}
               <div className="p-4 lg:w-1/3 w-full">
                  {" "}
                  {/* Ensure full width on small screens */}
                  <div className="h-[370px] shadow-lg bg-[#DBEAFE] bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                     <h1 className="title-font sm:text-2xl text-xl font-bold text-indigo-500 mb-3">
                        MISSION
                     </h1>
                     <p className="leading-relaxed mb-3">
                        Our mission at Toyenbee Pharma Pvt Ltd is to improve
                        global healthcare by providing high-quality, affordable
                        medicines that enhance the well-being and quality of
                        life for individuals and communities. We are dedicated
                        to ensuring that everyone has access to safe and
                        effective healthcare solutions, regardless of their
                        economic background.
                     </p>
                  </div>
               </div>
               <div className="p-4 lg:w-1/3 w-full">
                  {" "}
                  {/* Ensure full width on small screens */}
                  <div className="h-[370px]  shadow-lg bg-[#DBEAFE] bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                     <h1 className="title-font sm:text-2xl text-xl font-bold text-indigo-500 mb-3">
                        VISION
                     </h1>
                     <p className="leading-relaxed mb-3">
                        Our vision is to be a leading pharmaceutical company
                        recognized for our unwavering commitment to quality,
                        affordability, and innovation. We strive to be at the
                        forefront of scientific research and development,
                        continuously introducing new and improved medicines that
                        address unmet medical needs. Through our endeavors, we
                        aim to make a significant positive impact on the health
                        and lives of people worldwide.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default OurMission;
