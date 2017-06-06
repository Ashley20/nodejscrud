var OrderDetail = require('../models/OrderDetail');
var payloadValidator = require('payload-validator');
var expectedPayload = {
    "ProductId": "",
	"UnitPrice" : 0,
	"Quantity" : 0,
	"Discount" : 0
};

exports.create = function(req, res, next){
	if(req.body) {
            var result = payloadValidator.validator(req.body,expectedPayload,[""],false);
            if(result.success) {
                res.json({"message" : "Payload is valid"});
                OrderDetail.addOrderDetail(req.body , function(err, result){
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
	
	OrderDetail.getOrderDetails(function(err, result){
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
                OrderDetail.updateOrderDetail(req.params.id, req.body, {}, function(err, result) {
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
	
	OrderDetail.removeOrderDetail(req.params.id, function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});
}