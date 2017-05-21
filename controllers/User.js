var User = require('../models/User');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var session = require('express-session');

exports.authenticate = function(req, res){
	
	User.findUserByName(req.body.name, function(err, user){
        
		if (err) throw err;

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

}

exports.get = function(req, res){
	
	User.getUsers(function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}

exports.create = function(req, res){
	
	User.addUser(req.body , function(err, result){
		if(err){
			res.send(err);
		}

		res.json(result);

	});

}


exports.showLoginForm = function(req, res){
  res.json(' You are in the login form page now!');
}

exports.logout = function(req, res){
  req.session.destroy(function(err) {
  // cannot access session here
  if(err) throw err;
   });
  res.redirect('/authenticate');
  res.json('You have successfully logged out.!');
}

