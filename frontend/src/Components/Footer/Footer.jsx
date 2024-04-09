import React from 'react'
import './Footer.css'


import instagram_icon from '../Assets/instagram_icon.png'

import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
     
        
        <h2>FurnituteFindOnline</h2>
      
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
        <a href="">  <img src={instagram_icon} alt="" /></a>
        </div>
        
        <div className="footer-icons-container">
        <a href=""> <img src={whatsapp_icon} alt=""/> </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2024 Krishna Sharma All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
