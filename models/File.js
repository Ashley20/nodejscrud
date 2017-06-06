'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fileSchema = new Schema({

	fieldname    : {required: true, type: String},
	originalname : {required: true, type: String},
	encoding     : {required: true, type: String},
	mimetype     : {required: true, type: String},
	destination  : {required: true, type: String},
	filename     : {required: true, type: String},
	path         : {required: true, type: String},
	size         : {required: true, type: Number}

});

var File = module.exports = mongoose.model('File', fileSchema);

/*                GET                */
module.exports.getFiles = function(callback, limit){
	File.find(callback).limit(limit);
}

module.exports.getFileById = function(id, callback){
	File.findById(id, callback);
}


/*                POST               */
module.exports.addFile = function(data, callback){
	var File = new this(data);
	File.save(callback);

}


/*                PUT               */

module.exports.updateFile = function(id, data, options, callback){
	var query = { _id : id };
    var update = {
    	fieldname    : data.fieldname,
    	originalname : data.originalname,
    	encoding     : data.encoding,
    	mimetype     : data.mimetype,
    	destination  : data.destination,
    	filename     : data.filename,
    	path         : data.path,
    	size         : data.size
    }
	 File.findOneAndUpdate(query, update, options, callback);

}

/*                DELETE              */
module.exports.removeFile = function(id, callback){
	var query = { _id : id };
	File.remove(query, callback);
}