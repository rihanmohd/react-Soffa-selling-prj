import React from 'react'
import img from '../assets/images/bed.png'
import img2 from '../assets/images/image 100.png'

const CartSidebar = () => {
    return (
        <div className="w-[417px] h-[746px] bg-white p-5 shadow-md mx-auto">
            <div>
            <h1 className="text-3xl font-bold mb-4 border-b-[3px] pb-8 inline-block">Shopping Cart</h1>
            <svg className='inline ml-32' width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.11059 9.67346C6.16575 9.61817 6.23127 9.5743 6.3034 9.54436C6.37554 9.51443 6.45287 9.49902 6.53097 9.49902C6.60907 9.49902 6.6864 9.51443 6.75853 9.54436C6.83067 9.5743 6.89619 9.61817 6.95134 9.67346L8.31222 11.0355L9.67309 9.67346C9.78458 9.56197 9.9358 9.49933 10.0935 9.49933C10.2511 9.49933 10.4024 9.56197 10.5138 9.67346C10.6253 9.78495 10.688 9.93616 10.688 10.0938C10.688 10.2515 10.6253 10.4027 10.5138 10.5142L9.15178 11.8751L10.5138 13.236C10.6253 13.3474 10.688 13.4987 10.688 13.6563C10.688 13.814 10.6253 13.9652 10.5138 14.0767C10.4024 14.1882 10.2511 14.2508 10.0935 14.2508C9.9358 14.2508 9.78458 14.1882 9.67309 14.0767L8.31222 12.7146L6.95134 14.0767C6.83985 14.1882 6.68864 14.2508 6.53097 14.2508C6.3733 14.2508 6.22208 14.1882 6.11059 14.0767C5.9991 13.9652 5.93647 13.814 5.93647 13.6563C5.93647 13.4987 5.9991 13.3474 6.11059 13.236L7.47266 11.8751L6.11059 10.5142C6.0553 10.4591 6.01143 10.3935 5.9815 10.3214C5.95156 10.2493 5.93616 10.1719 5.93616 10.0938C5.93616 10.0157 5.95156 9.9384 5.9815 9.86627C6.01143 9.79414 6.0553 9.72861 6.11059 9.67346Z" fill="#9F9F9F"/>
<path d="M8.3125 1.1875C9.09986 1.1875 9.85497 1.50028 10.4117 2.05703C10.9685 2.61378 11.2812 3.36889 11.2812 4.15625V4.75H5.34375V4.15625C5.34375 3.36889 5.65653 2.61378 6.21328 2.05703C6.77003 1.50028 7.52514 1.1875 8.3125 1.1875ZM12.4688 4.75V4.15625C12.4688 3.05394 12.0309 1.99679 11.2514 1.21734C10.472 0.437889 9.41481 0 8.3125 0C7.21019 0 6.15304 0.437889 5.37359 1.21734C4.59414 1.99679 4.15625 3.05394 4.15625 4.15625V4.75H0V16.625C0 17.2549 0.250223 17.859 0.695621 18.3044C1.14102 18.7498 1.74511 19 2.375 19H14.25C14.8799 19 15.484 18.7498 15.9294 18.3044C16.3748 17.859 16.625 17.2549 16.625 16.625V4.75H12.4688ZM1.1875 5.9375H15.4375V16.625C15.4375 16.9399 15.3124 17.242 15.0897 17.4647C14.867 17.6874 14.5649 17.8125 14.25 17.8125H2.375C2.06006 17.8125 1.75801 17.6874 1.53531 17.4647C1.31261 17.242 1.1875 16.9399 1.1875 16.625V5.9375Z" fill="#9F9F9F"/>
</svg>

            </div>
         
          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex items-center justify-between  pb-4 ">
              <div className="flex items-center space-x-10 mt-4">
                <img
                  src={img}
                 
                  className="w-20 h-20 rounded-md object-cover"
                />
                <div>
                  <h2 className="font-semibold text-xl">Asgaard sofa</h2>
                  <p className="text-lg mt-2 ">1 x <span className="text-yellow-500"> Rs. 250,000.00</span></p>
                </div>
              </div>
              <button className="text-gray-500 text-lg pr-2 font-serif font-bold">
                ✖
              </button>
            </div>
    
            {/* Item 2 */}
            <div className="flex items-center justify-between pb-4">
              <div className="flex items-center space-x-10">
                <img
                  src={img2}
                 
                  className="w-20 h-20 rounded-md object-cover"
                />
                <div>
                  <h2 className="font-semibold text-xl">Casaliving Wood</h2>
                  <p className="text-lg mt-2">1 x <span className="text-yellow-500">Rs. 270,000.00</span></p>
                </div>
              </div>
              <div className='w-[20px] h-[20px] rounded-full bg-[#9F9F9F] px-1   text-white '>
              <button className="font-serif text-xs font-bold pr-2">
                ✖
              </button>
              </div>
             
            </div>
          </div>
    
          {/* Subtotal */}
          <div className="mt-72 border-b-2 pb-5  pr-2">
            <div className="flex justify-between text-xl font-semibold">
              <span>Subtotal</span>
              <span className="text-yellow-500">Rs. 520,000.00</span>
            </div>
          </div>
    
          {/* Footer Buttons */}
          <div className="flex justify-around mt-6">
            <button className="px-4 py-2 border rounded-full hover:bg-[#B88E2F] hover:text-white">
              Cart
            </button>
            <button className="px-4 py-2 border rounded-full hover:bg-[#B88E2F] hover:text-white">
              Checkout
            </button>
            <button className="px-4 py-2   border rounded-full hover:bg-[#B88E2F] hover:text-white">
              Comparison
            </button>
          </div>
        </div>
      );
}

export default CartSidebar



// https://speakforsuccess7.blogspot.com/2024/11/mastering-english-transitioning-from.html