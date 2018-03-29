const router = require('express').Router();
const model  = require('../models');

router.get('/', function(req, res){
    res.render('createGroup');
    console.log(req.session.user);
})

router.post('/', function(req, res){
    model.Group.create({
        groupName: req.body.groupname,
        groupPicture: req.body.pic,
        groupDesc: req.body.desc,
        adminId: req.session.user.id
    })
    .then(function(){
        model.Group.findAll({})
        .then(function(groupData){
            let newId = groupData[groupData.length-1].id
            model.UserGroup.create({
                GroupId: newId,
                UserId: req.session.user.id
            })
            .then(function(){
                res.redirect('/home');
            })
        })
    })

    
})

module.exports = router;