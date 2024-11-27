import React from 'react'
import Card from '../ReusableComponents/Card'
import img from '../assets/images/lefticon.png'
import img1 from '../assets/images/sofa1.png'
import img2 from '../assets/images/sofa2.png'
import img3 from '../assets/images/sofa3.png'
import img4 from '../assets/images/sofa4.png'
import img5 from '../assets/images/bigsofa.png'
import img6 from '../assets/images/Group 88.png'
import img7 from '../assets/images/twitter.png'
import img8 from '../assets/images/facebook.png'
import img9 from '../assets/images/linkdin.png'
import img10 from '../assets/images/sofabg.png'

import imgg1 from '../assets/images/image 1.png'
import imgg2 from '../assets/images/images (2).png'
import imgg3 from '../assets/images/images (3).png'
import imgg7 from '../assets/images/images.png'



const AboutSection = () => {
  return (
    <div>
        
    
    <div className='h-[70px] bg-[#F9F1E7]  items-center flex gap-8 pl-20'>
<p className='text-xl text-[#9F9F9F]'>Home</p>
<img className='w-8 h-10' src={img}></img>
<p className='text-xl text-[#9F9F9F]'>Shop</p>
<img className='w-8 h-10' src={img}></img>
<svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1" x2="1" y2="37" stroke="#9F9F9F" stroke-width="2"/>
</svg>
<p className='text-xl font-semibold'>Ashaard sofa</p>
    </div>

<section className='h-[820px] bg-white mt-20 flex   ml-20 pl-9'>
  <div className='w-[76px] h-[416px] flex flex-col justify-between'>
    <div className='w-[76px] h-[80px] bg-[#F9F1E7] bg-cover bg-center rounded-md'> <img className=' hover:scale-105 hover:transition-transform' src={img1}></img> </div>
    <div className='w-[76px] h-[80px] bg-[#F9F1E7] bg-cover bg-center rounded-md'> <img className=' hover:scale-105 hover:transition-transform' src={img2}></img> </div>
    <div className='w-[76px] h-[80px] bg-[#F9F1E7] bg-cover bg-center rounded-md'> <img className=' hover:scale-105 hover:transition-transform' src={img3}></img> </div>
    <div className='w-[76px] h-[80px] bg-[#F9F1E7] bg-cover bg-center rounded-md'> <img className=' hover:scale-105 hover:transition-transform' src={img4}></img> </div>
  </div>

<div className='w-[423px] h-[500px] ml-8 bg-[#F9F1E7] bg-cove bg-center pt-16'>
  <img className=' h-[391px]  hover:scale-105 hover:transition-transform' src={img5}></img>
</div>

{/* text cont */}
<div className='flex flex-col w-[607px] h-[730px] ml-40 '>
  <p className='text-4xl font-semibold'>Asgaard sofa</p>
  <p className='text-xl text-[#9F9F9F] mt-2 '>Rs. 250,000.00</p>
  <div className='inline-block space-x-7 my-3'>
    <img className='inline' src={img6}></img>
    <svg className='inline' width="2" height="30" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1" x2="1" y2="37" stroke="#9F9F9F" stroke-width="2"/>
</svg>
    <p className='inline text-[#9F9F9F]'>5 Customer Review</p>
  </div>
  

<p className='text-lg font-semibold leading-tight w-[424px] h-[80px] '>Setting the bar as one of the loudest speakers in its class, the
   Kilburn is a compact, stout-hearted hero with a well-balanced
    audio which boasts a clear midrange and extended highs for a sound.

</p>
<label className='text-2xl text-[#9F9F9F] mt-10'>Size</label>
<div className='flex gap-7 mt-4'>
<p className='w-[33px] h-[33px] text-lg text-center rounded-md bg-[#B88E2F] text-white '>L</p>
<p className='w-[33px] h-[33px] text-lg text-center rounded-md bg-[#F9F1E7] text-black hover:text-white hover:bg-[#B88E2F]'>XL</p>
<p className='w-[33px] h-[33px] text-lg text-center rounded-md bg-[#F9F1E7] text-black hover:text-white hover:bg-[#B88E2F]'>XS</p>
</div>


<label className='text-xl text-[#9F9F9F] mt-7 mb-4'>Color</label>
<div className='flex gap-6'>
<div className='w-[30px] h-[30px] rounded-full bg-[#816DFA] '></div>
<div className='w-[30px] h-[30px] rounded-full bg-[#000000] '></div>
<div className='w-[30px] h-[30px] rounded-full bg-[#B88E2F] '></div>
</div>



<div className='flex gap-4 mt-10'>
  <button className='w-[123px] h-[64px] border border-[#9F9F9F] rounded-lg text-center text-2xl font-semibold hover:text-white hover:bg-[#B88E2F] hover:border-none'> - 1 +</button>
  <button className='w-[215px] h-[64px] rounded-lg text-xl text-center border-2 border-black font-semibold hover:text-white hover:bg-[#B88E2F] hover:border-none'>Add To Cart</button>
  <button className='w-[215px] h-[64px] rounded-lg text-xl text-center border-2 border-black font-semibold hover:text-white hover:bg-[#B88E2F] hover:border-none'>+ Computer</button>
</div>

<div className='border-t border-gray-300 w-[605px] mt-16 flex gap-9 py-10'>
  <div className=''>
    <p className='text-xl text-[#9F9F9F]'>SKU</p>
    <p className='text-xl text-[#9F9F9F] my-4'>Category</p>
    <p className='text-xl text-[#9F9F9F]'>Tags</p>
    <p className='text-xl text-[#9F9F9F] mt-3'>Share</p>
  </div>
  <div className=''>
<p className='text-xl text-[#9F9F9F]'> : SS001</p>
<p className='text-xl text-[#9F9F9F] my-4'> : Sofas</p>
<p className='text-xl text-[#9F9F9F]'>: Sofa, Chair, Home, Shop</p>
<div className='text-xl text-[#9F9F9F] mt-3 inline-block'> : <img className='inline ml-2' src={img7}></img> <img className='inline mx-4' src={img8}></img> <img className='inline' src={img9}></img></div>
  </div>
</div>
</div>
</section>




<section className='h-[744px] border-y border-[#9F9F9F]  mx-auto text-center items-center'>
  <div className='flex gap-20 mt-10 justify-center'>
    <p className='text-2xl font-semibold '>Description</p>
    <p className='text-2xl font-semibold text-[#9F9F9F] hover:text-[#B88E2F]'>Additional Information</p>
    <p className='text-2xl font-semibold text-[#9F9F9F] hover:text-[#B88E2F]'>Reviews [5]</p>
  </div>
<div className=' w-[1024px] h-[174px]  mx-auto text-start text-lg text-[#9F9F9F] mt-7 '>
Embodying the raw, wayward spirit of rock ‘n’ roll, 
the Kilburn portable active stereo speaker takes the unmistakable 
look and sound of Marshall, unplugs the chords, and takes the 
show on the road.
<br></br>
<br></br>
Weighing in under 7 pounds, the Kilburn is a lightweight 
piece of vintage styled engineering. Setting the bar as one 
of the loudest speakers in its class, the Kilburn is a compact,
 stout-hearted hero with a well-balanced audio which boasts a clear
  midrange and extended highs for a sound that is both articulate 
  and pronounced. The analogue knobs allow you to fine tune the 
  controls to your personal preferences while the guitar-influenced
 leather strap enables easy and stylish travel.
</div>

<div className='w-[1239px] grid grid-cols-2 mx-auto  gap-12  mt-12'>
  <div className='w-[605px] h-[348px] bg-[#F9F1E7] bg-cover bg-center'>
    <img className=' hover:scale-105 hover:transition-transform' src={img10}></img>
  </div>
  <div className='w-[605px] h-[348px] bg-[#F9F1E7] bg-cover bg-center'> 
    <img className=' hover:scale-105 hover:transition-transform' src={img10}></img>
  </div>
</div>
</section>


<div className='mt-20 grid grid-cols-4 mx-40 gap-6 '>
{/* <h2 className='text-center text-5xl font-bold'>Related Products</h2> */}


<div>
<Card 
    url={imgg1}
    title="Syltherine"
    subTitle="Stylish cafe chair"
    price="Rp 2.500.000"
    priceOld="Rp 3.500.000"

    />
</div>



<div>
<Card 
    url={imgg2}
    title="Leviosa"
    subTitle="Stylish cafe chair"
    price="Rp 2.500.000"
    

    />
</div>


<div>
<Card 
    url={imgg3}
    title="Lolito"
    subTitle="Luxury big sofa"
    price="Rp 7.500.000"
    priceOld="Rp 14.500.000"

    />
</div>


<div>
<Card 
    url={imgg7}
    title="Respira"
    subTitle="Outdoor bar table and stool"
    price="Rp 500.000"


    />
</div>

    </div>
    <button className='mx-[40%] mt-9 mb-20 w-[245px] h-[48px] border border-[#B88E2F] text-[#B88E2F] text-lg hover:bg-[#B88E2F] hover:text-white'> Show More</button>
    </div>
  )
}

export default AboutSection