const cropDetails = require('../init/cropdetails');

// Render crop analysis page
const cropAnalysisPage = (req, res) => {
    res.render('cropAnalysis.ejs', {
        counter: -1,
        sign: "/",
        login: true
    });
};

// Handle crop analysis submission
const submitCrop = (req, res) => {
    const { crop, stage } = req.body;
    res.render('cropAnalysis.ejs', {
        counter: 1,
        Crop: crop,
        Stage: stage,
        sign: "/",
        login: true
    });
};

module.exports = {
    cropAnalysisPage,
    submitCrop
};
