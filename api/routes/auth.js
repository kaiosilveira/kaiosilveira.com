module.exports = function(app) {

  var authController = app.controllers.auth;

  app.post('/glamourei/v1/auth', authController.auth);
  app.use('/glamourei/*', authController.validateToken);

}
