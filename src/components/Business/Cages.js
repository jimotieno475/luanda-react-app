import React from 'react';
import cage1 from '../images/fish cage 1.jpg'; 
import cage2 from '../images/fish cage 2.jpg';

function Cages() {
  return (
    <div>
      <h1>Cages</h1>
      <p>Cage business where they keep fish like </p>
      <ol> 
        <li className="cage">Tilapia</li>
        <li className="cage">Nailpach</li>
      </ol>
      <p>
        The fish are sold in different prices according to their size and weight.
        They can be sold in large scale and in small quantity as per the interest of the customer.
        For more information, you can contact the Beach Chairman.
      </p>
      <p><img src={cage1} alt="the cages" title="Tilapia cages"/></p>
      <p><img src={cage2} alt="the cages nearer" title="Nailpach cages"/></p>         
    </div>
  );
}

export default Cages;
