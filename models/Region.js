'use strict';

var mongoose = require('mongoose');

// RegionSchema
var regionSchema = mongoose.Schema({
	RegionDescription:{required: true, type : String},

});

var Region = module.exports  =  mongoose.model('Region', regionSchema);

/*                GET                */
module.exports.getRegions = function(callback, limit){
	Region.find(callback).limit(limit);
	
}

/*                POST               */
module.exports.addRegion = function(data, callback){
	var Region = new this(data);
	Region.save(callback);
}

/*                PUT               */
module.exports.updateRegion = function(id, data, options, callback){
	var query = { _id : id };
	var update = {
		RegionDescription : data.RegionDescription
	}

	Region.findOneAndUpdate(query, update, options, callback);
}

/*                DELETE              */
module.exports.removeRegion = function(id, callback){
	var query = { _id : id };
	Region.remove(query, callback);
}

