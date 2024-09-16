import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currentState , setCurrentState]= useState("Login")

  return (
    <div className='login-popup'>
        <form  className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                {/* when ever you click this cross icon that time true value (using ternery) doing false*/}
                <img onClick={()=> setShowLogin (false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currentState==="Login"?<></> :<input type="text"  placeholder='Your Name :' required/>}
                <input type="email"  placeholder='Your Email :' required/>
                <input type="password"  placeholder='Password :' required/>
                
                <button>{ currentState==="Sign Up"?"Create Account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>By Continuing, i agree to the terms Of use & Privacy policy</p>
                </div>
                {currentState==="Login"
                ?<p>Create a new Account ? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
                :<p>Already have an Account ? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
            </div>
        </form>
    </div>
  )
}

export default LoginPopup