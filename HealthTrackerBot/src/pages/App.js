import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'
const Home = () => {
  const navigate = useNavigate();

  // Define state variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError]= useState('');
  const handleButtonClick = () => {
    // You can access the email and password values here
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Create a JSON object to pass to the Blogs component
    const jsonData = {
      email: email,
      password: password,
      // Add other data you want to pass
    };
    if(email.length==0){
      setError("Invalid Email");
    }
    else if(password.length==0){
      setError("Invalid Password");
    }
    else{navigate('/Blogs', { state: jsonData });}
    // Use navigate to go to the '/Blogs' route with the JSON object as a parameter
  };

  return (
    <div>
      <div className="centerPortion">
        <div className="heading">
          <p className="talkTo">Talk To</p>
          <p className="talkTo">Medi Mind</p>
        </div>
        <div className="loginPortion">
          <p className="email">Email Address</p>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state on input change
          />
          <p className="email">Password</p>
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state on input change
            type="password"
          />
          <button onClick={handleButtonClick}>Sign In</button>
          <button onClick={() => navigate('/FirstTimeLogin')}>SignUp</button>
          <p className='error-message'>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
