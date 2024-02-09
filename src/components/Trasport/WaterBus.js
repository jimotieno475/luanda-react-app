import React from 'react';
import waterBusImage2 from '../images/water bus 2.jpg';
import waterBusImage3 from '../images/water bus 3.jpg';
import priceBoard from '../images/waterbusPrice.jpg';
import waterBusImage1 from '../images/water bus.jpg';
import waterBusImage4 from '../images/view.jpg';
import waterBusin from '../images/waterin.jpg';
import waterBusout from '../images/waterout.jpg';

function WaterBus() {
  return (
    <div>
      <h1>WaterBus</h1>
      <div>
       <p><img src={waterBusImage2} alt="Water Bus" title="Water Bus" /></p> 
        <p><img src={waterBusImage3} alt="The bus" title="The yellow vessel" /></p>
        <p><img src={waterBusImage1} alt="The bus" title="Cool" /></p>
        <p><img src={waterBusImage4} alt="The bus" title="Cool view" /></p>
        <p><img src={waterBusin} alt="The bus" title="Cool view" /></p>
       <h2>Waterbus Luanda Kotieno-Mbita Schedule</h2> 
        <p><img src="https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/271504781_4492883734142115_3231134009084407362_n.png?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeECIZ_hLqNpVQwEljO7RnttczBMuYdeAGNzMEy5h14AYzEg1oC9bolEmVIDMMcVllGqNrwl5up8I-DVlHuIPQid&_nc_ohc=yXc0AtDxOT8AX8DXfhc&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfDOhLsvH_lrfriE4G5JhdgKY-PM-6NAwxwWAzqOu-ekMw&oe=658EF996" alt="The bus" title="Cool view" /></p>
        <p><img src={waterBusout} alt="The bus" title="Cool view" /></p>
        <h2>WaterBus Price Board</h2>
        <p><p><img src={priceBoard} alt="The bus" title="The yellow vessel" /></p></p>
      </div>
      <p>
        Similar to the ferry, the water bus moves from Luanda to Mbita and back. The difference is that it carries only passengers and a few motorcycles.</p>
        <p>It costs 150ksh per person.</p>
        <p>It takes a duration of 30 minutes to dock at Mbita.
      </p>
    </div>
  );
}

export default WaterBus;
