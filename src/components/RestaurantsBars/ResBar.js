// import React from 'react'
// import { Link } from 'react-router-dom';

// function NarbarRes() {
//   return (
//     <div className='nav'>
//       <Link to="/homeres">Home</Link>
//       <Link to="/bar">Bar</Link>
//       <Link to="/restaurant">Restaurants</Link>
//     </div>
//   )
// }

// export default NarbarRes;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavbarRes() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar */}
      <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
        {/* <a href="javascript:void(0)" className="closebtn" onClick={toggleSidebar}>&times;</a> */}
      <Link to="/homeres">Home</Link>
      <Link to="/bar">Bar</Link>
      <Link to="/restaurant">Restaurants</Link>
      </div>

      {/* Content */}
      <div id="main" className={`content ${isOpen ? 'open' : ''}`}>
        <nav className='nav'>
          <span onClick={toggleSidebar}>Open $ Close</span>
        </nav>
        {/* Rest of your page content */}
        <h1>  Restaurants and Bars</h1>
        <p> Welcome feel the taste of various delicasies</p>
        <p>Click Open to view the side bar</p>
        <p></p>
      </div>
    </div>
  );
}

export default NavbarRes;