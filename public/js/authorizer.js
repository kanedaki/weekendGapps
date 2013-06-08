var APP = (function(ns){

	ns = ns || {};

    var clientId = '308389124108.apps.googleusercontent.com';
    var apiKey = 'AIzaSyBYWcRkkDKj-uAPCLUwvCpfggqcoK_ud2E';
    var scopes = ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/plus.me', 'https://www.googleapis.com/auth/plus.login'];

    function handleAuthResult(authResult) {
      var authorizeButton = document.getElementById('authorize-button');
      if (authResult && !authResult.error) {
        authorizeButton.style.visibility = 'hidden';
      } else {
        authorizeButton.style.visibility = '';
        authorizeButton.onclick = handleAuthClick;
      }
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
