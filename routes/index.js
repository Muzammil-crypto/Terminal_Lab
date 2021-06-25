const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const axios=require('axios')

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
 axios.get(`https://safyanterminal.herokuapp.com/api`)
        .then(function(response){
            res.render('dashboard', { users : response.data.Faculties,user: req.user });
        })
        .catch(err =>{
            res.send(err);
        })
  // res.render('dashboard', {
  //   user: req.user
  // })
);

module.exports = router;
