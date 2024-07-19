import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OwnerShopDetails from './owner/OwnerShopDetails';
import { useNavigate } from 'react-router-dom';
import './Style.css';

const ShowLaptops = () => {
  const [laptops, setLaptops] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/lap/laptops');
        setLaptops(response.data.laptops);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  function handleDetails(user) {
    console.log(user);
    navigate(`/owner/owner-shop-details/${user}`);
  }

  return (
    <div className='laptop-list-background'>
      <h2>.</h2>
      <div className="lap-list-container">
        <div className="lap-list">
          {laptops.map(laptop => (
            <div className="lap-card" key={laptop.id}>
              <img src={laptop.image_url} alt={laptop.name} />
              <h2>{laptop.name}</h2>
              <button onClick={() => handleDetails(laptop.user)}>owner details</button>
              <p>Description: {laptop.description}</p>
              <p>OS: {laptop.os}</p>
              <p>Processor: {laptop.Processor}</p>
              <p>RAM: {laptop.ram}GB</p>
              <p>Storage: {laptop.storage}</p>
              <p>Display Size: {laptop.displaysize} inches</p>
              <p>Display Resolution: {laptop.displayres}</p>
              <p>Battery Life: {laptop.battery} hours</p>
              <p>Weight: {laptop.weight} kg</p>
              <p>Rating: {laptop.Rating}</p>
              <a href={laptop.url} target="_blank" rel="noopener noreferrer">More Info</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowLaptops;
