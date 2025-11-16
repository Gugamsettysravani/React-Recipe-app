import React from 'react'
import ShimmerCard from './ShimmerCard';

const RecipeCard = (props) => {
  const{RecipeData}=props;
  const {image,name,servings,cuisine,cookTimeMinutes,rating}=RecipeData;
  if(!RecipeData){
    return <ShimmerCard/>;
  }

  return (
   <div className="recipe-card">
      <img className="recipe-img" src={image} alt={name} />
      <div className="recipe-content">
        <h2 className="recipe-name">{name}</h2>
        <p className="recipe-cuisine">{cuisine}</p>
        <p className="recipe-servings">Servings: {servings}</p>
        <p className="recipe-cooktime">Cook Time: {cookTimeMinutes} minutes</p>
        <p  className="recipe-rating">Rating: {rating}⭐</p>
        {/* <button className="view-btn">View Recipe</button> */}
      </div>
      </div>
  )
}

export default RecipeCard
