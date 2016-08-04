var express = require("express"); 
var path = require('path'); //helpful in parsing bootstrap file
var swig = require("swig"); //allows us to break up our html
swig.setDefaults({ cache: false}); //keeps development clean when modifying html
var methodOverride = require("method-override"); //needed to add DELETE, since browser doesn't have
var Category = require('./db');


var app = express(); //creates our express app
app.use(express.static( path.join( __dirname, 'node_modules'))); //needed to read bootstrap file

app.use(methodOverride('_method'));
app.use(require('body-parser').urlencoded({ extended: false }));

app.set('view engine', 'html'); 
app.engine('html', swig.renderFile);

app.get('/', function(req, res, next){
	res.render('index', { 
    title: 'Home',
    categories: Category.getCategories()
  });
});

app.use('/categories', require('./routes/categories'));

app.listen(process.env.PORT, function(){
	console.log('listening on ' + process.env.PORT);
});
