var Order = require('../models/Order');

exports.create = function(req, res){
	
	Order.addOrder(req.body , function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.get = function(req, res){
	
	Order.getOrders(function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.update = function (req, res){
    Order.updateOrder(req.params.id, req.body, {}, function(err, result) {
        if (err) {
          res.send(err);
        } 
        res.json(result);
        
    });

}

exports.delete = function(req, res){
	
	Order.removeOrder(req.params.id, function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});
}