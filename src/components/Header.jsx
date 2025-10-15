import React from 'react'
import { Link } from 'react-router';



const Header = () => {

   
  return (
   <div className='header'>
    <div >
        <img className='logo' src="https://e7.pngegg.com/pngimages/415/27/png-clipart-fruit-logo-food-recipe-business-seasoning-ingredients-natural-foods-dried-fruit.png" alt="logo" />

    </div>
    
    <div className='nav-items'>
        <ul > 
            <li className='list'><Link to="/">Recipes</Link ></li>
           
            
        
        </ul>
    </div>
   </div>
  )
}

export default Header;