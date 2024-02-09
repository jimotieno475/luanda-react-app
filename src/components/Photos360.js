import React from 'react'
import  viewanglenosun from './images/360 view no sun.jpg';
import  viewanglesun from './images/360 view sun light.jpg';

export default function Photos360() {
  return (
    <div>Photos360
      <p><img src={viewanglenosun} alt="luanda view" title="Welcome home" /></p>
      <p><img src={viewanglesun} alt="luanda view" title="Welcome home" /></p>
    </div>
  )
}
