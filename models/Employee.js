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
module.exports.addEmployee = function(Employee, callback){
	Employee.save(callback);
}

/*                PUT               */
module.exports.updateEmployee = function(id, newEmployee, options, callback){
	var query = { _id : id };
	var update = {
		firstName : newEmployee.firstName,
		lastName : newEmployee.lastName,
		birthDate : newEmployee.birthDate,
		hireDate : newEmployee.hireDate,
		Phone : newEmployee.Phone,
		Adress : newEmployee.Adress,
		Notes : newEmployee.Notes,
		ImageUrl : newEmployee.ImageUrl,
		territoryId :newEmployee.territoryId
	}

	Employee.findOneAndUpdate(query, update, options, callback);
}

/*                DELETE              */
module.exports.removeEmployee = function(id, callback){
	var query = { _id : id };
	Employee.remove(query, callback);
}