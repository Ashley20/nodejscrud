var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Employee Tests', function(){
	it('should get ALL employees', function(done){
		chai.request(server)
		  .get('/employees')
		  .end(function(err, res){
		  	res.should.have.status(200);
		  });
		  done();

	});

	it('should save a employee to the database', function(done){
		chai.request(server)
		  .post('/employees')
		  .send({'firstName': ' I am testing employee ', 'lastName': 'sa', 'Phone':'2312', 'territoryId': '58f8e281b1281814e1b8af9f'})
		  .end(function(err, res){
		  	res.should.have.status(200);
		  	done();
		  });

	});
/*
	it('should update a employee in the database', function(done){
		chai.request(server)
		  .get('/employees')
		  .end(function(err, res){
		  	chai.request(server)
		  	  .put('/employees/'  + res.body[1]._id)
		  	  .send({'firstName': ' I am testing employee ', 'lastName': 'sa', 'Phone':'2312', 'territoryId': '58f8e281b1281814e1b8af9f'})
		  	  .end(function(err, res){
		  	  	res.should.have.status(200);
		  	  	done();
		  	  });
		  });
	});

	it('should delete a employee from the database', function(done){
		chai.request(server)
		  .get('/employees')
		  .end(function(err, res){
		  	chai.request(server)
		  	  .delete('/employees/' + res.body[0]._id)
		  	  .end(function(err, res){
		  	  	res.should.have.status(200);
		  	  	done();
		  	  });
		  });
	});

*/
});