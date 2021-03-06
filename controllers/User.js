var User = require('../models/User');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var session = require('express-session');
var smtp = require('../smtp/Smtp');


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
                     smtp.sendEmail(req.body.email);
                 // res.json(result);

                });
            } else {
                res.json({"message" : result.response.errorMessage});
            }
        } else {
            res.json({"message" : "paylod not correct"});
        }
	

}

exports.verify = function(req, res, next){

  if((req.protocol+"://"+req.get('host'))==("http://localhost:4000"))
{
    console.log("Domain is matched. Information is from Authentic email");
    console.log(req.query.id + "  " + smtp.Rand);
    if(req.query.id == smtp.Rand)
    {
        console.log("email is verified");
        res.end("<h1>Your email  has  been Successfully verified");
    }
    else
    {
        console.log("email is not verified");
        res.end("<h1>Bad Request</h1>");
    }
}
else
{
    res.end("<h1>Request is from unknown source");
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

