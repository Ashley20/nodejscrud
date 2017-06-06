var Customer = require('../models/Customer');
var payloadValidator = require('payload-validator');
var expectedPayload = {
    "companyName" : "",
	"contactName" : "",
	"Phone" : "",
	"Adress" : "",
    "Region" : ""
};

exports.create = function(req, res, next){

	if(req.body) {
            var result = payloadValidator.validator(req.body,expectedPayload,["companyName","contactName"],false);
            if(result.success) {
                res.json({"message" : "Payload is valid"});

                Customer.addCustomer(req.body , function(err, result){
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
	
	Customer.getCustomers(function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});

}

exports.update = function (req, res, next){
	if(req.body){
		var result = payloadValidator.validator(req.body,expectedPayload,["companyName","contactName"],false);
		if(result.success) {
                res.json({"message" : "Payload is valid"});
                Customer.updateCustomer(req.params.id, req.body, {}, function(err, result) {
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
	
	Customer.removeCustomer(req.params.id, function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});
}