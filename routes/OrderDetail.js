var OrderDetail = require('../controllers/OrderDetail');

// API Server Endpoints
module.exports = function(router){
	router.post('/orderdetails', OrderDetail.create),
	router.get('/orderdetails', OrderDetail.get),
	router.put('/orderdetails/:id', OrderDetail.update),
	router.delete('/orderdetails/:id', OrderDetail.delete)

}