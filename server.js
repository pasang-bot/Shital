// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Serve static files from the current folder (so CSS, JS, images can be accessed if you add them)
app.use(express.static(__dirname));

// Serve index.html on root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
