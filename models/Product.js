'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	ProductName : {type: String, required :true},
	SupplierId: {type : mongoose.Schema.Types.ObjectId, ref :'Supplier'},
	CategoryId: {type : mongoose.Schema.Types.ObjectId, ref :'Category'},
	QuantityPerUnit : {type: Number},
	UnitPrice : {type: Number},
	UnitsInStock : {type: Number},
	UnitsOnOrder : {type: Number}

});

var Product = module.exports = mongoose.model('Product', productSchema);

/*                GET                */
module.exports.getProducts = function(callback, limit){
	Product.find(callback).populate('SupplierId').populate('CategoryId').limit(limit);
}

/*                POST               */
module.exports.addProduct = function(data, callback){
	var Product = new this(data);
	Product.save(callback);
}

module.exports.updateProduct = function(id, data, options, callback){
	var query = { _id : id };
	var update = {
		ProductName     : data.ProductName,
		SupplierId      : data.SupplierId,
		CategoryId      : data.CategoryId,
		QuantityPerUnit : data.QuantityPerUnit,
		UnitPrice       : data.UnitPrice,
		UnitsInStock    : data.UnitsInStock,
		UnitsOnOrder    : data.UnitsOnOrder
	}

	Product.findOneAndUpdate(query, update, options, callback);
}

/*                DELETE              */
module.exports.removeProduct = function(id, callback){
	var query = { _id : id };
	Product.remove(query, callback);
}