const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files from the directory
app.use(express.static(path.join(__dirname)));

// Handle the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // Ensure 'index.html' is your main file
});

// Example route to serve data dynamically
app.get("/data", (req, res) => {
  const sampleData = {
    message: "Welcome to the LETSHOP.CO server!",
    timestamp: new Date(),
  };
  res.json(sampleData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
