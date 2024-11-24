import React from 'react'
import img1 from '../assets/images/Rectangle 36.png'
// import img2 from '../assets/images/Rectangle 38.png'
import img3 from '../assets/images/Rectangle 40 (1).png'
import img4 from '../assets/images/Rectangle 41 (1).png'
// import img5 from '../assets/images/Rectangle 43.png'
// import img6 from '../assets/images/Rectangle 44.png'
// import img7 from '../assets/images/Rectangle 37.png'
// import img8 from '../assets/images/Rectangle 36.png'




const SharingSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
    {/* Header Section */}
    <h1 className="text-xl font-bold  mb-3">Share your setup with</h1>
    <h2 className="text-3xl font-extrabold mb-10">#FuniroFurniture</h2>
    
    {/* Grid Layout */}
    <div className="grid grid-cols-3 gap-4 w-[1800px]">
      {/* Column 1 */}
      <div className="grid grid-rows-2 gap-4">
        <img
          src={img1}
         
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src="/path/to/image2.jpg"
         
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Column 2 */}
      <div className="grid grid-rows-3 gap-4">
        <img
          src={img3}
       
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src={img3}
         
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src={img4}
         
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Column 3 */}
      <div className="grid grid-rows-2 gap-4">
        <img
          src={img3}
         
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src={img4}
        
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  </div>


  )
}

export default SharingSection


   