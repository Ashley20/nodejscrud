'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
	CustomerId : {type: Schema.Types.ObjectId, ref : 'Customer'},
	EmployeeId : {type: Schema.Types.ObjectId, ref : 'Employee'},
	OrderDate : {type : Date, default : Date.now },
	ShippedDate : {type : Date, default : Date.now },
	ShipCountry: {type : String },
	ShipperId  : {type : Schema.Types.ObjectId, ref:'Shipper'}
});

var Order = module.exports = mongoose.model('Order', orderSchema);

/*                GET                */
module.exports.getOrders =  function(callback, limit){
	Order.find(callback).populate('CustomerId').populate('ShipperId').populate('EmployeeId').limit(limit);
}

/*                POST               */
module.exports.addOrder = function(data, callback){
	var Order = new this(data);
	Order.save(callback);
}

/*                PUT               */

module.exports.updateOrder = function(id, data, options, callback){
	var query = { _id : id };

	var update = {
		CustomerId  : data.CustomerId,
		EmployeeId  : data.EmployeeId,
		OrderDate   : data.OrderDate,
		ShippedDate : data.ShippedDate,
		ShipCountry : data.ShipCountry,
		ShipperId   : data.ShipperId

	}

	 Order.findOneAndUpdate(query, update, options, callback);

}

/*                DELETE              */
module.exports.removeOrder = function(id, callback){
	var query = { _id : id };
	Order.remove(query, callback);
}


