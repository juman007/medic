import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card1 = () => {
   const products = [
      {
         id: 1,
         name: "Running Shoes",
         category: "Footwear",
         price: "$99.99",
         img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728172800&semt=ais_hybrid",
      },
      {
         id: 2,
         name: "Basketball Shoes",
         category: "Footwear",
         price: "$129.99",
         img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728172800&semt=ais_hybrid",
      },
      {
         id: 3,
         name: "Laptop Backpack",
         category: "Bags",
         price: "$49.99",
         img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728172800&semt=ais_hybrid",
      },
      {
         id: 4,
         name: "Smartwatch",
         category: "Electronics",
         price: "$199.99",
         img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728172800&semt=ais_hybrid",
      },
      {
         id: 5,
         name: "Wireless Headphones",
         category: "Electronics",
         price: "$79.99",
         img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728172800&semt=ais_hybrid",
      },
      {
         id: 6,
         name: "Men's Casual Shirt",
         category: "Apparel",
         price: "$39.99",
         img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728172800&semt=ais_hybrid",
      },
      {
         id: 7,
         name: "Wrist Watch",
         category: "Accessories",
         price: "$89.99",
         img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728172800&semt=ais_hybrid",
      },
      {
         id: 8,
         name: "Sports Water Bottle",
         category: "Accessories",
         price: "$19.99",
         img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728172800&semt=ais_hybrid",
      },
   ];

   const [visibleProducts, setVisibleProducts] = useState(6);

   const handleSeeMore = () => {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
   };

   return (
      <div className="container w-4/5 m-auto">
         <div className="mt-10">
            <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
               Our Products
            </h2>
            <div className="flex justify-center">
               <hr className="w-24 border-t-2 border-blue-400 mt-2 mb-4" />
            </div>
            <p className="text-center text-lg mb-10 text-gray-700">
               Discover our passion for delivering outstanding service and
               commitment to excellence.
            </p>
         </div>
         <div className="grid grid-cols-1 gap-6 md:gap-0  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {products.slice(0, visibleProducts).map((product) => (
               <div
                  key={product.id}
                  className="group my-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
               >
                  <Link
                     to={"#"}
                     className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  >
                     <img
                        className="absolute top-0 right-0 h-[400px] w-[350px] object-fill "
                        src={product.img}
                        alt={product.name}
                     />
                  </Link>
                  <div className="mt-4 px-5 pb-5">
                     <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                        <Link to={"#"}> {product.name}</Link>
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
            <div className="text-center mt-8">
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
