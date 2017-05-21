var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Customer Tests', function(){
	it('should get ALL customers', function(done){
		chai.request(server)
		  .get('/customers')
		  .end(function(err, res){
		  	res.should.have.status(200);
		  });
		  done();

	});

	it('should save a customer to the database', function(done){
		chai.request(server)
		  .post('/customers')
		  .send({'companyName': ' testing company', 'contactName': 'testing', 'Phone': '232312', 'Adress': 'bsadas', 'Region': '58f99c9d08d9072318286f1b'})
		  .end(function(err, res){
		  	res.should.have.status(200);
		  	done();
		  });

	});

	it('should update a customer in the database', function(done){
		chai.request(server)
		  .get('/customers')
		  .end(function(err, res){
		  	chai.request(server)
		  	  .put('/customers/'  + res.body[1]._id)
		  	  .send({'companyName': ' degistrdm', 'contactName': 'testing', 'Phone': '232312', 'Adress': 'bsadas', 'Region': '58f99c9d08d9072318286f1b'})
		  	  .end(function(err, res){
		  	  	res.should.have.status(200);
		  	  	done();
		  	  });
		  });
	});

	it('should delete a customer from the database', function(done){
		chai.request(server)
		  .get('/customers')
		  .end(function(err, res){
		  	chai.request(server)
		  	  .delete('/customers/' + res.body[2]._id)
		  	  .end(function(err, res){
		  	  	res.should.have.status(200);
		  	  	done();
		  	  });
		  });
	});


});