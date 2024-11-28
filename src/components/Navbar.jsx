import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Frame 168.png'
import logo2 from '../assets/images/mtlogo.png'
import contact from '../assets/images/contact.png'
import search from '../assets/images/Vector (5).png'
import like from '../assets/images/Vector (6).png'
import cart from '../assets/images/Vector (7).png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (

<>

<nav className="relative z-50">
  <div className="mx-auto flex items-center justify-between py-4 px-10">
    {/* Left Side - Logo */}
    <img src={logo} alt="Logo" className=" w-40 md:w-28" />

    {/* Centered Navigation Links and Icons for Large Screens */}
    <div className="hidden md:flex flex-1 justify-center items-center space-x-[10%]">
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

    {/* Icons for Large Screens */}
    <div className="hidden md:flex space-x-8 mr-[2%]">
      <img src={contact} alt="Contact" className="w-6 h-6 hover:scale-110 transition-transform" />
      <img src={search} alt="Search" className="w-6 h-6 hover:scale-110 transition-transform" />
      <img src={like} alt="Like" className="w-6 h-6 hover:scale-110 transition-transform" />
      <img src={cart} alt="Cart" className="w-6 h-6 hover:scale-110 transition-transform" />
    </div>

    {/* Hamburger Menu Button (Visible Only on Medium Screens and Smaller) */}
    <div className="ml-auto md:hidden">
      <button
        className="p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-[40px] h-[35px]"
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

  {/* Fullscreen Dropdown Menu (Hamburger) */}
  {isMenuOpen && (
    <div className="fixed inset-0 bg-white flex flex-col justify-between items-center z-50">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-800"
        onClick={() => setIsMenuOpen(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-[30px] h-[30px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Logo at Top */}
      <img src={logo2} alt="Logo" className="mt-6" />

      {/* Menu Links Centered */}
      <div className="flex flex-col justify-center items-center space-y-6">
        <Link to="/" className="text-2xl font-medium hover:text-[#B88E2F]">
          Home
        </Link>
        <Link to="/shop" className="text-2xl font-medium hover:text-[#B88E2F]">
          Shop
        </Link>
        <Link to="/about" className="text-2xl font-medium hover:text-[#B88E2F]">
        About
        </Link>
        <Link to="/contact" className="text-2xl font-medium hover:text-[#B88E2F]">
          Contact
        </Link>
      </div>

      {/* Icons at Bottom Center */}
      <div className="flex space-x-8 mb-80">
        <img src={contact} alt="Contact" className="w-8 h-8" />
        <img src={search} alt="Search" className="w-8 h-8" />
        <img src={like} alt="Like" className="w-8 h-8" />
        <img src={cart} alt="Cart" className="w-8 h-8" />
      </div>
    </div>
  )}
</nav>

</>
  )
}

export default Navbar