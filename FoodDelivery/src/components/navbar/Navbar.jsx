import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';


const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");

    return (
        <div className='Navbar'>
            <Link to='/'><h1>SD Shop.</h1></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={()=>setMenu("home")} className={menu==="home" ? "active" : " "}>Home</Link>
                <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu" ? "active" : " "}>Menu</a>
                <a href='#app-download' onClick={()=>setMenu("mobile-App")} className={menu==="mobile-App" ? "active" : " "}>Mobile-App</a>
                <a href='#footer' onClick={()=>setMenu("contact-Us")} className={menu==="contact-Us" ? "active" : " "}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                    <div className="dot"></div>
                </div>
                <button onClick={()=> setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar