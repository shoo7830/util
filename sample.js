var untitled = untitled || (function() {

	var _public = {}

	var browser = function() {
		var browserPool = [
			{detectStr: "msie", name: "ie"},
			{detectStr: "trident", name: "ie"},
			{detectStr: "edge", name: "edge"},
			{detectStr: "firefox", name: "firefox"},
			{detectStr: "opr", name: "opera"},
			{detectStr: "chrome", name: "chrome"},
			{detectStr: "safari", name: "safari"}
		];
		var ua = navigator.userAgent.toLowerCase();
		var n, v, vOffset;
		for(var i in browserPool) {
			if((vOffset = ua.indexOf(browserPool[i].detectStr)) > -1) {
				n = browserPool[i].name;
				if(browserPool[i].detectStr == 'trident') { //ie11
					v = ua.substr(ua.indexOf('rv:') + 3);
					v = parseFloat(v.split(')')[0]);
				}
				else if(browserPool[i].detectStr == 'safari') {
					v = ua.substr(ua.indexOf('version/') + 8);
					v = parseFloat(v.split('/')[0]);
				}
				else {
					v = ua.substr(vOffset + browserPool[i].detectStr.length + 1);
					v = parseFloat(v.split(' ')[0]);	
				}
				break;
			}else {
				n = "unknown";
				v = 0;
			}
		}
		return {name: n, version: v};		
	}

	var isMobile = function() {
		var pfm = navigator.platform.toLowerCase();
		var detectStr = "win16|win32|win64|mac|macintel";
		return (detectStr.indexOf(pfm)<0) ? true : false;
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
	
	_public.browser = browser();
	_public.isMobile = isMobile();
	_public.getParameterByName = getParameterByName;
	
	_public.addComma = addComma;
	_public.removeComma = removeComma;

	_public.openPopup = openPopup;

	return _public;

}());