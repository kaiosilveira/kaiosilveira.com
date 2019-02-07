module.exports = function(app) {

  var controller = app.controllers.payment;

  app.route('/glamourei/v1/payments/order')
  .post(controller.getByOrderId);

  app.route('/glamourei/v1/payments')
  .get(controller.list)
  .post(controller.post);

  app.route('/glamourei/v1/payments/:id')
  .get(controller.getById)
  .delete(controller.delete);

  app.route('/glamourei/v1/payments/date/')
  .post(controller.getByDate);

}
