var Product = require('../models/Product');
var payloadValidator = require('payload-validator');
var expectedPayload = {
    "ProductName" :"",
	"SupplierId": "",
	"CategoryId": "",
	"QuantityPerUnit" : 0,
	"UnitPrice" : 0,
	"UnitsInStock" : 0,
	"UnitsOnOrder" : 0


};

exports.create = function(req, res, next){
	if(req.body) {
            var result = payloadValidator.validator(req.body,expectedPayload,["ProductName"],false);
            if(result.success) {
                res.json({"message" : "Payload is valid"});
                Product.addProduct(req.body , function(err, result){
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
	
	Product.getProducts(function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});

}

exports.update = function (req, res, next){
	 if(req.body) {
            var result = payloadValidator.validator(req.body,expectedPayload,["ProductName"],false);
            if(result.success) {
                res.json({"message" : "Payload is valid"});
                Product.updateProduct(req.params.id, req.body, {}, function(err, result) {
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
	
	Product.removeProduct(req.params.id, function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});
}