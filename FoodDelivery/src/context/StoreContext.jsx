import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

// just create one context
export const StoreContext = createContext(null)

// and also create store context area
const StoreContextProvider = (props) =>{
     //this is the way 2 for add to cart
    const [cartItem ,setCardItem] =useState({})

    const addToCart = (itemId) =>{
        if(!cartItem[itemId]){
            setCardItem((prev)=>({...prev,[itemId]:1}))
        }
        // this is working section
        else{
            setCardItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart =(itemId) =>{
        setCardItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    // store local storage
    useEffect(()=>{
        console.log('Food Qty :',cartItem);
        
    },[cartItem])

    const contextValue ={
        food_list,
        cartItem,
        setCardItem,
        addToCart,
        removeFromCart
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;