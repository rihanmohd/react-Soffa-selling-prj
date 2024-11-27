import React from 'react'
import img1 from '../assets/images/Rectangle 36.png'
import img3 from '../assets/images/Rectangle 40 (1).png'
import img4 from '../assets/images/Rectangle 41 (1).png'
import img5 from '../assets/images/Rectangle 37 (1).png'
import img6 from '../assets/images/Rectangle 38 (1).png'
import img9 from '../assets/images/Rectangle 44.png'
import img10 from '../assets/images/Rectangle 45.png'
import img11 from '../assets/images/Rectangle 39 (1).png'
import img12 from '../assets/images/bed2.png'


const SharingSection = () => {
  return (
    <div className='mt-20 '>
<p className='text-xl font-bold ml-[40%]'>Share your setup with</p>
<h2 className='text-5xl font-bold mt-2  ml-[35%] mb-9'>#FuniroFurniture</h2>
   
  <div className='w-[1799px] h-[780px] mx-auto flex gap-4 overflow-hidden'>
    <div className=' h-full flex flex-col gap-4 overflow-hidden'>
   <div className='flex gap-4 overflow-hidden'>
    <img className='w-[px] h-[382px]  hover:scale-105 hover:transition-transform' src={img1}></img>
    <img className='w-[451px] h-[312px] mt-16 hover:scale-105 hover:transition-transform' src={img6}></img>
   </div>

   <div className='flex gap-4 overflow-hidden'>
    <img className='w-[px] h-[323px] hover:scale-105 hover:transition-transform' src={img5}></img>
    <img className='w-[344px] h-[242px] hover:scale-105 hover:transition-transform' src={img11}></img>
   </div>
    </div>

<div className='overflow-hidden'>
<img className='w-[295px] h-[392px] mt-44 hover:scale-105 hover:transition-transform' src={img3}></img>
</div>

   



<div className=' h-full flex flex-col gap-4 overflow-hidden'>
   <div className='flex gap-4 overflow-hidden'>
    <img className='w-[290px] h-[348px] mt-16 hover:scale-105 hover:transition-transform' src={img12}></img>
    <img className='w-[425px] h-[433px]  hover:scale-105 hover:transition-transform' src={img10}></img>
   </div>

   <div className='flex gap-4 '>
    <img className='w-[178px] h-[242px] hover:scale-105 hover:transition-transform' src={img4}></img>
    <img className='w-[258px] h-[196px] hover:scale-105 hover:transition-transform' src={img9}></img>
   </div>
    </div>
  </div>


  </div>
  );
}

export default SharingSection


   