var Territory = require('../models/Territory');

exports.create = function(req, res){
	
	Territory.addTerritory(req.body , function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.get = function(req, res){
	
	Territory.getTerritories(function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.update = function (req, res){
    Territory.updateTerritory(req.params.id, req.body, {}, function(err, result) {
        if (err) {
          res.send(err);
        } 
        res.json(result);
        
    });

}

exports.delete = function(req, res){
	
	Territory.removeTerritory(req.params.id, function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});
}