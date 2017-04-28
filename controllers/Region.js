var Region = require('../models/Region');

exports.create = function(req, res){
	
	Region.addRegion(req.body , function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.get = function(req, res){
	
	Region.getRegions(function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.update = function (req, res){
    Region.updateRegion(req.params.id, req.body, {}, function(err, result) {
        if (err) {
          res.send(err);
        } 
        res.json(result);
        
    });

}

exports.delete = function(req, res){
	
	Region.removeRegion(req.params.id, function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});
}