var Product = require('../controllers/Product');

// API Server Endpoints
module.exports = function(router){
	router.post('/products', Product.create),
	router.get('/products', Product.get),
	router.put('/products/:id', Product.update),
	router.delete('/products/:id', Product.delete)

}