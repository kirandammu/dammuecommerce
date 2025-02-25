import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import TotalCart from '../components/TotalCart'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItems, currency, products, updateQuantity} = useContext(ShopContext)

  const [cartData, setCartData] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{

    const tempData = []
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item] > 0){
          tempData.push({
            _id: items, size:item, quantity:cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData)
  },[cartItems])

  return (
    <div className="cart">
    <Title text1={'YOUR'} text2={'CART'} />
    <div className="list">
      {cartData.map((item,index)=>{

        const productData = products.find((product)=> product._id === item._id)

        return(
          <div className="cart-list" key={index}>
            <div className="show">
              <img src={productData.image[0]} className='main' />
              <div className="name">
                <h4>{productData.name}</h4>
                <div className="price">
                  <p>{currency}{productData.price}</p>
                  <p>{item.size}</p>
                </div>

              </div>
              <p>{item.quantity}</p>
              <img src={assets.bin_icon} alt="" onClick={()=>updateQuantity(item._id,item.size,0)}/>
            </div>
          </div>
        )
      })}
    </div>
    <TotalCart />
    <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
    </div>
  )
}

export default Cart
