import React from 'react'
import Coolbreez1 from '../images/Coolbreez1.jpg'
import Coolbreez2 from '../images/Coolbreez2.jpg'
import LakesideClub from '../images/club.jpg'
import Rajabu from '../images/bar3.jpg'
import Isaya from '../images/bar6.jpg'

function Bar() {
  return (
    <div><h1>Bar</h1>
      <p>There are quite a number of bars in the centre you can choose one of your choice</p>
      <h2>CoolBreez 1</h2>
      <img src={Coolbreez1} alt="CoolBreez 1" title="CoolBreez Bar "/>
      <h2>CoolBreez 2</h2>
      <img src={Coolbreez2} alt=" CoolBreez 2" title="CoolBreez Bar "/>
      <h2>Lakeside Club</h2>
      <img src={LakesideClub} alt=" CoolBreez 2" title="Lakeside Club "/>
      <h2>Rajabu </h2>
      <img src={Rajabu} alt="rajabu" title="Rajabu bar"/>
      <h2>Gogo bar</h2>
      <img src={Isaya} alt="kaIsaya" title="KaIsaya bar"/>
    </div>
  )
}

export default Bar;