var Customer = require('../controllers/Customer');

// API Server Endpoints
module.exports = function(router){
	router.post('/customers', Customer.create),
	router.get('/customers', Customer.get),
	router.put('/customers/:id', Customer.update),
	router.delete('/customers/:id', Customer.delete)

}