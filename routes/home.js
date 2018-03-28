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
  models.User.findAll({
    include: [{
      model: models.Group
    }],
    where: {email: req.session.user.email}
  })
  .then(function(UserGroupData){
    res.render('home', {UserGroupData: UserGroupData});
  })
  
  models.Group.findAll({})
  .then(function(groupData){
    
  })
})

module.exports = router;
