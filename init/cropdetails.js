const cropDetails = [
    {
        "crop_name": "Rice",
        "type": "Cereal",
        "soil_ph": "5.5 - 6.5",
        "irrigation_needs": "High",
        "weather_requirements": "Warm, humid",
        "optimum_temperature": "25 - 35°C",
        "optimal_rainfall": "1000 - 1500 mm"
    },
    {
        "crop_name": "Wheat",
        "type": "Cereal",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Cool, dry",
        "optimum_temperature": "10 - 20°C",
        "optimal_rainfall": "500 - 700 mm"
    },
    {
        "crop_name": "Maize",
        "type": "Cereal",
        "soil_ph": "5.8 - 7.0",
        "irrigation_needs": "Moderate to High",
        "weather_requirements": "Warm, moderate rainfall",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "600 - 800 mm"
    },
    {
        "crop_name": "Sugarcane",
        "type": "Cash crop",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "High",
        "weather_requirements": "Warm, humid",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "1500 - 2000 mm"
    },
    {
        "crop_name": "Cotton",
        "type": "Fiber",
        "soil_ph": "5.8 - 8.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, dry",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 800 mm"
    },
    {
        "crop_name": "Pulses",
        "type": "Legume",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Low to Moderate",
        "weather_requirements": "Cool, dry",
        "optimum_temperature": "15 - 25°C",
        "optimal_rainfall": "300 - 500 mm"
    },
    {
        "crop_name": "Groundnut",
        "type": "Oilseed",
        "soil_ph": "5.5 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, dry",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 800 mm"
    },
    {
        "crop_name": "Soybean",
        "type": "Oilseed",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, moderate rainfall",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "600 - 800 mm"
    },
    {
        "crop_name": "Chili",
        "type": "Vegetable",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, sunny",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 800 mm"
    },
    {
        "crop_name": "Tomato",
        "type": "Vegetable",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, sunny",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 800 mm"
    },
    {
        "crop_name": "Onion",
        "type": "Vegetable",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Cool, dry",
        "optimum_temperature": "10 - 25°C",
        "optimal_rainfall": "300 - 500 mm"
    },
    {
        "crop_name": "Garlic",
        "type": "Vegetable",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Low to Moderate",
        "weather_requirements": "Cool, dry",
        "optimum_temperature": "10 - 25°C",
        "optimal_rainfall": "300 - 500 mm"
    },
    {
        "crop_name": "Potato",
        "type": "Vegetable",
        "soil_ph": "5.5 - 6.5",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Cool, moist",
        "optimum_temperature": "15 - 20°C",
        "optimal_rainfall": "600 - 800 mm"
    },
    {
        "crop_name": "Carrot",
        "type": "Vegetable",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Cool, moist",
        "optimum_temperature": "15 - 20°C",
        "optimal_rainfall": "500 - 700 mm"
    },
    {
        "crop_name": "Cucumber",
        "type": "Vegetable",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, moist",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 700 mm"
    },
    {
        "crop_name": "Cauliflower",
        "type": "Vegetable",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Cool, moist",
        "optimum_temperature": "15 - 20°C",
        "optimal_rainfall": "500 - 700 mm"
    },
    {
        "crop_name": "Brinjal",
        "type": "Vegetable",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, sunny",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 800 mm"
    },
    {
        "crop_name": "Beans",
        "type": "Legume",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, moderate rainfall",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "600 - 800 mm"
    },
    {
        "crop_name": "Peas",
        "type": "Legume",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Low to Moderate",
        "weather_requirements": "Cool, moist",
        "optimum_temperature": "10 - 20°C",
        "optimal_rainfall": "400 - 600 mm"
    },
    {
        "crop_name": "Lentils",
        "type": "Legume",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Low to Moderate",
        "weather_requirements": "Cool, dry",
        "optimum_temperature": "15 - 25°C",
        "optimal_rainfall": "300 - 500 mm"
    },
    {
        "crop_name": "Barley",
        "type": "Cereal",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Low to Moderate",
        "weather_requirements": "Cool, dry",
        "optimum_temperature": "10 - 20°C",
        "optimal_rainfall": "400 - 600 mm"
    },
    {
        "crop_name": "Ragi",
        "type": "Cereal",
        "soil_ph": "5.5 - 6.5",
        "irrigation_needs": "Low to Moderate",
        "weather_requirements": "Warm, dry",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 600 mm"
    },
    {
        "crop_name": "Sorghum",
        "type": "Cereal",
        "soil_ph": "5.5 - 7.0",
        "irrigation_needs": "Low to Moderate",
        "weather_requirements": "Warm, dry",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 600 mm"
    },
    {
        "crop_name": "Millets",
        "type": "Cereal",
        "soil_ph": "5.5 - 7.0",
        "irrigation_needs": "Low",
        "weather_requirements": "Warm, dry",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "400 - 600 mm"
    },
    {
        "crop_name": "Jowar",
        "type": "Cereal",
        "soil_ph": "5.5 - 7.0",
        "irrigation_needs": "Low to Moderate",
        "weather_requirements": "Warm, dry",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 600 mm"
    },
    {
        "crop_name": "Sesame",
        "type": "Oilseed",
        "soil_ph": "6.0 - 7.5",
        "irrigation_needs": "Low to Moderate",
        "weather_requirements": "Warm, dry",
        "optimum_temperature": "25 - 35°C",
        "optimal_rainfall": "400 - 600 mm"
    },
    {
        "crop_name": "Sunflower",
        "type": "Oilseed",
        "soil_ph": "6.0 - 7.5",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, sunny",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 700 mm"
    },
    {
        "crop_name": "Mustard",
        "type": "Oilseed",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Low to Moderate",
        "weather_requirements": "Cool, dry",
        "optimum_temperature": "15 - 25°C",
        "optimal_rainfall": "400 - 600 mm"
    },
    {
        "crop_name": "Safflower",
        "type": "Oilseed",
        "soil_ph": "6.0 - 7.5",
        "irrigation_needs": "Low to Moderate",
        "weather_requirements": "Warm, dry",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "400 - 600 mm"
    },
    {
        "crop_name": "Zucchini",
        "type": "Vegetable",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, sunny",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 700 mm"
    },
    {
        "crop_name": "Pumpkin",
        "type": "Vegetable",
        "soil_ph": "6.0 - 7.5",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, sunny",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 700 mm"
    },
    {
        "crop_name": "Okra",
        "type": "Vegetable",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, sunny",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 700 mm"
    },
    {
        "crop_name": "Sweet Corn",
        "type": "Vegetable",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, moderate rainfall",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "600 - 800 mm"
    },
    {
        "crop_name": "Ginger",
        "type": "Spice",
        "soil_ph": "5.5 - 6.5",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, humid",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "1500 - 2000 mm"
    },
    {
        "crop_name": "Turmeric",
        "type": "Spice",
        "soil_ph": "5.5 - 6.5",
        "irrigation_needs": "High",
        "weather_requirements": "Warm, humid",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "1500 - 2000 mm"
    },
    {
        "crop_name": "Cardamom",
        "type": "Spice",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, humid",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "1500 - 2000 mm"
    },
    {
        "crop_name": "Black Pepper",
        "type": "Spice",
        "soil_ph": "5.5 - 6.5",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, humid",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "1500 - 2000 mm"
    },
    {
        "crop_name": "Cloves",
        "type": "Spice",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, humid",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "1500 - 2000 mm"
    },
    {
        "crop_name": "Fenugreek",
        "type": "Herb",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Low to Moderate",
        "weather_requirements": "Warm, dry",
        "optimum_temperature": "15 - 25°C",
        "optimal_rainfall": "300 - 500 mm"
    },
    {
        "crop_name": "Coriander",
        "type": "Herb",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, dry",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "300 - 500 mm"
    },
    {
        "crop_name": "Mint",
        "type": "Herb",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, moist",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 700 mm"
    },
    {
        "crop_name": "Basil",
        "type": "Herb",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, sunny",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 700 mm"
    },
    {
        "crop_name": "Tamarind",
        "type": "Fruit",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, dry",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 800 mm"
    },
    {
        "crop_name": "Guava",
        "type": "Fruit",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, dry",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 800 mm"
    },
    {
        "crop_name": "Mango",
        "type": "Fruit",
        "soil_ph": "6.0 - 7.5",
        "irrigation_needs": "Low to Moderate",
        "weather_requirements": "Warm, dry",
        "optimum_temperature": "25 - 35°C",
        "optimal_rainfall": "500 - 800 mm"
    },
    {
        "crop_name": "Papaya",
        "type": "Fruit",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, humid",
        "optimum_temperature": "25 - 30°C",
        "optimal_rainfall": "1000 - 1500 mm"
    },
    {
        "crop_name": "Pomegranate",
        "type": "Fruit",
        "soil_ph": "6.0 - 7.5",
        "irrigation_needs": "Low to Moderate",
        "weather_requirements": "Warm, dry",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 800 mm"
    },
    {
        "crop_name": "Apple",
        "type": "Fruit",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Cool, moist",
        "optimum_temperature": "10 - 20°C",
        "optimal_rainfall": "700 - 1000 mm"
    },
    {
        "crop_name": "Pear",
        "type": "Fruit",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Cool, moist",
        "optimum_temperature": "10 - 20°C",
        "optimal_rainfall": "700 - 1000 mm"
    },
    {
        "crop_name": "Plum",
        "type": "Fruit",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Cool, moist",
        "optimum_temperature": "10 - 20°C",
        "optimal_rainfall": "700 - 1000 mm"
    },
    {
        "crop_name": "Peach",
        "type": "Fruit",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Cool, moist",
        "optimum_temperature": "10 - 20°C",
        "optimal_rainfall": "700 - 1000 mm"
    },
    {
        "crop_name": "Apricot",
        "type": "Fruit",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Cool, dry",
        "optimum_temperature": "10 - 20°C",
        "optimal_rainfall": "300 - 500 mm"
    },
    {
        "crop_name": "Avocado",
        "type": "Fruit",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, humid",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "1000 - 1500 mm"
    },
    {
        "crop_name": "Aloe Vera",
        "type": "Herb",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Low",
        "weather_requirements": "Warm, dry",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "300 - 500 mm"
    },
    {
        "crop_name": "Jasmine",
        "type": "Flower",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, moist",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "800 - 1000 mm"
    },
    {
        "crop_name": "Marigold",
        "type": "Flower",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, sunny",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 700 mm"
    },
    {
        "crop_name": "Sunflower",
        "type": "Flower",
        "soil_ph": "6.0 - 7.5",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, sunny",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 700 mm"
    },
    {
        "crop_name": "Zinnia",
        "type": "Flower",
        "soil_ph": "6.0 - 7.0",
        "irrigation_needs": "Moderate",
        "weather_requirements": "Warm, sunny",
        "optimum_temperature": "20 - 30°C",
        "optimal_rainfall": "500 - 700 mm"
    },
    {
        "crop_name": "Lavender",
        "type": "Herb",
        "soil_ph": "6.0 - 8.0",
        "irrigation_needs": "Low",
        "weather_requirements": "Warm, dry",
        "optimum_temperature": "15 - 25°C",
        "optimal_rainfall": "300 - 500 mm"
    }
  ];

  module.exports = { data: cropDetails };
