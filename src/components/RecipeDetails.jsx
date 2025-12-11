
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ShimmerDetails from "./ShimmerDetails";

const RecipeDetails = () => {
  const { rid } = useParams();
  const navigate = useNavigate();
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    const res = await fetch(`https://dummyjson.com/recipes/${rid}`);
    const data = await res.json();
    setRecipeDetails(data);
  };

  if (!recipeDetails) return <ShimmerDetails />;

  const { name, ingredients, instructions, image, cookTimeMinutes } = recipeDetails;

  return (
    <div className="max-w-4xl mx-auto my-10 p-4 md:p-6 bg-white rounded-2xl shadow-lg">
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-5 py-2 bg-slate-200 text-slate-800 rounded-lg shadow hover:bg-slate-300 transition-colors duration-200"
      >
        Back to Recipes
      </button>
      <img
        src={image}
        alt={name}
        className="w-full h-80 md:h-96 object-cover rounded-xl mb-6"
      />
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-2">{name}</h1>
      <h2 className="text-lg md:text-xl text-gray-600 text-center mb-4">
        Cook Time: {cookTimeMinutes} mins
      </h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-green-600 mb-2">Ingredients:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700 font-medium">
          {ingredients.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-green-600 mb-2">Instructions:</h3>
        <p className="bg-gray-50 p-4 rounded-lg text-gray-800">{instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
