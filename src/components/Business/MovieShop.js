import React from 'react'
import movie1 from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/movie1.jpg';
import movie2 from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/mo1vie2.jpg';
import movie3 from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/mo2vie2.jpg';

function MovieShop() {
  return (
    <div><h1>MovieShop</h1>
    <p>Are you bored do you want to watch a movie or do you want to watch a Football match 
      MovieShops localy known as Movie Halls got you covered</p>
      <p> There are a few but large in size Halls for watching Movies and Ball games in Luanda Kotieno</p>
      <p><img src={movie1} alt="movieshop" title="Ka Ougo" /></p>
      <p><img src={movie2} alt="movieshop" title="Ka Ougo" /></p>
      <p><img src={movie3} alt="movieshop" title="Ka Ougo" /></p>
    </div>
  )
}

export default MovieShop;