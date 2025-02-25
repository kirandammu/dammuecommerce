import React from 'react'
import Title from './Title'

const TotalCart = () => {
  return (
    <div>
      <Title text1={'CART'} text2={'TOTAL'} />
      <div className="total">
        <div className="count">
            <p>Subtotal</p>
            <p>4000</p>
        </div>
        <div className="count">
            <p>Shipping fee</p>
            <p>100</p>
        </div>
        <div className="count">
            <h4>Total</h4>
            <h4>4100</h4>
        </div>
      </div>
    </div>
  )
}

export default TotalCart
