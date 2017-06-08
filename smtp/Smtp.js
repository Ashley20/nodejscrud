var nodemailer = require("nodemailer");
var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "kasdas@gmail.com",
        pass: "casdasd"
    }
});



var rand,mailOptions,host,link;
rand=Math.floor((Math.random() * 100) + 54);

link="http://localhost:4000" + "/verify?id="+rand;
console.log(rand);

exports.sendEmail = function(to){

    var mailOptions={
        to : to,
        subject : "Please confirm your Email account",
        html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>" 
    }

    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});

}
exports.Rand = rand;
exports.mailOptions = mailOptions;