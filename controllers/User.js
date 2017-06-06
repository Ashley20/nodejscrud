var User = require('../models/User');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var session = require('express-session');

var payloadValidator = require('payload-validator');
var expectedPayload = {
   "name" : "",
   "password" : "",
   "email" : ""
};

exports.authenticate = function(req, res, next){

  if(req.body) {
            var result = payloadValidator.validator(req.body,expectedPayload,["name","password"],false);
            if(result.success) {
               // res.json({"message" : "Payload is valid"});
                User.findUserByName(req.body.name, function(err, user){
                
                  if (err){
                    return next(err);
                  }

                  if (!user) {
                    res.json({ success: false, message: 'Authentication failed. User not found.' });
                  } else if (user) {


                    // check if password matches
                
                    if (user.password != req.body.password) {
                      res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                    } else {
                     
                     
                     req.session.user = user;

                      // if user is found and password is right
                      // create a token
                     
                    var expires = moment().add('days', 7).valueOf();
                     var token = jwt.sign({
                         exp: expires
                      }, 'bicirik');

                      // return the information including token as JSON
                      res.json({
                        success: true,
                        message: 'Tepe tepe kullan.',
                        token: token,
                        expires: expires
                      });

                    }   

                  }
                  
                  
                });

            } else {
                res.json({"message" : result.response.errorMessage});
            }
        } else {
            res.json({"message" : "paylod not correct"});
        }
	
	
}

exports.get = function(req, res, next){
	
	User.getUsers(function(err, result){
		if(err){
			return next(err);
		}

		res.json(result);

	});

}

exports.create = function(req, res, next){

  if(req.body) {
            var result = payloadValidator.validator(req.body,expectedPayload,["name","password"],false);
            if(result.success) {
                res.json({"message" : "Payload is valid"});
                User.addUser(req.body , function(err, result){
                  if(err){
                    return next(err);
                   
                  }

                  res.json(result);

                });
            } else {
                res.json({"message" : result.response.errorMessage});
            }
        } else {
            res.json({"message" : "paylod not correct"});
        }
	

}


exports.showLoginForm = function(req, res, next){
  res.json(' You are in the login form page now!');
}

exports.logout = function(req, res, next){
  req.session.destroy(function(err) {
  // cannot access session here
    if(err){
      return next(err);
    }

   });

  res.redirect('/authenticate');
  res.json('You have successfully logged out.!');
}

