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
module.exports.addRegion = function(Region, callback){
	Region.save(callback);
}

/*                PUT               */
module.exports.updateRegion = function(id, newRegion, options, callback){
	var query = { _id : id };
	var update = {
		RegionDescription : newRegion.RegionDescription
	}

	Region.findOneAndUpdate(query, update, options, callback);
}

/*                DELETE              */
module.exports.removeRegion = function(id, callback){
	var query = { _id : id };
	Region.remove(query, callback);
}

