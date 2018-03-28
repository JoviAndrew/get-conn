const router = require('express').Router();
const models  = require('../models');

router.get('/', function(req, res){
  let message = 'hello'
  res.render('login', {err: message});
})

// router buat test session
router.get('/tes', (req, res) => {
  let userTest = {
    email: 'test',
    password: 'test2',
  }

  models.User.findOne({
    where: {
      $and: {
        email: userTest.email,
        password: userTest.password
      }
    }
  })
  .then(userData => {
    if (userData != null) {
      console.log('login success', userData);
      req.session.user = userData;
      res.redirect('/home');
    } else {
      console.log('login failed');
      res.redirect('/login')
    }
  })
  .catch(err => {
    console.log(err.message);
  })
})

module.exports = router;
