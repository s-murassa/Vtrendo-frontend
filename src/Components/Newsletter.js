import React, { useState } from 'react';
import axios from 'axios';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the data to the server
    console.log('Subscribing with email:', email);
    
    try {
      const response = await axios.post('http://localhost:8000/api/subscription',{email: email});
      console.log(response.data);
      }catch (error) {
        console.error('Error saving data:', error);
      };
    
    setEmail('');
  };

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
