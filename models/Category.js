'use strict';

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
module.exports.addCategory = function(data, callback){
	var Category = new this(data);
	Category.save(callback);

}


/*                PUT               */

module.exports.updateCategory = function(id, data, options, callback){
	var query = { _id : id };
    var update = {
    	CategoryName : data.CategoryName,
    	Description : data.Description,
    	Picture : data.Picture
    }
	 Category.findOneAndUpdate(query, update, options, callback);

}

/*                DELETE              */
module.exports.removeCategory = function(id, callback){
	var query = { _id : id };
	Category.remove(query, callback);
}

