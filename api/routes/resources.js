var controller = {};

module.exports = function(app) {

  var controller = app.controllers.resources;

  app.route('/glamourei/v1/resources')
  .get(controller.list)
  .post(controller.post);

  app.route('/glamourei/v1/resources/:id')
  .get(controller.getById)
  .put(controller.update)
  .delete(controller.delete);

}
