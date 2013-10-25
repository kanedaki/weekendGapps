var APP = (function(ns){
	ns = ns || {};
	ns.apis = ns.apis || {};

	ns.apis.Calendar = function(){

    this.bindEvents = function(){
      $('#setEvent').click(_.bind(this.getEvents, this));
      $('.start-date').datetimepicker({dateFormat: "yy-mm-dd",timeFormat: "HH:mm:ss"})
      $('.end-date').datetimepicker({dateFormat: "yy-mm-dd",timeFormat: "HH:mm:ss"})
    };
		this.getEvents = function(){
			gapi.client.load('calendar', 'v3', function() {
				// Step 5: Assemble the API request
        startDate = $('.start-date').val().replace(' ', 'T')
        endDate = $('.end-date').val().replace(' ', 'T')
				var request = gapi.client.calendar.events.insert({
          "calendarId": 'primary',
          "resource": {
            "start": {
              "dateTime": startDate,
              "timeZone": "Europe/Zurich"
             },
            "end": {
              "dateTime": endDate,
              "timeZone": "Europe/Zurich"
             },
            "description": "Quedadas para frikear",
            "summary": "Redradix Weekend",
            "location": "Calle Paz 4 1ºizq"
          }
				});
				// Step 6: Execute the API request
				request.execute(function(resp) {
          //console.log(resp)
          if (resp.status == "confirmed") {
            $('.result').html("<a href='"+ resp.htmlLink + "' target='_blank'>Link al evento</a>");
          }
          else {
            $('.result').html("<p>Ha habido un error en la publicacion del evento</p>")
          }
				});
			});
		};

	};

	return ns;
})(APP);
