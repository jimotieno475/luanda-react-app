import React from 'react';
import barber1 from '../images/barber1.jpg';
import barber2 from '../images/barber2.jpg';
import barber3 from '../images/barber4.jpg';
import barber4 from '../images/barber45.jpg';

function BarberShop() {
  return (
    <div>
      <h1>BarberShop</h1>
      <p>Do you want to get a classic haircut? Worry no more if you are in Luanda Kotieno because the Barber shops got you covered with highly skilled Barbers.</p>
      <p>Below are photos of different barber shops.</p>
      <p>Though not in bulk quantity, you can find a good variety from the hardwares.</p>
      <p><img src={barber1} alt="barber" title="Kojuang" /></p>
      <p><img src={barber2} alt="barber" title="KaSteve" /></p>
      <p><img src={barber3} alt="barber" title="KaBob" /></p>
      <p><img src={barber4} alt="barber" title="" /></p>
    </div>
  );
}

export default BarberShop;
