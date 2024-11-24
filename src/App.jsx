import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import ShopPage from './Pages/ShopPage'
const App = () => {
  
  const isToken = localStorage.getItem("Token");
   
  return (

   
      <Routes>
        <Route path="/" element={isToken? <HomePage /> : <LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    
  )
}

export default App