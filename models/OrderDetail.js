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
module.exports.addOrderDetail = function(OrderDetail, callback){
	OrderDetail.save(callback);
}

/*                PUT               */
module.exports.updateOrderDetail = function(id, newOrderDetail, options, callback){
	var query = { _id : id };
	var update = {
		ProductId : newOrderDetail.ProductId,
		UnitPrice : newOrderDetail.UnitPrice,
		Quantity : newOrderDetail.Quantity,
		Discount : newOrderDetail.Discount
	}

	OrderDetail.findOneAndUpdate(query, update, options, callback);
}

/*                DELETE              */
module.exports.removeOrderDetail = function(id, callback){
	var query = { _id : id };
	OrderDetail.remove(query, callback);
}