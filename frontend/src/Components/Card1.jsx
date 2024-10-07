import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "../assets/Products";
import ScrollReveal from "scrollreveal";

const Card1 = () => {
   const [visibleProducts, setVisibleProducts] = useState(6);

   const handleSeeMore = () => {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
   };

   useEffect(() => {
      // Initialize ScrollReveal with different effects for heading and cards
      const sr = ScrollReveal();

      // Reveal heading from bottom to top
      sr.reveal(".heading-reveal", {
         distance: "20px", // Distance to move from the starting point
         origin: "bottom", // Start from the bottom
         opacity: 0, // Start opacity at 0
         duration: 1000, // Animation duration (1 second)
         easing: "ease-in-out",
         reset: true, // Reset animation on scroll
         delay: 200, // Delay before animation starts
      });

      // Reveal product cards from left to right
      sr.reveal(".card-reveal", {
         distance: "20px", // Distance to move from the starting point
         origin: "left", // Start from the left
         opacity: 0, // Start opacity at 0
         duration: 1000, // Animation duration (1 second)
         easing: "ease-in-out",
         reset: true, // Reset animation on scroll
         delay: 200, // Delay before animation starts
      });
   }, []);

   return (
      <div className="container w-4/5 m-auto">
         <div className="mt-10">
            <h2 className="heading-reveal text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
               Our Products
            </h2>
            <div className="flex justify-center">
               <hr className="w-24 border-t-2 border-blue-400 mt-2 mb-4 heading-reveal" />
            </div>
            <p className="text-center text-lg mb-10 text-gray-700 heading-reveal">
               Discover our passion for delivering outstanding service and
               commitment to excellence.
            </p>
         </div>
         <div className="grid grid-cols-1 gap-6 md:gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 heading-reveal">
            {products.slice(0, visibleProducts).map((product) => (
               <div
                  key={product.id}
                  className="card-reveal group my-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
               >
                  <Link
                     to={`/products/${product.id}`}
                     className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  >
                     <img
                        className="absolute top-0 right-0 h-[400px] w-[350px] object-fill"
                        src={product.img}
                        alt={product.name}
                     />
                  </Link>
                  <div className="mt-4 px-5 pb-5">
                     <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                        <Link to={`/products/${product.id}`}>
                           {product.name}
                        </Link>
                     </h5>
                     <p className="text-gray-500">{product.category}</p>
                     <p className="text-lg font-bold text-green-600">
                        {product.price}
                     </p>
                  </div>
               </div>
            ))}
         </div>
         {visibleProducts < products.length && (
            <div className="text-center mt-8 mb-10">
               <button
                  className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                  onClick={handleSeeMore}
               >
                  See More
               </button>
            </div>
         )}
      </div>
   );
};

export default Card1;
