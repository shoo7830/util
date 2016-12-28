var untitled = untitled || (function() {

	var _public = {}

	var browser = function() {
		return 'chrome';
	}

	var isMobile = function() {
		return true;
	}

	var getParameterByName = function(name) {
		var query = window.location.search.substring(1);
		var vars = query.split("&");
		for (var i=0; i<vars.length; i++) {
			var pair = vars[i].split("=");
			if(pair[0] == name){
				return pair[1];
			}
		}
		return false;
	}

	_public.browser = browser;
	_public.isMobile = isMobile;
	_public.getParameterByName = getParameterByName;

	return _public;

}());