
import React from "react";

const ShimmerDetails = () => {
  return (
    <div className="animate-pulse max-w-4xl mx-auto my-10 p-4 bg-white rounded-2xl shadow-lg space-y-4">
      <div className="bg-gray-200 w-full h-64 md:h-96 rounded-lg"></div>
      <div className="bg-gray-200 h-8 w-3/4 mx-auto rounded"></div>
      <div className="bg-gray-200 h-6 w-1/2 mx-auto rounded"></div>
      <div className="bg-gray-200 h-4 rounded"></div>
      <div className="bg-gray-200 h-4 rounded"></div>
      <div className="bg-gray-200 h-4 rounded"></div>
      <div className="bg-gray-200 h-20 rounded-lg"></div>
    </div>
  );
};

export default ShimmerDetails;
