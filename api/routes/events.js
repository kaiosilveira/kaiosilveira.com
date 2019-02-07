module.exports = function(app) {

  var controller = app.controllers.events;

  app.route('/glamourei/v1/events')
  .get(controller.list)
  .post(controller.post);

  app.route('/glamourei/v1/events/:id')
  .get(controller.getById)
  .put(controller.update)
  .delete(controller.delete);

  app.route('/glamourei/v1/events/date/')
  .post(controller.getByDate);

}
