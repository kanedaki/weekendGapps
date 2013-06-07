var APP = (function(ns){

	ns = ns || {};

    var clientId = '824492178258-2993rb0f7al8frpvv6mqqr6h3ju5t06n.apps.googleusercontent.com';
    var apiKey = 'AIzaSyBXwb6TlkYh1Qmt9x9leGywlSwVgaultlQ';
    var scopes = ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/plus.login'];

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
