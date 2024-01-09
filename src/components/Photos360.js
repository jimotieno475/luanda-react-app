import React from 'react'
import  viewanglenosun from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/360 view no sun.jpg';
import  viewanglesun from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/360 view sun light.jpg';

export default function Photos360() {
  return (
    <div>Photos360
      <p><img src={viewanglenosun} alt="luanda view" title="Welcome home" /></p>
      <p><img src={viewanglesun} alt="luanda view" title="Welcome home" /></p>
    </div>
  )
}
