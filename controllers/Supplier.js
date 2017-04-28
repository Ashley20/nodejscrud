var Supplier = require('../models/Supplier');

exports.create = function(req, res){
	
	Supplier.addSupplier(req.body , function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.get = function(req, res){
	
	Supplier.getSuppliers(function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.update = function (req, res){
    Supplier.updateSupplier(req.params.id, req.body, {}, function(err, result) {
        if (err) {
          res.send(err);
        } 
        res.json(result);
        
    });

}

exports.delete = function(req, res){
	
	Supplier.removeSupplier(req.params.id, function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});
}