const router = require('express').Router();
const models  = require('../models');

router.get('/:id', function(req, res){
    models.Group.findById(req.params.id)
    .then(function(groupData){
        res.render('group', {groupData: groupData});
    })
})

router.post('/:id/add-post')

module.exports = router;