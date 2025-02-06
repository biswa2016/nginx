// Importing Express
const express = require('express');
const path = require('path');

// Initialize Express app
const app = express();

// Set the port
const port = 3000;

const replicaApp = process.env.APP_NAME

// Serve static files like CSS and images
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`request serveed by node js ${replicaApp}`);
    
});

// Start the server
app.listen(port, () => {
    console.log(`${replicaApp} is running at http://localhost:${port}`);
});
