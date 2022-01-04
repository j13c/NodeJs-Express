const colors = require('colors');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//Initlization
const app = express();

//Settings
app.set('port', process.env || 3000); //TODO: dont work
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));
app.set( 'view engine', '.hbs');
app.use( express.json() );

//Middlewares
app.use(express.urlencoded({extended: false}) );
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mySecretApp',
    resave: true,
    saveUninitialized: true
}))

//Global Variables

//Routes

//Static Files

//Server is listenning
app.listen(3000, ()=>{ console.log(`Server on http://localhost:3000`.green) });