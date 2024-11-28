import React from 'react'
import bgimg from '../assets/images/bg.png'
import dining from '../assets/images/dining.png'
import Living from '../assets/images/image 100.png'
import Bedroom from '../assets/images/bedroom.png'


const Header = () => {
 

  const Card = ({imgUrl,text})=>{
    return (
      <div className='bg-white items-center h-[480px] w-[381px] overflow-hidden relative'>
        <img className='hover:scale-105 hover:transition-transform ' src={imgUrl}></img>
        <p className='text-xl font-bold mt-6'>{text}</p>
      </div>
    )
  }


  return (
    <div className=''>
<header
  className="h-[813px]  bg-cover bg-center"
  style={{
    backgroundImage: `url(${bgimg})`,
  }}
>
  <div className="w-[90%] max-w-[561px] h-auto pt-10 pl-9 pb-4 bg-[#FFF3E3] flex flex-col absolute top-[50%] right-[5%] transform -translate-y-1/2">
    <p className="text-lg font-bold">New Arrival</p>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#B88E2F]">
      Discover Our <br />
      New Collection
    </h2>
    <p className="text-sm sm:text-base md:text-lg font-semibold mt-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
      tellus, luctus nec ullamcorper mattis.
    </p>
    <button className="w-[140px] sm:w-[160px] h-[60px] sm:h-[74px] mt-4 bg-[#B88E2F] text-white text-sm sm:text-lg hover:scale-110 hover:transition-transform">
      BUY NOW
    </button>
  </div>
</header>

{/* after header three cards */}
<div className="w-[90%] max-w-[1183px] h-auto grid grid-rows-1  text-center mx-auto mt-10">
  <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Browse The Range</h2>
  <p className="text-sm sm:text-base md:text-lg mt-2">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>

  <div className="grid grid-cols-  sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
    <Card imgUrl={dining} text="Dining" />
    <Card imgUrl={Living} text="Living" />
    <Card imgUrl={Bedroom} text="Bedroom" />
  </div>
</div>






   
  {/* <header className='h-[813px] relative bg-cover bg-center ' 
  style={{
    backgroundImage: `url(${bgimg})`}} >



<div className='w-[561px] h-[344px] pt-10 pl-9 pb-4  bg-[#FFF3E3] flex flex-col absolute top-[300px] right-10 '>
    <p className='text-lg font-bold'>New Arrival</p>
    <h2 className='text-5xl font-bold leading-tight text-[#B88E2F]'>Discover Our <br></br> New Collection</h2>
    <p className='text-lg font-semibold mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
         tellus, luctus nec ullamcorper mattis.</p>
         <button className='w-[160px] h-[74px] mt-4 bg-[#B88E2F] text-white text-lg  hover:scale-110 hover:transition-transform'>BUY NOW</button>
</div>
  </header>
 */}

{/* after header three cards */}
{/* <div className='w-[1183px] h-[685px] flex flex-col text-center mx-auto mt-10'>
  <h2 className='text-2xl font-bold'>Browse The Range</h2>
  <p className='text-lg mt-2'>Lorem ipsum dolor sit amet,
     consectetur adipiscing elit.</p>

   
     <div className='grid grid-cols-3 gap-8 mt-12'>
 
 <Card 
 imgUrl={dining}
 text="Dinig"
 />
   
   <Card 
 imgUrl={Living}
 text="Living"
 />
 <Card 
 imgUrl={Bedroom}
 text="Bedroom"
 />

     </div>

</div> */}

  </div>
  )
}

export default Header