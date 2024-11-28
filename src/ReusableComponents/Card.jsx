import React from 'react'

    const Card = ({url,title,subTitle,price,priceOld})=>{
        return (
          <>

           <div className='max-w-[285px] h-[446px] sm:w-[350px]  bg-[#F4F5F7] flex flex-col gap-3  relative overflow-hidden'> 
           {/* <div className='w-[48px] h-[48px] bg-[#E97171] rounded-full absolute text-white'></div>   */}
              <img src={url} className=' w-[285px] h-[301px] sm:w-[350px] hover:scale-110 hover:transition-transform '></img>
             <p className='text-2xl font-bold pl-3 sm:mt-3'>{title}</p> 
             <p className='text-lg text-[#898989] pl-3'>{subTitle}</p>
            <div className='flex gap-3'>
             <p className='text-xl font-bold pl-3'>{price}</p>
            <p className='text-[#B0B0B0] line-through'>{priceOld}</p>
            </div>
            
        </div> 



        </>
        )
       }


export default Card