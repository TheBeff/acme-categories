var router = require('express').Router();
var Categories = require('../db');

router.post('/', function(req, res){
	Categories.addCategory(req.body);
	console.log(Categories.getCategories());
	res.redirect('/');
});

module.exports = router;