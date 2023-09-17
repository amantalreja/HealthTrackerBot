import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const TypeformEmbed = () => {
  const [data, setData] = useState(null); // State to store the fetched data
  const navigate = useNavigate();
  const fetchData = () => {
    fetch(`https://hophacksapi-uj2o6ggqiq-uk.a.run.app/store_info`, {
      method: 'GET',
    })
      .then(response => {
        // Check if the response status is OK (200)
        if (response.ok) {
          navigate("/");
          return response.json(); // Parse the JSON response
        } else {
          // Handle specific errors
          if (response.status === 401) {
            // Handle 401 Unauthorized error here
            setData("Email Already Exists");
            // Perform some action for 401, e.g., redirect to login
          } else {
            throw new Error(`Request failed with status: ${response.status}`);
          }
        }
      })
      .then(data => {
        // Update the state with the fetched data
        
      })
      .catch(error => {
        // Handle any other errors that occurred during the fetch
        console.error(error);
      });
  };


  return (
    <div>
      <h1>My React App</h1>
      <iframe
        title="Typeform Embed"
        src="https://yxylieyb1iu.typeform.com/to/FrJrUqXu"
        width="100%"
        height="500px"
      />
      <p className='error-message center'>{data}</p>
      <button className="submitButton" onClick={()=>{fetchData()}}>
        Submit Form
      </button>
    </div>
  );
};

export default TypeformEmbed;
