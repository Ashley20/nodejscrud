var async = require("async");
var http = require("http");
var nodemailer = require("nodemailer");
var User = require("../models/User");
// This will store emails needed to send.
// We can fetch it from DB (MySQL,Mongo) and store here.
var listofemails = []; 
// Will store email sent successfully.
var success_email = [];
// Will store email whose sending is failed. 
var failure_email = [];

var transporter;

/* Loading modules done. */

var users = [];
    User.getUsers(function(err, result){
        if(err){
            throw err;
        }
        users = result;
        users.forEach(function (item) {
          listofemails.push(item.email);
        });
       
    });

function massMailer(req, res) {
    var self = this;
    transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          auth: {
            user: 'yyy@gmail.com',
            pass: 'xxxx'
         },
          tls: {rejectUnauthorized: false},
          debug:true
        });
    // Fetch all the emails from database and push it in listofemails
        // Will do it later.
    
    invokeOperation();
    res.json({"Success": "true"});

    
};

/* Invoking email sending operation at once */

  invokeOperation = function() {
    var self = this;
    async.each(listofemails,SendEmail,function(){
        console.log(success_email);
        console.log(failure_email);
    });
    
    
}

/* 
* This function will be called by multiple instance.
* Each instance will contain one email ID
* After successfull email operation, it will be pushed in failed or success array.
*/

   SendEmail = function(Email,callback) {
    console.log("Sending email to " + Email);
    var self = this;
    self.status = false;
    // waterfall will go one after another
    // So first email will be sent
    // Callback will jump us to next function
    // in that we will update DB
    // Once done that instance is done.
    // Once every instance is done final callback will be called.
    async.waterfall([
        function(callback) {                
            var mailOptions = {
                from: 'kucukkaraaslan.didem@gmail.com',     
                to: Email,
                subject: 'Hi did u get my email? ', 
                text: "I HATE THE -HELLO WORLD - "
            };
            transporter.sendMail(mailOptions, function(error, info) {               
                if(error) {
                    console.log(error)
                    failure_email.push(Email);
                } else {
                    self.status = true;
                    success_email.push(Email);
                }
                callback(null,self.status,Email);
            });
        },
        function(statusCode,Email,callback) {
                console.log("Will update DB here for " + Email + "With " + statusCode);
                callback();
        }
        ],function(){
            //When everything is done return back to caller.
            callback();

    });
}

exports.massMailer = massMailer;