import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect ,useState} from 'react';
import ShimmerDetails from './ShimmerDetails';

const RecipeDetails = () => {

  const {rid}=useParams();
  const[recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    getRecipeDetails();
  
  },[])

const getRecipeDetails = async() => {

  const data = await fetch("https://dummyjson.com/recipes/"+ rid);
  const json = await data.json();
  console.log(json);
  setRecipeDetails(json);

}
const { name,ingredients,instructions,image,cookTimeMinutes ,id}= recipeDetails || {};

if (!recipeDetails) {
  return <ShimmerDetails/>;
}
  return (
    <div>
      <div className='recipe-details-card'>
        <img className='recipe-details-img' src={image} alt={name} />
        <h1 className='recipe-details-name'>{name}</h1>
        <h2 className='recipe-details-cooktime'>Cook Time: {cookTimeMinutes} minutes</h2>
        <div className='recipe-details-ingredients'>
          <h3>Ingredients:</h3>
          <ul>
            {ingredients && ingredients.map((ingredient) => (
              <li key={id}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className='recipe-details-instructions'>
          <h3> Instructions:</h3>
          <p>{instructions}</p>
        </div>


      </div>
        
    </div>
  )
}

export default RecipeDetails;