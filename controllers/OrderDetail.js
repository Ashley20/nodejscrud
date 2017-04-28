var OrderDetail = require('../models/OrderDetail');

exports.create = function(req, res){
	
	OrderDetail.addOrderDetail(req.body , function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.get = function(req, res){
	
	OrderDetail.getOrderDetails(function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.update = function (req, res){
    OrderDetail.updateOrderDetail(req.params.id, req.body, {}, function(err, result) {
        if (err) {
          res.send(err);
        } 
        res.json(result);
        
    });

}

exports.delete = function(req, res){
	
	OrderDetail.removeOrderDetail(req.params.id, function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});
}