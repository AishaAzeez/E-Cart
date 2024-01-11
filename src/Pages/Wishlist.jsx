import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../Redux/Slices/wishlist'
import { addToCart } from '../Redux/Slices/cartSlice'
import Header from '../Components/Header'

function Wishlist() {
  const wishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()
const handleRemoveWishlist = (product)=>{
  dispatch(removeFromWishlist(product?.id))
  dispatch(addToCart(product))

}
  return (
<>
<Header></Header>
      <div style={{marginTop:'80px'}}>
        <div className='container'>
  <Row className='mt-5'>
    {wishlist?.length>0?wishlist?.map(product=>(
      <Col key={product.id} style={{marginBottom:'10px'}} sm={12} md={6} lg={4} xl={3}>
  <Card className='card shadow' style={{width:'18rem'}}>
  <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
        <Card.Body>
          <Card.Title>{product?.title.slice(0,20)}</Card.Title>
          <p>$ {product?.price}</p>
                    <div className='d-flex justify-content-between'>
                      <button className='btn btn-link'>
                        <i onClick={()=>dispatch(removeFromWishlist(product?.id))} className='fa-solid fa-heart-circle-minus text-danger'></i>
                      </button>
                      <button onClick={()=>handleRemoveWishlist(product)} className='btn btn-link'><i  className='fa-solid fa-cart-plus text-success'></i></button>
                    </div>
               </Card.Body>
  </Card>
  </Col>
  
    )):
  <div className='d-flex flex-column justify-content-center align-items-center w-100 mb-5'>
          <img height={'300px'} className='img-fluid' src="https://i.postimg.cc/mZHXM0vR/empty-cart-2130356-1800917.webp" alt="" />
          <h2>your wishlist is empty</h2></div>  
    }
  </Row>
        </div>
      </div>
  
</>
 )
}

export default Wishlist