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
module.exports.addProduct = function(Product, callback){
	Product.save(callback);
}

module.exports.updateProduct = function(id, newProduct, options, callback){
	var query = { _id : id };
	var update = {
		ProductName : newProduct.ProductName,
		SupplierId : newProduct.SupplierId,
		CategoryId : newProduct.CategoryId,
		QuantityPerUnit : newProduct.QuantityPerUnit,
		UnitPrice : newProduct.UnitPrice,
		UnitsInStock : newProduct.UnitsInStock,
		UnitsOnOrder : newProduct.UnitsOnOrder
	}

	Product.findOneAndUpdate(query, update, options, callback);
}

/*                DELETE              */
module.exports.removeProduct = function(id, callback){
	var query = { _id : id };
	Product.remove(query, callback);
}