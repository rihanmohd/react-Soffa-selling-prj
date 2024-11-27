import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './ReusableComponents/Login'
import HomePage from './Pages/HomePage'
import ShopPage from './Pages/ShopPage'
import AboutPage from './Pages/AboutPage'
import CartSidebar from './components/CartSidebar'
import ComparisonPage from './Pages/ComparisonPage'
import ConatctPage from './Pages/ConatctPage'



const App = () => {
  
  const isToken = localStorage.getItem("Token");
   
  return (

   
      <Routes>
        <Route path="/" element={isToken? <HomePage /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartSidebar />} />
        <Route path="/compar" element={<ComparisonPage />} />
        <Route path="/contact" element={<ConatctPage />} />
        </Routes>
     
    
  )
}

export default App