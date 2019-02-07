module.exports = function(app) {

  var controller = app.controllers.cardMachines;

  app.route('/glamourei/v1/machines')
  .get(controller.list)
  .post(controller.post);

  app.route('/glamourei/v1/machines/:id')
  .get(controller.getById)
  .put(controller.update)
  .delete(controller.delete);

}
