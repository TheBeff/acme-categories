var router = require('express').Router();
var Category = require('../db');

router.get('/:category', function(req, res){
  res.render('category', {
    categories: Category.getCategories(),
    products: Category.getProducts(req.params.category),
    category: req.params.category
  });
});

router.post('/', function(req, res){
	Category.addCategory(req.body.name);
	res.redirect('/categories/' + req.body.name);
});

router.post('/:category/products', function(req, res){
	Category.addProduct(req.params.category, req.body.name);
	res.redirect('/categories/' + req.params.category);
});

module.exports = router;
