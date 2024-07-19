// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import UserNavBar from './UserNavBar';
import ShowLaptops from '../ShowLaptops';
import OwnerShopDetails from '../owner/OwnerShopDetails';
import SearchLaptops from './SearchLaptops';
import ShowSmallInfo from './ShowSmallInfo';
import ShowSingleLaptop from './ShowSingleLaptop';
import SearchShops from './SearchShops';
import LaptopFilter from './LaptopFilter';
import UserAuth from './UserAuth';
const UserApp = () => {
  return (
    <Router>
      <div>
        <UserNavBar />
        <Routes>
        {/* <Route exact path="/" element={<UserAuth/>} />
          <Route exact path="/laptops" element={<ShowSmallInfo/>} />
          <Route path="/owner-shop-details/:user" element={<OwnerShopDetails />} />
          <Route path="/search" element={<SearchLaptops/>} />
          <Route path="/laptop-data" element={<ShowSingleLaptop/>} />
          <Route path="/search-shop" element={<SearchShops/>} />
          <Route path="/filter-laptop" element={<LaptopFilter/>} /> */}
        </Routes> 
      </div>
    </Router>
  );
};



export default UserApp;
