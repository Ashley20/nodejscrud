var Supplier = require('../models/Supplier');
var payloadValidator = require('payload-validator');
var expectedPayload = {
    "CompanyName" : "",
	"ContactName" : "",
	"Phone" : "",
	"Adress" : "",
	"HomePage" : "",
	"PostalCode" : ""


};

exports.create = function(req, res, next){
	if(req.body) {
            var result = payloadValidator.validator(req.body,expectedPayload,["CompanyName"],false);
            if(result.success) {
                res.json({"message" : "Payload is valid"});
                Supplier.addSupplier(req.body , function(err, result){
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
	
	Supplier.getSuppliers(function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});

}

exports.update = function (req, res, next){
	if(req.body) {
            var result = payloadValidator.validator(req.body,expectedPayload,["CompanyName"],false);
            if(result.success) {
                res.json({"message" : "Payload is valid"});
                Supplier.updateSupplier(req.params.id, req.body, {}, function(err, result) {
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
	
	Supplier.removeSupplier(req.params.id, function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});
}