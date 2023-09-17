const fetch = require('node-fetch'); // If you're using this in a Node.js environment, install node-fetch using npm or yarn

const API_KEY = 'tfp_MAb6uzYzxxbXh5iCNiaVLKtJ4QMyEC9WDqyrXKNinmK_dKYkAfd1VZbW'; // Replace with your Typeform API Bearer token
const FORM_ID = 'FrJrUqXu'; // Replace with the ID of your Typeform

const apiUrl = `https://api.typeform.com/forms/${FORM_ID}/responses?page_size=1&order_by=date`;

// Define the headers with the Bearer token
const headers = {
  'Authorization': `Bearer ${API_KEY}`,
  'Content-Type': 'application/json',
};

// Make the API request to fetch the last response
fetch(apiUrl, { method: 'GET', headers })
  .then(response => response.json())
  .then(data => {
    if (data.items && data.items.length > 0) {
      // Assuming the response is in JSON format, and the latest response is at index 0
      const lastResponse = data.items[0];
      console.log('Last Response:', lastResponse);
    } else {
      console.log('No responses found.');
    }
  })
  .catch(error => {
    console.error('Error fetching response:', error);
  });
