
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var routesIndex = require('./routes/index');

var app = module.exports = express.createServer();
var DATABASE = require('./custom_modules/database');
//interaction DATABASE
var BD = new DATABASE();
//BD.createDataBase();
//BD.createTables();
BD.getAllProducts(function(res){
   console.log(res);
});


// Configuration
var port = process.env.PORT || 8080;

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


// Routes
app.get('/', routes.index);

//var appExpress = express();
//express.use('/', routesIndex);

app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
