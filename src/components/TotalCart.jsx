import React, { useContext } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'

const TotalCart = () => {
    const {getCartAmount, currency, delivery_fee} = useContext(ShopContext)
  return (
    <div>
      <Title text1={'CART'} text2={'TOTAL'} />
      <div className="total">
        <div className="count">
            <p>Subtotal</p>
            <p>{currency}{getCartAmount()}.00</p>
        </div>
        <div className="count">
            <p>Shipping fee</p>
            <p>{currency}{getCartAmount() === 0 ?'0':delivery_fee*getCartAmount()}.00</p>
        </div>
        <div className="count">
            <h4>Total</h4>
            <h4>{currency}{getCartAmount() === 0 ? '0':getCartAmount()+delivery_fee*getCartAmount()}</h4>
        </div>
      </div>
    </div>
  )
}

export default TotalCart
