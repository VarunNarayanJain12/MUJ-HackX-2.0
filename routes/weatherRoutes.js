const express = require('express');
const router = express.Router();
const { getWeeklyWeather } = require('../services/weatherService');
const { getCoordinates } = require('../services/geocodingService');

// Route to fetch weekly weather data
router.get('/', async (req, res) => {
    const { location } = req.query;

    if (!location) {
        return res.status(400).json({ error: 'Location is required' });
    }

    try {
        const coords = await getCoordinates(location);
        const weatherData = await getWeeklyWeather(coords.lat, coords.lon);
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

module.exports = router;
