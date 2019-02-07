module.exports = function(app) {

  var controller = app.controllers.modules;

  app.route('/glamourei/v1/modules')
    .get(controller.list);

}
