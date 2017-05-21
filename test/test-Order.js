var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Order Tests', function(){


	it('should get ALL orders', function(done){
		chai.request(server)
		  .get('/orders')
		  .end(function(err, res){
		  	res.should.have.status(200);
		  });
		  done();

	});

	it('should save a order to the database', function(done){
		chai.request(server)
		  .post('/orders')
		  .send({'CustomerId': '58f9b5fa7784b62c7d55835d', 'EmployeeId': '591c249d1ba18d204006128f', 'ShipCountry': 'Turkey', 'ShipperId':'58f9b6457784b62c7d55835e'})
		  .end(function(err, res){
		  	res.should.have.status(200);
		  	done();
		  });

	});

	it('should update a order in the database', function(done){
		chai.request(server)
		  .get('/orders')
		  .end(function(err, res){
		  	chai.request(server)
		  	  .put('/orders/'  + res.body[1]._id)
		  	  .send({'CustomerId': '58f9b5fa7784b62c7d55835d', 'EmployeeId': '591c220b391dca06a4b9f646', 'ShipCountry': 'Turkiye', 'ShipperId':'58f9b6457784b62c7d55835e'})
		  	  .end(function(err, res){
		  	  	res.should.have.status(200);
		  	  	done();
		  	  });
		  });
	});



	it('should delete a order from the database', function(done){
		chai.request(server)
		  .get('/orders')
		  .end(function(err, res){
		  	chai.request(server)
		  	  .delete('/orders/' + res.body[0]._id)
		  	  .end(function(err, res){
		  	  	res.should.have.status(200);
		  	  	done();
		  	  });
		  });
	});


});