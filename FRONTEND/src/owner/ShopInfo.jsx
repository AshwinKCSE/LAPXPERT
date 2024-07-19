import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LaptopShopCard from './LaptopShopCard';

const ShopInfo = () => {
  const [shopData, setShopData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = localStorage.getItem('id');
  console.log(userId); // Assuming you have the user ID stored in localStorage

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/shop/${userId}`);
        setShopData(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {shopData.map((shop, index) => (
        <LaptopShopCard key={index} shopData={shop} />
      ))}
    </div>
  );
};

export default ShopInfo;