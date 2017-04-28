'use strict';

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
module.exports.addShipper = function(data, callback){
	var Shipper = new this(data);
	Shipper.save(callback);
}

/*                PUT               */
module.exports.updateShipper = function(id, data, options, callback){
	var query = { _id : id };
	var update = {
		CompanyName : data.CompanyName,
		Phone       : data.Phone
	}

	Shipper.findOneAndUpdate(query, update, options, callback);
}

/*                DELETE              */
module.exports.removeShipper = function(id, callback){
	var query = { _id : id };
	Shipper.remove(query, callback);
}

