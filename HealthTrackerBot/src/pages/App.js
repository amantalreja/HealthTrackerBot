import "./App.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Blogs'); // Navigate to the '/about' route
  };

  return <div>
    <div className="centerPortion">
      <div className="heading">
        <p className="talkTo">Talk To</p>
        <p className="talkTo">Claude</p>
      </div>
      <div className="loginPortion">
        <p className="email">Email Address</p>
        <input placeholder="Email "></input>
        <button onClick={handleButtonClick}>Continue with Email</button>
      </div>
    </div>
  </div>;
};

export default Home;