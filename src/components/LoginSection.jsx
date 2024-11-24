// import React from 'react'
import img from '../assets/images/loginimg.png'
import ReusableLogin from '../ReusableComponents/ReusableLogin'

const LoginSection = ()=>{
    return(
        <ReusableLogin
  backgroundImage={img}
  showEmailInput={false}
  underBtn="Login"
  buttonActive="login"
/>

    )
}

export default LoginSection
