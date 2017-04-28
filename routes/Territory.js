var Territory = require('../controllers/Territory');

// API Server Endpoints
module.exports = function(router){
	router.post('/territories', Territory.create),
	router.get('/territories', Territory.get),
	router.put('/territories/:id', Territory.update),
	router.delete('/territories/:id', Territory.delete)

}