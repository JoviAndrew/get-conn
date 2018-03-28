const router = require('express').Router();
const models  = require('../models');

// Session Check
router.use(function (req, res, next) {
  console.log('==============', req.session.user);
  if(req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
})

router.get('/', (req, res) => {
  res.redirect('/home')
})

router.get('/home', (req, res) => {
  res.render('home')
})

module.exports = router;
