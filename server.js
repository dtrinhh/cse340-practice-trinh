// Import express using ESM syntax
import express from 'express';

// Import path using ESM syntax to construct an absolute file path (path module)
import path from 'path'

// Create an instance of an Express application
const app = express();


// Create an instances of variable from .env file (ONLY DO THIS FOR PRACTICE, DO NOT DO THIS IN REAL PROD.)
const name = process.env.NAME;

// Define a route handler for the root URL ('/')
app.get('/', (req, res) => {
    res.send(`Welcome, ${name}!`);
});

// TEST Define new route to server! ('/new-route')
app.get('/new-route', (req, res) => {
    res.send(`This is a new route test, ${name}!`);
});

//TEST Define new route to send image to server ('/funny-route')
app.get('/funny-route', (req, res) => {
    // Method 1
    // const imagePath = path.join('/Users', 'dustintrinh', 'Documents', 'CSE340 Web Backend Development - W26', 'cse340-practice-trinh', 'test-funny-route-image.jpeg')

    // Method 2 (Preferred as you just have to copy/paste the path without adding quotation marks)
    const imagePath = path.join('/Users/dustintrinh/Documents/CSE340 Web Backend Development - W26/cse340-practice-trinh/test-funny-route-image.jpeg')

    // Uses res.sendFile INSTEAD of res.send. Otherwise it'd just send the path as a text vs the image itself
    res.sendFile(imagePath);
});

// Define the port number the server will listen on
const PORT = 3000;
// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});

