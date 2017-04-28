'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var supplierSchema = new Schema({

	CompanyName : {required: true, type: String},
	ContactName : {type :String },
	Phone : {type : String },
	Adress : {type : String },
	HomePage : {type: String},
	PostalCode : {type: String}

});

var Supplier = module.exports = mongoose.model('Supplier', supplierSchema);

/*                GET                */
module.exports.getSuppliers = function(callback, limit){
	Supplier.find(callback).limit(limit);
}

/*                POST               */
module.exports.addSupplier = function(data, callback){
	var Supplier = new this(data);
	Supplier.save(callback);

}

/*                PUT               */
module.exports.updateSupplier = function(id, data, options, callback){
	var query = { _id : id };
	var update = {
		CompanyName : data.CompanyName,
		ContactName : data.ContactName,
		Phone       : data.Phone,
		Adress      : data.Adress,
		HomePage    : data.HomePage,
		PostalCode  : data.PostalCode
	}

	Supplier.findOneAndUpdate(query, update, options, callback);
}

/*                DELETE              */
module.exports.removeSupplier = function(id, callback){
	var query = { _id : id };
	Supplier.remove(query, callback);
}