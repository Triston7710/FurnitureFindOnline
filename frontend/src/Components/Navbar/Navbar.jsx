import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {

  let [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='nav'>
      <Link to='/' onClick={()=>{setMenu("shop")}} style={{ textDecoration: 'none' }} className="nav-logo">
       
        <p>FurnitureFindOnline</p>
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        
        <li onClick={()=>{setMenu("sofa1")}}><Link to='/sofa1' style={{ textDecoration: 'none' }}>Sofa</Link>{menu==="sofa1"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("chair")}}><Link to='/chair' style={{ textDecoration: 'none' }}>Chair</Link>{menu==="chair"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("table")}}><Link to='/table' style={{ textDecoration: 'none' }}>Study Table</Link>{menu==="table"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("wardrobe")}}><Link to='/wardrobe' style={{ textDecoration: 'none' }}>Wardrobe</Link>{menu==="wardrobe"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("bed")}}><Link to='/bed' style={{ textDecoration: 'none' }}>Bed</Link>{menu==="bed"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Logout</button>
        :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
        <Link to="/cart"><img src={cart_icon} alt="cart"/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
