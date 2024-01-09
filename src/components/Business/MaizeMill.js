import React from 'react'
 import mill1 from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/mill1.jpg';
 import mill2 from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/mill2.jpg';
 import mill3 from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/mill3.jpg';

function MaizeMill() {
  return (
    <div>
        <h1>MaizeMill</h1>
        <p>If you want to grind your  maize into floor and make some concake (ugali) or poridge (uji) you can use any maize mill nearer</p>
        <p><img src={mill1} alt="mill" title="" /></p>
        <p><img src={mill2} alt="mill" title="" /></p>
        <p><img src={mill3} alt="mill" title="" /></p>
    </div>
  )
}

export default MaizeMill