var APP = (function(ns){
	ns = ns || {};
	ns.controller = ns.controller || {};

	ns.controller.AppController = function(aAuthorizer, aApis){
		var _authorizer = aAuthorizer;
		var _plus = aApis.plus;
		var _calendar = aApis.calendar;
		_calendar.bindEvents();

		this.start = function(){
	        _authorizer.handleClientLoad();
		};

		this.findMe = function(){
	        _plus.load();
		};

    this.getEvents = function(){
      _calendar.getEvents();
    }
	};

	return ns;
})(APP);
