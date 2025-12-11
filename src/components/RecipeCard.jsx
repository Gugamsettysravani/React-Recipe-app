
import React from "react";


const RecipeCard = ({ RecipeData }) => {
 

  const { image, name, servings, cuisine, cookTimeMinutes, rating } = RecipeData;
 
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer flex flex-col h-full">
      <img
        src={image}
        alt={name}
        className="w-full h-44 md:h-52 object-cover"
      />
      <div className="p-4 flex flex-col gap-2 flex-1 justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">{name}</h2>
          <p className="text-gray-600 font-medium">{cuisine}</p>
        </div>
        <div>
          <p className="text-gray-700">Servings: {servings}</p>
          <p className="text-gray-700">Cook Time: {cookTimeMinutes} mins</p>
          <p className="text-yellow-500 font-semibold">Rating: {rating}⭐</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
