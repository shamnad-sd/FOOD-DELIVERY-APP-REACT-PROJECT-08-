import React, { useContext } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {
  //way1
  // const [itemCount,setItemCount] = useState(0)

  //way2
  const {cartItem,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-img' src={image} alt="" />

            {/* this way1 to u can display and count food item but issue is it is not added in local storage so i prefer context storing method (card item object)*/}
            
            {/* {!itemCount 
                ? <img className='add' onClick={()=>setItemCount(itemCount=>itemCount+1)} src={assets.add_icon_white}/>
                : <div className='food-item-counter'>
                    <img onClick={()=>setItemCount(itemCount=>itemCount-1)} src={assets.remove_icon_red} alt="" />
                    <p>{itemCount}</p>
                    <img onClick={()=>setItemCount(itemCount=>itemCount+1)} src={assets.add_icon_green} alt="" />
                  </div> */}
                  {!cartItem[id] 
                    ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
                    : <div className='food-item-counter'>
                        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItem[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                      </div>

            }
        </div>
        <div className="food-item-info">
            <div className="food-item-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-des">{description}</p>
            <p className="food-item-price">₹{price}</p>
        </div>

    </div>
  )
}

export default FoodItem