const router = require('express').Router();
const models = require('../models');
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

router.get('/:id', function(req, res) {

  models.Group.findById(req.params.id)
  .then(groupData => {
    models.Post.getAllPost(models.User, models.Comment, req.params.id, posts => {
      res.render('group', {
        groupData: groupData,
        posts: posts
      })
    })
  })
})

router.post('/:id/add-post', function(req, res) {
  let id = req.session.user.id;

  models.Post.create({
    GroupId: req.params.id,
    UserId: id,
    content: req.body.post
  })
  .then(success => {
    res.redirect(`/home/group/${req.params.id}`);
  })
  .catch(err => {
    console.log(err.message);
  })
})

router.post('/:idGroup/post/:idPost/add-comment', (req, res) => {
  let id = req.session.user.id;
  console.log('=========>');
  models.Comment.create({
    PostId: req.params.idPost,
    UserId: id,
    content: req.body.comment
  })
  .then(success => {
    res.redirect(`/home/group/${req.params.idGroup}`);
  })
  .catch(err => {
    console.log(err.message);
  })
})

module.exports = router;
