var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Region Tests', function(){
	it('should get ALL regions', function(done){
		chai.request(server)
		  .get('/regions')
		  .end(function(err, res){
		  	res.should.have.status(200);
		  });
		  done();

	});

	it('should save a region to the database', function(done){
		chai.request(server)
		  .post('/regions')
		  .send({'RegionDescription': ' I am testing region '})
		  .end(function(err, res){
		  	res.should.have.status(200);
		  	done();
		  });

	});

	it('should update a region in the database', function(done){
		chai.request(server)
		  .get('/regions')
		  .end(function(err, res){
		  	chai.request(server)
		  	  .put('/regions/'  + res.body[1]._id)
		  	  .send({'RegionDescription' : ' degisti'})
		  	  .end(function(err, res){
		  	  	res.should.have.status(200);
		  	  	done();
		  	  });
		  });
	});

	it('should delete a region from the database', function(done){
		chai.request(server)
		  .get('/regions')
		  .end(function(err, res){
		  	chai.request(server)
		  	  .delete('/regions/' + res.body[2]._id)
		  	  .end(function(err, res){
		  	  	res.should.have.status(200);
		  	  	done();
		  	  });
		  });
	});


});