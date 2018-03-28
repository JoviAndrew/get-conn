const router = require('express').Router();
const models  = require('../models');

// Session Check
router.use(function (req, res, next) {
  if(req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
})

router.get('/', (req, res) => {
  res.redirect('/home');
})

router.get('/home', (req, res) => {
  models.Group.findAll({})
  .then(function(groupData){
    res.render('home', {groupData: groupData});
  })
})

module.exports = router;
