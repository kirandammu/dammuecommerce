import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <div className="head">
              <hr /><p>OUR BESTSELLERS</p>
            </div>
            <h1 >Latest Arrivals</h1>
            <div className="head">
              <p>SHOP NOW</p><hr />
            </div>
        </div>
        <div className="hero-right">
          <img src={assets.hero_img} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
