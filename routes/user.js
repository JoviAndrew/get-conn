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

router.get('/', (req, res) => {
  res.render('user', {user: req.session.user});
})

router.get('/edit-profile', (req, res) => {
  let id = req.session.user.id;
  let message = '';
  models.User.findById(id)
  .then(user => {
    res.render('edit-profile', {user: user, err: message})
  })
  .catch(err => {
    console.log(err.message);
  })
})

router.post('/edit-profile', (req, res) => {
  let id = req.session.user.id;
  let newData = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    gender: req.body.gender,
    profilePicture: req.body.profilePic
  }

  models.User.update(newData, {
    where: {id: id}
  })
  .then(success => {
    res.redirect('/');
  })
  .catch(err => {
    res.render('edit-profile', {student: req.body, err: err});
  })
})

module.exports = router;
