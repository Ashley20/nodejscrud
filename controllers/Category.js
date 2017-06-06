var Category = require('../models/Category');
var payloadValidator = require('payload-validator');
var expectedPayload = {
    "CategoryName" : "",
	"Description" : "",
	"Picture" : ""
};

exports.create = function(req, res, next){

      if(req.body) {
            var result = payloadValidator.validator(req.body,expectedPayload,["CategoryName"],false);
            if(result.success) {
                res.json({"message" : "Payload is valid"});

                Category.addCategory(req.body , function(err, result){
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
	
	Category.getCategories(function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});

}

exports.update = function (req, res, next){

	if(req.body) {
            var result = payloadValidator.validator(req.body,expectedPayload,["CategoryName"],false);
            if(result.success) {
                res.json({"message" : "Payload is valid"});
                Category.updateCategory(req.params.id, req.body, {}, function(err, result) {
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
	
	Category.removeCategory(req.params.id, function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});
}