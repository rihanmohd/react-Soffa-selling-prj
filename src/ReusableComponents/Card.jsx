import React from 'react'

    const Card = ({url,title,subTitle,price,priceOld,discount})=>{
        return (
          <div className='w-[285px] h-[446px]  bg-[#F4F5F7] flex flex-col gap-3  relative'>
            {/* <div className='w-[48px] h-[48px] bg-[#E97171] rounded-full absolute text-white'>{discount}</div> */}
            <img src={url} className='w-[285px] h-[301px] '></img>
            <p className='text-2xl font-bold pl-3'>{title}</p>
            <p className='text-lg text-[#898989] pl-3'>{subTitle}</p>
            <div className='flex gap-3'>
            <p className='text-xl font-bold pl-3'>{price}</p>
            <p className='text-[#B0B0B0] line-through'>{priceOld}</p>
            </div>
            
          </div>
        )
       }


export default Card