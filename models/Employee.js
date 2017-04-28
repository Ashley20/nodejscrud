'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
	firstName : {type: String, required : true},
	lastName : {type : String, required : true},
	birthDate : {type : Date, default : Date.now },
	hireDate : {type : Date, default : Date.now },
	Phone : {type : String },
	Adress : {type : String },
	Notes : {type: String },
	ImageUrl : {type: String},
	territoryId  : {type : Schema.Types.ObjectId, ref:'Territory'}
});

var Employee = module.exports = mongoose.model('Employee', employeeSchema);

/*                GET                */
module.exports.getEmployees = function(callback, limit){
	Employee.find(callback).populate('territoryId').limit(limit);
}

/*                POST               */
module.exports.addEmployee = function(data, callback){
	var Employee = new this(data);
	Employee.save(callback);
}

/*                PUT               */
module.exports.updateEmployee = function(id, data, options, callback){
	var query = { _id : id };
	var update = {
		firstName   : data.firstName,
		lastName    : data.lastName,
		birthDate   : data.birthDate,
		hireDate    : data.hireDate,
		Phone       : data.Phone,
		Adress      : data.Adress,
		Notes       : data.Notes,
		ImageUrl    : data.ImageUrl,
		territoryId : data.territoryId
	}

	Employee.findOneAndUpdate(query, update, options, callback);
}

/*                DELETE              */
module.exports.removeEmployee = function(id, callback){
	var query = { _id : id };
	Employee.remove(query, callback);
}