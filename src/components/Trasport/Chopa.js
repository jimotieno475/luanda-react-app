import React from 'react'
import Watagwan from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/welcome.jpg'
import Watag from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/choper3.jpg'

function Chopa() {
  return (
    <div> <h1>Chopa</h1>
      <p>Speed boat commonly known as <b>chopa</b> in the region<br/></p>
      <img src={Watagwan} alt="the speed boat" title="chopa"/>
      <p><img src={Watag} alt="the speed boat" title="chopa"/></p>
        <p>The speed boat move from lunda to mbita in a duration of ten to twenty minutes it depends with the power propelling it and it coasts 200ksh<br/> it only carries passangers ,a number of abot ten passangers or less  it's also available for hire</p>
    </div>
  )
  
}

export default Chopa;