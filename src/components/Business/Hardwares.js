 import React from 'react'
 import hardware1 from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/harware1.jpg';
 import hardware2 from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/harware2.jpg';

function Hardwares() {
   return (
     <div><h1>Hardwares</h1>
      <p>There are three Hardwares in Luanda Kotieno in case you are costructing a </p>
        <p>building in Luanda kotieno there are materials available in the hadwares</p> 
        <p>though not in a bulk quantity but you can find a good quantity from the hardwares</p>
      <p><img src={hardware1} alt="hardware" title="kaOkuta Hardware" /></p>
      <p><img src={hardware2} alt="hardware" title="Hardware" /></p>
     </div>
   )
 }
 
 export default Hardwares;