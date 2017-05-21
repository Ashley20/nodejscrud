var Shipper = require('../controllers/Shipper');
var RequireLogin = require('../RequireLogin');

// API Server Endpoints
module.exports = function(router){
	router.post('/shippers', Shipper.create),
	router.get('/shippers',RequireLogin.requireLogin, Shipper.get),
	router.put('/shippers/:id', Shipper.update),
	router.delete('/shippers/:id', Shipper.delete)

}