var APP = (function(ns){
	ns = ns || {};
	ns.controller = ns.controller || {};

	ns.controller.AppController = function(aAuthorizer, aApis){
		var _authorizer = aAuthorizer;
		var _plus = aApis.plus;
		var _books = aApis.books;
		var _calendar = aApis.calendar;
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

		this.getBooks = function(){
    	  _books.getBooks();
    	};

    	this.searchBooks = function(query){
    	  _books.searchBooks(query);
    	};

	    this.getEvents = function(){
    	  _calendar.getEvents();
    	};    	
	};

	return ns;
})(APP);
