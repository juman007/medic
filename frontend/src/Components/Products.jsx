import React, { useState, useEffect } from "react";
import { products } from "../assets/Products";
import { useParams } from "react-router-dom";
import ScrollReveal from "scrollreveal"; // Make sure ScrollReveal is imported

const Products = () => {
   const { id } = useParams();
   const [product, setProduct] = useState(null);

   useEffect(() => {
      // Find the product that matches the id from the URL
      const selectedProduct = products.find((prod) => prod.id === parseInt(id));
      setProduct(selectedProduct);
   }, [id]);

   useEffect(() => {
      // Initialize ScrollReveal only if the product is available
      if (product) {
         ScrollReveal().reveal(".image-reveal", {
            origin: "left",
            distance: "100px",
            duration: 1000,
            delay: 200,
            easing: "ease-in-out",
            reset: true,
         });

         ScrollReveal().reveal(".details-reveal", {
            origin: "right",
            distance: "100px",
            duration: 1000,
            delay: 200,
            easing: "ease-in-out",
            reset: true,
         });
      }
   }, [product]); // Depend on product state to run when product is set

   if (!product) {
      return <div>Product not found</div>;
   }

   return (
      <div className="mt-32 mb-10">
         <div className="flex flex-col lg:flex-row items-center justify-center w-[90%] md:w-[80%] m-auto">
            <div className="flex-1 flex justify-center mb-4 lg:mb-0">
               <div className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] flex justify-end">
                  <img
                     className="w-full h-full object-cover rounded-xl shadow-lg image-reveal"
                     src={product.img}
                     alt={product.name}
                  />
               </div>
            </div>
            <div className="flex-1 lg:pl-4 h-auto lg:h-[350px] details-reveal">
               <p className="text-xl sm:text-2xl font-bold mb-2">
                  {product.name}
               </p>
               <p className="text-lg sm:text-xl text-gray-400 font-bold mb-2">
                  {product.category}
               </p>
               <p className="text-xs sm:text-sm text-gray-800 mb-3">
                  {product.description}
               </p>
               <p className="text-red-500 font-bold text-base sm:text-lg mb-2 border border-gray-800 w-20 sm:w-24 py-1 sm:py-2 px-2 sm:px-3 rounded-3xl">
                  {product.price}
               </p>
            </div>
         </div>
      </div>
   );
};

export default Products;
