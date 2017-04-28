
/* Dependency modules */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connection;

var routes = require('./routes/Category');


var app = express();

var router = express.Router();

app.use(router);
router.use(bodyParser.json());

require('./routes/Category')(router);
require('./routes/Region')(router);
require('./routes/Customer')(router);
require('./routes/Employee')(router);
require('./routes/Order')(router);
require('./routes/OrderDetail')(router);
require('./routes/Product')(router);
require('./routes/Shipper')(router);
require('./routes/Supplier')(router);
require('./routes/Territory')(router);





// Connect to Mongoose
mongoose.connect('mongodb://localhost/northwind', function(err, database){
	if(err){
		console.log(err);
	}
});


app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.listen(4000);


	



console.log("Listening to PORT 4000");