const router = require('express').Router();
const models  = require('../models');
// helpers
const getFullName = require('../helpers/getFullName.js');

// session Check
router.use(function (req, res, next) {
  if(req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
})

// if url is '/', it's automatically redirects to home
router.get('/', (req, res) => {
  res.redirect('/home');
})

router.get('/home', (req, res) => {
  res.locals.getFullName = getFullName;
  let id = req.session.user.id;

  models.User.findById(id)
  .then(user => {
    models.Group.findAll({})
    .then(function(groupData){
      res.render('home', {user: user, groupData: groupData});
    })
  })
  .catch(err => {
    console.log(err.message);
  })
})

module.exports = router;
