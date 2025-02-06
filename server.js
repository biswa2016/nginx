// Importing Express
const express = require('express');
const path = require('path');

// Initialize Express app
const app = express();

// Set the port
const port = 3000;

const APP_NAME = process.env.APP_NAME
const envName = process.env

// Serve static files like CSS and images
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the HTML file
app.get('/', (req, res) => {
    console.log('envName',envName);
    
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`request served by node js ${APP_NAME}`);
    
});

// Start the server
app.listen(port, () => {
    console.log(`${APP_NAME} is running at http://localhost:${port}`);
});
