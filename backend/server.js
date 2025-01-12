const express = require('express');
const cors = require('cors');
const cardsRoute = require('./routes/cards'); // Import the cards route
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON request bodies

// API Routes (Register API routes first)
app.use('/api/cards', cardsRoute); // Use the cards route

// Serve static files (for the frontend)
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Fallback route for React frontend (Make sure this is registered after API routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
