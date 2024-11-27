import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Frame 168.png'
import contact from '../assets/images/contact.png'
import search from '../assets/images/Vector (5).png'
import like from '../assets/images/Vector (6).png'
import cart from '../assets/images/Vector (7).png'

const Navbar = () => {
  const [isMenuOpen, setIsMenu] = useState(false);
  return (

<nav className="ml-12">
  <div className="mx-auto flex items-center py-4 px-6">
    {/* Left Side - Logo and Navigation Links */}
    <div className="flex items-center space-x-64 w-full">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-24 md:w-28" />

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-20">
        <Link to="/" className="text-lg font-medium hover:text-[#B88E2F] hover:scale-110 transition-transform">
          Home
        </Link>
        <Link to="/shop" className="text-lg font-medium hover:text-[#B88E2F] hover:scale-110 transition-transform">
          Shop
        </Link>
        <Link to="/about" className="text-lg font-medium hover:text-[#B88E2F] hover:scale-110 transition-transform">
          About
        </Link>
        <Link to="/contact" className="text-lg font-medium hover:text-[#B88E2F] hover:scale-110 transition-transform">
          Contact
        </Link>
      </div>

      {/* Hamburger Menu (Shown on small screens) */}
      <div className="md:hidden">
        <button
          className="p-2 text-gray-600 hover:text-gray-800"
          onClick={() => setIsMenu(!isMenuOpen)} 
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>

    {/* Right Side - Icons */}
    <div className="hidden lg:flex space-x-12 mr-52 items-center">
      <img src={contact} alt="Contact" className="w-6 h-6 " />
      <img src={like} alt="Like" className="w-6 h-6 " />
      <img src={search} alt="Search" className="w-6 h-6 " />
      <img src={cart} alt="Cart" className="w-6 h-6 " />
    </div>
  </div>

  {/* Dropdown Menu for Small Screens */}
  {isMenuOpen && (
    <div className="flex flex-col md:hidden bg-transparent itemsc  p-4 space-y-4">
      <Link to="/" className="text-lg font-medium hover:text-[#B88E2F]">
        Home
      </Link>
      <Link to="/shop" className="text-lg font-medium hover:text-[#B88E2F]">
        Shop
      </Link>
      <Link to="/about" className="text-lg font-medium hover:text-[#B88E2F]">
        About
      </Link>
      <Link to="/contact" className="text-lg font-medium hover:text-[#B88E2F]">
        Contact
      </Link>
     
    </div>
  )}
</nav>








    

  //   <nav className="ml-12">
  //     <div className=" mx-auto flex items-center py-4 px-6">
  //       {/* Left Side - Logo and Navigation Links */}
  //       <div className="flex items-center space-x-64">
  //         {/* Logo */}
  //        <img src={logo}></img>
  //         {/* Navigation Links */}
  //         <div className="flex space-x-20">
  //           <a  className="text-lg font-medium hover:text-[#B88E2F] hover:scale-110 hover:transition-transform">
  //             <Link to="/">Home</Link>
              
  //           </a>
  //           <a className="text-lg font-medium hover:text-[#B88E2F] hover:scale-110 hover:transition-transform">
  //             <Link to="/shop">Shop</Link>
           
  //           </a>
  //           <a className="text-lg font-medium  hover:text-[#B88E2F] hover:scale-110 hover:transition-transform">
  //             <Link to="/about">About</Link>
             
  //           </a>
  //           <a className="text-lg font-medium hover:text-[#B88E2F] hover:scale-110 hover:transition-transform">
  //             <Link to="/compar">Contact</Link>
            
  //           </a>
  //         </div>
  //       </div>

  //     {/* Right Side - Icons */}
  //     <div className="flex space-x-12 ml-40 items-center">
  //       <img  src={contact} className="" />
  //       <img src={like} className="" />
  //       <img src={search} className="" />
  //       <img src={cart} className="" />
  //     </div>
  //   </div>
  // </nav>
  )
}

export default Navbar