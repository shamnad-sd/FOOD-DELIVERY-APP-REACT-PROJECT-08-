import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

// cate... , setCate... it is took in home.jsx ,home.jsx have useState
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'>SD Shop brings your favorite meals from the best restaurants straight to your doorstep. Whether you're in the mood for a quick snack, a hearty dinner.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    // this is the main part for food selection
                    <div onClick={()=>setCategory(prev=> prev===item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name ?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu