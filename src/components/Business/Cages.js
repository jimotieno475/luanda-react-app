import React from 'react'
import cage1 from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/fish cage 1.jpg'
import cage2 from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/fish cage 2.jpg'

function Cages() {
  return (
    <div><h1>Cages</h1>
     <p>Cage business where they keep fish like </p>
      <ol> 
        <li class="cage">Tilapia</li>
        <li class="cage">Nailpach</li>

      </ol>
      <p>The fish are sold in different prices accoerding to their size and weight, 
        <p>they can be sold in large scale and in small quantity as per the interest of the costaomer</p>
        <p>for more information you can contact the Bech Chairman </p>
         </p>
      <p><img src={cage1} alt=" the cages" title="tilapia cages "/></p>
     <p><img src={cage2} alt=" the cages nearer" title="nailpach cages"/> </p>         
    </div>
  )
}

export default Cages ;