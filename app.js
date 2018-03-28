const app         = require('express')();
const session     = require('express-session')
const bodyParser  = require('body-parser');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUnitialized: true
}))

// Login
var routeLogin = require('./routes/login.js');
app.use('/login', routeLogin);

// Logout
var routeLogout = require('./routes/logout.js');
app.use('/logout', routeLogout);

// Register
var routeRegister = require('./routes/register.js');
app.use('/register', routeRegister);

// Home
var routeHome = require('./routes/home.js');
app.use('/', routeHome);

// User
var routeUser = require('./routes/user.js')
app.use('/user', routeUser);

app.listen(3000, () => {
    console.log('Connected...');

});
