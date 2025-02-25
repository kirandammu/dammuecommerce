import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'

const Order = () => {

  const {products, currency} = useContext(ShopContext)

  return (
      <div className="cart">
    <Title text1={'MY'} text2={'ORDERS'} />
    <div className="list">
      {products.slice(30,35).map((item,index)=>{

        const productData = products.find((product)=> product._id === item._id)

        return(
          <div className="cart-list" key={index}>
            <div className="show">
              <img src={productData.image[0]} className='main' />
              <div className="name">
                <h4>{productData.name}</h4>
                <div className="price">
                  <p>{currency}{productData.price}</p>
                  <p>size: M</p>
                </div>
                <p>Date 26 May 2003</p>
              </div>
              <p>Ready to shop</p>
              <span className='track'>Track Order</span>
            </div>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default Order
