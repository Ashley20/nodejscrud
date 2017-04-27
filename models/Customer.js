var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
	companyName : {type: String, required :true},
	contactName : {type : String, required :true},
	Phone : {type : String },
	Adress : {type : String },
    Region : {type : mongoose.Schema.Types.ObjectId, ref :'Region'}
});

var Customer = module.exports = mongoose.model('Customer', customerSchema);

/*                GET                */
 module.exports.getCustomers =  function(callback, limit){
	Customer.find(callback).populate('Region').limit(limit);
}

/*                POST               */
 module.exports.addCustomer =  function(Customer, callback){
	Customer.save(callback);
}

/*                PUT               */
module.exports.updateCustomer = function(id, newCustomer, options, callback){
	var query = { _id : id };
	var update = {
		companyName : newCustomer.companyName,
		contactName : newCustomer.contactName,
		Phone : newCustomer.Phone,
		Adress : newCustomer.Adress,
		Region : newCustomer.Region
	}

	Customer.findOneAndUpdate(query, update, options, callback);
}

/*                DELETE              */
module.exports.removeCustomer = function(id, callback){
	var query = { _id : id };
	Customer.remove(query, callback);
}