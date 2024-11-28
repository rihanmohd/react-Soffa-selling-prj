import React from 'react'
import SubHeader from '../ReusableComponents/SubHeader'
import Card from '../ReusableComponents/Card'
import img1 from '../assets/images/image 1.png'
import img2 from '../assets/images/images (2).png'
import img3 from '../assets/images/images (3).png'
import img4 from '../assets/images/images (3).png'
import img5 from '../assets/images/image 5 (1).png'
import img6 from '../assets/images/images (1).png'
import img7 from '../assets/images/images.png'
import img8 from '../assets/images/bed.png'


const ShopSection = () => {
  return (
  <div className=''>
  <div className=''>
  <SubHeader 
    tittle="Shop"
    descr="Home  Shop"
  />

<div className='lg:h-[100px] bg-[#F9F1E7] items-center flex justify-between px-16'>
    <div className='flex'>
    <svg className='' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0237 7.14292H8.92846M6.5475 7.14292H2.97607M22.0237 19.0477H8.92846M6.5475 19.0477H2.97607M16.0713 13.0953H2.97607M22.0237 13.0953H18.4523M7.73798 4.76196C8.05371 4.76196 8.35652 4.88739 8.57977 5.11065C8.80303 5.3339 8.92846 5.63671 8.92846 5.95244V8.33339C8.92846 8.64913 8.80303 8.95193 8.57977 9.17518C8.35652 9.39844 8.05371 9.52387 7.73798 9.52387C7.42225 9.52387 7.11944 9.39844 6.89619 9.17518C6.67293 8.95193 6.5475 8.64913 6.5475 8.33339V5.95244C6.5475 5.63671 6.67293 5.3339 6.89619 5.11065C7.11944 4.88739 7.42225 4.76196 7.73798 4.76196V4.76196ZM7.73798 16.6667C8.05371 16.6667 8.35652 16.7921 8.57977 17.0154C8.80303 17.2387 8.92846 17.5415 8.92846 17.8572V20.2382C8.92846 20.5539 8.80303 20.8567 8.57977 21.0799C8.35652 21.3032 8.05371 21.4286 7.73798 21.4286C7.42225 21.4286 7.11944 21.3032 6.89619 21.0799C6.67293 20.8567 6.5475 20.5539 6.5475 20.2382V17.8572C6.5475 17.5415 6.67293 17.2387 6.89619 17.0154C7.11944 16.7921 7.42225 16.6667 7.73798 16.6667ZM17.2618 10.7143C17.5775 10.7143 17.8803 10.8398 18.1036 11.063C18.3268 11.2863 18.4523 11.5891 18.4523 11.9048V14.2858C18.4523 14.6015 18.3268 14.9043 18.1036 15.1276C17.8803 15.3508 17.5775 15.4762 17.2618 15.4762C16.9461 15.4762 16.6433 15.3508 16.42 15.1276C16.1967 14.9043 16.0713 14.6015 16.0713 14.2858V11.9048C16.0713 11.5891 16.1967 11.2863 16.42 11.063C16.6433 10.8398 16.9461 10.7143 17.2618 10.7143V10.7143Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p className='text-lg font-bold ml-4'>Filter</p>
<svg className='mx-5' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6668 22.1667C17.7386 22.1667 16.8483 21.798 16.192 21.1416C15.5356 20.4852 15.1668 19.595 15.1668 18.6667C15.1668 17.7385 15.5356 16.8482 16.192 16.1918C16.8483 15.5355 17.7386 15.1667 18.6668 15.1667C19.5951 15.1667 20.4853 15.5355 21.1417 16.1918C21.7981 16.8482 22.1668 17.7385 22.1668 18.6667C22.1668 19.595 21.7981 20.4852 21.1417 21.1416C20.4853 21.798 19.5951 22.1667 18.6668 22.1667ZM9.3335 22.1667C8.40524 22.1667 7.515 21.798 6.85862 21.1416C6.20225 20.4852 5.8335 19.595 5.8335 18.6667C5.8335 17.7385 6.20225 16.8482 6.85862 16.1918C7.515 15.5355 8.40524 15.1667 9.3335 15.1667C10.2618 15.1667 11.152 15.5355 11.8084 16.1918C12.4647 16.8482 12.8335 17.7385 12.8335 18.6667C12.8335 19.595 12.4647 20.4852 11.8084 21.1416C11.152 21.798 10.2618 22.1667 9.3335 22.1667ZM18.6668 12.8334C17.7386 12.8334 16.8483 12.4646 16.192 11.8082C15.5356 11.1519 15.1668 10.2616 15.1668 9.33337C15.1668 8.40512 15.5356 7.51488 16.192 6.8585C16.8483 6.20212 17.7386 5.83337 18.6668 5.83337C19.5951 5.83337 20.4853 6.20212 21.1417 6.8585C21.7981 7.51488 22.1668 8.40512 22.1668 9.33337C22.1668 10.2616 21.7981 11.1519 21.1417 11.8082C20.4853 12.4646 19.5951 12.8334 18.6668 12.8334ZM9.3335 12.8334C8.40524 12.8334 7.515 12.4646 6.85862 11.8082C6.20225 11.1519 5.8335 10.2616 5.8335 9.33337C5.8335 8.40512 6.20225 7.51488 6.85862 6.8585C7.515 6.20212 8.40524 5.83337 9.3335 5.83337C10.2618 5.83337 11.152 6.20212 11.8084 6.8585C12.4647 7.51488 12.8335 8.40512 12.8335 9.33337C12.8335 10.2616 12.4647 11.1519 11.8084 11.8082C11.152 12.4646 10.2618 12.8334 9.3335 12.8334Z" fill="black"/>
</svg>


<svg className='mr-5 ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 6.75H19.5C20.2956 6.75 21.0587 7.06607 21.6213 7.62868C22.1839 8.19129 22.5 8.95435 22.5 9.75V14.25C22.5 15.0456 22.1839 15.8087 21.6213 16.3713C21.0587 16.9339 20.2956 17.25 19.5 17.25H4.5C3.70435 17.25 2.94129 16.9339 2.37868 16.3713C1.81607 15.8087 1.5 15.0456 1.5 14.25V9.75C1.5 8.95435 1.81607 8.19129 2.37868 7.62868C2.94129 7.06607 3.70435 6.75 4.5 6.75ZM4.5 8.25C4.10218 8.25 3.72064 8.40804 3.43934 8.68934C3.15804 8.97064 3 9.35218 3 9.75V14.25C3 14.6478 3.15804 15.0294 3.43934 15.3107C3.72064 15.592 4.10218 15.75 4.5 15.75H19.5C19.8978 15.75 20.2794 15.592 20.5607 15.3107C20.842 15.0294 21 14.6478 21 14.25V9.75C21 9.35218 20.842 8.97064 20.5607 8.68934C20.2794 8.40804 19.8978 8.25 19.5 8.25H4.5ZM1.5 3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H21.75C21.9489 2.25 22.1397 2.32902 22.2803 2.46967C22.421 2.61032 22.5 2.80109 22.5 3C22.5 3.19891 22.421 3.38968 22.2803 3.53033C22.1397 3.67098 21.9489 3.75 21.75 3.75H2.25C2.05109 3.75 1.86032 3.67098 1.71967 3.53033C1.57902 3.38968 1.5 3.19891 1.5 3ZM1.5 21C1.5 20.8011 1.57902 20.6103 1.71967 20.4697C1.86032 20.329 2.05109 20.25 2.25 20.25H21.75C21.9489 20.25 22.1397 20.329 22.2803 20.4697C22.421 20.6103 22.5 20.8011 22.5 21C22.5 21.1989 22.421 21.3897 22.2803 21.5303C22.1397 21.671 21.9489 21.75 21.75 21.75H2.25C2.05109 21.75 1.86032 21.671 1.71967 21.5303C1.57902 21.3897 1.5 21.1989 1.5 21Z" fill="black"/>
</svg>
<svg className='mr-5 pb-1' width="10" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1" x2="1" y2="37" stroke="#9F9F9F" stroke-width="2"/>
</svg>
<p className='text-lg font-semibold'>Showing 1–16 of 32 results</p>
    </div>


    <div className=''>

         <label className='text-xl font-semibold mr-3'>Show</label>
        <select className='appearance-none w-[55px] h-[55px] text-center text-xl focus:outline-none'>
        <option className=''>16</option>
        </select>

        <label className='text-xl font-semibold mr-3 ml-10'>Short by</label>
        <select className='appearance-none w-[188px] h-[55px] text-center text-xl focus:outline-none'>
        <option className=''>Default</option>
        </select>
       
    </div>

   
</div>
  </div>

  <div className='w-fit  mx-auto grid grid-rows-4 gap-8  mt-10'>
    
    <div className='grid lg:grid-cols-4 md:grid-cols-2 md:gap-6 gap-6 '>


    <Card 
    url={img1}
    title="Syltherine"
    subTitle="Stylish cafe chair"
    price="Rp 2.500.000"
    priceOld="Rp 3.500.000"

    />

<Card 
    url={img2}
    title="Syltherine"
    subTitle="Stylish cafe chair"
    price="Rp 2.500.000"
    priceOld="Rp 3.500.000"

    />

<Card 
    url={img3}
    title="Lolito"
    subTitle="Luxury big sofa"
    price="Rp 7.000.000"
    priceOld="Rp 14.000.000"

    />


<Card 
    url={img5}
    title="Respira"
    subTitle="Outdoor bar table and stool"
    price="Rp 500.000"
    

    />

<Card 
    url={img5}
    title="Syltherine"
    subTitle="Stylish cafe chair"
    price="Rp 2.500.000"
    priceOld="Rp 3.500.000"

    />

<Card 
    url={img6}
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

<Card 
    url={img8}
    title="Syltherine"
    subTitle="Stylish cafe chair"
    price="Rp 2.500.000"
    priceOld="Rp 3.500.000"

    />

<Card 
    url={img2}
    title="Lolito"
    subTitle="Luxury big sofa"
    price="Rp 7.000.000"
    priceOld="Rp 14.000.000"

    />
     <Card 
    url={img4}
    title="Leviosa"
    subTitle="Stylish cafe chair"
    price="Rp 2.500.000"
    

    />

<Card 
    url={img7}
    title="Respira"
    subTitle="Outdoor bar table and stool"
    price="Rp 4.500.000"
   

    />

<Card 
    url={img4}
    title="Lolito"
    subTitle="Luxury big sofa"
    price="Rp 7.000.000"
    priceOld="Rp 14.000.000"

    />
     <Card 
    url={img3}
    title="Syltherine"
    subTitle="Stylish cafe chair"
    price="Rp 2.500.000"
    priceOld="Rp 3.500.000"

    />

<Card 
    url={img5}
    title="Respira"
    subTitle="Stylish cafe chair"
    price="Rp 2.500.000"
    

    />

<Card 
    url={img1}
    title="Lolito"
    subTitle="Luxury big sofa"
    price="Rp 7.000.000"
    priceOld="Rp 39.000.000"

    />
     <Card 
    url={img6}
    title="Syltherine"
    subTitle="Stylish cafe chair"
    price="Rp 2.500.000"
    priceOld="Rp 3.500.000"

    />



</div>
<div className='flex gap-7 justify-center mt-10'>
    <p className='w-[60px] h-[60px] text-white bg-[#B88E2F] text-center py-4 text-xl rounded-md'>1</p>
    <p className='w-[60px] h-[60px] text-black bg-[#FAF3EA]  text-center hover:bg-[#B88E2F]  hover:text-white  py-4 text-xl rounded-md'>2</p>
    <p className='w-[60px] h-[60px] text-black bg-[#FAF3EA] text-center hover:bg-[#B88E2F]  hover:text-white  py-4 text-xl rounded-md'>3</p>
    <p className='w-[98px] h-[60px] text-black bg-[#FAF3EA]  text-center hover:bg-[#B88E2F]  hover:text-white py-4 text-xl rounded-md'>Next</p>
</div>
</div>
  </div>
  )
}

export default ShopSection