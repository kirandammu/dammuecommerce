import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos alias laborum impedit nobis rem omnis. Autem necessitatibus ipsa enim magni dicta quo iure harum, omnis, quisquam sed quae numquam? Eveniet!</p>
            </div>
           
            <div className="lists">
               <h3>COMPANY</h3>
                <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li></ul>
            </div>
            <div className="lists">
               <h3>GET IN TOUCH</h3>
                <ul>
                <li>+91 939 020 516</li>
                <li>dammukiran4@gmail.com</li>
               </ul>
            </div>
            
        </div>
        <span>Copyright 2025@ forever.com - All Right Reserved.</span>
    </div>
  )
}

export default Footer
