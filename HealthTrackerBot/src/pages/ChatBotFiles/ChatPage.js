// ChatPage.js
import React, { useState, useEffect } from 'react';
import './ChatPage.css';
import MessageInput from './MessageInput';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  // Function to add a new message to the state
  const addMessage = (newMessage, sender) => {
    const updatedMessages = [...messages, { text: newMessage, sender },];

    setMessages(updatedMessages);

    // Simulate a bot response after user message
    if (sender === 'user') {
      setTimeout(() => {
        addMessage('This is a bot response.', 'bot');
      }, 1000); // Simulate a delay before the bot responds
    }
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
