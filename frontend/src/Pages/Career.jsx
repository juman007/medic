import React from "react";
import downloadPdf from "../assets/dummy.pdf";

const data = [
   {
      slNo: 1,
      subject: "Dummy Subject",
      pdfLink: downloadPdf,
   },
   {
      slNo: 2,
      subject: "Dummy Subject",
      pdfLink: downloadPdf,
   },
   {
      slNo: 3,
      subject: "Dummy Subject",
      pdfLink: downloadPdf,
   },
   {
      slNo: 4,
      subject: "Dummy Subject",
      pdfLink: downloadPdf,
   },
];

const Career = () => {
   return (
      <div className="mt-28">
         <div className="mt-10">
            <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
               Career
            </h2>
            <div className="flex justify-center">
               <hr className="w-24 border-t-2 border-blue-400 mt-2 mb-4" />
            </div>
            <p className="text-center text-lg mb-10 text-gray-700">
               Discover our passion for delivering outstanding service and
               commitment to excellence.
            </p>
         </div>
         <div className="w-[80%] m-auto">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
               <table className="w-full text-sm rtl:text-right text-black">
                  <thead className="text-xs text-white font-bold uppercase bg-blue-500">
                     <tr>
                        <th scope="col" className="pl-8 pr-4 py-3 text-left">
                           Sl No.
                        </th>
                        <th scope="col" className="px-4 py-3 text-center">
                           Subject
                        </th>
                        <th scope="col" className="pl-4 pr-8 py-3 text-right">
                           Download
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     {data.map((item, index) => (
                        <tr
                           key={item.slNo}
                           className={`border-b border-gray-300 ${
                              index % 2 === 0 ? "bg-white" : "bg-gray-100"
                           }`}
                        >
                           <th
                              scope="row"
                              className="pl-8 pr-4 py-4 font-medium text-black whitespace-nowrap text-left"
                           >
                              #{item.slNo}
                           </th>
                           <td className="px-4 py-4 text-center">
                              {item.subject}
                           </td>
                           <td className="pl-4 pr-8 py-4 text-right">
                              <a
                                 href={item.pdfLink}
                                 className="text-blue-600 hover:underline"
                              >
                                 Download PDF
                              </a>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default Career;
