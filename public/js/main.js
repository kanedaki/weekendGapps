var plus = new APP.apis.Plus();
var calendar = new APP.apis.Calendar();
apis = {plus: plus, calendar: calendar};
var authorizer = new APP.Authorizer();
var controller = new APP.controller.AppController(authorizer, apis);
