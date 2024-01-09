import React from 'react'
import  chemea from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/chemist3.jpg';

function Chemist() {
  return (
    <div>
        <h1>Chemist</h1>
        <p>Do you feel allitle bit sick or a doctor has prescribed some common drugs to you dont hesitate to visit the chemist in 
        Luanda selling medicine with good prices and having skilled chemists</p>
        <p>If you feel the condition is beyond a Chemist then you can seek medical attention in the nearest public or private hospital which none is available in Luanda</p>
        <img src={chemea} alt="chemist" title="get some medicine" />
    </div>
  )
}

export default Chemist