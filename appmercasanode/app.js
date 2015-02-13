
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
/*BD.getAllProducts(function(res){
   console.log(res);
});*/


// Configuration
var port = process.env.PORT || 3000;

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
//app.get('/', routes.index);
app.get('/', function (req, res) {
    console.log("ingresa");
    //var DATABASE = require('../custom_modules/database');
    //var BD = new DATABASE();
    var productosBDSave;
    BD.getAllProducts(function (productosBD) {
        productosBDSave = productosBD;
        console.log("ingresa a bd");
        res.render('index', { title: 'MERCASA', productos: {} });        
    });
    console.log("sale de bd");
    console.log(productosBDSave);
    //res.render('index', { title: 'MERCASA', productos: productosBDSave });
});

//var appExpress = express();
//express.use('/', routesIndex);

app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
