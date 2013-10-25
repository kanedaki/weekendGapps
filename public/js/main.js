var plus = new APP.apis.Plus();
var calendar = new APP.apis.Calendar();
var books = new APP.apis.Books();
var apis = {plus: plus, calendar: calendar, books: books};
var authorizer = new APP.Authorizer();
var controller = new APP.controller.AppController(authorizer, apis);

//$(document).ready(function(){
//  APP.controller.start();
//});

