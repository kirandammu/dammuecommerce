import React from 'react'
import Title from '../components/Title'
import Newsletter from '../components/Newsletter'
import {assets} from '../assets/assets'
const Contact = () => {
  return (
    <div className="about">
      <Title text1={'CONTACT'} text2={'US'}/>
      <div className="about-page">
        <div className="about-img">
          <img src={assets.contact_img} alt="" />
        </div>
        <div className="about-info">
          <h2>Our Store</h2>
          <p>531162 Visakhapatnam <br />Andhra Prdesh, India.</p>
          <p>Mobile: +91 939 020 516 <br />dammukiran4@gmail.com</p>
          <h2>Careers at Forever</h2>
          <p>Learn more about our teams and job openings.</p>
          <h4>Explore Jobs</h4>
        </div>
      </div>
      <Newsletter />
    </div>
  )
}

export default Contact
