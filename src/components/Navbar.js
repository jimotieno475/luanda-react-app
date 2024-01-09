import React from 'react'
import { Link } from 'react-router-dom';

 function Navbar() {
  return (
    <div>
        <nav >
          <ul className='navs'>
           <li><Link to="/home">Home</Link></li> 
            <li><Link to="/business">Busineses</Link></li>
            <li><Link to="/restaurantBars">Restaurants&Bars</Link></li>
            <li><Link to="/transport">Transport</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;