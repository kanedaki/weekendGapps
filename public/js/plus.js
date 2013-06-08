var APP = (function(ns){
	ns = ns || {};
	ns.apis = ns.apis || {};

	ns.apis.Plus = function(){

		var _api = (function(){
			return {
				exec: function(makeRequest){
					gapi.client.load('plus', 'v1', makeRequest);
				}
			}
		})();

		this.findMe = function(){
			_api.exec(function() {
				var request = gapi.client.plus.people.get({
				'userId': 'me'
				});
				request.execute(function(resp) {
					var heading = document.createElement('h4');
					var image = document.createElement('img');
					image.src = resp.image.url;
					heading.appendChild(image);
					heading.appendChild(document.createTextNode(resp.displayName));
					$('#content').html('');
					$('#content').append(heading);
				});
			});
		};

		this.findPublicActivities = function(){
			_api.exec(function() {
				var request = gapi.client.plus.activities.list({
					'userId': 'me',
					'collection': 'public'
				});
				request.execute(function(resp) {
					var heading = $("<h4></h4>");
					heading.append("Actividades públicas:");
					var lista = $("<ul></ul>");
					heading.append(lista)
					for(var i = 0; i < resp.result.items.length; i++){
						var li = $("<li></li>");
						lista.append(li);
						li.append(resp.result.items[i].title);
					};
					$('#content').html('');
					$('#content').append(heading);
				});
			});
		};

		this.findPublicProfiles = function(){
			_api.exec(function() {
				var request = gapi.client.plus.people.list({
					'userId': 'me',
					'collection': 'visible'
				});
				request.execute(function(resp) {
					var heading = $("<h4></h4>");
					heading.append("Perfiles públicas:");
					var lista = $("<ul></ul>");
					heading.append(lista)
					for(var i = 0; i < resp.result.items.length; i++){
						var li = $("<li></li>");
						lista.append(li);
						li.append(resp.result.items[i].displayName);
						var profileId = "" + resp.result.items[i].id;
						var onclick = "controller.getProfile('" + profileId + "')";
						li.append('<button onclick="' + onclick + '">Completo</button>');
					};
					$('#content').html('');
					$('#content').append(heading);
				});
			});
		};

		this.getProfile = function(profileId){
			_api.exec(function() {
				var request = gapi.client.plus.people.get({
					'userId': profileId
				});
				request.execute(function(resp) {
					var gender = resp.gender;
					var image = resp.image;
					var heading = document.createElement('h4');
					var img = document.createElement('img');
					img.src = image.url;
					heading.appendChild(img);
					heading.appendChild(document.createTextNode(gender));
					$('#content').html('');
					$('#content').append(heading);
				});
			});
		};
	};

	return ns;

})(APP);