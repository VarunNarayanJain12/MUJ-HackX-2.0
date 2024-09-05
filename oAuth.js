import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import Form from './models/formSchema'; // Make sure this schema matches your form fields
import sendmail from './controllers/sendMail.js';
import cropRoutes from './routes/cropRoutes.js';
import weatherRoutes from './routes/weatherRoutes.js';
import { fileURLToPath } from 'url';
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import GoogleStrategy from "passport-google-oauth2";
import session from "express-session";
import env from "dotenv";
import pg from "pg";

env.config();

// Initialize Express app
const app = express();
const saltRounds = 10;
const port = process.env.PORT || 3000;

// Get __dirname in ES6 module
const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
      maxAge: 1000*60*60*24,
    },
  })
);

// Setting up Database
mongoose.connect('mongodb://127.0.0.1:27017/EcoFasal')
  .then(() => console.log("Connected to DB"))
  .catch(err => console.error(err));
  
app.use(passport.initialize());
app.use(passport.session());
// Middleware setup
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Load crop details from local dataset
const cropDetailsPath = path.join(__dirname, 'init', 'cropdetails.js');
const { data: cropDetails } = await import(cropDetailsPath);

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

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
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

app.get('/profile', (req, res) => {
  res.render('profile.ejs');
});


app.get(
  "/auth/google/profile",
  passport.authenticate("google",{
    successRedirect:"/profile",
    failureRedirect:"/login"
  })
);


// Mail route
app.post('/mail', sendmail);

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
  })
);

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      req.redirect("/login");
    } else {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          const result = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            [email, hash]
          );
          const user = result.rows[0];
          req.login(user, (err) => {
            console.log("success");
            res.redirect("/secrets");
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next(); // The user is authenticated, proceed to the next middleware
  } else {
    res.redirect("/login"); // The user is not authenticated, redirect to login
  }
}

passport.use("local",
  new Strategy(async function verify(username, password, cb) {
    try {
      const result = await db.query("SELECT * FROM users WHERE email = $1 ", [
        username,
      ]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedHashedPassword = user.password;
        bcrypt.compare(password, storedHashedPassword, (err, valid) => {
          if (err) {
            console.error("Error comparing passwords:", err);
            return cb(err);
          } else {
            if (valid) {
              return cb(null, user);
            } else {
              return cb(null, false);
            }
          }
        });
      } else {
        return cb("User not found");
      }
    } catch (err) {
      console.log(err);
    }
  })
);

passport.use("google", new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/profile",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
  },
  async (accessToken, refreshToken, profile, cb) => {
    console.log(profile);
    try {
      // Check if result is defined and has rows property
      const result = await db.query("SELECT * FROM users WHERE email=$1", [profile.email]);
      
      if (result && result.rows) {
        if (result.rows.length === 0) {
          // User not found, create a new one
          const newUser = await db.query("INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *", [profile.email, profile.id]);
          return cb(null, newUser.rows[0]);
        } else {
          // User exists
          return cb(null, result.rows[0]);
        }
      } else {
        // Handle the case where result or result.rows is not defined
        return cb(new Error("Unexpected result format"));
      }
    } catch (err) {
      console.log(err);
      return cb(err);
    }
  }
));

passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((user, cb) => {
  cb(null, user);
});

// Start the server
app.listen(port, () => {
  console.log("Server is running on port ${port}");
});

export default app;