// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import NavBar from './NavBar';
import OwnerLogin from './OwnerLogin';
import AddShop from './AddShop';
import AddLaptop from './AddLaptop';
import ShowLaptops from '../ShowLaptops';
import ShopInfo from './ShopInfo';
import OwnerShopDetails from './OwnerShopDetails';

const OwnerApp = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          {/* <Route exact path="/" element={<OwnerLogin/>} />
          <Route path="/add-shop" element={<AddShop/>} />
          <Route path="/add-laptop" element={<AddLaptop/>} />
          <Route path="/show-laptops" element={<ShowLaptops/>} />
          <Route path="/shop-info" element={<ShopInfo/>} />
          <Route path="/owner-shop-details/:user" element={<OwnerShopDetails />} /> */}
        </Routes>
      </div>
    </Router>
  );
};



export default OwnerApp;
