module.exports = function(app) {

  var controller = app.controllers.services;

  app.route('/glamourei/v1/services')
  .get(controller.list)
  .post(controller.post);

  app.route('/glamourei/v1/services/:id')
  .get(controller.getById)
  .put(controller.update)
  .delete(controller.delete);

}
