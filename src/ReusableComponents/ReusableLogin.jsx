import React from "react";
import { Link } from "react-router-dom";

const ReusableLogin = ({
           backgroundImage,
            underBtn,
            showEmailInput = false,
            buttonActive
 
}) => {

// to register // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key
//to login //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=

  const handleSubmit  = async (e) =>{
       e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       const Data = {
        email: email,
        password: password,
        returnSecureToken: true 
       }

    const response = await fetch(" https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAUAt_I1Ceusobj3ZD7DZlh4q0Uraw71MI",
        {
          method:"POST",
          body: JSON.stringify(Data),
          headers:{
            "Content-Type":"application/json"
          }
        }
       )

       const data = await response.json();
       console.log(data);
       localStorage.setItem("Token", data.idToken);
  }
  return (
    <div className="justify-center flex gap-20">
      {/* Left Section with Background */}
      <div
        className="bg-cover bg-center w-[730px] h-[800px] mt-4 rounded-md"
        style={{
          backgroundImage: `url(${backgroundImage})`,
         
        }}
      >
        <p className="text-xl font-bold text-white pl-7 mt-[700px]">
          Lorem Ipsum is simply
        </p>
        <p className="font-semibold text-white mt-3 pl-7">
          Lorem Ipsum is simply
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center h-[700px]">
        <div className="w-full max-w-md bg-white shadow-sm rounded-lg p-8">
          {/* Heading */}
          <h1 className="text-center text-2xl font-semibold mb-6">
          Welcome to lorem..!
          </h1>

          {/* Login/Register Buttons */}
          <div className="flex items-center gap-12 px-2 mt-5  w-[329px] h-[59px] bg-[#49BBBD99] rounded-full">
            <button
              className={`w-[146px] h-[40px] rounded-full hover:bg-[#49BBBD] ${
                buttonActive === "login"
                  ? "bg-[#49BBBD] text-white"
                  : "text-white bg-transparent"
              }`}
            >
              <Link to="/login">Login</Link>
              
            </button>
            <button
              className={`w-[146px] h-[40px] rounded-full hover:bg-[#49BBBD] ${
                buttonActive === "register"
                  ? "bg-[#49BBBD] text-white"
                  : "text-white bg-transparent"
              }`}
            >
              <Link to="/register">Register</Link>
             
            </button>
          </div>

          {/* Subheading */}
          <p className="my-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

          {/* Form */}
          <form onSubmit={handleSubmit}  className="mt-6 space-y-6">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block font-semibold text-sm mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your User Email"
                className="w-full px-4 py-2 border border-teal-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Email (Shown only for Register) */}
            {showEmailInput && (
              <div>
                <label htmlFor="email" className="block font-semibold text-sm mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="w-full px-4 py-2 border border-teal-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            )}

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold mb-3">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your Password"
                  className="w-full px-4 py-2 border border-teal-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <a
                  className="absolute right-4 top-4 "
                >
                  {/* Eye Icon */}
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.86328 5.14929L11.44 7.72598L11.4522 7.59101C11.4522 6.23722 10.352 5.13702 8.99825 5.13702L8.86328 5.14929Z"
                      fill="black"
                    />
                    <path
                      d="M8.99795 3.50094C11.2556 3.50094 13.0879 5.33326 13.0879 7.59093C13.0879 8.11854 12.9816 8.62161 12.7976 9.08376L15.1902 11.4764C16.4254 10.4457 17.3988 9.1124 18 7.59093C16.5808 3.99994 13.092 1.45596 8.99798 1.45596C7.85278 1.45596 6.75669 1.66045 5.73828 2.02855L7.50515 3.79132C7.96727 3.61137 8.47034 3.50094 8.99795 3.50094Z"
                      fill="black"
                    />
                    <path
                      d="M0.817983 1.27204L2.68301 3.13707L3.05521 3.50927C1.70552 4.56449 0.638037 5.96736 0 7.59106C1.41515 11.182 4.90798 13.726 8.99797 13.726C10.2659 13.726 11.4765 13.4806 12.5849 13.0348L12.9326 13.3825L15.317 15.771L16.36 14.7322L1.86093 0.229095L0.817983 1.27204ZM5.34153 5.79148L6.60533 7.05528C6.56852 7.23117 6.54398 7.40701 6.54398 7.59106C6.54398 8.94485 7.64417 10.045 8.99797 10.045C9.18202 10.045 9.3579 10.0205 9.52968 9.9837L10.7935 11.2475C10.2495 11.5174 9.64421 11.6811 8.99797 11.6811C6.7403 11.6811 4.90798 9.84873 4.90798 7.59106C4.90798 6.94485 5.07159 6.33952 5.34153 5.79148Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-teal-500 rounded border-gray-300 focus:ring-teal-400"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a  className="text-sm text-teal-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-[220px] h-[47px] mt-7 ml-36 text-white bg-[#50BBBD] rounded-full hover:bg-teal-600 focus:outline-none"
            >
             {underBtn}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReusableLogin;



  