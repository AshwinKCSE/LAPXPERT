import React from 'react';
import { useLocation ,useNavigate } from 'react-router-dom';

const ShowSingleLaptop = () => {
  const location = useLocation();
  const laptop = location.state?.laptop;
  const navigate = useNavigate();

  function handleDetails(user) {
    console.log(user);
    navigate(`/owner/owner-shop-details/${user}`,{ replace: true })
    
    
  } 

  if (!laptop) {
    return <div className='no-found'>No laptop data available</div>;
  }

  return (
    <div className="lap-card">
      <h2>{laptop.name}</h2>
      <button onClick={()=>handleDetails(laptop.user)}>owner details</button>
      <br></br>
      <img src={laptop.image_url} alt={laptop.name} />
      <p>Description: {laptop.description}</p>
      <p>OS: {laptop.os}</p>
      <p>Processor: {laptop.Processor}</p>
      <p>RAM: {laptop.ram} GB</p>
      <p>Storage: {laptop.storage}</p>
      <p>Display Size: {laptop.displaysize} inches</p>
      <p>Display Resolution: {laptop.displayres}</p>
      <p>Battery Life: {laptop.battery} hours</p>
      <p>Weight: {laptop.weight} kg</p>
      <p>Rating: {laptop.Rating}</p>
      <a href={laptop.url} target="_blank" rel="noopener noreferrer">
        More Info
      </a>
    </div>
  );
};

export default ShowSingleLaptop;