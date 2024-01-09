import React from 'react';
import ferry1Image from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/ferry1.jpg';
import ferry2Image from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/ferry2.jpg';
import ferryImage from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/ferry.jpg';

function Ferry() {
  return (
    <div>
      <h1>Ferry</h1>
      <div>
        <p><img src={ferry1Image} alt="Ferry at Luanda" title="Slowest and safest" /></p>
        <p><img src={ferry2Image} alt="Ferry" title="Biggest vessel available" /></p>
        <p><img src={ferryImage} alt="Mbita ferry" title="Cool and clean" /></p>
      </div>
      <p>
        Ferry is used to move from Luanda Kotieno to Mbita.</p>
        <p>It costs 150ksh per passenger and at least 900ksh for a car.</p>
        <p>It takes a duration of 45 minutes to dock at Mbita.
      </p>  
      <p>It also carries buses and lorries.</p>         
    </div>
  );
}

export default Ferry;
