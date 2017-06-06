var path = require('path');
var File = require('../models/File');



exports.showForm = function(req, res){
	
 res.sendFile(path.join( 'C:/projects/crud/public/views/fileupload.html'));
}

exports.uploadFile = function(req, res, next){
    
	if(req.files) {
		(req.files).forEach(function (item) {
			File.addFile(item, function(err, result){
			if(err){
				return next(err);
			}
			res.json(req.files);
		});
          
        });
		
	}
	
}

exports.get = function(req, res, next){
	File.getFiles(function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});

}

exports.delete = function(req ,res ,next){
	File.removeFile(req.params.id, function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});
}