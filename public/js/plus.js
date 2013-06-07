var APP = (function(ns){
	ns = ns || {};
	ns.apis = ns.apis || {};

	ns.apis.Plus = function(){

		this.load = function(){
			gapi.client.load('plus', 'v1', function() {
				// Step 5: Assemble the API request
				var request = gapi.client.plus.people.get({
				'userId': 'me'
				});
				// Step 6: Execute the API request
				request.execute(function(resp) {
					var heading = document.createElement('h4');
					var image = document.createElement('img');
					image.src = resp.image.url;
					heading.appendChild(image);
					heading.appendChild(document.createTextNode(resp.displayName));

					document.getElementById('content').appendChild(heading);
				});
			});
		};

		this.findMe = function(){

		};
	};

	return ns;
})(APP);