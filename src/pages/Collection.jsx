import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'
import Title from '../components/Title'

const Collection = () => {
  const {products} = useContext(ShopContext)
  const [filterProducts,setFilterProducts] = useState([])
  const [category,setCategory ] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('Relavent')
  const [search, setSearch] = useState('')

  const toggleCategory = (e)=>{
    if (category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e)=>{
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = ()=>{
    
    let productCopy = products.slice()

     productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    
    if(category.length>0){
      productCopy = productCopy.filter(item => (category.includes(item.category)))
    }
    if(subCategory.length>0){
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productCopy)
  }

  const sortProducts = () => {

    let fpCopy = filterProducts.slice()

    switch (sortType) {
      case 'Low-High':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)))
        break;

      case 'High-Low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)))
        break;

      default:
        applyFilter()
        break;
    }
  }


  
  useEffect(()=>{
    applyFilter()
  },[category,subCategory,search])

  useEffect(()=>{
    sortProducts()
  },[sortType])


  return (
    <div className="collection">
      <div className="filter">
        <h3>SEARCH </h3>
        <input type="text" className='box' placeholder='search here...' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <h2>FILTERS</h2>
        <div className="subcategory">
          <h3>CATEGORY</h3>
          <p><input type="checkbox" value={'Men'} id='Men'  onChange={toggleCategory} /><label htmlFor='Men'>Men</label></p>
          <p><input type="checkbox" value={'Women'} id='Women'  onChange={toggleCategory} /><label htmlFor='Women'>Women</label></p>
          <p><input type="checkbox" value={'Kids'} id='Kids'  onChange={toggleCategory} /><label htmlFor='Kids'>Kids</label></p>
        </div>
        <div className="subcategory">
          <h3>TYPE</h3>
          <p><input type="checkbox" value={'Topwear'} id='Topwear' onChange={toggleSubCategory}/><label htmlFor='Topwear'>Topwear</label></p>
          <p><input type="checkbox" value={'Bottomwear'} id='Bottomwear' onChange={toggleSubCategory} /><label htmlFor='Bottomwear'>Bottomwear</label></p>
          <p><input type="checkbox" value={'Winterwear'} id='Winterwear' onChange={toggleSubCategory} /><label htmlFor='Winterwear'>Winterwear</label></p>
        </div>
      </div>
      <div className="filter-items">
        <div className="subtitle">
        <Title text1={'ALL'} text2={'COLLECTIONS'} />
        <select onChange={(e)=>setSortType(e.target.value)} name="sortby" id="" > sort By
        <option value="Relavent">sort by: Relavent</option>
        <option value="Low-High">sort by: Low to High</option>
        <option value="High-Low">sort by: High to Low</option>

        </select>
        </div>
        <div className="filter-collection">
        {filterProducts.map((item,index)=>{
        return(
          <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
        )
      })}
        </div>
          </div>
    </div>
  )
}

export default Collection
