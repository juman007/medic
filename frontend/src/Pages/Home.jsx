import React from "react";
import Carousal from "../Components/Carousal";
import WhyChooseMe from "../Components/WhyChooseMe";
import CompanySummary from "../Components/CompanySummary";
import Card from "../Components/Card";
import Card1 from "../Components/Card1";
import Faq from "../Components/Faq";
import OurBrand from "../Components/OurBrand";

const Home = () => {
   return (
      <div>
         <Carousal />
         <WhyChooseMe />
         <CompanySummary />
         {/* <Card /> */} 
         <Card1/>
         <Faq />
         <OurBrand />
      </div>
   );
};

export default Home;
