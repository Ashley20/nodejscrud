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
module.exports.addTerritory = function(Territory, callback){
	Territory.save(callback);
}

/*                PUT               */
module.exports.updateTerritory = function(id, newTerritory, options, callback){
	var query = { _id : id };
	var update = {
		TerritoryDescription : newTerritory.TerritoryDescription,
		region_ids : newTerritory.region_ids
	}

	Territory.findOneAndUpdate(query, update, options, callback);
}

/*                DELETE              */
module.exports.removeTerritory = function(id, callback){
	var query = { _id : id };
	Territory.remove(query, callback);
}