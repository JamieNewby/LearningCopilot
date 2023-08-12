// Create web server

// Create web server
const express = require('express');
const app = express();

// Create a route handler
app.get('/', (req, res) => {
    res.send({ hi: 'there' });
}
);

// Listen to port 5000
app.listen(5000);

// Run the server
// node index.js
// Open browser and go to localhost:5000
// You should see the json object { hi: 'there' }

// Path: index.js