// Blogs.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ChatPage from './ChatBotFiles/ChatPage';
function fetchData(payloadLoad) {
  
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
            return response.json(); // Parse the JSON response
        } else {
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

const Blogs = () => {
  const location = useLocation();
  const jsonData = location.state;
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
      <ChatPage email={jsonData.email} />
    </div>
  );
};

export default Blogs;
