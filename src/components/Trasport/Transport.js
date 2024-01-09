// import React from 'react'
// import { Link } from 'react-router-dom'

// function Navbartrans() {
//   return (
//     <div className='nav'>
//       <Link to="/hometrans">Home</Link>
//       <Link to="/Chopa">Speed Boat</Link>
//       <Link to="/engine">Engine Boat</Link>
//       <Link to="/Ferry">Ferry</Link>
//       <Link to="/waterbus">Waterbus</Link>
//     </div>
//   )
// }

// export default Navbartrans
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbartrans() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar */}
      <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
        {/* <a href="javascript:void(0)" className="closebtn" onClick={toggleSidebar}>&times;</a> */}
        <Link to="/hometrans">Home</Link>
      <Link to="/Chopa">Speed Boat</Link>
      <Link to="/engine">Engine Boat</Link>
      <Link to="/Ferry">Ferry</Link>
      <Link to="/waterbus">Waterbus</Link>
      </div>

      {/* Content */}
      <div id="main" className={`content ${isOpen ? 'open' : ''}`}>
        <nav className='nav'>
          <span onClick={toggleSidebar}>Open $ Close</span>
        </nav>
        {/* Rest of your page content */}
        <h1>  Transportation modes in Luanda Kotieno</h1>
        <div>
      <p>Transportation business where people move to <b>Mbita homabay county</b> through diferent water vesells and to other parts</p>
      <p> Click <b>open</b> to view the different Vessels</p>
      <p>There are vehicles operating in the Lunda Kotieno Kisumu road and Lunda Kotieno Busia road  with designated time line</p>
    </div>
      </div>
    </div>
  );
}

export default Navbartrans;