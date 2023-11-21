const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to serve static files (e.g., HTML, CSS)
app.use(express.static('public'));

// Define a route
app.get('/api/greeting', (req, res) => {
  res.json({ message: 'Hello, from the backend!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
