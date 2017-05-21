var User = require('../controllers/User');

// API Server Endpoints
module.exports = function(router){
	router.post('/authenticate', User.authenticate),
	router.post('/user', User.create),
	router.get('/authenticate', User.showLoginForm),
	router.get('/users', User.get)
	

}