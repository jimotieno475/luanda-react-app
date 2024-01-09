import React from 'react'
import res from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/res.jpg'
import Rajabu from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/bar3.jpg'
import Upper from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/upperLakeview.jpg'

function Restaurants() {
  return (
    <div><h1>Restaurants</h1>
      <p>There are a few Restaurants in Luanda Kotieno but they offer their best you will enjoy the food</p>
      <h2>WangDhiang</h2>
      <img src={res} alt="res" title=""/>
      <h2>Rajabu </h2>
      <img src={Rajabu} alt="rajabu" title="Rajabu bar & Restaurant"/>
      <p>Mbuzi choma Available</p>
      <h2>Upper Lakeview Hotel</h2>
      <img src={Upper} alt="rajabu" title="Rajabu bar & Restaurant"/>
    </div>
  )
}

export default Restaurants;