const axios = require('axios');

const API_KEY = 'bbdf6aad1e4148ad62d84bb9ae4a857d'; // Replace with your OpenWeatherMap API key
const GEOCODE_API_URL = 'http://api.openweathermap.org/geo/1.0/direct';

async function getCoordinates(location) {
    try {
        const response = await axios.get(GEOCODE_API_URL, {
            params: {
                q: location,
                limit: 1,
                appid: API_KEY
            }
        });

        if (response.data.length === 0) {
            throw new Error('Location not found');
        }

        const { lat, lon } = response.data[0];
        return { lat, lon };
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        throw new Error('Unable to fetch coordinates');
    }
}

module.exports = { getCoordinates };
