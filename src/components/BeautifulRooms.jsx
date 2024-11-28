import React from 'react'
import img from '../assets/images/chair.png'
import img2 from '../assets/images/bed.png'
import img3 from '../assets/images/side.png'
import img4 from '../assets/images/indicator.png'


const BeautifulRooms = () => {
  return (

    <>


<div className="bg-[#FCF8F3] w-full flex flex-col md:flex-row gap-6 mt-10 items-center md:items-start py-4">
  {/* Text Section */}
  <div className="flex flex-col px-6 md:px-20 text-center lg:mt-20 md:text-left md:mt-20">
    <p className="text-4xl md:text-5xl font-bold leading-tight">
      50+ Beautiful rooms <br /> inspiration
    </p>
    <p className="text-base md:text-lg mt-4">
      Our designer already made a lot of beautiful <br className="hidden md:block" />
      prototypes of rooms that inspire you.
    </p>
    <button className="w-[176px] h-[50px] bg-[#B88E2F] text-white text-lg mt-5 hover:scale-105 transition-transform lg:ml-2  sm:mx-auto">
      Explore More
    </button>
  </div>


{/* right side */}
<div className='h-[582px] w-[1196px] flex gap-6 overflow-hidden'>
<div
      className="w-full md:w-[404px] h-[400px] md:h-[582px] sm:h-[582px] sm:w-[400px] sm:mx-auto sm:mt-2 relative hover:scale-105 transition-transform overflow-hidden"
      style={{
        backgroundImage: `url(${img2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

<div className='w-[217px] h-[130px] bg-[#FFFFFFB8] absolute top-[420px] left-[30px]'>
    <p className='text-center text-xl mt-4'>01 - Bed Room</p>
    <p className='text-center mt-3 text-3xl font-semibold'>Inner Peace</p>
    <svg className='bg-[#B88E2F] ml-56' width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12H3M21 12L15 6M21 12L15 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
    </div>
    
    <div className='flex flex-col gap-10'>
        
    <img  src={img} className='w-[377px] h-[486px] hover:scale-105 hover:transition-transform lg:block md:hidden sm:hidden'></img>
    <img src={img4} className='w-[125px] h-[27px] lg:block md:hidden sm:hidden'></img>
    </div>
    
    <img src={img3} className=' w-[116px] ml-4  hover:scale-105 hover:transition-transform lg:block md:hidden sm:hidden'></img>
</div>
 </div>
 </>
  )
}

export default BeautifulRooms