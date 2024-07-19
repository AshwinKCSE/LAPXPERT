import React, { useState,useEffect} from 'react';
import NativeSlider from './NativeSlider'; 
// Import the slider component
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Main.css';


const LaptopFilter = () => {
    const navigate = useNavigate();
  const [filters, setFilters] = useState({
    // Default values for each numerical filter field
    name: '',
    os: '',
    primary_use: '',
    battery: 0,
    budget: 0,
    ram: 0,
    displaysize: 0,
    weight: 0,
    Rating: 0,
    Processor: '',
    displayres:'',
    storage: '',
  });


  const [laptops, setLaptops] = useState([]);
  const [datachange,setDatachange] = useState(false);
  function handleDetails(user) {
    console.log(user);
    navigate(`/owner/owner-shop-details/${user}`)
    
    
  } 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Convert ram and displaysize values to integers
    const parsedValue = name === 'ram' || name === 'displaysize' ? parseInt(value, 10) : value;
    setFilters({ ...filters, [name]: parsedValue });
  };

  const handleSliderChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = check();
        const response = await axios.get('http://localhost:8000/lap/info?' + query);
        console.log(response.data);
        setLaptops(response.data.message);
        console.log("laptops",laptops);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [datachange]);

  useEffect(() => {
    console.log("laptops", laptops);
  }, [laptops]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDatachange(!datachange);
    console.log(filters);
    
  };
    // Here you can perform additional actions, such as sending the filters to the server for filtering data

  function check(){
    let query = "";
    if(filters.name){
      query += `name=${filters.name}&`;
    }
    if(filters.os){
        query += `os=${filters.os}&`;
        }
    if(filters.primary_use){
        query += `primary_use=${filters.primary_use}&`;
        }
    if(filters.ram){
        query += `ram=${filters.ram}&`;
        }
    if(filters.storage){
        query += `storage=${filters.storage}&`;
        }
    if(filters.displayres){
        query += `displayres=${filters.displayres}&`;
        }
    if(filters.Processor){
        query += `Processor=${filters.Processor}&`;
        }
    if(filters.displaysize){
        query += `displaysize=${filters.displaysize}&`;
        }
    if(filters.battery){
        query += `battery=${filters.battery}&`;
        }
    if(filters.weight){
        query += `weight=${filters.weight}&`;
        }
    if(filters.Rating){
        query += `Rating=${filters.Rating}&`;
        }

    if(filters.Rating){
        query += `Rating=${filters.Rating}&`;
        }
        console.log(query);
            // Find the last index of '?'
            const lastIndex = query.lastIndexOf('?');
            // If '?' is found, replace it with the specified replacement
            if (lastIndex !== -1) {
              return query.slice(0, lastIndex) + replacement + query.slice(lastIndex + 1);
            }

        return query;
    
  }

  return (
    <>
    <div className='for-container'>
    <form onSubmit={handleSubmit} >
      <div className='for-filer'>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={filters.name} onChange={handleInputChange} />
      </div>
      <div>
        <label>OS:</label>
        <input type="text" name="os" value={filters.os} onChange={handleInputChange} />
      </div>
      <div>
        <label>Primary Use:</label>
        <input type="text" name="primary_use" value={filters.primary_use} onChange={handleInputChange} />
      </div>
      <div>
        <label>RAM:</label>
        <select name="ram" value={filters.ram} onChange={handleInputChange}>
        <option value={0}>None</option>
          <option value={4}>4 GB</option>
          <option value={8}>8 GB</option>
          <option value={16}>16 GB</option>
          <option value={32}>32 GB</option>
          <option value={64}>64 GB</option>
        </select>
      </div>


      <div>
        <label>Storage:</label>
        <select name="storage" value={filters.storage} onChange={handleInputChange}>
          <option value="">None</option>
          <option value="256 SSD">256 </option>
          <option value="512 SSD">512 SSD</option>
          <option value="1TB SSD">1TB SSD</option>
          <option value="2TB SSD">2TB SSD</option>
          <option value="512 HDD">512 HDD</option>
          <option value="1TB HDD">1TB HDD</option>
        </select>
      </div>
      
      <NativeSlider
        name="budget"
        value={filters.budget}
        min={250000}
        max={3000000}
        step={5000}
        onChange={handleSliderChange}
      />

      <div>
        <label>Disply Resolution:</label>
        <select name="displayres" value={filters.displayres} onChange={handleInputChange}>
        <option value="">None</option>
          <option value="HD">HD</option>
          <option value="FHD">FHD</option>
          <option value="QHD">QHD</option>
          <option value="4k">4K</option>
        </select>
      </div>

      <div>
        <label>Processor:</label>
        <select name="Processor" value={filters.Processor} onChange={handleInputChange}>
        <option value="">None</option>
          <option value="intel">Intel</option>
          <option value="amd">AMD</option>
          <option value="apple">Apple</option>
        </select>
      </div>
      <div>
        <label>Display Size:</label>
        <select name="displaysize" value={filters.displaysize} onChange={handleInputChange}>
        <option value={0}>None</option>
          <option value={13}>13 inches</option>
          <option value={14}>14 inches</option>
          <option value={15}>15 inches</option>
          <option value={16}>16 inches</option>
          <option value={17}>17 inches</option>
        </select>
      </div>
      <NativeSlider
        name="battery"
        value={filters.battery}
        min={0}
        max={20}
        step={1}
        onChange={handleSliderChange}
      />
      <NativeSlider
        name="weight"
        value={filters.weight}
        min={0}
        max={3}
        step={0.5}
        onChange={handleSliderChange}
      />
      <NativeSlider
        name="Rating"
        value={filters.Rating}
        min={0}
        max={5}
        step={0.5}
        onChange={handleSliderChange}
      />
      <button type="submit">Apply Filters</button>
    
      </div>
    </form>
    </div>

    <div className="lapt-list">
    {laptops.length > 0 ? (
      laptops.map(laptop => (
        <div className="lapt-card" key={laptop.id}>
          <img src={laptop.image_url} alt={laptop.name} />
          <h2>{laptop.name}</h2>
          <button onClick={()=>handleDetails(laptop.user)}>owner details</button>
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
      ))
        ) : (
            <p className='no-found'>No laptops available.</p>
          )}
    </div>
    </>
  );
};

export default LaptopFilter;
