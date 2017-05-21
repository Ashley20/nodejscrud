var Region = require('../controllers/Region');
var RequireLogin = require('../RequireLogin');

// API Server Endpoints
module.exports = function(router){
	router.post('/regions', Region.create),
	router.get('/regions',RequireLogin.requireLogin,  Region.get),
	router.put('/regions/:id',RequireLogin.requireLogin, Region.update),
	router.delete('/regions/:id', Region.delete)

}