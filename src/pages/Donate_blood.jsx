import React, { useState } from 'react';

export const Donate_blood = () => {
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log(formData);
  };

  return (
    <>
    <div style={{justifyContent:"center", textAlign:"center", background:"gray"}}>
      <h2>Register as a Donor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bloodGroup"
          placeholder="Blood Group"
          value={formData.bloodGroup}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="email"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <br /><br />
        <button type="Submit">Submit</button>
      </form>
    </div>
    <button style={{justifyContent:"center", textAlign:"center"}} type="submit"><a href="/"><strong>Go Back</strong></a></button>
    </>
  );
};
