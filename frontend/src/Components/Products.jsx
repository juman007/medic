import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
   const { id } = useParams();
   const [product, setProduct] = useState(null);

   const products = [
      {
         id: 1,
         name: "Running Shoes",
         category: "Footwear",
         price: "$99.99",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cumque hic consectetur atque animi quidem accusantium harum repudiandae magni corrupti laudantium aut impedit, quo cupiditate in exercitationem asperiores labore qui?",
         img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728172800&semt=ais_hybrid",
      },
      {
         id: 2,
         name: "Basketball Shoes",
         category: "Footwear",
         price: "$129.99",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cumque hic consectetur atque animi quidem accusantium harum repudiandae magni corrupti laudantium aut impedit, quo cupiditate in exercitationem asperiores labore qui?",
         img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728172800&semt=ais_hybrid",
      },
      {
         id: 3,
         name: "Laptop Backpack",
         category: "Bags",
         price: "$49.99",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cumque hic consectetur atque animi quidem accusantium harum repudiandae magni corrupti laudantium aut impedit, quo cupiditate in exercitationem asperiores labore qui?",
         img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728172800&semt=ais_hybrid",
      },
      {
         id: 4,
         name: "Smartwatch",
         category: "Electronics",
         price: "$199.99",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cumque hic consectetur atque animi quidem accusantium harum repudiandae magni corrupti laudantium aut impedit, quo cupiditate in exercitationem asperiores labore qui?",
         img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728172800&semt=ais_hybrid",
      },
      {
         id: 5,
         name: "Wireless Headphones",
         category: "Electronics",
         price: "$79.99",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cumque hic consectetur atque animi quidem accusantium harum repudiandae magni corrupti laudantium aut impedit, quo cupiditate in exercitationem asperiores labore qui?",
         img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728172800&semt=ais_hybrid",
      },
      {
         id: 6,
         name: "Men's Casual Shirt",
         category: "Apparel",
         price: "$39.99",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cumque hic consectetur atque animi quidem accusantium harum repudiandae magni corrupti laudantium aut impedit, quo cupiditate in exercitationem asperiores labore qui?",
         img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728172800&semt=ais_hybrid",
      },
      {
         id: 7,
         name: "Wrist Watch",
         category: "Accessories",
         price: "$89.99",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cumque hic consectetur atque animi quidem accusantium harum repudiandae magni corrupti laudantium aut impedit, quo cupiditate in exercitationem asperiores labore qui?",
         img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728172800&semt=ais_hybrid",
      },
      {
         id: 8,
         name: "Sports Water Bottle",
         category: "Accessories",
         price: "$19.99",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cumque hic consectetur atque animi quidem accusantium harum repudiandae magni corrupti laudantium aut impedit, quo cupiditate in exercitationem asperiores labore qui?",
         img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728172800&semt=ais_hybrid",
      },
   ];
   useEffect(() => {
      // Find the product that matches the id from the URL
      const selectedProduct = products.find((prod) => prod.id === parseInt(id));
      setProduct(selectedProduct);
   }, [id]);

   if (!product) {
      return <div>Product not found</div>;
   }

   return (
      <div className="mt-32 mb-10">
         <div className="flex flex-col lg:flex-row items-center justify-center w-[90%] md:w-[80%] m-auto">
            <div className="flex-1 flex justify-center mb-4 lg:mb-0">
               <div className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] flex justify-end">
                  <img
                     className="w-full h-full object-cover rounded-xl shadow-lg"
                     src={product.img}
                     alt={product.name}
                  />
               </div>
            </div>
            <div className="flex-1 lg:pl-4 h-auto lg:h-[350px]">
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
