var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Territory Tests', function(){


	it('should get ALL territories', function(done){
		chai.request(server)
		  .get('/territories')
		  .end(function(err, res){
		  	res.should.have.status(200);
		  });
		  done();

	});

	it('should save a territory to the database', function(done){
		chai.request(server)
		  .post('/territories')
		  .send({'TerritoryDescription': 'test terr', 'region_ids' : ['58fc778f711d3b243402fe3c', '591c1836cac22b1db813fb75']})
		  .end(function(err, res){
		  	res.should.have.status(200);
		  	done();
		  });

	});

	it('should update a territory in the database', function(done){
		chai.request(server)
		  .get('/territories')
		  .end(function(err, res){
		  	chai.request(server)
		  	  .put('/territories/'  + res.body[1]._id)
		  	  .send({'TerritoryDescription': 'test terr degisti', 'region_ids' : ['58fc778f711d3b243402fe3c', '591c1836cac22b1db813fb75']})
		  	  .end(function(err, res){
		  	  	res.should.have.status(200);
		  	  	done();
		  	  });
		  });
	});



	it('should delete a territory from the database', function(done){
		chai.request(server)
		  .get('/territories')
		  .end(function(err, res){
		  	chai.request(server)
		  	  .delete('/territories/' + res.body[0]._id)
		  	  .end(function(err, res){
		  	  	res.should.have.status(200);
		  	  	done();
		  	  });
		  });
	});


});