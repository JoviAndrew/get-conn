const express = require('express');
const bodyParser = require('body-parser');
const model = require('./models');

let app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
//Login

var routeLogin = require('./routes/login.js');
app.use('/login', routeLogin);

//register

var routeRegister = require('./routes/register.js');
app.use('/register', routeRegister);

//home page

var routeHome = require('./routes/home.js');
app.use('/home', routeHome);
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

app.listen(3000, () => {
    console.log('Connected...');
    
});