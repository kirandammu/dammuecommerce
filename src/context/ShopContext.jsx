import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props)=>{

    const currency = '$';
    const delivery_fee = 10;
    const [cartItems,setCartItems] = useState({})

    

    const addToCart = async (itemId,size)=>{

        if(!size){
            toast.error('Select Product Size')
            
        }
       
        let cartData = structuredClone(cartItems)

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1
            }
            else{
                cartData[itemId][size] = 1
            }

        }
        else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCartItems(cartData)
        
    }

    const getCartCount = ()=> {
        let totalCount = 0
        for(const items in cartItems){
            for (const item in cartItems[items]){
                if(cartItems[items][item] > 0){
                    totalCount += cartItems[items][item]
                }
            }
        }
        return totalCount
    }
    const updateQuantity = async (itemId,size,quantity)=>{

        let cartData = structuredClone(cartItems)
        
        cartData[itemId][size] = quantity

        setCartItems(cartData)
    }

    const value = {
        products, currency, delivery_fee, cartItems, addToCart, getCartCount, updateQuantity

    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider