const router = require('express').Router();
const models = require('../models');

router.get('/', (req, res) => {
  req.session.destroy();
  res.redirect('/');
})

module.exports = router;
