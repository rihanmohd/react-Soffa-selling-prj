import React from 'react'
import logo1 from '../assets/images/Group (1).png'
import logo2 from '../assets/images/shipping.png'
import logo3 from '../assets/images/Vector (11).png'
import logo4 from '../assets/images/Group (2).png'



const SubFooter = () => {
   const Logo = ({imgUrl,title,descr})=>{
    return(
        <>
        <div>
            <img className='' src={imgUrl}></img>
</div>
<div className='flex flex-col'>
<p className='text-xl font-bold'>{title}</p>
<p className='text-lg text-[#898989]'>{descr}</p>
</div>



</>

    )
   }


  return (
<div className="h-fit bg-[#FAF3EA] text-center py-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8  sm:py-10 pl-10 md:gap-4">
  {/* First Logo Section */}
  <div className="flex justify-center items-center">
    <Logo 
      imgUrl={logo1}
      title="High Quality"
      descr="Crafted from top materials"
    />
  </div>

  {/* Second Logo Section */}
  <div className="flex justify-center items-center">
    <Logo 
      imgUrl={logo2}
      title="Warranty Protection"
      descr="Over 2 years"
    />
  </div>

  {/* Third Logo Section */}
  <div className="flex justify-center items-center">
    <Logo 
      imgUrl={logo3}
      title="Free Shipping"
      descr="Order over $150"
    />
  </div>

  {/* Fourth Logo Section */}
  <div className="flex justify-center items-center">
    <Logo 
      imgUrl={logo4}
      title="24 / 7 Support"
      descr="Dedicated support"
    />
  </div>
</div>












//     <div className='h-[270px] bg-[#FAF3EA]  text-center items-center py-4 grid lg:grid-cols-4 md:grid-cols-2 md:h-[330px] md:gap-1 sm:grid-cols-1 sm:h-fit sm:py-10  gap-32  pl-24  '>
      

//       <div className='flex '>
//       <Logo 
//      imgUrl={logo1}
//      title="High Quality"
//      descr="crafted from top materials"

//     />
//       </div>
   
//       <div className='flex'>
// <Logo 
//      imgUrl={logo2}
//      title="Warranty Protection"
//      descr="Over 2 years"

//     />
// </div>


// <div className='flex'>
// <Logo 
//      imgUrl={logo3}
//      title="Free Shipping"
//      descr="Order over 150 $"

//     />
// </div>

// <div className='flex'>
// <Logo 
//      imgUrl={logo4}
//      title="24 / 7 Support"
//      descr="Dedicated support"

//     />
// </div>
//     </div>
  )
}

export default SubFooter