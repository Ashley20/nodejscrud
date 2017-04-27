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
module.exports.addSupplier = function(Supplier, callback){
	Supplier.save(callback);

}

/*                PUT               */
module.exports.updateSupplier = function(id, newSupplier, options, callback){
	var query = { _id : id };
	var update = {
		CompanyName : newSupplier.CompanyName,
		ContactName : newSupplier.ContactName,
		Phone : newSupplier.Phone,
		Adress : newSupplier.Adress,
		HomePage : newSupplier.HomePage,
		PostalCode : newSupplier.PostalCode
	}

	Supplier.findOneAndUpdate(query, update, options, callback);
}

/*                DELETE              */
module.exports.removeSupplier = function(id, callback){
	var query = { _id : id };
	Supplier.remove(query, callback);
}