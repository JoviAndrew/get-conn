const router = require('express').Router();
const model  = require('../models');

router.get('/', function(req, res){
    res.render('createGroup');
})

router.post('/', function(req, res){
    model.Group.create({
        groupName: req.body.groupname,
        groupPicture: req.body.pic,
        groupDesc: req.body.desc
    })
    .then(function(){
        res.redirect('/home');
    })
})

module.exports = router;