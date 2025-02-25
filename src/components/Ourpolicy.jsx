import React from 'react'
import { assets } from '../assets/assets'

const Ourpolicy = () => {
  return (
    <div className="policy">
        <div className="ourpolicy">
            <img src={assets.exchange_icon} alt="" />
            <p>Easy Exchange Policy</p>
            <span>We offer hassle free exchange policy</span>
        </div>
        <div className="ourpolicy">
            <img src={assets.quality_icon} alt="" />
            <p>7 Days Return Policy</p>
            <span>We provide 7 days free return policy</span>
        </div>
        <div className="ourpolicy">
            <img src={assets.support_img} alt="" />
            <p>Best Customer Support</p>
            <span>We provide 24/7 customer support</span>
        </div>
    </div>
  )
}

export default Ourpolicy
