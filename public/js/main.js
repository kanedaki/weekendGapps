var plus = new APP.apis.Plus();
var calendar = new APP.apis.Calendar();
var eventMap = new APP.apis.EventMap();
var apis = {plus: plus, calendar: calendar};
var authorizer = new APP.Authorizer();
var controller = new APP.controller.AppController(authorizer, apis);

//$(document).ready(function(){
//  APP.controller.start();
//});

