import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

   const {products} = useContext(ShopContext)
   const [LatestProducts, setLatestProducts] = useState([])

   useEffect(()=>{
    setLatestProducts(products.slice(0,10))
   },[])
    

  return (
    <div className='latest'>
      <div className="header">
      <Title text1={'LATEST'} text2={'COLLECTIONS'} />
      <p>Updates on What Is Trending and New Product Launches keep up with every piece of clothing and accessory</p>
      
      </div>
      <div className="display">
        {LatestProducts.map((item, index)=>{
          return(
              <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
          )
        })}
      </div>
    </div>
  )
}

export default LatestCollection
