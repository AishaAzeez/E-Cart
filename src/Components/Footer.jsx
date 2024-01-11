import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css';

function Footer() {
  return (
    <div className='border-top bg-info w-100'>
    <Container>
      <Row className='r1 mt-3'>

       <Col xs={12} md={6} lg={3}>
         <p style={{color:'black'}}> <i style={{color:'white'}} className="fa-solid fa-truck-fast"></i> Daily Cart</p>
         <p className='mt-2 a3'>
         Designed and built with all the love in the world by the bootstrap team Possimus recusandae consequator ipsa veritatis expedita aspernatur.
     </p>
       </Col>

       <Col xs={12} md={6} lg={3}>
       <p className='a1'>Links</p>
     <p className='a4'>Landing Page</p>
    <p className='a4'>Home</p>
    <p className='a4'>Watch History</p>          
       </Col>

       <Col xs={12} md={6} lg={3}>
       <p className='a1'>Guides</p>
     <p className='a5'>react</p>
     <p className='a5'>react bootstrap</p>
     <p className='a5'>routing</p>
       </Col>

       <Col xs={12} md={6} lg={3}>
       <p className='a6'>Contact Us</p>
       <input type="text" style={{backgroundColor:'white', height:'30px' ,border:'1px solid white', borderRadius:'5px'}} placeholder="Enter E-mail"/>
     <div className='pt-2'></div>
     <button className='a7 text-center' style={{width:'200px', fontFamily:'Rufina'}} >send</button>
       </Col>
      </Row>
    </Container>

     </div>
  )
}

export default Footer