import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import Newsletter from '../components/Newsletter'
const About = () => {
  return (
    <div className="about">
      <Title text1={'ABOUT'} text2={'US'}/>
      <div className="about-page">
        <div className="about-img">
          <img src={assets.about_img} alt="" />
        </div>
        <div className="about-info">
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea. to provide a platform where customers can easily discover, explore, and purchase a wide range of products from comfort of their homes.</p>
          <p>Since our inception, we've worked tirelessly to create a diverse selection of high-quality prodcuts that cater to every taste and preference . From fashion and beauty to electronics and home essentials, we offer an extensive colleciton sourced from trusted brands and suppliers.</p>
          <h2>Our Mission</h2>
          <p>Our mission at Forver is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>
      <Title text1={'WHY'} text2={"CHOOSE US"} />
      <div className="about-msg">
        <div className="msgs">
          <h3>Quality Assurance:</h3>
          <p>We meticulousy select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className="msgs">
          <h3>Convenience:</h3>
          <p>With our user-friendly interface and hassie-free ordering process. shopping has never been easier.</p>
        </div>
        <div className="msgs">
          <h3>Exceptional Customer Services:</h3>
          <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top prority.</p>
        </div>
      </div>
      <Newsletter />
    </div>
  )
}

export default About
