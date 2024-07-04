import React, { useState } from 'react'
import './login.css'
import { assets } from '../../assets/assets'

const Login = ({setShowlogin}) => {

    const[currentState,setCurrentState]=useState("Login")

  return (
    <div className='login'>
     <form className='login-container'>
     <div className='login-title'>
        <h2>{currentState}</h2>
        <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt=''/>
     </div>
     <div className='login-input'>
      {currentState==='Login'?<></>:<input type='text' placeholder='Your name' required/>}
        <input type='email' placeholder='Your email' required/>
        <input type='password' placeholder='password' required/>
     </div>
     <button>{currentState==='Sign Up'?'Create account':'Login'}</button>
     <div className='login-condition'>
        <input type='checkbox' required/>
        <p>By continuing, I agree to the terms of use & privacy policy</p>
     </div>
     {currentState==='Login'
     ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
    :<p> Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
     }
     
     
     </form>
    </div>
  )
}

export default Login
