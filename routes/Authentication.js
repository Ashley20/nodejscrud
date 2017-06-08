var User = require('../controllers/User');
var MassMailer = require('../massmailer/MassMailer');

// API Server Endpoints
module.exports = function(router){
	router.post('/authenticate', User.authenticate),
	router.post('/user', User.create),
	router.get('/authenticate', User.showLoginForm),
	router.get('/verify', User.verify),
	router.get('/users', User.get),
	router.get('/email', MassMailer.massMailer)
	

}