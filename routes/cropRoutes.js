const express = require('express');
const router = express.Router();

// Load crop details from local dataset
const path = require('path');
const cropDetailsPath = path.join(__dirname, '..', 'init', 'cropdetails.js');
const { data: cropDetails } = require(cropDetailsPath);

// Endpoint to get crop details
router.post('/details', (req, res) => {
  const { crop_name } = req.body;

  if (!crop_name) {
    return res.status(400).json({ error: 'Crop name is required' });
  }

  // Find the crop details from the local dataset
  const crop = cropDetails.find(c => c.crop_name.toLowerCase() === crop_name.toLowerCase());

  if (crop) {
    res.json(crop);
  } else {
    res.status(404).json({ error: 'Crop not found' });
  }
});

module.exports = router;
