const express = require('express');
const path = require('path');

// Create an Express application
const app = express();
const frontendStaticPath = path.join(__dirname, '../../frontend'); // Use path.join to ensure correct path resolution
const pagesStaticPath = path.join(__dirname, '../../frontend/pages'); // Use path.join to ensure correct path resolution

// Define middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Define middleware to serve static files from the frontend static content folder
app.use(express.static(frontendStaticPath));

// Define routes
app.get('/', (req, res) => {
    console.log('/')
    res.sendFile(path.join(frontendStaticPath, 'index.js'));
});

app.get('/homescreen', (req, res) => {
    res.sendFile(path.join(pagesStaticPath, 'homescreen.html'));
});

app.get('/scene1', (req, res) => {
    res.sendFile(path.join(pagesStaticPath, 'scene1.html'));
});

// Define error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000; // Use the PORT environment variable if available, otherwise use port 3000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});