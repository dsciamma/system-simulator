// Modules dependencies
// ---------------------------
var express = require('express');
var http = require('http');
var path = require('path');

var main = require('./controllers/main');

var app = express();

// set environments variables
// ---------------------------
app.set('port', parseInt(process.argv[2], 10) || 80);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Configure middleware
// ---------------------------
// app.use(express.favicon());           // ultra caching favicon (/public/favicon.ico)
app.use(express.logger('dev'));          // log all request
app.use(express.bodyParser());           // parses the request body and creates the req.body object 
app.use(express.cookieParser());         // get cookies from user agent and creates the req.cookies object
app.use(express.session({ secret : "2e0e1250-26bf-11e3-8224-0800200c9a66"})); // manage session and create a req.session object
// app.use(express.methodOverride());    // to use shortcut app.put and app.delete
app.use(app.router);                     // handle request on app.get() and app.post()
app.use(express.static(path.join(__dirname, 'public'))); // serve static resource
app.use(express.static(path.join(__dirname, 'bower_components'))); // serve static resource

// development only
if ('development' == app.get('env')) {
    console.log('Development Mode ON !');
    app.use(express.errorHandler()); // show error as response
}

// Define routes
// ---------------------------
app.get('/', function(req, res) {res.redirect('/index');} );
app.get('/index', main.index);
app.post('/api/send', main.send);

// create server
// ---------------------------
http.createServer(app).listen(3000, function() {
    console.log('Express server listening on port ' + 3000);
});
