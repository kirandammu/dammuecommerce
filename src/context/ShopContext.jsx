import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props)=>{

    const currency = '$';
    const delivery_fee = 0.08;
    const [cartItems,setCartItems] = useState({})
    const navigate = useNavigate()

    

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

    const getCartAmount = ()=>{
        let totalAmout = 0
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items)
            for(const item in cartItems[items]){
                if(cartItems[items][item]>0){
                    totalAmout += itemInfo.price * cartItems[items][item]
                }
            }
        }
        return totalAmout
    }

    const value = {
        products, currency, delivery_fee, cartItems, addToCart, getCartCount, updateQuantity,
        getCartAmount, navigate

    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider