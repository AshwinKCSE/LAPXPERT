import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation ,useNavigate } from 'react-router-dom';

const ShopComponent = () => {
    const navigate = useNavigate();
  const [shops, setShops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [filteredShops, setFilteredShops] = useState([]);
  const [locations, setLocations] = useState([]);


  function handleDetails(user) {
    console.log(user);
    navigate(`/owner/owner-shop-details/${user}`,{ replace: true })
    
    
  } 

  useEffect(() => {
    // Fetch data from API
    axios.get('http://localhost:8000/shops')
      .then(response => {
        setShops(response.data);
        setFilteredShops(response.data);

        // Extract unique locations from shops
        const uniqueLocations = [...new Set(response.data.map(shop => shop.location))];
        setLocations(uniqueLocations);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Filter shops based on search term and selected location
  useEffect(() => {
    let filtered = shops.filter(shop => {
      return shop.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (selectedLocation !== '') {
      filtered = filtered.filter(shop => shop.location === selectedLocation);
    }

    setFilteredShops(filtered);
  }, [searchTerm, selectedLocation, shops]);

  return (
    <div>
      <div className='search-bar'>
      <input
        type="text"
        placeholder="Search shop..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
        <option value="">Filter by Location</option>
        {/* Dynamically generate location options */}
        {locations.map(location => (
          <option key={location} value={location}>{location}</option>
        ))}
      </select>
      <button>Search</button>
      </div>

      <div className="lapt-list">
        {filteredShops.map(shop => (
          <div key={shop.id} className="lapt-card"> {/* Ensure that each shop has a unique identifier as its key */}
            <h2>{shop.name}</h2>
            <p>{shop.description}</p>
            <p>Location: {shop.location}</p>
            <button onClick={()=>handleDetails(shop.id)}>more details</button>
            {/* Render other shop details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopComponent;
