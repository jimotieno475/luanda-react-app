import React from 'react'
import fuel1 from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/fuel1.jpg';
import fuel2 from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/fuel2.jpg';


function FuelStations() {
  return (
    <div><h1>FuelStations</h1>
      <p>
        This is one of the best bussinesses around the lake region Since Engines must use Fuel</p>
        <p>There are currently two Fuel Stations and one Fuel shop </p>
       <p> The Fuel Stations Are located Just as you enter the small Center  on both sides of the road you can use one of them in case you run out of fuel in Luanda Kotieno
      </p>
      <p><img src={fuel1} alt="fuel" title="fuel station" /></p>
      <p><img src={fuel2} alt="fuel" title="Eddy's Super petrol" /></p>
    </div>
  )
}

export default FuelStations;