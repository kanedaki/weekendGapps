var APP = (function(ns){
	ns = ns || {};
	ns.apis = ns.apis || {};

	ns.apis.EventMap = function () {

		this.bindEvents = function()
		{
			$('#btnCargarEventos').click(_.bind(this.loadEvents,this));
     		$('.start-date').datetimepicker({dateFormat: "yy-mm-dd",timeFormat: "HH:mm:ss"})
     		$('.end-date').datetimepicker({dateFormat: "yy-mm-dd",timeFormat: "HH:mm:ss"})
		};

		this.loadEvents = function()
		{

			gapi.client.load('calendar', 'v3', function() {
				// cargamos cliente calendar
				var startDate, endDate, total;
        		startDate = $('.start-date').val().replace(' ', 'T');
        		endDate = $('.end-date').val().replace(' ', 'T');
        		total = $('#cuantos').val();

        
				var request = gapi.client.calendar.events.list({
					"calendarId" : "primary",
					"maxResults" : total,
					"singleEvents": true,
					"timeMin": startDate,
					"timeMax": endDate
			
				});

				request.execute(function(resp)
				{
					console.log(resp);
				});
			});	

		};
	};

	return ns;

})(APP);
