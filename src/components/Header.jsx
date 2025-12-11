import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-100 text-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-3 md:p-6">
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white object-cover p-1 bg-white"
            src="https://e7.pngegg.com/pngimages/415/27/png-clipart-fruit-logo-food-recipe-business-seasoning-ingredients-natural-foods-dried-fruit.png"
            alt="logo"
          />
          <h1 className="text-2xl md:text-3xl font-bold">Recipe App</h1>
        </div>
        <nav>
          <ul className="flex gap-6 text-lg md:text-xl font-semibold">
            <li>
              <Link
                to="/"
                className="hover:text-slate-500 transition-colors duration-200"
              >
                Recipes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
