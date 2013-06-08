var APP = (function(ns){
	ns = ns || {};
	ns.controller = ns.controller || {};

	ns.controller.AppController = function(aAuthorizer, aApis){
		var _authorizer = aAuthorizer;
		var _plus = aApis.plus;
		var _calendar = aApis.calendar;
		var _maps = aApis.eventMap;

		_maps.bindEvents();
		_calendar.bindEvents();

		this.start = function(){
	        _authorizer.handleClientLoad();
		};

		this.findMe = function(){
	        _plus.findMe();
		};

		this.findPublicActivities = function(){
			_plus.findPublicActivities();
		};

		this.findPublicProfiles = function(){
			_plus.findPublicProfiles();
		};

		this.getProfile = function(profileId){
			_plus.getProfile(profileId);
		};

	    this.getEvents = function(){
    	  _calendar.getEvents();
    	};
	};

	return ns;
})(APP);
