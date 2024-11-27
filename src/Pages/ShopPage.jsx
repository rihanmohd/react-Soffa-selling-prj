import React from 'react'
import Navbar from '../components/Navbar'
import ShopSection from '../components/ShopSection'
import SubFooter from '../ReusableComponents/SubFooter'
import Footer from '../components/Footer'
const ShopPage = () => {
  return (
    <div>
    <Navbar />
    <ShopSection/>
    <div className='-mt-[5450px]'>
    <SubFooter />
    </div>
    
    <Footer />
  
    </div>
  )
}

export default ShopPage