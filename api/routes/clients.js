module.exports = function(app) {

  var controller = app.controllers.clients;

  app.route('/glamourei/v1/clients')
  .get(controller.list)
  .post(controller.post);

  app.route('/glamourei/v1/clients/:id')
  .get(controller.getById)
  .put(controller.update)
  .delete(controller.delete);

}
