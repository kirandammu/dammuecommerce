import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'
const ProductItem = ({id,name,image,price}) => {

    const {currency} = useContext(ShopContext)

  return (
    <Link to={`/product/${id}`} onClick={window.scrollTo(0,0)}>
        <div className='image'>
            <img src={image[0]} alt="" />
        
        <p>{name}</p>
        <span>{currency}{price}</span>
        </div>
    
    </Link>
  )
}

export default ProductItem
