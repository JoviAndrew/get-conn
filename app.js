const express = require('express');
const bodyParser = require('body-parser');


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
app.use('/', routeHome);

//create group
app.get('/createGroup', function(req, res){
    res.render('createGroup')
})

//group page
app.get('home/group:id>', function(req, res){

})

app.listen(3000, () => {
    console.log('Connected...');
    
});