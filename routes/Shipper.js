var Shipper = require('../controllers/Shipper');

// API Server Endpoints
module.exports = function(router){
	router.post('/shippers', Shipper.create),
	router.get('/shippers', Shipper.get),
	router.put('/shippers/:id', Shipper.update),
	router.delete('/shippers/:id', Shipper.delete)

}