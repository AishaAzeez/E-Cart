import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../Redux/Slices/wishlist';
import { addToCart } from '../Redux/Slices/cartSlice';
import Header from '../Components/Header';


function View() {
const {id} = useParams()
console.log(id);
const [product,setProduct] = useState({})
const wishlist = useSelector(state=>state.wishlistReducer)
const dispatch = useDispatch()
useEffect(()=>{
  const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
  setProduct(allProducts?.find(item=>item.id==id))
},[])

const handleWishlist = (product)=>{
  const existingproduct = wishlist?.find(item=>item.id==product.id)
  if(existingproduct){
    alert("Product already in your wishlist")
  }else{
    dispatch(addToWishlist(product))
  }
}





  return (
<>

<Header></Header>
        <div style={{paddingTop:'100px'}}>
  
  <div className="container mt-5 mb-5">
  <div className="row align-items-center">
    <div className="col-lg-4">
      <img height={'300px'} className='img-fluid' src={product?.thumbnail} alt="" />
    </div>
  
    <div className="col-lg-2"></div>
    <div className="col-lg-6">
      <span>PID: {product?.id}</span>
      <h1>{product?.title}</h1>
      <h5 className='fw-bold text-primary'>$ {product?.price}</h5>
      <p style={{textAlign:'justify'}}> <span className='fw-bolder'>Description</span>: {product?.description}</p>
  
  <div className="d-flex mt-5">
        <button onClick={()=>handleWishlist(product)} className='btn btn-outline-dark'><i className="fa-solid fa-heart text-danger"></i>Add to wishlist</button>
        <button onClick={()=>dispatch(addToCart(product))} style={{marginLeft:'50px'}} className='btn btn-outline-dark'><i className="fa-solid fa-cart-plus text-success"></i>Add to cart</button>
  </div>
    </div>
  </div>
  </div>
   </div>
  
  
</>  )
}

export default View