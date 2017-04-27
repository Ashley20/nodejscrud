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
module.exports.addOrder = function(Order, callback){
	Order.save(callback);
}

/*                PUT               */

module.exports.updateOrder = function(id, newOrder, options, callback){
	var query = { _id : id };

	var update = {
		CustomerId: newOrder.CustomerId,
		EmployeeId : newOrder.EmployeeId,
		OrderDate : newOrder.OrderDate,
		ShippedDate : newOrder.ShippedDate,
		ShipCountry : newOrder.ShipCountry,
		ShipperId : newOrder.ShipperId

	}

	 Order.findOneAndUpdate(query, update, options, callback);

}

/*                DELETE              */
module.exports.removeOrder = function(id, callback){
	var query = { _id : id };
	Order.remove(query, callback);
}


