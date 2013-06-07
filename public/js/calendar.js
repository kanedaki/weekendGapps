var APP = (function(ns){
	ns = ns || {};
	ns.apis = ns.apis || {};

	ns.apis.Calendar = function(){

    this.bindEvents = function(){
      $('#getEvents').click(_.bind(this.getEvents, this));
    };
		this.getEvents = function(){
			gapi.client.load('calendar', 'v3', function() {
				// Step 5: Assemble the API request
				var request = gapi.client.calendar.calendarList.list({
				'maxResults': '10'
				});
				// Step 6: Execute the API request
				request.execute(function(resp) {
					var kind = resp.kind;
					$('body').append("<h4>"+kind+ "</h4>");
				});
			});
		};

	};

	return ns;
})(APP);
