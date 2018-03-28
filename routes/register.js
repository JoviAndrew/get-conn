const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    let message = '';
    res.render('register', {err: message});
})

router.post('/', function(req, res){
    
})

module.exports = router;