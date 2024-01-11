import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchbyProduct } from '../Redux/Slices/productSlice';


function Header({insideHome}) {
const wishlist = useSelector(state=>state.wishlistReducer)
const dispatch = useDispatch()
const cart = useSelector(state=>state.cartReducer)
// const [wishlistCount,setWishlistCount] = useState(0)
// useEffect(()=>{
//   setWishlistCount(wishlist?.length)
// },[wishlist])
  return (
    <div >
 <Navbar style={{zIndex:1, top:'0px'}} expand="lg"  className="bg-info w-100 position-fixed">
      <Container>
        <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder'>
        <i class="fa-solid fa-truck-fast me-2"></i>Daily Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link>          
              {insideHome&& <input onChange={e=>dispatch(searchbyProduct(e.target.value.toLowerCase()))} style={{borderRadius:'5px'}} type="text" placeholder='search products here..' className='me-2'/>}
<Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}} >
            <i class="fa-solid fa-heart text-danger"></i>
              Wishlist  <Badge className='bg-light text-dark'>{wishlist?.length}</Badge></Link></Nav.Link>
              <Nav.Link><Link to={'/cart'} style={{textDecoration:'none',color:'white'}} >
            <i class="fa-solid fa-cart-plus text-success"></i>
              Cart  <Badge className='bg-light text-dark'>{cart?.length}</Badge></Link></Nav.Link>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




    </div>
  )
}

export default Header