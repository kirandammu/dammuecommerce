import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import ProductItem from '../components/ProductItem'
import { ShopContext } from '../context/ShopContext'

const Related = ({category, subCategory}) => {

    const [related,setRelated] = useState([])
    const {products} = useContext(ShopContext)

   useEffect(()=>{
    let productCopy = products.slice();

    if(products.length>0){
        productCopy = productCopy.filter(item=>category === item.category)
        productCopy = productCopy.filter(item=>subCategory === item.subCategory)

        setRelated(productCopy.slice(0,5))
        
    }
   },[products])

  return (
    <div className="related">
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
        <div className="display">
            {related.map((item)=>(
                <ProductItem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} />
            )
            )}
        </div>

    </div>
  )
}

export default Related
