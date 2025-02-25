import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import TotalCart from '../components/TotalCart'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method,setMethod] = useState('')
  const {navigate} = useContext(ShopContext)

  return (
    <div className="placeorder">
      <div className="delivery">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
          <div className="del-info">
            <div className="input">
              <input type="text" placeholder='First name' />
              <input type="text" placeholder='Last name' />
            </div>
            <input type="text" placeholder='Email address' />
            <input type="text" placeholder='Street' />
           <div className="input">
              <input type="text" placeholder='City' />
              <input type="text" placeholder='State' />
            </div>
            <div className="input">
              <input type="text" placeholder='Zipcode' />
              <input type="text" placeholder='Country' />
            </div>
            <input type="text" placeholder='Phone' />
          </div>

      </div>
      <div className="cartInfo">
        <TotalCart />
        <Title text1={'PAYMENT'} text2={'METHOD'}/>
        <div className="method">
          <div onClick={()=>setMethod('stripe')} className="payment">
            <p className={` ${method === 'stripe' ? 'pay': ''}`}></p>
            <img src={assets.stripe_logo} alt="" />
          </div>
          <div onClick={()=>setMethod('razor')} className="payment">
            <p className={` ${method === 'razor' ? 'pay': ''}`}></p>
            <img src={assets.razorpay_logo} alt="" />
          </div>
          <div onClick={()=>setMethod('cod')} className='payment'>
            <p className={` ${method === 'cod' ? 'pay': ''}`}> </p>
            <span>CASH ON DELIVERY</span>
          </div>
        </div>
        <button onClick={()=>navigate('/order')}>ORDER PLACE</button>

      </div>
    </div>
  )
}

export default PlaceOrder
