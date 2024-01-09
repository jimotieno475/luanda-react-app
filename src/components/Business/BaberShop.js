import React from 'react'
import barber1 from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/barber1.jpg';
import barber2 from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/barber2.jpg';
import barber3 from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/barber4.jpg';
import barber4 from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/barber45.jpg';

function BaberShop() {
  return (
    <div><h1>BaberShop</h1>
        <p>Do you want to get a clasic haircut Worry no more if you are in Luanda kotieno because the Barber shop-s gat you with highly skilled Barbers</p>
        <p>Below are photos of different barber shops</p>
        <p>though not in a bulk quantity but you can find a good quantity from the hardwares</p>
      <p><img src={barber1} alt="barber" title="Kojuang" /></p>
      <p><img src={barber2} alt="barber" title="KaSteve" /></p>
      <p><img src={barber3} alt="barber" title="KaBob" /></p>
      <p><img src={barber4} alt="barber" title="" /></p>
    </div>
  )
}

export default BaberShop