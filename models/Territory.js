'use strict';

var mongoose = require('mongoose');


// Territory Schema
  var territorySchema = mongoose.Schema({
	TerritoryDescription:{
		type: String,
		required: true
	},
    region_ids:[ 
       {type : mongoose.Schema.Types.ObjectId, ref:'Region', autopopulate : true}
    ]
	
});

var Territory = module.exports  =  mongoose.model('Territory', territorySchema);

/*                GET                */
module.exports.getTerritories = function(callback, limit){
	Territory.find(callback).populate('region_ids').limit(limit);
}

/*                POST               */
module.exports.addTerritory = function(data, callback){
	var Territory = new this(data);
	Territory.save(callback);
}

/*                PUT               */
module.exports.updateTerritory = function(id, data, options, callback){
	var query = { _id : id };
	var update = {
		TerritoryDescription : data.TerritoryDescription,
		region_ids           : data.region_ids
	}

	Territory.findOneAndUpdate(query, update, options, callback);
}

/*                DELETE              */
module.exports.removeTerritory = function(id, callback){
	var query = { _id : id };
	Territory.remove(query, callback);
}