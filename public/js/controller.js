var APP = (function(ns){
	ns = ns || {};
	ns.controller = ns.controller || {};

	ns.controller.AppController = function(aAuthorizer, aPlus){
		var _authorizer = aAuthorizer;
		var _plus = aPlus;

		this.start = function(){
	        _authorizer.handleClientLoad();
		};

		this.findMe = function(){
	        _plus.load();
		}
	};

	return ns;
})(APP);