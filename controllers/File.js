var path = require('path');


exports.showForm = function(req, res){
	
 res.sendFile(path.join( 'C:/projects/crud/public/views/fileupload.html'));
}

exports.uploadFile = function(req, res){

    res.send(req.files);
	

}