const colors = require('colors');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//Initlization
const app = express();
require('./databaseQA');

//Settings
app.set('port', process.env.port || 3000);
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
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

//Static Files
app.use(express.static(path.join(__dirname, 'public') ));
//Server is listenning
app.listen(app.get('port') , ()=>{ console.log(`Server on http://localhost:${app.get('port')}`.green) });