var Employee = require('../models/Employee');

exports.create = function(req, res){
	
	Employee.addEmployee(req.body , function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.get = function(req, res){
	
	Employee.getEmployees(function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.update = function (req, res){
    Employee.updateEmployee(req.params.id, req.body, {}, function(err, result) {
        if (err) {
          res.send(err);
        } 
        res.json(result);
        
    });

}

exports.delete = function(req, res){
	
	Employee.removeEmployee(req.params.id, function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});
}