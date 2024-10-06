import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import TopBar from "./Components/TopBar";

const App = () => {
   return (
      <>
         <TopBar />
         <div className="mx-4 sm:mx-[10%]">
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
         </div>
      </>
   );
};

export default App;
