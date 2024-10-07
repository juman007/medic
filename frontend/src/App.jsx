import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import TopBar from "./Components/TopBar";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Career from "./Pages/Career";
import OurProducts from "./Pages/OurProducts";
import NotFound from "./Pages/NotFound";
import Products from "./Components/Products";

const App = () => {
   return (
      <>
         <TopBar />
         <div>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/contact" element={<ContactUs />} />
               <Route path="/about" element={<AboutUs />} />
               <Route path="/career" element={<Career />} />
               <Route path="/our-products" element={<OurProducts />} />
               <Route path="/products/:id" element={<Products />} />a
               <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
         </div>
      </>
   );
};

export default App;
