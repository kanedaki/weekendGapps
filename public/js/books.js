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
					var row = $('<div class="row"></div>');
					for(var i=0; i<resp.items.length; i++){
						var span12 = $('<div class="span2 book"></div>');
						row.append(span12);						
						var img = $('<img src="' + resp.items[i].volumeInfo.imageLinks.thumbnail + '"/>');
						var title = $('<h4>' + resp.items[i].volumeInfo.title + '</h4>');
						span12.append(img, title);
					}
					$('#content').append(row);
				});
			});
		};
	};

	return ns;
})(APP);