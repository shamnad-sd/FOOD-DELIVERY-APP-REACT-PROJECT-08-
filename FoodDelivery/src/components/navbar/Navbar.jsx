import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu,setMenu] = useState("home");

    return (
        <div className='Navbar'>
            {/* <img src={assets.logo} alt="" className="logo" /> */}
            <h1>SD Shop.</h1>
            <ul className="navbar-menu">
                <li onClick={()=>setMenu("home")} className={menu==="home" ? "active" : " "}>Home</li>
                <li onClick={()=>setMenu("menu")} className={menu==="menu" ? "active" : " "}>Menu</li>
                <li onClick={()=>setMenu("mobile-App")} className={menu==="mobile-App" ? "active" : " "}>Mobile-App</li>
                <li onClick={()=>setMenu("contact-Us")} className={menu==="contact-Us" ? "active" : " "}>Contact Us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar