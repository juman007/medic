import React from "react";

const TopBar = () => {
   return (
      <div className="hidden md:flex justify-between items-center bg-blue-500 text-white px-5 h-7">
         {" "}
         {/* Hide on small devices */}
         <div className="flex flex-row justify-start gap-2">
            <p className="text-sm">Email: xyz@gmail.com</p>
            <p className="text-sm">Phone: +123456789</p>
         </div>
         <div className="w-[20px]">
            <img
               className="container"
               src="https://cdn-icons-png.flaticon.com/512/2496/2496110.png"
               alt=""
            />
         </div>
      </div>
   );
};

export default TopBar;
