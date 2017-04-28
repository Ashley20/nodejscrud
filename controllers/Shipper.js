var Shipper = require('../models/Shipper');

exports.create = function(req, res){
	
	Shipper.addShipper(req.body , function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.get = function(req, res){
	
	Shipper.getShippers(function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.update = function (req, res){
    Shipper.updateShipper(req.params.id, req.body, {}, function(err, result) {
        if (err) {
          res.send(err);
        } 
        res.json(result);
        
    });

}

exports.delete = function(req, res){
	
	Shipper.removeShipper(req.params.id, function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});
}