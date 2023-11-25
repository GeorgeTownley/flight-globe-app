// server.js
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors"); // You might want to use CORS middleware
require("dotenv").config();

const app = express();

// Use CORS middleware to allow cross-origin requests if needed
app.use(cors());

const PORT = process.env.PORT || 3001;

// Proxy endpoint
app.get("/api/fetch-flight", (req, res) => {
  const flightNumber = req.query.flightNumber;
  const API_KEY = process.env.AVIATIONSTACK_API_KEY; // Your API key stored in an environment variable
  const apiUrl = `https://api.aviationstack.com/v1/flights?access_key=${API_KEY}&flight_iata=${flightNumber}`;

  fetch(apiUrl)
    .then((apiRes) => apiRes.json())
    .then((apiData) => res.send(apiData))
    .catch((error) => res.status(500).send({ error: error.message }));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
