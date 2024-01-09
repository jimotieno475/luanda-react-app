import React from 'react'
import { Link } from 'react-router-dom';
import vegetationImage from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/vegetation.jpg';
import victoria from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/lake.jpg';
import victoriaview from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/lake view.jpg';
import victoriaview2 from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/lake view2.jpg';

 function Home() {
  return (
    <div>
    <div id='home'>Home Luanda Kotieno</div>
    <img src={vegetationImage} alt="luanda view" title="Welcome home" />
       <p>Luanda Kotieno is a centre located in south uyoma ward in Siaya county<p>Luanda kotieno was named after the great OTIENO of siamba B village </p>
        <p>There are severall aconomic activities practiced as the main is <strong>fishing</strong>  as people of luanda kotieno live along the <b>lake victoria kenya</b></p>
        </p>
        <p>If you want to view the 360 view of the centre click  <li><Link to="/photos360z">Photos</Link></li></p>
        <h2>Lake Victoria in Luanda Kotieno</h2>
        <img src={victoria} alt="luanda view" title="Welcome home" />
        <h2>Lake Victoria View Towards Mbita</h2>
        <img src={victoriaview} alt="luanda view" title="Welcome home" />
        <h2>Lake Victoria View</h2>
        <img src={victoriaview2} alt="luanda view" title="Welcome home" />
        <p><img src="https://lh3.googleusercontent.com/p/AF1QipPZ6Lif0VU21oA9lRAahEfmHPzRfkneMkOnRDpq=s680-w680-h510" alt="Luanda view " title="Cool view" /></p>
    </div>
  )
}


export default Home;