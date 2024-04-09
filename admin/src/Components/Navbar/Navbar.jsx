import React from 'react'
import './Navbar.css'

import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
    
      <h2 className='nav-logo'>FurnituresFindOnline</h2>
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
