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
					if(resp.result.items){
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
					}else{
						$('#content').html('<div class="alert alert-error">No tienes Actividades disponibles</div>');
					}
					
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
					var heading = $("<h4>Perfiles públicos:</h4>");
					var table = $("<table class='table table-striped'></table>");					
					for(var i = 0; i < resp.result.items.length; i++){
						var tr = $("<tr></tr>");
						table.append(tr);
						var td = $("<td></td>");
						td.append(resp.result.items[i].displayName);
						var profileId = "" + resp.result.items[i].id;
						var btnCompleto = "controller.getProfile('" + profileId + "')";
						td.append('<button class="btn btn-small pull-right" onclick="' + btnCompleto + '">Completo</button>');
						tr.append(td);
					};
					$('#content').html('');
					$('#content').append(heading, table);
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