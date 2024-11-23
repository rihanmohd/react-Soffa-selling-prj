import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 pl-6 border-t mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8">
          {/* Left Column */}
          <div>
            <h3 className="font-bold text-lg mb-2">Funiro.</h3>
            <p className="not-italic text-gray-600 mt-8">
              400 University Drive Suite 200 Coral <br></br> Gables,<br />
              FL 33134 USA
            </p>
          </div>

          {/* Middle Column */}
          <div>
            <h4 className="font-semibold text-[#9F9F9F] mb-8">Links</h4>
            <ul className="space-y-5">
              <li><a className=" ">Home</a></li>
              <li><a className=" ">Shop</a></li>
              <li><a className=" ">About</a></li>
              <li><a className=" ">Contact</a></li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h4 className="font-semibold text-[#9F9F9F] mb-8">Help</h4>
            <ul className="space-y-5">
              <li><a className="">Payment Options</a></li>
              <li><a className="">Returns</a></li>
              <li><a className="">Privacy Policies</a></li>
            </ul>
          </div>


           {/* Newsletter */}
           <div className="mb-4 md:mb-0">
            <h4 className="font-semibold text-[#9F9F9F] mb-8">Newsletter</h4>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="px-5 py-2 border-b-2 border-gray-400 "
              />
              <button
                type="submit"
                className="px-4 py-2 border-b-2 border-gray-400 ml-3"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

<hr className="my-6"></hr>
          {/* Footer Bottom */}
          <p className="text-lg font-semibold">
            2023 Funiro. All rights reserved
          </p>
        </div>
   
    </footer>
  );
};

export default Footer;
