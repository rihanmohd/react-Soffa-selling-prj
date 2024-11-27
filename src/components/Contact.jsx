import React from 'react'
import logo from '../assets/images/logo.png'
import SubHeader from '../ReusableComponents/SubHeader';


const Contact = () => {
    return (
        <div className='mb-11'>
            <SubHeader 
             url={logo}
            tittle="Contact"
            descr="Home > Contact"
            />
        <div className="w-[1058px] h-[923px] mx-auto px-6 py-16">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
            <p className="text-gray-500 mt-3">
            For More Information About Our Product & Services. Please Feel Free To Drop Us <br></br> An Email. Our St
            aff Always Be There To Help You Out. Do Not Hesitate!
            </p>
          </div>
    
          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
            {/* Left Side: Contact Info */}
            <div className="w-[393px] h-[537px] space-y-8 mt-6  pl-10">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-[#B88E2F]"><svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 0.120117C8.08369 0.123507 5.28779 1.26662 3.22564 3.2987C1.16348 5.33078 0.00345217 8.08591 1.17029e-05 10.9597C-0.00348119 13.3082 0.774992 15.5929 2.21601 17.4635C2.21601 17.4635 2.51601 17.8527 2.56501 17.9089L11 27.7118L19.439 17.9039C19.483 17.8517 19.784 17.4635 19.784 17.4635L19.785 17.4605C21.2253 15.5908 22.0034 13.3071 22 10.9597C21.9966 8.08591 20.8365 5.33078 18.7744 3.2987C16.7122 1.26662 13.9163 0.123507 11 0.120117ZM11 14.9014C10.2089 14.9014 9.43553 14.6702 8.77773 14.2371C8.11993 13.804 7.60724 13.1884 7.30449 12.4681C7.00174 11.7479 6.92253 10.9553 7.07687 10.1907C7.23121 9.42611 7.61217 8.72377 8.17158 8.17252C8.73099 7.62127 9.44373 7.24586 10.2197 7.09377C10.9956 6.94168 11.7998 7.01974 12.5307 7.31808C13.2616 7.61641 13.8864 8.12162 14.3259 8.76983C14.7654 9.41803 15 10.1801 15 10.9597C14.9987 12.0047 14.5768 13.0065 13.827 13.7454C13.0771 14.4844 12.0605 14.9001 11 14.9014Z" fill="black"/>
</svg></div>
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-gray-600">
                  236 5th SE Avenue, New <br></br> York NY10000, United <br></br> States
                  </p>
                </div>
              </div>
    
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-[#B88E2F]"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.6086 21.4251L20.5274 16.8051C20.2872 16.5867 19.9715 16.4703 19.6471 16.4803C19.3227 16.4904 19.0149 16.6261 18.7886 16.8588L15.7974 19.9351C15.0774 19.7976 13.6299 19.3463 12.1399 17.8601C10.6499 16.3688 10.1986 14.9176 10.0649 14.2026L13.1386 11.2101C13.3716 10.984 13.5075 10.6761 13.5176 10.3516C13.5276 10.027 13.411 9.71136 13.1924 9.4713L8.57361 4.3913C8.35492 4.1505 8.05096 4.00443 7.72631 3.98413C7.40165 3.96382 7.08186 4.07088 6.83486 4.28255L4.12236 6.6088C3.90625 6.8257 3.77726 7.11437 3.75986 7.42005C3.74111 7.73255 3.38361 15.1351 9.12361 20.8776C14.1311 25.8838 20.4036 26.2501 22.1311 26.2501C22.3836 26.2501 22.5386 26.2426 22.5799 26.2401C22.8855 26.2229 23.174 26.0934 23.3899 25.8763L25.7149 23.1626C25.9274 22.9163 26.0352 22.5968 26.0154 22.2722C25.9955 21.9475 25.8495 21.6435 25.6086 21.4251Z" fill="black"/>
</svg>
</div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-600">Mobile: + (84) 546-6789</p>
                  <p className="text-gray-600">Hotline: + (84) 456-6789</p>
                </div>
              </div>
    
              {/* Working Time */}
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-[#B88E2F]"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 11.5C23 14.55 21.7884 17.4751 19.6317 19.6317C17.4751 21.7884 14.55 23 11.5 23C8.45001 23 5.52494 21.7884 3.36827 19.6317C1.2116 17.4751 0 14.55 0 11.5C0 8.45001 1.2116 5.52494 3.36827 3.36827C5.52494 1.2116 8.45001 0 11.5 0C14.55 0 17.4751 1.2116 19.6317 3.36827C21.7884 5.52494 23 8.45001 23 11.5ZM11.5 5.03125C11.5 4.84063 11.4243 4.65781 11.2895 4.52302C11.1547 4.38823 10.9719 4.3125 10.7812 4.3125C10.5906 4.3125 10.4078 4.38823 10.273 4.52302C10.1382 4.65781 10.0625 4.84063 10.0625 5.03125V12.9375C10.0625 13.0642 10.0961 13.1886 10.1597 13.2982C10.2233 13.4077 10.3147 13.4985 10.4247 13.5614L15.456 16.4364C15.6211 16.5256 15.8146 16.5467 15.995 16.4952C16.1755 16.4437 16.3287 16.3236 16.4218 16.1607C16.5149 15.9977 16.5406 15.8048 16.4933 15.6232C16.4461 15.4415 16.3297 15.2856 16.169 15.1886L11.5 12.5206V5.03125Z" fill="black"/>
</svg>
</div>
                <div>
                  <h3 className="font-bold">Working Time</h3>
                  <p className="text-gray-600">Monday–Friday: 9:00– <br></br>22:00</p>
                  <p className="text-gray-600">Saturday–Sunday: 9:00– <br></br>21:00</p>
                </div>
              </div>
            </div>
    
            {/* Right Side: Form */}
            <div className='w-[635px] h-[923px] items-center ml-8  p-5'>
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-lg font-medium ">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-2 block w-[529px] h-[75px] pl-4 border-2 rounded-md"
                    placeholder="Abc"
                  />
                </div>
    
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-lg font-medium ">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                   className="mt-2 block w-[529px] h-[75px] pl-4 border-2  rounded-md  "
                    placeholder="Abc@def.com"
                  />
                </div>
    
                {/* Subject */}
                <div>
                  <label htmlFor="subject"className="block text-lg font-medium ">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-2 block w-[529px] h-[75px] pl-4 border-2 rounded-lg] "
                    placeholder="This is an optional"
                  />
                </div>
    
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-lg font-medium ">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                 className="mt-2 block w-[529px] h-[120px] pl-4  rounded-md  border-2 pt-11"
                    placeholder="Hi! I'd like to ask about..."
                  ></textarea>
                </div>
    
                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-[237px] h-[55px] mt-3 text-center text-lg bg-[#B88E2F] text-white font-medium rounded-md hover:bg-[#a07c28] transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>


        </div>
      );
}

export default Contact