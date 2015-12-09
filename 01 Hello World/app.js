(function() {
  var app = angular.module('app', []); // Define module, with dependencies

  // Define custom object containers for controllers, factories, services, directives
  app.controllers = {};
  app.controller(app.controllers);

  app.factories = {};
  app.factory(app.factories);

  app.services = {};
  app.service(app.services);

  app.directives = {};
  app.directive(app.directives);
}()); // Self-invoked anonymous function; prevents polluting global namespace
