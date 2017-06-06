var File = require('../controllers/File');
var multer = require('multer');
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname + '-' + Date.now());
  }
});


var upload = multer({ storage : storage });
// API Server Endpoints
module.exports = function(router){
	router.get('/upload-file', File.showForm),
	router.post('/upload-file', upload.any() , File.uploadFile),
	router.get('/files', File.get),
	router.delete('/files/:id', File.delete)

}