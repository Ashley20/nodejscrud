var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('User Tests', function(){
	it('should get ALL users', function(done){
		chai.request(server)
		  .get('/users')
		  .end(function(err, res){
		  	res.should.have.status(200);
		  });
		  done();

	});

	it('should save a user to the database', function(done){
		chai.request(server)
		  .post('/user')
		  .send({'name': ' nameTest', 'password' : 'passwordTest', 'email': 'emailTest'})
		  .end(function(err, res){
		  	res.should.have.status(200);
		  	done();
		  });

	});

	it('should authenticate the user', function(done){
		chai.request(server)
		  .post('/authenticate')
		  .send({'name': ' nameTest', 'password' : 'passwordTest', 'email': 'emailTest'})
		  .end(function(err, res){
		  	res.should.have.status(200);
		  	console.log(res.body);
		  	done();
		  });

	});

	


});