var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('order detail Detail Tests', function(){

	it('should get ALL orderdetails', function(done){
		chai.request(server)
		  .get('/orderdetails')
		  .end(function(err, res){
		  	res.should.have.status(200);
		  });
		  done();

	});

	it('should save a order detail to the database', function(done){
		chai.request(server)
		  .post('/orderdetails')
		  .send({'ProductId': '58f9b89e7784b62c7d558361', 'UnitPrice': '4', 'Discount': '50'})
		  .end(function(err, res){
		  	res.should.have.status(200);
		  	done();
		  });

	});

	it('should update a order detail in the database', function(done){
		chai.request(server)
		  .get('/orderdetails')
		  .end(function(err, res){
		  	chai.request(server)
		  	  .put('/orderdetails/'  + res.body[0]._id)
		  	  .send({'ProductId': '58f9b89e7784b62c7d558361', 'UnitPrice': '3', 'Discount': '50'})
		  	  .end(function(err, res){
		  	  	res.should.have.status(200);
		  	  	done();
		  	  });
		  });
	});



	it('should delete a order detail from the database', function(done){
		chai.request(server)
		  .get('/orderdetails')
		  .end(function(err, res){
		  	chai.request(server)
		  	  .delete('/orderdetails/' + res.body[0]._id)
		  	  .end(function(err, res){
		  	  	res.should.have.status(200);
		  	  	done();
		  	  });
		  });
	});


});