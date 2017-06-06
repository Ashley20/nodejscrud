var Region = require('../models/Region');
var payloadValidator = require('payload-validator');
var expectedPayload = {
    "RegionDescription" : ""

};

exports.create = function(req, res, next){
	if(req.body) {
            var result = payloadValidator.validator(req.body,expectedPayload,["RegionDescription"],false);
            if(result.success) {
                res.json({"message" : "Payload is valid"});
                Region.addRegion(req.body , function(err, result){
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
	
	Region.getRegions(function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});

}

exports.update = function (req, res, next){
	if(req.body) {
            var result = payloadValidator.validator(req.body,expectedPayload,["RegionDescription"],false);
            if(result.success) {
                res.json({"message" : "Payload is valid"});
                Region.updateRegion(req.params.id, req.body, {}, function(err, result) {
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
	
	Region.removeRegion(req.params.id, function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});
}