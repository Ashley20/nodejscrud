var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

	name : {
		type : String,
		required : true
	},

	password : {
		type : String
	},

	email: {
		type : String
	}

	

});


var User = module.exports = mongoose.model('User', userSchema);


module.exports.getUsers = function(callback){
	User.find({}, callback);

}

module.exports.findUserByName = function(username, callback){
	
	User.findOne({name : username}, callback);

}

/*                POST               */
module.exports.addUser = function(data, callback){
	var User = new this(data);
	User.save(callback);
}