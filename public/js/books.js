var APP = (function(ns){
	ns = ns || {};
	ns.apis = ns.apis || {};

	ns.apis.Books = function(){
		var _api = (function(){
			return {
				exec: function(makeRequest){
					gapi.client.load('books', 'v1', makeRequest);
				}
			}
		})();

		this.getBooks = function(){
			_api.exec(function() {
				var request = gapi.client.books.mylibrary.bookshelves.volumes.list({
					'shelf': '7'
				});
				request.execute(function(resp) {
					if(resp.items.length){
						var row = $('<div class="row"></div>');
						for(var i=0; i<resp.items.length; i++){
							var span12 = $('<div class="span2 book"></div>');
							row.append(span12);						
							var img = $('<img src="' + resp.items[i].volumeInfo.imageLinks.thumbnail + '"/>');
							var title = $('<h4>' + resp.items[i].volumeInfo.title + '</h4>');
							span12.append(img, title);
						}
						$('#content').html('');
						$('#content').append(row);
					}else{
						$('#content').html('<div class="alert alert-error">No tienes Libros disponibles!</div>');
					}
					
				});
			});
		};
		this.searchBooks = function(query){

			if(query){
				_api.exec(function() {
				var request = gapi.client.books.volumes.list({
					'q': query
				});
				request.execute(function(resp) {
					if(resp.items.length){
						var row = $('<div class="row"></div>');
						for(i=0; i<resp.items.length; i++){
							var span12 = $('<div class="span12 book"></div>');
							row.append(span12);
							var img = $('<img class="span2 pull-left" src="' + resp.items[i].volumeInfo.imageLinks.thumbnail + '"/>');
							var title = $('<h4 class="span9 pull-left">' + resp.items[i].volumeInfo.title + '</h4>');
							var description = $('<p class="span9 pull-left">' + resp.items[i].volumeInfo.description + '</p>');
							span12.append(img, title, description);
						}
						$('#content').html('');
						$('#content').append(row);
					}else{
						$('#content').html('<div class="alert alert-error">No hay Libros disponibles en este momento!</div>');
					}		
				});
			});
			}else{
				$('#content').html('<div class="alert alert-error">Debes introducir al menos un caracter!</div>');
			}			
		};
	};

	return ns;
})(APP);