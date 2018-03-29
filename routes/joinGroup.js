const router = require('express').Router();
const models  = require('../models');

router.get('/', function(req, res){
    models.Group.findAll({})
    .then(function(groupData){
        res.render('join_group', {groupData: groupData}) 
    })
})

router.get('/:id', function(req,res){
    models.UserGroup.create({
        GroupId: req.params.id,
        UserId: req.session.user.id
    })
    .then(function(){
        res.redirect('/home');
    })
})

router.get('/home', function(req,res){
    res.redirect('/home');
})

module.exports = router;