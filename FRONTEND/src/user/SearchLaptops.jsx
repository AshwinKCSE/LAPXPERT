import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchLaptops = () => {
  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/lap/laptops');
        setLaptops(response.data.laptops);
        setFilteredLaptops(response.data.laptops);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const navigateBigInfo = (laptop) => {
    console.log("sdhbsdjbc");
    // navigate(1);
    navigate('/user/laptop-data', { state: { laptop }, replace: true});
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = laptops.filter(
      (laptop) =>
        laptop.name.toLowerCase().includes(term) ||
        laptop.description.toLowerCase().includes(term)
    );
    setFilteredLaptops(filtered);
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search laptops..."
          value={searchTerm}
          onChange={handleSearch}
        />
        
      <button>Search</button>
      </div>
      <div className="lapt-list">
        {filteredLaptops.map((laptop) => (
          <div className="lapt-card" key={laptop.id}>
            <img src={laptop.image_url} alt={laptop.name} />
            <h2>{laptop.name}</h2>
            <p>Description: {laptop.description}</p>
            <p>Rating: {laptop.Rating}</p>
            <button onClick={() => navigateBigInfo(laptop)}>more info</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchLaptops;