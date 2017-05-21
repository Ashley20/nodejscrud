module.exports.requireLogin = function(req, res, next) {
  if (!req.user) {
    res.redirect('/authenticate');
  } else {
    next();
  }
};