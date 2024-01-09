import React from 'react'
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import Homebiss from './Homebiss';
import BodaBoda from './BodaBoda';
import Cages from './Cages';
import Cyber from './Cyber';
import FishBanda from './FishBanda';
import FuelStations from './FuelStations';
import Hardwares from './Hardwares';
import MovieShop from './MovieShop';
import Mpesaservices from './Mpesaservices';
import Shops from './Shops';
import Navbarbiss from './Bussines';

function Appbiss() {
  return (
    <div>Appbiss
        <Router>
        <Navbarbiss/>
          <Routes>
          <Route path="/" element={<Navigate to="/homebiss"/>}/> 
          <Route exact path="/homebiss" element={<Homebiss/>}/> 
          <Route path="/boda" element={<BodaBoda/>}/> 
          <Route path="/cages" element={<Cages/>}/>
          <Route path="/cyber" element={<Cyber/>}/> 
          <Route path="/fishbanda" element={<FishBanda/>}/>
          <Route path="/fuel" element={<FuelStations/>}/>  
          <Route path="/hardware" element={<Hardwares/>}/>  
          <Route path="/movieShop" element={<MovieShop/>}/> 
          <Route path="/mpesaShop" element={<Mpesaservices/>}/>
          <Route path="/shop" element={<Shops/>}/>  
          </Routes>
        </Router>
    </div>
  )
}

export default Appbiss;