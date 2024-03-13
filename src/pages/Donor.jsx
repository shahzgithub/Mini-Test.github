import React, { useState } from 'react';
import { Home } from './Home';

export const Donor = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    bloodType: '',
    email: '',
    phone: '',
    address: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions here, such as sending the data to a server
    console.log(formData);
    // Reset form data after submission
    setFormData({
      name: '',
      bloodType: '',
      email: '',
      phone: '',
      address: ''
    });
  };

  return (
    <>
    <div style={{justifyContent:"center",textAlign:"center", background:"lightgreen"}}>
      <h2><strong>Donor Registration</strong></h2>
      <form onSubmit={handleSubmit}>
      <div>
        <br /><br />
    <label for="blood-type"><strong>Blood Type:</strong></label>
    <input type="text" id="blood-type" name="blood-type"/>
  </div>
  <div>
    <label for="location"><strong>Location:</strong></label>
    <input type="text" id="location" name="location" />
  </div>
      <div>
    <label for="message"><strong>Message:</strong></label>
    <textarea id="message" name="message" rows="4" required></textarea>
  </div>
        <div>
          <label><strong>Name:</strong></label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label><strong>Blood Type:</strong></label>
          <input type="text" name="bloodType" value={formData.bloodType} onChange={handleInputChange} required />
        </div>
        <div>
          <label><strong>Email:</strong></label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label><strong>Phone:</strong></label>
          <input type="email" name="phone" value={formData.phone} onChange={handleInputChange} required />
        </div>
        <div>
          <label><strong>Address:</strong></label>
          <textarea name="address" value={formData.address} onChange={handleInputChange} required />
        </div>
        <button type="submit"><strong>Register</strong></button>
      </form>
    </div>
    <br />
        <button style={{justifyContent:"center", textAlign:"center"}} type="submit"><a href="/"><strong>Go Back</strong></a></button>
    </>
  );
};