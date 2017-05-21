
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var chalk = require('chalk');
var logger = require('morgan');
var routes = require('./routes/Category');
var router = express.Router();
var app = express();
var is = require('is_js');
var jwt = require('jsonwebtoken');
var session = require('express-session');
var CookieParser = require('cookie-parser');
var User = require('./models/User');


  app.use(CookieParser());
  app.use(logger('dev'));
  app.set('secret', 'bicirik');
  app.use(session({resave: true, saveUninitialized: true, secret: 'SOMERANDOMSECRETHERE', cookie: { maxAge: 60000 }}));



  app.use(express.static(__dirname + "/public/views"));

    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({
         extended: true
     }));
    

 /*
  router.use(function(req, res, next) {

  if(req.path === '/authenticate'){
     next();
  }

  else{

 
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  
  if (token) {

    jwt.verify(token, app.get('secret'), function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // no token simply means NO access  Ha Ha Ha :sadsad
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }

}
});

*/
  // SESSION MIDDLEWARE

  app.use(function(req, res, next) {
  if (req.session && req.session.user) {
    User.findOne({ email: req.session.user.email }, function(err, user) {
      if (user) {
        req.user = user;
        delete req.user.password; // delete the password from the session
        req.session.user = user;  //refresh the session value
        res.locals.user = user;
      }
      // finishing processing the middleware and run the route
      next();
    });
  } else {
    next();
  }
});
 
 
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
require('./routes/Authentication')(router);
require('./routes/File')(router);
require('./routes/Logout')(router);


   
  
  

  // Connect to Mongoose
mongoose.connect('mongodb://localhost/northwind', function(err, database){
	if(err){
		console.log(err);
	}

});

app.listen(4000);
app.use(router);



module.exports = app





	

