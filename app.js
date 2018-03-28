var express = require('express')
var app = express()

//Login

app.get('/', function(req, res){
    let message = '';
    res.render('login', {err: message});
})

app.post('/', function(req, res){

})

//register
app.get('/register', function(req,res){
    res.render('register');
})

//home page
app.get('/home', function(req, res){
    res.render('home')
})

//create group
app.get('/home/createGroup', function(req, res){
    res.render('home')
})

//group page
app.get('home/group:id>', function(req, res){

})

app.listen(3000);