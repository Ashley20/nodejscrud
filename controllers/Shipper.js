var Shipper = require('../models/Shipper');
var payloadValidator = require('payload-validator');
var expectedPayload = {
    "CompanyName" : "",
	"Phone" : ""

};


exports.create = function(req, res, next){
	if(req.body) {
            var result = payloadValidator.validator(req.body,expectedPayload,["CompanyName"],false);
            if(result.success) {
                res.json({"message" : "Payload is valid"});
                Shipper.addShipper(req.body , function(err, result){
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
	
	Shipper.getShippers(function(err, result){
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
                Shipper.updateShipper(req.params.id, req.body, {}, function(err, result) {
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
	
	Shipper.removeShipper(req.params.id, function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});
}