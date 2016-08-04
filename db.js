var _categories = {
  foo: []
};

module.exports = {
	getCategories: function(){
		return Object.keys(_categories);
	},
	addCategory: function(name){
		_categories[name] = [];
	},
	addProduct: function(category, product){
		_categories[category].push({ name: product});
	},
  getProducts: function(category){
    return _categories[category];
  }
};
