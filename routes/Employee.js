var Employee = require('../controllers/Employee');

// API Server Endpoints
module.exports = function(router){
	router.post('/employees', Employee.create),
	router.get('/employees',  Employee.get),
	router.put('/employees/:id', Employee.update),
	router.delete('/employees/:id', Employee.delete)

}