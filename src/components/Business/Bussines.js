// import React from 'react'
// import { Link } from 'react-router-dom';

// function Navbarbiss() {
//   return (
//     <div >
//       <nav  className='nav' >
//         <span onclick="openNav()">open</span>
//         <Link to="/homebiss">Home</Link>
//         <Link to="/boda">BodaBoda</Link>
//         <Link to="/cages">Fish Cages</Link>
//         <Link to="/cyber">Ciber</Link>
//         <Link to="/fishbanda"> Fish Banda</Link>
//         <Link to="/fuel"> Fuel station</Link>
//         <Link to="/hardware">Hardware</Link>
//         <Link to="/movieShop">Movieshop</Link>
//         <Link to="/mpesaShop">MpesaShop</Link>
//         <Link to="/shop">Shop/Reatile store</Link>
//         </nav>
//     </div>
//   )
// }

// export default Navbarbiss;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbarbiss() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar */}
      <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
        {/* <a href="javascript:void(0)" className="closebtn" onClick={toggleSidebar}>&times;</a> */}
        <Link to="/homebiss">Home</Link>
        <Link to="/boda">BodaBoda</Link>
        <Link to="/cages">Fish Cages</Link>
        <Link to="/cyber">Ciber</Link>
        <Link to="/fishbanda"> Fish Banda</Link>
        <Link to="/fuel"> Fuel station</Link>
        <Link to="/hardware">Hardware</Link>
        <Link to="/movieShop">Movie Shop</Link>
        <Link to="/mpesaShop">Mpesa Shop</Link>
        <Link to="/shop">Shop/Reatile store</Link>
        <Link to="/kinyozi">Baber Shop</Link>
        <Link to="/chemist">Chemist</Link>
        <Link to="/lodge">Lodge</Link>
        <Link to="/maizemill">MaizeMill</Link>
        <Link to="/tailorshop">Tailor Shop</Link>
        <Link to="/phonerepair">PhoneRepairShop</Link>
      
      </div>

      {/* Content */}
      <div id="main" className={`content ${isOpen ? 'open' : ''}`}>
        <nav className='nav'>
          <span onClick={toggleSidebar}>Open $ Close</span>
        </nav>
        {/* Rest of your page content */}
        <h1>Busineses</h1>
        <p>Welcome to Luanda Kotieno home of businesses </p>
        <p>Click <b>open</b> to view  the services offered on Luanda koteno and choose which you are interested in and you  will get an ifo about it </p>
        <p>Every Service you may need we probably have it</p>
      </div>
    </div>
  );
}

export default Navbarbiss;
