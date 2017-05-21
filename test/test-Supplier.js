var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Supplier Tests', function(){


	it('should get ALL suppliers', function(done){
		chai.request(server)
		  .get('/suppliers')
		  .end(function(err, res){
		  	res.should.have.status(200);
		  });
		  done();

	});

	it('should save a supplier to the database', function(done){
		chai.request(server)
		  .post('/suppliers')
		  .send({'CompanyName': 'test', 'ContactName': 'test', 'Phone': '432', 'Adress': 'saas', 'HomePage':'www', 'PostalCode': '6000'})
		  .end(function(err, res){
		  	res.should.have.status(200);
		  	done();
		  });

	});

	it('should update a supplier in the database', function(done){
		chai.request(server)
		  .get('/suppliers')
		  .end(function(err, res){
		  	chai.request(server)
		  	  .put('/suppliers/'  + res.body[1]._id)
		  	  .send({'CompanyName': 'testupdateedildi', 'ContactName': 'test', 'Phone': '432', 'Adress': 'saas', 'HomePage':'www', 'PostalCode': '6000'})
		  	  .end(function(err, res){
		  	  	res.should.have.status(200);
		  	  	done();
		  	  });
		  });
	});



	it('should delete a supplier from the database', function(done){
		chai.request(server)
		  .get('/suppliers')
		  .end(function(err, res){
		  	chai.request(server)
		  	  .delete('/suppliers/' + res.body[0]._id)
		  	  .end(function(err, res){
		  	  	res.should.have.status(200);
		  	  	done();
		  	  });
		  });
	});


});