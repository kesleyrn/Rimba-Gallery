import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   
      <div className='header-container'>
        <div className="header-row">
            <div className="header-col">
              <img src="./public/Logo.png" alt="header-logo" className="logo" />
              <h3>Rimba-Gallery</h3>
            </div>
            <div className="header-cols">
                <ul className="header-ul">
                    <li><Link to="/"  >Home</Link></li>
                    <li><Link to="/Products"  >Products</Link></li>
                    <li><Link to="/Services"  >Our-Services</Link></li>
                </ul>
             </div>

        </div>

    </div>
   
  )
}

export default Navbar