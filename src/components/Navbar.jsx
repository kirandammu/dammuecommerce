import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
const Navbar = () => {

  const {getCartCount} = useContext(ShopContext)

  return (
    <div className='navbar'>
      <div className="logo">
        <Link to='/'><img src={assets.logo} alt="" /></Link>
      </div>
      <ul className="list-items">
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/collection'>COLLECTION</NavLink>
        <NavLink to='/about'>ABOUT</NavLink>
        <NavLink to='/contact'>CONTACT</NavLink>
      </ul>
      <div className="items">
        {/* <div className="search">
            <img src={assets.search_icon} alt="" />
        </div> */}
        <div className="cart">
            <Link to={'/cart'}><img src={assets.cart_icon} alt="" />
            <p className="num">{getCartCount()}</p></Link>
        </div>
        <div className="login">
            <Link to='/login'><img src={assets.profile_icon} alt="" /></Link>
            <div className="profile">
                <p>My Profile</p>
                <p>Orders</p>
                <p>Logout</p>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
