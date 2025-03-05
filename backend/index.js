require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const cors = require('cors');
const pool = require('./db');
const axios = require('axios');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Load routes
const jobsRouter = require('./routes/jobs');
app.use('/jobs', jobsRouter);

// Test route
app.get('/', (req, res) => {
  res.send('Job Board Backend is running!');
});

// External API route (exchange rates)
app.get('/api/exchange-rate', async (req, res) => {
  try {
    const apiKey = process.env.EXCHANGE_RATE_API_KEY;
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
    );
    res.json({
      success: true,
      rates: response.data.conversion_rates
    });
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch exchange rates"
    });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
