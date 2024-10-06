import React from "react";

const Card = () => {

   return (
      <div className="w-68 h-auto flex flex-col items-start gap-1 border rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 min-h-[400px]">
         {" "}
         {/* Adjusted min-h */}
         <div className="h-[250px] w-full overflow-hidden">
            {" "}
            {/* Adjusted height for better proportions */}
            <img
               className="w-full h-full object-cover"
               src="https://images.pexels.com/photos/7579828/pexels-photo-7579828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt="Shoes"
            />
         </div>
         <div className="p-2 flex-1">
            {" "}
            {/* Added flex-1 to ensure it takes up available space */}
            <p className="text-sm font-bold text-gray-600">Shoes</p>
            <p className="text-lg font-bold text-black">
               Leather Mid-Heel Sandals
            </p>
            <p className="text-lg font-bold text-gray-600">$129.00</p>
         </div>
      </div>
   );
};

const CardGrid = () => {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
      </div>
   );
};

export default CardGrid;
