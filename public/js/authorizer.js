var APP = (function(ns){

	ns = ns || {};

    var clientId = '125777739209.apps.googleusercontent.com';
    var apiKey = 'AIzaSyDUW0w3lmpseIf4nt4MGZcea0Sh8uTE4Bw';
    var scopes = ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/plus.me', 'https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/books'];

    function handleAuthResult(authResult) {
        if (authResult && !authResult.error) {
          $('#authorize-button').css('display', 'none');
        } else {
          $('#content').html('<div class="alert alert-error">Debes iniciar session o registrarte primero para usar esta aplicacion</div>');
          $('#authorize-button').css('display', 'block');
          handleAuthClick();    
      };
      
    }

    function handleAuthClick(event) {
      // Step 3: get authorization to use private data
      gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
      return false;
    }

    function checkAuth() {
      gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);      
    }

    ns.Authorizer = function(){
    	this.handleClientLoad = function() {
	        // Step 2: Reference the API key
	        gapi.client.setApiKey(apiKey);
	        window.setTimeout(checkAuth,1);
	    }
    }

	return ns;
})(APP);
