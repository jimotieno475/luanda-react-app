import React from 'react'
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import Bar from './Bar';
import Restaurants from './Restaurants';
import Homeres from './Homeres';
import NarbarRes from './ResBar';

function AppRes() {
  return (
    <div>AppRes
      <Router>
        <NarbarRes/>
        <Routes>
          <Route path="/" element={<Navigate to="/homeres"/>}/> 
          <Route exact path="/homeres" element={<Homeres/>}/> 
          <Route path="/bar" element={<Bar/>}/> 
          <Route path="/restaurant" element={<Restaurants/>}/> 
        </Routes>
      </Router>
    </div>
  )
}

export default AppRes;