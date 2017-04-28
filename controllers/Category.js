var Category = require('../models/Category');

exports.create = function(req, res){
	
	Category.addCategory(req.body , function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.get = function(req, res){
	
	Category.getCategories(function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.update = function (req, res){
    Category.updateCategory(req.params.id, req.body, {}, function(err, result) {
        if (err) {
          res.send(err);
        } 
        res.json(result);
        
    });

}

exports.delete = function(req, res){
	
	Category.removeCategory(req.params.id, function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});
}