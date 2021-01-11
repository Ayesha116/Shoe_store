

import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import Products from './components/Products';
import NotFound from './components/NotFound'
import { About} from './components/About'
import {ProductIndex} from './components/ProductIndex';
import {Link , Routes,Route , BrowserRouter} from 'react-router-dom';
import ProductDetail from './components/ProductDetail';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand > </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link ><Link to = '/'>Home</Link></Nav.Link>
            <Nav.Link ><Link to = 'products'>Products</Link></Nav.Link>
            <Nav.Link ><Link to = 'about'>About</Link></Nav.Link>
          </Nav>
        </Navbar>
        <Routes>
          <Route path = '/' element = {<Home/>}></Route>
          <Route path = 'products' element = {<Products/>}>
            {/* <Route path = '/' element = {<ProductIndex></ProductIndex>}></ Route>
            <Route path = '/:productId' element = {<ProductDetail></ProductDetail>}></Route> */}
          </Route>
          <Route path = 'about' element = {<About/>}></Route>
          <Route path = '*' element = {<NotFound/>}></Route> 
        </Routes>
  
      </BrowserRouter>
    </div>
  )
}


  
