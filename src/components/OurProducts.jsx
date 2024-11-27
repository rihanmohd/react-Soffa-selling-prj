import React from 'react'
import Card from '../ReusableComponents/Card'
import img1 from '../assets/images/image 1.png'
import img2 from '../assets/images/images (2).png'
import img3 from '../assets/images/images (3).png'
import img4 from '../assets/images/images (3).png'
import img5 from '../assets/images/image 5 (1).png'
import img6 from '../assets/images/images (1).png'
import img7 from '../assets/images/images.png'
import img8 from '../assets/images/bed.png'

const OurProducts = () => {
  

  return (
   <div className='w-fit  mx-auto grid grid-rows-2 gap-8  mt-5'>
    
    <h2 className='text-center text-5xl font-bold'>Our Products</h2>
    <div className='grid grid-cols-4 gap-6 -mt-48'>


    <Card 
    url={img1}
    title="Syltherine"
    subTitle="Stylish cafe chair"
    price="Rp 2.500.000"
    priceOld="Rp 3.500.000"

    />

<Card 
    url={img4}
    title="Syltherine"
    subTitle="Stylish cafe chair"
    price="Rp 2.500.000"
    priceOld="Rp 3.500.000"

    />

<Card 
    url={img8}
    title="Lolito"
    subTitle="Luxury big sofa"
    price="Rp 7.000.000"
    priceOld="Rp 14.000.000"

    />

<Card 
    url={img7}
    title="Respira"
    subTitle="Outdoor bar table and stool"
    price="Rp 500.000"


    />
      
    </div>



    <div className='grid grid-cols-4 gap-6 '>


<Card 
        url={img5}
        title="Grifo"
        subTitle="Night lamp"
        price="Rp 2.500.000"


/>

<Card 
        url={img3}
        title="Muggo"
        subTitle="Small mug"
        price="Rp 150.000"


/>

<Card 
        url={img2}
        title="Pingky"
        subTitle="Cute bed set"
        price="Rp 7.000.000"
        priceOld="Rp 14.000.000"

/>

<Card 
        url={img6}
        title="Potty"
        subTitle="Minimalist flower pot"
        price="Rp 500.000"


/>
  
</div>
<button className='mx-auto mt-9 w-[245px] h-[48px] border border-[#B88E2F] text-[#B88E2F] text-lg hover:bg-[#B88E2F] hover:text-white'> Show More</button>
   </div>
  )
}

export default OurProducts