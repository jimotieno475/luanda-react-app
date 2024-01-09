import React from 'react'
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import Ferry from './Ferry';
import Chopa from './Chopa';
import Engine from './Engine';
import Hometrans from './Hometrans';
import WaterBus from './WaterBus';
import Navbartrans from './Transport';

function Apptrans() {
  return (
    <div>Apptrans
      <Router>
        <Navbartrans/>
        <Routes>
          <Route path="/" element={<Navigate to="/hometrans"/>}/>
          <Route path="/hometrans" element={<Hometrans/>}/> 
          <Route path="/ferry" element={<Ferry/>}/>
          <Route exact path="/chopa" element={<Chopa/>}/>
          <Route exact path="/engine" element={<Engine/>}/>
          <Route path="/waterbus" element={<WaterBus/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default Apptrans;