var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    path = require('path'),
    flash = require('connect-flash'),
    passport = require('passport');

module.exports = function() {
    // Init express application
    var app = express();

    // Configure models
    require('../app/models/user.server.model');
		
	// Enable logger (morgan)
    app.use(morgan('dev'));

    // Use Express middlewares
    app.use(bodyParser.urlencoded());
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());
    app.use(session({
    	secret: 'MEAN'
    }));

    // Set view engine
    app.set('views', __dirname + '/../app/views');
    app.set('view engine', 'ejs');

    // Connect flash for flash messages
    app.use(flash());

    // Init Passport 
    app.use(passport.initialize());
    app.use(passport.session());

    // Configure routing
    require('../app/routes/index.server.routes')(app);
    require('../app/routes/users.server.routes')(app);
	
	// Setting the app router and static folder
	app.use(express.static(path.resolve('./public')));

    return app;
};