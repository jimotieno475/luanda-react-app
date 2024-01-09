import React from 'react'
import jacket from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/lifejacket engine.jpg';

function Engine() {
  return (
    <div><h1>Engine</h1>

       <p>The boats are propelled by some sort of ingines </p>
       <p>It coasts 200 per passanger they are also available for hire</p>
       <p>It takes about thirty minutes to reach Mbita </p>
       <p><img src="https://lh3.googleusercontent.com/p/AF1QipNLfr8s6pwpjLSD4gPVLxak8Fnxxu3NTrMytnSv=s680-w680-h510" alt="The bus" title="Cool view" /></p>
       <h3>Life Jacket being destributed to passangers </h3>
       <p><img src={jacket} alt="Mbita ferry" title="Cool and clean" /></p>
    </div>
  )
}

export default Engine ;