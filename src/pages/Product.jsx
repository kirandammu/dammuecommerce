import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Related from '../components/Related';
import { toast } from 'react-toastify';

const Product = () => {

  const {productId} = useParams()
  const {products, currency, addToCart} = useContext(ShopContext)
  const [productData,setProductData] = useState(false)
  const [image,setImage] = useState('')
  const [size,setSize] = useState('')

  const fetchProductData = ()=>{

    products.map((item)=>{
      if(item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })

  }
  
  useEffect(()=>{
    fetchProductData();
  },[products])

  return productData ? (
    <div className='product'>
      <div className="product-items">
      <div className="images">
      <div className="mini-img">
        {productData.image.map((item, index)=>{
          return(
            <div key={index} className='mini'>
              <img src={item} alt="" onClick={()=>setImage(item)} />
            </div>
            
          )
        })}
      </div>
      <div className='f-image' >
          <img src={image} alt="" />
       </div>
      </div>
      {/* -----------Product--Info------------ */}
      <div className="product-info">
        <h1>{productData.name}</h1>
        <div className="stars">
        <img src={assets.star_icon} alt="" />
        <img src={assets.star_icon} alt="" />
        <img src={assets.star_icon} alt="" />
        <img src={assets.star_icon} alt="" />
        <img src={assets.star_dull_icon} alt="" />
        
        </div>
        <h2>{currency}{productData.price}</h2>
        <p>{productData.description}</p>
        <div className="sizes">
          <h4>Select Size</h4>
          <div className="size-box">
          {productData.sizes.map((item,index)=>{
            return(
              <button onClick={()=>setSize(item)} className={`${item === size ?'sizebox':''}`} key={index}>{item}</button>
            )
          })}
          </div>
        </div>
        <button className='add'onClick={()=>addToCart(productData._id,size) } >ADD TO CART</button>
        <div className="small-text">
          <p>100% Original Product.</p>
          <p>Cash on Delivery is available on this product.</p>
          <p>Easy return and exchange policy within 7 Days.</p>
        </div>
      </div>
      </div>
      <div className="details">
        <div className="reviews">
          <p><b>Description</b></p>
          <p>Reviews (122)</p>
        </div>
        <div className="para">
        <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea. to provide a platform where customers can easily discover, explore, and purchase a wide range of products from comfort of their homes.</p>
        <p>Since our inception, we've worked tirelessly to create a diverse selection of high-quality prodcuts that cater to every taste and preference . From fashion and beauty to electronics and home essentials, we offer an extensive colleciton sourced from trusted brands and suppliers.</p>
        </div>
        </div>
      
      {/* -----------Related---Products------------- */}
          <Related category={productData.category} subCategory={productData.subCategory}/>
    </div>
   
  ) :
  <div></div>
}



export default Product
