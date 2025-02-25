import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {

    const {products} = useContext(ShopContext)
    const [bestSeller,setBestSeller] = useState([])

    useEffect(()=>{
        const bestProducts = products.filter((item)=>(item.bestseller))
        setBestSeller(bestProducts.slice(0,5))
    },[])

  return (
    <div>
        <div className="header">
            <Title text1={'BEST'} text2={'SELLERS'}/>
        <p>Updates on What Is Trending and New Product Launches keep up with every piece of clothing and accessory</p>
        </div>
      <div className="display">
      {
        bestSeller.map((item)=>{
            return(
                <ProductItem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} />
            )
        })

      }
      </div>
    </div>
  )
}

export default BestSeller
