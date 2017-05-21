var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Category Tests', function(){
	it('should list ALL categories on /categories GET', function(done){
		chai.request(server)
		  .get('/categories')
		  .end(function(err, res){
		  	res.should.have.status(200);
		  	done();

		  });
	});

	it('should add a single category to the database', function(done){
		chai.request(server)
		  .post('/categories')
		  .send({'CategoryName': 'testCategory', 'Description': 'This category added for testing purpose', 'Picture': 'No picture provided'})
		  .end(function(err, res){
		  	res.should.have.status(200);
		  	console.log(res.body);
		  	done();

		  });
	});

	it('should delete a single category from the database', function(done){
		chai.request(server)
		  .get('/categories')
		  .end(function(err, res){
		  	chai.request(server)
		  	  .delete('/categories/' + res.body[4]._id)
		  	  .end(function(err, res){
		  	  	res.should.have.status(200);
		  	  	res.should.be.json;
		  	  	done();

		  	  });

		  });
	});

	it('should update a single category on /categories/:id', function(done){
		chai.request(server)
		  .get('/categories')
		  .end(function(err, res){
		  	chai.request(server)
		  	  .put('/categories/' + res.body[2]._id)
		  	  .send({'CategoryName': 'changed', 'Description': 'changed', 'Picture': 'changed'})
		  	  .end(function(err, res){
		  	  	 res.should.have.status(200);
		  	  	 done();

		  	  });
		  });
	});
});