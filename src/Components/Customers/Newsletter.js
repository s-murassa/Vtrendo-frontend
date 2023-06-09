import React, { useState } from 'react';
import axios from 'axios';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the data to the server
    console.log('Subscribing with email:', email);
    
    // Perform validation
    if (!email) {
      setError('Email is required');
    } else { 
      setError('');
      // Sending the request to the backend
      try {
        const response = await axios.post('http://localhost:8000/api/subscription',{email: email});
        console.log(response.data);
        }catch (error) {
          console.error('Error saving data:', error);
        };
    }  
    
    setEmail('');
  };

  

  return (
    <div>
      <form onSubmit={handleSubmit} className='Footer_newsletter Form'>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          className='form_input'
          required
        />
        <button type="submit" className='form_submit button button--primary'>Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
