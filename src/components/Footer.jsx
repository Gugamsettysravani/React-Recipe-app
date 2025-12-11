
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-800 text-center py-4 px-4 md:px-0 mt-10 shadow-inner bottom-0 w-full">
      <p className="text-sm md:text-base">
        © {new Date().getFullYear()} Recipe App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
