import React from 'react'
import RecipeCard from './RecipeCard'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';


const Body = () => {
  
  
  const[recipes, setRecipes] = useState([]);
  const[searchText, setSearchText] =useState("");
  const[filteredRecipes, setFilteredRecipes] = useState([]);
  
  
  useEffect(() => {
    
    getRecipes();

  },[])
  
  const getRecipes = async() => {
    const data = await fetch("https://dummyjson.com/recipes");
    const json = await data.json();
    console.log(json);
    setRecipes(json.recipes);
    setFilteredRecipes(json.recipes);
    
  }
 if (recipes.length === 0) {
  return <Shimmer/>;
 }
  return (
    <>
    <div className='search'>
        <input className='search-box' type="text" placeholder='Search Recipe' value={searchText}
        onChange={(e)=> setSearchText(e.target.value)}/>
        <button className='search-btn ' onClick={()=>{
          const filteredData = recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRecipes(filteredData);
          setSearchText("");

        }}>
        Search
        </button>

    </div>
    <div className='filter'>
      <button className='filter-btn' onClick={()=>{
        const topRated = recipes.filter((recipe) => recipe.rating >= 4.9);
        setFilteredRecipes(topRated);
      }}>Top Rated</button>
     </div>
    
    <div className='recipe-container'>
      {
      filteredRecipes.map((recipe) => (
          
         <Link to={"/recipe/"+ recipe.id} key={recipe.id} style={{ textDecoration: 'none' , color:'black'}} >
          <RecipeCard  RecipeData={recipe} />
         </Link>
         
          
           
         
        ))
      }
      
    </div>
    </>
  )
}

export default Body