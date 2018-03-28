const express = require('express');
const router = express.Router();
var bcrypt = require('bcrypt');
const saltRounds = 10;
const model = require('../models');

router.get('/', function(req, res){
  let message = '';
  res.render('register', {err: message});
})

router.post('/', function(req, res){
  model.User.create({
    email: req.body.email,
    password: req.body.password,
    salt: "",
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    gender: req.body.gender,
    birth_date: req.body.birthday,
    profilePicture: ""
  })
  .then(function(){
      res.redirect('/login');
  })
  .catch(function(err){
      res.render('register', {err: err});
  })
})

module.exports = router;
