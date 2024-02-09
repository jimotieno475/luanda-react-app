
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import Home from "./Home";
import Navbar from "./Navbar";
import Homebiss from "./Business/Homebiss";
import BodaBoda from "./Business/BodaBoda";
import Cages from "./Business/Cages";
import Cyber from "./Business/Cyber";
import FishBanda from "./Business/FishBanda";
import FuelStations from "./Business/FuelStations";
import Hardwares from "./Business/Hardwares";
import MovieShop from "./Business/MovieShop";
import Mpesaservices from "./Business/Mpesaservices";
import Shops from "./Business/Shops";
import Bar from "./RestaurantsBars/Bar";
import Restaurants from "./RestaurantsBars/Restaurants";
import Homeres from "./RestaurantsBars/Homeres";
import Ferry from "./Trasport/Ferry";
import Chopa from "./Trasport/Chopa";
import Engine from "./Trasport/Engine";
import Hometrans from "./Trasport/Hometrans";
import WaterBus from "./Trasport/WaterBus";
import Navbarbiss from "./Business/Bussines";
import Navbartrans from "./Trasport/Transport";
import NarbarRes from "./RestaurantsBars/ResBar";
import Footer from "./Footer";
import BaberShop from "./Business/BaberShop";
import Chemist from "./Business/Chemist";
import MaizeMill from "./Business/MaizeMill";
import Lodge from "./Business/Lodge";
import PhoneRepairShop from "./Business/PhoneRepairShop";
import TailorShop from "./Business/TailorShop";
import Photos360 from "./Photos360";



function App() {

  return (
    <div className="App">

     <Router>
     <Navbar/>
      <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>}/> 
      <Route exact path="/homebiss" element={<Homebiss/>}/> 
      <Route path="/business" element={<Navbarbiss/>}/> 
      <Route path="/transport" element={<Navbartrans/>}/> 
      <Route path="/restaurantBars" element={<NarbarRes/>}/> 
          <Route path="/boda" element={<BodaBoda/>}/> 
          <Route path="/cages" element={<Cages/>}/>
          <Route path="/cyber" element={<Cyber/>}/> 
          <Route path="/fishbanda" element={<FishBanda/>}/>
          <Route path="/fuel" element={<FuelStations/>}/>  
          <Route path="/hardware" element={<Hardwares/>}/>  
          <Route path="/movieShop" element={<MovieShop/>}/> 
          <Route path="/mpesaShop" element={<Mpesaservices/>}/>
          <Route path="/shop" element={<Shops/>}/>
          <Route exact path="/homeres" element={<Homeres/>}/> 
          <Route path="/bar" element={<Bar/>}/> 
          <Route path="/restaurant" element={<Restaurants/>}/> 
          <Route path="/hometrans" element={<Hometrans/>}/> 
          <Route path="/ferry" element={<Ferry/>}/>
          <Route exact path="/chopa" element={<Chopa/>}/>
          <Route exact path="/engine" element={<Engine/>}/>
          <Route path="/waterbus" element={<WaterBus/>}/>
          <Route path="/kinyozi" element={<BaberShop/>}/>
          <Route path="/chemist" element={<Chemist/>}/>
          <Route path="/lodge" element={<Lodge/>}/>
          <Route path="/maizemill" element={<MaizeMill/>}/>
          <Route path="/tailorshop" element={<TailorShop/>}/>
          <Route path="/phonerepair" element={<PhoneRepairShop/>}/>
          <Route path="/photos360z" element={<Photos360/>}/>
      </Routes>
      <Footer/>
     </Router>

    </div>
  );
}

export default App;
