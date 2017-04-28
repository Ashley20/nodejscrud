var Supplier = require('../controllers/Supplier');

// API Server Endpoints
module.exports = function(router){
	router.post('/suppliers', Supplier.create),
	router.get('/suppliers', Supplier.get),
	router.put('/suppliers/:id', Supplier.update),
	router.delete('/suppliers/:id', Supplier.delete)

}