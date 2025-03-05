const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/exchange-rate', async (req, res) => {
  try {
    const apiKey = process.env.EXCHANGE_RATE_API_KEY;
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
    );
    res.json({ success: true, rates: response.data.conversion_rates });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch exchange rates" });
  }
});

module.exports = router;