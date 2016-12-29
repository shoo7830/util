var untitled = untitled || (function() {

	var _public = {}

	var browser = function() {
		return 'chrome';
	}

	var isMobile = function() {
		return true;
	}

	var getParameterByName = function(name) {
		if (name === undefined || name === '') return;
		var query = window.location.search.substring(1);
		var vars = query.split('&');
		for (var i=0; i<vars.length; i++) {
			var pair = vars[i].split('=');
			if(pair[0] == name){
				return pair[1];
			}
		}
	}

	var addComma = function() {
		//priceFormat
		//Thousands Separator
		//1000000 > 1,000,000
	}

	var removeComma = function() {
		//1,000,000 > 1000000
	}

	//window popup open
	var openPopup = function(url) {
        //window.open()
    }
	
	_public.browser = browser;
	_public.isMobile = isMobile;
	_public.getParameterByName = getParameterByName;
	
	_public.addComma = addComma;
	_public.removeComma = removeComma;

	_public.openPopup = openPopup;

	return _public;

}());