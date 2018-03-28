
const model = require('../models');
const express = require('express');
const router = express.Router();
var bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/', function(req, res){
  //find the data where the email is the same as the email being inputed
  model.User.findOne({
      where:{
          email: req.body.email
      }
  })
  .then(function(dataUser) {
    //Compare input password with password from database
    bcrypt.compare(req.body.password, dataUser.password, function(err, res){
      if (res) {
        req.session.user = dataUser
        res.redirect('/home');
      } else {
        res.redirect('/login')
      }
    })
  })

})

module.exports = router;
