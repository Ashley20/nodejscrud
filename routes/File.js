var File = require('../controllers/File');
var multer = require('multer');
var upload = multer({
  dest:  'C:/projects/crud/public/images',
})


// API Server Endpoints
module.exports = function(router){
	router.get('/upload-file', File.showForm),
	router.post('/upload-file', upload.any() , File.uploadFile)

}