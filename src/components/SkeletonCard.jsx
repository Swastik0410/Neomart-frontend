import React from "react";

export default function SkeletonCard() {
  return (
    <div className="border border-gray-200  rounded-xl p-4 bg-white dark:bg-[#1e1f20] shadow-sm animate-pulse">
     
      <div className="h-48 bg-gray-200 dark:bg-[#2a2b2c] mb-4 rounded-lg"></div>

   
      <div className="h-4 bg-gray-200 dark:bg-[#2a2b2c] mb-3 rounded w-3/4"></div>

      <div className="h-3 bg-gray-200 dark:bg-[#2a2b2c] mb-3 rounded w-1/2"></div>

       <div className="h-4 bg-gray-200 dark:bg-[#2a2b2c] rounded w-1/4"></div>
    </div>
  );
}
