// IMPORTS
// Import express using ESM syntax
import express from 'express';

// Import path using ESM syntax to construct an absolute file path (path module)
import { fileURLToPath } from 'url';
import path from 'path'

// IMPORTANT VARIABLES
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const NODE_ENV = process.env.NODE_ENV || 'production';
// Define the port number the server will listen on
const PORT = process.env.PORT || 3000;

// SETUP EXPRESS SERVER
// Create an instance of an Express application
const app = express();

// MIDDLEWARE CONFIGURATION
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

//Set EJS as the templating engine
app.set('view engine', 'ejs');

// Tell Express where to find your templates
app.set('views', path.join(__dirname, 'src/views'))

// Create an instances of variable from .env file (ONLY DO THIS FOR PRACTICE, DO NOT DO THIS IN REAL PROD.) Since we deleted the name from .env later in the assignment, this name variable should be okay to delete. Keep until known.
const name = process.env.NAME;

// ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/home.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/about.html'));
});
app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/products.html'));
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});


