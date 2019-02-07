module.exports = function(app) {

  var controller = app.controllers.products;

  app.route('/glamourei/v1/products')
  .get(controller.list)
  .post(controller.post);

  app.route('/glamourei/v1/products/:id')
  .get(controller.getById)
  .put(controller.update)
  .delete(controller.delete);

}
