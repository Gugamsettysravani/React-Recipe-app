import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Body from './components/Body'

import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import RecipeDetails from './components/RecipeDetails'

import './App.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/recipe/:rid' element={<RecipeDetails/>} />

        <Route path='*' element={<Error/>} />
        
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App