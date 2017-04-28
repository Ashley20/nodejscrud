var Customer = require('../models/Customer');

exports.create = function(req, res){
	
	Customer.addCustomer(req.body , function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.get = function(req, res){
	
	Customer.getCustomers(function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.update = function (req, res){
    Customer.updateCustomer(req.params.id, req.body, {}, function(err, result) {
        if (err) {
          res.send(err);
        } 
        res.json(result);
        
    });

}

exports.delete = function(req, res){
	
	Customer.removeCustomer(req.params.id, function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});
}