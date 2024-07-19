import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LaptopShopCard from './LaptopShopCard';
import { useParams } from 'react-router-dom';

const OwnerShopDetails = () => {
  const [shopData, setShopData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const {user}  = useParams();

  console.log(user);

    console.log(user);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/shop/${user}`);
        setShopData(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user]);

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

export default OwnerShopDetails;
