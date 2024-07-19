import React from 'react';
import './LaptopShopCard.css';
// import localStorage from 'local-storage';

const LaptopShopCard = ({ shopData }) => {
  const hasShopData = shopData && Object.values(shopData).some((value) => value !== '');
  const hasLaptopData = shopData?.laptops?.some((laptop) => Object.values(laptop).some((value) => value !== ''));
  const username = localStorage.getItem('username') || 'Unknown';
  return (
    <div className="shop-card">
      {hasShopData ? (
        <div className="lapt-card">
          <h1> user {username}</h1>
          <h2>{shopData.name}</h2>
          <p>Admin: {shopData.admin ? 'Yes' : 'No'}</p>
          <p>{shopData.description}</p>
          <p>Location: {shopData.location}</p>
          <p>Rating: {shopData.rating}</p>
          <p>Mobile No: {shopData.mobile_no}</p>
          <img src={shopData.photo_url} alt="Shop" className="shop-photo" />
        </div>
      ) : (
        <div className="no-found">No shop data available</div>
      )}

      <div className="lapt-lis">
        <h3>Laptops:</h3>
        {hasLaptopData ? (
          <div className="lapts-list">
            {shopData.laptops.map((laptop, index) => (
              <div key={index} className="lapts-card">
                <h4>{laptop.name}</h4>
                <h4>{laptop.user}</h4>
                <p>Budget: {laptop.budget}</p>
                <p>OS: {laptop.os}</p>
                <p>Primary Use: {laptop.primary_use}</p>
                <p>Description: {laptop.description}</p>
                <img src={laptop.image_url} alt="Laptop" className="laptop-photo" />
                <p>Battery: {laptop.battery} hours</p>
                <p>RAM: {laptop.ram} GB</p>
                <p>Storage: {laptop.storage}</p>
                <p>Display Size: {laptop.displaysize} inches</p>
                <p>Display Resolution: {laptop.displayres}</p>
                <p>Weight: {laptop.weight} kg</p>
                <p>Rating: {laptop.Rating}</p>
                <p>Processor: {laptop.Processor}</p>
                <a href={laptop.url} target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-found">No laptop data available</div>
        )}
      </div>
    </div>
  );
};

export default LaptopShopCard;