const app         = require('express')();
const session     = require('express-session')
const bodyParser  = require('body-parser');

var routeLogin    = require('./routes/login.js');
var routeRegister = require('./routes/register.js');
var routeHome     = require('./routes/home.js');
var routeUser     = require('./routes/user.js')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUnitialized: true
}))

app.use('/login', routeLogin);
app.use('/register', routeRegister);
app.use('/', routeHome);
app.use('/user', routeUser);

app.listen(3000, () => {
    console.log('Connected...');

});
