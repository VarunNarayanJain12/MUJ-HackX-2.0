const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Form = require('./models/formSchema'); // Make sure this schema matches your form fields

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Setting up Database
mongoose.connect('mongodb://127.0.0.1:27017/EcoFasal')
  .then(() => console.log("Connected to DB"))
  .catch(err => console.error(err));

// Middleware setup
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Load crop details from local dataset
const cropDetailsPath = path.join(__dirname, 'init', 'cropdetails.js');
const { data: cropDetails } = require(cropDetailsPath);

// Load route modules
const sendmail = require('./controllers/sendMail');
const cropRoutes = require('./routes/cropRoutes');
const weatherRoutes = require('./routes/weatherRoutes');

// Use routes
app.use('/api/crops', cropRoutes);
app.use('/api/weather', weatherRoutes);

// Frontend routes
app.get('/form', (req, res) => {
  res.render('form');
});

app.post('/submit-form', async (req, res) => {
  try {
    const { firstName, lastName, email, password, crop, cropStage, irrigationPractice, soilType, address2, city, state, zip } = req.body;

    const newForm = new Form({
      firstName,
      lastName,
      email,
      password,
      crop,
      cropStage,
      irrigationPractice,
      soilType,
      address2,
      city,
      state,
      zip
    });

    await newForm.save();
    res.send('Form submitted successfully!');
  } catch (error) {
    console.error('Error saving form:', error);
    res.status(500).send('An error occurred while submitting the form.');
  }
});

// Other routes
app.get('/', (req, res) => {
  res.render('mainPage', { 
    sign: "#",
    mainPg: true,
    login: true
  });
});

app.get('/news', (req, res) => {
  res.render('news.ejs', {
    sign: "/",
    login: true
  });
});

app.get('/about', (req, res) => {
  res.redirect('https://drive.google.com/file/d/1FrMmwzrQfPMjKV_qJvF3krE1M7d4m7w8/view?usp=drivesdk');
});

app.get('/signin', (req, res) => {
  res.render('Sign.ejs', {
    sign: "/",
    login: true
  });
});

app.get('/login', (req, res) => {
  res.render('login.ejs', {
    sign: "/",
    login: true
  });
});

app.get('/news/loans', (req, res) => {
  res.render('loan.ejs', {
    sign: "/",
    loan: true,
    login: true
  });
});

app.get('/reels', (req, res) => {
  res.render('reels.ejs', {
    sign: "/",
    bool: true,
    login: true
  });
});

app.get('/webinar', (req, res) => {
  res.render('webinar.ejs', {
    sign: "/",
    login: true
  });
});

app.get('/cropAnalysis', (req, res) => {
  res.render('cropAnalysis.ejs', {
    counter: req.method === 'POST' ? 1 : 2,
    sign: "/",
    login: true
  });
});

app.post('/cropAnalysis/submit', async (req, res) => {
  try {
    const { crop, stage } = req.body;

    // Assuming 'Crop' is a placeholder for something in your schema or logic
    res.render('cropAnalysis.ejs', {
      counter: 1,
      Crop: crop,
      Stage: stage,
      sign: "/",
      login: true
    });
  } catch (error) {
    console.error('Error handling crop analysis submission:', error);
    res.status(500).send('An error occurred while processing crop analysis.');
  }
});

app.post('/profile', (req, res) => {
  res.render('profile.ejs', {
    Fname: req.body.firstName,
    Lname: req.body.lastName,
    profile: true,
    sign: "/",
    login: true
  });
});

// Mail route
app.post('/mail', sendmail);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



module.exports = app;
