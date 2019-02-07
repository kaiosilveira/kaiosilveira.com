module.exports = function(app) {

  var controller = app.controllers.orders;

  app.route('/glamourei/v1/orders')
  .get(controller.list)
  .post(controller.post);

  app.route('/glamourei/v1/orders/:id')
  .get(controller.getById)
  .put(controller.update)
  .delete(controller.delete);

  app.route('/glamourei/v1/orders/date/')
  .post(controller.getByDate);

}
