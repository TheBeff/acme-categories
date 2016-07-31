var _categories = {};

module.exports = {
	getCategories: function(){
		return Object.keys(_categories);
	},
	addCategory: function(name){
		_categories[name] = [];
	}
};