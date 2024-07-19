import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './AddLaptop.css'; // Import the CSS file

const AddLaptop = () => {
  const [formData, setFormData] = useState({
    name: '',
    user: '',
    budget: 0,
    os: '',
    primary_use: '',
    description: '',
    image_url: '',
    battery: 0,
    ram: 0,
    storage: '',
    displaysize: 0,
    displayres: '',
    weight: 0,
    Rating: 0,
    Processor: '',
    url: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // set user from local storage
  useEffect(() => {
    const user = localStorage.getItem('id');
    setFormData({ ...formData, user });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post('http://127.0.0.1:8000/shop/add_laptop', formData);
      console.log('Laptop added successfully:', response);
      alert(response.data.message);
    } catch (error) {
      console.error('Error adding laptop:', error);
    }
  };

  return (
    <div className='owner-laptop-background'>
    <div className="add-laptop-container">
      <h2>Add Laptop</h2>
      <form onSubmit={handleSubmit} className="add-laptop-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        {/* <div className="form-group">
          <label>User:</label>
          <input type="text" name="user" value={formData.user} onChange={handleChange} />
        </div> */}
        <div className="form-group">
          <label>Budget:</label>
          <input type="number" name="budget" value={formData.budget} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Operating System:</label>
          <input type="text" name="os" value={formData.os} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Primary Use:</label>
          <input type="text" name="primary_use" value={formData.primary_use} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Battery:</label>
          <input type="number" name="battery" value={formData.battery} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>RAM:</label>
          <input type="number" name="ram" value={formData.ram} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Storage:</label>
          <input type="text" name="storage" value={formData.storage} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Display Size:</label>
          <input type="number" name="displaysize" value={formData.displaysize} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Display Resolution:</label>
          <input type="text" name="displayres" value={formData.displayres} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Weight:</label>
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Rating:</label>
          <input type="number" name="Rating" value={formData.Rating} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Processor:</label>
          <input type="text" name="Processor" value={formData.Processor} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>URL:</label>
          <input type="text" name="url" value={formData.url} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default AddLaptop;