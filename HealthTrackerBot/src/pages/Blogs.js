// Blogs.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ChatPage from './ChatBotFiles/ChatPage';


const Blogs = () => {
  const[error,setError]=useState('Waiting for Response');
  const [element, setElement] = useState('');
  const fetchData = (payloadLoad) => {

    fetch("https://hophacksapi-uj2o6ggqiq-uk.a.run.app/load_info", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payloadLoad)
    })
      .then(response => {
        // Check if the response status is OK (200)
        if (response.ok) {
          setElement(<div className="chatPage"><ChatPage email={jsonData.email} /></div>);
          setError('');
          return response.json(); // Parse the JSON response
        } else {
          setError("Account doesnt exist");

          throw new Error(`Request failed with status: ${response.status}`);
        }
      })
      .then(data => {
        // Handle the JSON data
        console.log(data);
      })
      .catch(error => {
        console.log("error");
        // Handle any errors that occurred during the fetch
        console.error(error);
      });
  }
  const location = useLocation();
  
  var jsonData = location.state;
  if (jsonData == null) {
    jsonData = { "email": "", "password": "" }
  }
  useEffect(() => {
    console.log("hook triggered");
    if (jsonData) {
      // Use the jsonData as needed in your Blogs component
      console.log('JSON Data:', JSON.stringify(jsonData));
      fetchData((jsonData));
    } else {
      console.log('No JSON Data provided.');
    }
  }, [jsonData]);

  return (
    <div>
      {/* Your Blogs component content */}
      {element}
      <p className='blogsPageText'>{jsonData.email.length == 0 ? 'Email Not Found' : error}</p>
    </div>
  );
};

export default Blogs;
