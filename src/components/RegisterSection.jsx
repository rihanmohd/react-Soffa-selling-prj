import React from 'react'
import ReusableLogin from '../ReusableComponents/ReusableLogin'
import img from '../assets/images/rester.png'



const RegisterSection = () => {
    return(
        <ReusableLogin
          backgroundImage={img}
          showEmailInput={true}
          buttonActive="register"
           underBtn="Register"
             />

           )
     }
       export default RegisterSection
