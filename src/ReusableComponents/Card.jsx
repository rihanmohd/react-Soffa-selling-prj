import React from 'react'

    const Card = ({url,title,subTitle,price,priceOld})=>{
        return (

<div className="w-full max-w-[285px] h-auto bg-[#F4F5F7] flex flex-col gap-3 relative overflow-hidden">
    <img
      src={url}
      className="w-full max-w-[285px] h-[301px] object-cover hover:scale-110 hover:transition-transform"
      alt=""
    />
    <p className="text-lg md:text-2xl font-bold pl-3">{title}</p>
    <p className="text-sm md:text-lg text-[#898989] pl-3">{subTitle}</p>
    <div className="flex gap-3 pl-3">
      <p className="text-base md:text-xl font-bold">{price}</p>
      <p className="text-[#B0B0B0] line-through text-sm md:text-base">{priceOld}</p>
    </div>
  </div>

 



          
          // <div className='w-[285px] h-[446px]  bg-[#F4F5F7] flex flex-col gap-3  relative overflow-hidden'>
          //   {/* <div className='w-[48px] h-[48px] bg-[#E97171] rounded-full absolute text-white'>{discount}</div> */}
          //   <img src={url} className=' w-[285px] h-[301px] hover:scale-110 hover:transition-transform '></img>
          //   <p className='text-2xl font-bold pl-3'>{title}</p> 
          //   <p className='text-lg text-[#898989] pl-3'>{subTitle}</p>
          //   <div className='flex gap-3'>
          //   <p className='text-xl font-bold pl-3'>{price}</p>
          //   <p className='text-[#B0B0B0] line-through'>{priceOld}</p>
          //   </div>
            
          // </div>


        )
       }


export default Card