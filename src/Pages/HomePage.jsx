import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import OurProducts from '../components/OurProducts'
import BeautifulRooms from '../components/BeautifulRooms'
import SharingSection from '../components/SharingSection'
import Footer from '../components/Footer'


const HomePage = () => {
  return (
  <>
  <Navbar />
  <Header />
  <OurProducts />
  <BeautifulRooms />
  {/* <SharingSection /> */}
  <Footer />
  </>
  )
}

export default HomePage