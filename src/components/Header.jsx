import React from 'react'
import bgimg from '../assets/images/bg.png'
import dining from '../assets/images/dining.png'
import Living from '../assets/images/image 100.png'
import Bedroom from '../assets/images/bedroom.png'


const Header = () => {
 

  const Card = ({imgUrl,text})=>{
    return (
      <div className='bg-white items-center w-[381px]'>
        <img src={imgUrl}></img>
        <p className='text-xl font-bold mt-6'>{text}</p>
      </div>
    )
  }


  return (
    <>
   
  <header className='h-[813px] relative bg-cover bg-center' 
  style={{
    backgroundImage: `url(${bgimg})`}} >



<div className='w-[561px] h-[344px] pt-10 pl-9 pb-4   bg-[#FFF3E3] flex flex-col absolute top-[300px] right-10'>
    <p className='text-lg font-bold'>New Arrival</p>
    <h2 className='text-5xl font-bold leading-tight text-[#B88E2F]'>Discover Our <br></br> New Collection</h2>
    <p className='text-lg font-semibold mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
         tellus, luctus nec ullamcorper mattis.</p>
         <button className='w-[160px] h-[74px] mt-4 bg-[#B88E2F] text-white text-lg '>BUY NOW</button>
</div>
  </header>


{/* after header three cards */}
<div className='w-[1183px] h-[685px] flex flex-col text-center mx-auto mt-10'>
  <h2 className='text-xl font-bold'>Browse The Range</h2>
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

</div>

  </>
  )
}

export default Header