// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Set up a route for the root URL "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app instance
module.exports = app;
