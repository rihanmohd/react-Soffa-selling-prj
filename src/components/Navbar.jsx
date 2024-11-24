import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Frame 168.png'
import contact from '../assets/images/contact.png'
import search from '../assets/images/Vector (5).png'
import like from '../assets/images/Vector (6).png'
import cart from '../assets/images/Vector (7).png'

const Navbar = () => {
  return (

    <nav className="ml-12">
      <div className=" mx-auto flex items-center py-4 px-6">
        {/* Left Side - Logo and Navigation Links */}
        <div className="flex items-center space-x-64">
          {/* Logo */}
         <img src={logo}></img>
          {/* Navigation Links */}
          <div className="flex space-x-20">
            <a  className="text-lg font-medium hover:text-[#B88E2F]">
              <Link to="/">Home</Link>
              
            </a>
            <a className="text-lg font-medium hover:text-[#B88E2F]">
              <Link to="/shop">Shop</Link>
           
            </a>
            <a className="text-lg font-medium  hover:text-[#B88E2F]">
              <Link to="">About</Link>
             
            </a>
            <a className="text-lg font-medium hover:text-[#B88E2F]">
              <Link to="">Contact</Link>
            
            </a>
          </div>
        </div>

      {/* Right Side - Icons */}
      <div className="flex space-x-12 ml-40 items-center">
        <img  src={contact} className="" />
        <img src={like} className="" />
        <img src={search} className="" />
        <img src={cart} className="" />
      </div>
    </div>
  </nav>
  )
}

export default Navbar