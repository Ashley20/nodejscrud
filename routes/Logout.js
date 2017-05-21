var User = require('../controllers/User');

// API Server Endpoints
module.exports = function(router){
	router.get('/logout', User.logout)
	

}