var express = require("express");
var path = require('path');
var swig = require("swig");
swig.setDefaults({ cache: false});
var methodOverride = require("method-override");
var Categories = require("./db");

var app = express();
app.use(express.static( path.join( __dirname, 'node_modules')));

app.use(methodOverride('_method'));

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.get('/', function(req, res, next){
	res.render('index', { title: 'Home'});
});

app.listen(3000, function(){
	console.log('listening');
});