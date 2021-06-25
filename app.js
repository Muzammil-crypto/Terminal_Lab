const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const path = require('path');
const bodyparser = require("body-parser");
const services = require('./services/render');

const app = express();
app.use(express.json());
app.use(bodyparser.urlencoded({ extended : true}))

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
// mongodb+srv://Safyan:qwertyasdf@cluster0-f9smh.mongodb.net/muzamil?retryWrites=true&w=majority
// mongodb://localhost:27017/natours
mongoose
  .connect(
    'mongodb+srv://Safyan:qwertyasdf@cluster0-f9smh.mongodb.net/muzamil?retryWrites=true&w=majority'
    ,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/users', require('./routes/users.js'));
app.use('/api/',require('./routes/fucultyRoute'));

app.get('/add-product', services.add_user)
app.get('/update-user', services.update_user)
app.get('/cart', services.cartRoutes)

app.use('/', require('./routes/index.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));
