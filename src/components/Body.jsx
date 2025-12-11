
import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const Body = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    setLoading(true);
    const data = await fetch("https://dummyjson.com/recipes");
    const json = await data.json();
    setRecipes(json.recipes);
    setFilteredRecipes(json.recipes);
    setAnimate(true);
    setLoading(false);
  };

  const handleSearch = () => {
    const filteredData = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRecipes(filteredData);
    setSearchText("");
    setAnimate(true);
  };

  const handleTopRated = () => {
    const topRated = recipes.filter((recipe) => recipe.rating >= 4.9);
    setFilteredRecipes(topRated);
    setAnimate(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search Recipe..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full md:w-80 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-300 shadow-sm transition"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-slate-200 text-slate-800 font-semibold rounded-xl shadow hover:bg-slate-300 transition-all duration-200"
        >
          Search
        </button>
        <button
          onClick={handleTopRated}
          className="px-6 py-2 bg-slate-50 text-slate-700 font-semibold rounded-xl shadow hover:bg-slate-100 transition-all duration-200"
        >
          Top Rated
        </button>
      </div>
      

      {/* Recipes Grid with Fade-In Animation */}
      {loading ? (
        <div className="flex justify-center items-center my-20">
          <Spinner size={48} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <Link
                to={"/recipe/" + recipe.id}
                key={recipe.id}
                className={`no-underline text-black block h-full transform transition duration-500 ease-in-out ${
                  animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <RecipeCard RecipeData={recipe} />
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No recipes found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
