var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Shipper Tests', function(){


	it('should get ALL shippers', function(done){
		chai.request(server)
		  .get('/shippers')
		  .end(function(err, res){
		  	res.should.have.status(200);
		  });
		  done();

	});

	it('should save a shipper to the database', function(done){
		chai.request(server)
		  .post('/shippers')
		  .send({'CompanyName': 'testing Company', 'Phone': '99'})
		  .end(function(err, res){
		  	res.should.have.status(200);
		  	done();
		  });

	});

	it('should update a shipper in the database', function(done){
		chai.request(server)
		  .get('/shippers')
		  .end(function(err, res){
		  	chai.request(server)
		  	  .put('/shippers/'  + res.body[1]._id)
		  	  .send({'CompanyName': 'testing Company', 'Phone': '99'})
		  	  .end(function(err, res){
		  	  	res.should.have.status(200);
		  	  	done();
		  	  });
		  });
	});



	it('should delete a shipper from the database', function(done){
		chai.request(server)
		  .get('/shippers')
		  .end(function(err, res){
		  	chai.request(server)
		  	  .delete('/shippers/' + res.body[0]._id)
		  	  .end(function(err, res){
		  	  	res.should.have.status(200);
		  	  	done();
		  	  });
		  });
	});


});