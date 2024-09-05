const axios = require('axios');

const API_KEY = 'bbdf6aad1e4148ad62d84bb9ae4a857d'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/3.0/onecall'; // Updated API URL

async function getWeeklyWeather(lat, lon) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                lat: lat,
                lon: lon,
                exclude: 'current,minutely,hourly,alerts', // Assuming this parameter is still valid
                units: 'metric', // Or 'imperial' for Fahrenheit
                appid: API_KEY
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw new Error('Unable to fetch weather data');
    }
}

module.exports = { getWeeklyWeather };
