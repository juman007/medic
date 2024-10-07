import React, { useEffect } from "react";
import WhyChooseMe from "../Components/WhyChooseMe";
import CompanySummary from "../Components/CompanySummary";
import OurBrand from "../Components/OurBrand";
import OurMission from "../Components/OurMission";

const AboutUs = () => {
   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
   }, []); // Empty dependency array means this runs only on mount
   return (
      <div className="mt-28">
         <WhyChooseMe />
         <OurMission />
         <CompanySummary />
         <OurBrand />
      </div>
   );
};

export default AboutUs;
