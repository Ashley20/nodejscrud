var Order = require('../models/Order');
var payloadValidator = require('payload-validator');
var expectedPayload = {
    "CustomerId" : "",
	"EmployeeId" : "",
	"OrderDate" : "",
	"ShippedDate" : "",
	"ShipCountry": "",
	"ShipperId"  : ""
};

exports.create = function(req, res, next){
	if(req.body) {
            var result = payloadValidator.validator(req.body,expectedPayload,[""],false);
            if(result.success) {
                res.json({"message" : "Payload is valid"});
                Order.addOrder(req.body , function(err, result){
					if(err){
						return next(err);
					}

					res.json(result);

				});

            } else {
                res.json({"message" : result.response.errorMessage});
            }
        } else {
            res.json({"message" : "paylod not correct"});
        }
	
	

}

exports.get = function(req, res, next){
	
	Order.getOrders(function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});

}

exports.update = function (req, res, next){
	if(req.body) {
            var result = payloadValidator.validator(req.body,expectedPayload,[""],false);
            if(result.success) {
                res.json({"message" : "Payload is valid"});
                Order.updateOrder(req.params.id, req.body, {}, function(err, result) {
			        if (err) {
			          return next(err);
			        } 
			        res.json(result);
			        
			    });
            } else {
                res.json({"message" : result.response.errorMessage});
            }
        } else {
            res.json({"message" : "paylod not correct"});
        }

}

exports.delete = function(req, res, next){
	
	Order.removeOrder(req.params.id, function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});
}