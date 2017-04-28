'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderdetailSchema = new Schema({
	ProductId: {type : Schema.Types.ObjectId, ref :'Product'},
	UnitPrice : {type: Number},
	Quantity : {type: Number},
	Discount : {type: Number}

});

var OrderDetail = module.exports = mongoose.model('OrderDetail', orderdetailSchema);

/*                GET                */
module.exports.getOrderDetails = function(callback, limit){
	OrderDetail.find(callback).populate('ProductId').limit(limit);
}

/*                POST               */
module.exports.addOrderDetail = function(data, callback){
	var OrderDetail = new this(data);
	OrderDetail.save(callback);
}

/*                PUT               */
module.exports.updateOrderDetail = function(id, data, options, callback){
	var query = { _id : id };
	var update = {
		ProductId : data.ProductId,
		UnitPrice : data.UnitPrice,
		Quantity  : data.Quantity,
		Discount  : data.Discount
	}

	OrderDetail.findOneAndUpdate(query, update, options, callback);
}

/*                DELETE              */
module.exports.removeOrderDetail = function(id, callback){
	var query = { _id : id };
	OrderDetail.remove(query, callback);
}