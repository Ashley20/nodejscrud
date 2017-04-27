var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({

	CategoryName : {required: true, type: String},
	Description : {type: String},
	Picture : {type: String}

});

var Category = module.exports = mongoose.model('Category', categorySchema);

/*                GET                */
module.exports.getCategories = function(callback, limit){
	Category.find(callback).limit(limit);
}

module.exports.getCategoryById = function(id, callback){
	Category.findById(id, callback);
}


/*                POST               */
module.exports.addCategory = function(Category, callback){
	Category.save(callback);
}


/*                PUT               */

module.exports.updateCategory = function(id, newCategory, options, callback){
	var query = { _id : id };

	var update = {
		CategoryName: newCategory.CategoryName,
		Description : newCategory.Description,
		Picture : newCategory.Picture

	}

	 Category.findOneAndUpdate(query, update, options, callback);

}

/*                DELETE              */
module.exports.removeCategory = function(id, callback){
	var query = { _id : id };
	Category.remove(query, callback);
}