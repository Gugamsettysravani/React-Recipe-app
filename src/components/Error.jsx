
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
      <img
        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-lg"
        src="https://www.shutterstock.com/shutterstock/photos/2196561307/display_1500/stock-vector--d-vector-yellow-warning-sign-with-exclamation-mark-concept-eps-vector-2196561307.jpg"
        alt="error"
      />
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mt-6">
        Oops! Page Not Found
      </h1>
      <h2 className="text-lg md:text-xl text-gray-700 mt-2 text-center">
        We can't seem to find the page you're looking for.
      </h2>
      <h3 className="text-md md:text-lg text-gray-500 mt-1 text-center">
        Please check the URL or return to the homepage.
      </h3>
      <Link
        to="/"
        className="mt-4 px-6 py-2 bg-slate-200 text-slate-800 rounded-lg shadow hover:bg-slate-300 transition-colors duration-200"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;
