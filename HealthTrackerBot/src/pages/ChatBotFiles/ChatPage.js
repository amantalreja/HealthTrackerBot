// ChatPage.js
import React, { useState, useEffect } from 'react';
import './ChatPage.css';
import MessageInput from './MessageInput';
const ChatPage = ({ email }) => {
  const fetchResponse = (payloadLoad) => {
    fetch("https://hophacksapi-uj2o6ggqiq-uk.a.run.app/chat", {
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
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: data.response, sender: 'bot' },
        ]);
      })
      .catch(error => {
        console.log("error");
        // Handle any errors that occurred during the fetch
        console.error(error);
      });
  }
  const [messages, setMessages] = useState([]);
  // Function to add a new message to the state
  const addMessage = (newMessage, sender) => {
    const sampleJSON = { "query": newMessage, "email": email };
    console.log(sampleJSON);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: newMessage, sender },
    ]);
    fetchResponse(sampleJSON);
    // Simulate a bot response after user message
  };
  return (
    <div className="chat-page">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
        >
          {message.text}
        </div>
      ))}
      <MessageInput onSend={addMessage} />
    </div>
  );
};

export default ChatPage;
