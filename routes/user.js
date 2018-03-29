const router = require('express').Router();
const models  = require('../models');
// helpers
const getFullName = require('../helpers/getFullName.js');

// session Check
router.use(function (req, res, next) {
  // console.log(req.session.user);
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
  models.User.findById(id)
  .then(user => {
    res.render('edit-profile', {user: user})
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
    res.render('edit-profile', {student: req.body, err: err.message});
  })
})

module.exports = router;
