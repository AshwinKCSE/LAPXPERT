import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UserNavBar from './user/UserNavBar';
import ShowLaptops from './ShowLaptops';
import OwnerShopDetails from './owner/OwnerShopDetails';
import SearchLaptops from './user/SearchLaptops';
import ShowSmallInfo from './user/ShowSmallInfo';
import ShowSingleLaptop from './user/ShowSingleLaptop';
import SearchShops from './user/SearchShops';
import LaptopFilter from './user/LaptopFilter';
import UserAuth from './user/UserAuth';
import NavBar from './owner/NavBar';
import OwnerLogin from './owner/OwnerLogin';
import AddShop from './owner/AddShop';
import AddLaptop from './owner/AddLaptop';
import ShopInfo from './owner/ShopInfo';
import { useState } from 'react';
import LoginSelection from './LoginSelection';

const App = () => {
    const navigate = useNavigate();
  const [userType, setUserType] = useState('');

  const handleUserTypeSelection = (type) => {
    setUserType(type);
    localStorage.setItem('userType', type);
    navigate(`/${type}`);
    
  };

  return (
      <div>
        {userType === 'owner' ? <NavBar /> : <UserNavBar />}

        <Routes>
          {/* Owner routes */}
          <Route path="/" element={<LoginSelection onUserTypeSelection={handleUserTypeSelection} />} />
          <Route path="/owner" element={<OwnerLogin />} />
          <Route path="/owner/add-shop" element={<AddShop />} />
          <Route path="/owner/add-laptop" element={<AddLaptop />} />
          <Route path="/owner/show-laptops" element={<ShowLaptops />} />
          <Route path="/owner/shop-info" element={<ShopInfo />} />
          <Route path="/owner/owner-shop-details/:user" element={<OwnerShopDetails />} />
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}

          {/* User routes */}
          <Route path="/user" element={<UserAuth />} />
          <Route path="/user/laptops" element={<ShowSmallInfo />} />
          <Route path="/user/shop-details/:user" element={<OwnerShopDetails />} />
          <Route path="/user/search" element={<SearchLaptops />} />
          <Route path="user/laptop-data" element={<ShowSingleLaptop />} />
          <Route path="/user/search-shop" element={<SearchShops />} />
          <Route path="/user/filter-laptop" element={<LaptopFilter />} />
        </Routes>
      </div>
  );
};

export default App;
