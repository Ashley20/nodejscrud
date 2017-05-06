var User = require('../models/User');
var jwt = require('jsonwebtoken');
var moment = require('moment');
 moment().format('MMMM Do YYYY, h:mm:ss a');

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

