const router = require('express').Router();
const models = require('../models');
// helpers
const getFullName = require('../helpers/getFullName.js');

router.use(require('express').static("picture"));

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

  models.User.findAll({
    include: [{
      model: models.Group
    }],
    where: {email: req.session.user.email}
  })
  .then(function(UserGroupData){
    res.render('home', {UserGroupData: UserGroupData});
  })
})

module.exports = router;
