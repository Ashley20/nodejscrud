var Employee = require('../models/Employee');
var payloadValidator = require('payload-validator');
var expectedPayload = {
    "firstName" : "",
	"lastName" : "",
	"birthDate" : "",
	"hireDate" : "",
	"Phone" : "",
	"Adress" : "",
	"Notes" : "",
	"ImageUrl" : "",
	"territoryId"  : ""
};

exports.create = function(req, res, next){

	if(req.body) {
            var result = payloadValidator.validator(req.body,expectedPayload,["firstName","lastName"],false);
            if(result.success) {
                res.json({"message" : "Payload is valid"});
                Employee.addEmployee(req.body , function(err, result){
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
	
	Employee.getEmployees(function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});

}

exports.update = function (req, res, next){
	if(req.body) {
            var result = payloadValidator.validator(req.body,expectedPayload,["firstName","lastName"],false);
            if(result.success) {
                res.json({"message" : "Payload is valid"});
                Employee.updateEmployee(req.params.id, req.body, {}, function(err, result) {
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
	
	Employee.removeEmployee(req.params.id, function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});
}