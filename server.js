const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const path = require('path');
// const session = require('express-session')
// const flash = require('express-flash')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override');

//set up port + express
const app = express();
const { PORT = 5000 } = process.env;

//reading json body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: false } ))

//session handler
// app.use(session({
//     secret: 'Buat ini jadi rahasia',
//     resave: false,
//     saveUninitialized: false
// }));

//set cookieParser
app.use(cookieParser());

//static file
app.use('/homepage', express.static(path.join(__dirname + '/public')))
app.use(express.static(__dirname + '/public'));

//set passport js
const passport = require('./middlewares/jwt')
app.use(passport.initialize());
app.use(passport.session());

//set flash
// app.use(flash());

//override form method to PUT
app.use(methodOverride('_method'));

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routes
app.use(routes);

//listen
app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`)
})