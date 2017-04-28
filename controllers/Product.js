var Product = require('../models/Product');

exports.create = function(req, res){
	
	Product.addProduct(req.body , function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.get = function(req, res){
	
	Product.getProducts(function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.update = function (req, res){
    Product.updateProduct(req.params.id, req.body, {}, function(err, result) {
        if (err) {
          res.send(err);
        } 
        res.json(result);
        
    });

}

exports.delete = function(req, res){
	
	Product.removeProduct(req.params.id, function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});
}