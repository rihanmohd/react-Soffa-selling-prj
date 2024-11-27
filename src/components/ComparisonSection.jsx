import React from 'react'
import SubHeader from '../ReusableComponents/SubHeader'
import logo from '../assets/images/logo.png'
import img1 from '../assets/images/bigsofa.png'
import img2 from '../assets/images/rating.png'



const ComparisonSection = () => {
  return (
   <>
   <div>
   <SubHeader 
   url={logo}
   tittle="Product Comparison"
   descr="Home > Comparison"
   />
</div>


{/* after subheader */}
<div className='grid grid-cols-4 w-[1332px] mt-8 mx-auto gap-4 justify-center'>
    <div>
        <p className='text-3xl font-bold leading-tight mb-6'>Go to Product <br></br> page for more  <br></br>
        Products</p>

        <p className='text-xl inline text-gray-400 border-b-2 pb-1'>View More</p>
    </div>

{/* second col */}
    <div className='flex flex-col '>
    <div className='w-[280px] h-[177px] bg-[#F9F1E7] rounded-lg items-center'>
    <img className='w-[259px] h-[180px] hover:scale-110 hover:transition-transform' src={img1}></img>
</div>
<p className='text-2xl font-bold mt-4'>Asgaard Sofa</p>
<p className='text-lg font-semibold'>Rs. 250,000.00</p>
<div className='flex mt-1'>
    <p className='text-lg font-semibold'>4.7</p>
    <img className='w-[124px] h-[20px] mt-1' src={img2}></img>
    <div className='h-[30px] w-[1px] bg-gray-500 mx-1'></div>
    <p className='text-gray-500 ml-2'>204 Review</p>
</div>
    </div>


    {/* third col */}
    <div>
 <div className='w-[280px] h-[177px] bg-[#F9F1E7] rounded-lg items-center'>
    <img className='w-[259px] h-[180px] hover:scale-110 hover:transition-transform' src={img1}></img>
</div>
<p className='text-2xl font-bold mt-4'>Asgaard Sofa</p>
<p className='text-lg font-semibold'>Rs. 250,000.00</p>
<div className='flex'>
    <p className='text-lg font-semibold'>4.7</p>
    <img className='w-[124px] h-[20px] mt-1' src={img2}></img>
    <div className='h-[30px] w-[1px] bg-gray-500 mx-1'></div>
    <p className='text-gray-500 ml-2'>204 Review</p>
</div>
</div>
{/* btn */}
<div className='ml-3'>
<p className='text-3xl font-bold mb-3'>Add A Product</p>
<select className='w-[242px] h-[39px] bg-[#B88E2F] text-lg text-center text-white rounded-md hover:scale-110 hover:transition-transform'>
    <option className=''>Choose a Product</option>
</select>
</div>
</div>


{/* large text container */}
<div className='w-[1332px]  pl-20 mt-16 mb-28'>
{/* general */}

    <div className='grid grid-cols-4'>
        <div className='flex flex-col font-semibold gap-5 py-4 border-t-2 pl-6'>
        <p className='text-2xl font-semibold'>General</p>
            <p>Sales Package</p>
            <p>Model Number</p>
            <p>Secondary Material</p>
            <p>Configuration</p>
            <p>Upholstery Material</p>
            <p>Upholstery Color</p>


            <p className='text-2xl font-semibold mt-4'>Product </p>
            <p>Filling Material</p>
            <p>Finish Type</p>
            <p>Adjustable Headrest</p>
         
            <p>Maximum Load <br></br> Capacity</p>
            <p>Origin of Manufacture</p>



            <p className='text-2xl font-semibold mt-4'>Dimensions</p>
            <p>Width</p>
            <p>Height</p>
            <p>Depth</p>
         
            <p>Weight</p>
            <p>Seat Height</p>
            <p>Leg Height</p>


            <p className='text-2xl font-semibold mt-4'>Warranty</p>
            <p>Warranty Summary</p>
            <p className='mt-4'>Warranty Service <br></br>
            Type</p>
            <p className='mt-12'>Covered in Warranty</p>
         
            <p className='mt-5'>Not Covered in <br></br> Warranty</p>
            <p className='mt-32'>Domestic Warranty</p>
            

        </div>
{/* second */}
        <div className='flex flex-col gap-5 pt-16 border-x-2 border-t pl-6 font-semibold'>
            <p>1 sectional sofa</p>
            <p>TFCBLIGRBL6SRHS</p>
            <p> Solid Wood</p>
            <p>L-shaped</p>
            <p>Fabric + Cotton</p>
            <p>Bright Grey & Lion</p>




            <p className='mt-20'>Foam</p>
            <p>Bright Grey & Lion</p>
            <p> No</p>
            <p>280 KG</p>
            <p>India</p>
           



            <p className='mt-20'>265.32 cm</p>
            <p>76 cm</p>
            <p>167.76 cm</p>
            <p>45 KG</p>
            <p>41.52 cm</p>
            <p>5.46 cm</p>





            <p className='mt-16'>1 Year Manufacturing <br></br> Warranty</p>
            <p>For Warranty Claims or <br></br> Any Product Related <br></br> Issues Please Email at <br></br> operations@trevifurniture.com</p>
            <p>Warranty Against <br></br> Manufacturing Defect</p>
            <p>The Warranty Does Not <br></br> Cover Damages Due To <br></br> Usage Of The Product <br></br> Beyond Its Intended Use <br></br> And Wear & Tear In The Natural <br></br> Course Of Product <br></br> Usage.</p>
            <p>1 Year</p>
            <button className='w-[215px] h-[64px] bg-[#B88E2F] text-center text-white text-lg hover:scale-105 hover:transition-transform'>Add To Cart</button>
        </div>


{/* thiird */}
        <div className='flex flex-col gap-5 pt-16 border-t pl-6 font-semibold'>
            <p>1 Three Seater, 2 Single Seater</p>
            <p>DTUBLIGRBL568</p>
            <p>Solid Wood</p>
            <p>L-shaped</p>
            <p>Fabric + Cotton</p>
            <p>Bright Grey & Lion</p>




            <p className='mt-20'>Matte</p>
            <p>Bright Grey & Lion</p>
            <p>yes</p>
            <p>300 KG</p>
            <p>India</p>




            <p className='mt-20'>265.32 cm</p>
            <p>76 cm</p>
            <p>167.76 cm</p>
            <p>45 KG</p>
            <p>41.52 cm</p>
            <p>5.46 cm</p>




            <p className='mt-16'>1.2 Year Manufacturing <br></br> Warranty</p>
            <p>For Warranty Claims or <br></br> Any Product Related <br></br> Issues Please Email at <br></br> operations@trevifurniture.com</p>
            <p>Warranty Against <br></br> Manufacturing Defect</p>
            <p>The Warranty Does Not <br></br> Cover Damages Due To <br></br> Usage Of The Product <br></br> Beyond Its Intended Use <br></br> And Wear & Tear In The Natural <br></br> Course Of Product <br></br> Usage.</p>
            <p>3 Months</p>
           
           <button className='w-[215px] h-[64px] bg-[#B88E2F] text-center text-white text-lg hover:scale-105 hover:transition-transform'>Add To Cart</button>
        </div>


        <div className='border-l border-t'></div>
    </div>
</div>
   </>
  )
}

export default ComparisonSection
