var Region = require('../controllers/Region');

// API Server Endpoints
module.exports = function(router){
	router.post('/regions', Region.create),
	router.get('/regions',  Region.get),
	router.put('/regions/:id', Region.update),
	router.delete('/regions/:id', Region.delete)

}