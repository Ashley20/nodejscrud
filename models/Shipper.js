var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shipperSchema = new Schema({

	CompanyName : {required: true, type: String},
	Phone : {type: String}

});

var Shipper = module.exports = mongoose.model('Shipper', shipperSchema);

/*                GET                */
module.exports.getShippers = function(callback, limit){
	Shipper.find(callback).limit(limit);
}
/*                POST               */
module.exports.addShipper = function(Shipper, callback){
	Shipper.save(callback);
}

/*                PUT               */
module.exports.updateShipper = function(id, newShipper, options, callback){
	var query = { _id : id };
	var update = {
		CompanyName : newShipper.CompanyName,
		Phone : newShipper.Phone
	}

	Shipper.findOneAndUpdate(query, update, options, callback);
}

/*                DELETE              */
module.exports.removeShipper = function(id, callback){
	var query = { _id : id };
	Shipper.remove(query, callback);
}

