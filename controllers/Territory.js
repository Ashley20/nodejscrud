var Territory = require('../models/Territory');
var payloadValidator = require('payload-validator');
var expectedPayload = {
    "TerritoryDescription":"",
    "region_ids":[""]
       
};

exports.create = function(req, res, next){
	if(req.body) {
            var result = payloadValidator.validator(req.body,expectedPayload,["TerritoryDescription"],false);
            if(result.success) {
                res.json({"message" : "Payload is valid"});
                Territory.addTerritory(req.body , function(err, result){
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
	
	Territory.getTerritories(function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});

}

exports.update = function (req, res, next){
	if(req.body) {
            var result = payloadValidator.validator(req.body,expectedPayload,["TerritoryDescription"],false);
            if(result.success) {
                res.json({"message" : "Payload is valid"});
                 Territory.updateTerritory(req.params.id, req.body, {}, function(err, result) {
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
	
	Territory.removeTerritory(req.params.id, function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});
}