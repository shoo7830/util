// untitled v1.0.0
// by gabia FE Development Team

var untitled = untitled || (function() {

    var _public = {}

   /* ========================================================================
    * brief: browser name and version detector
    * usage: untitled.browser.name;
    * usage: untitled.browser.version;
    * =========================================================================
    */
    var browser = function() {
        var browserPool = [
            {detectStr: "msie", name: "ie"},
            {detectStr: "trident", name: "ie"},
            {detectStr: "edge", name: "edge"},
            {detectStr: "firefox", name: "firefox"},
            {detectStr: "opr", name: "opera"},
            {detectStr: "opera mini", name: "opera mini"},
            {detectStr: "chrome", name: "chrome"},
            {detectStr: "crios", name: "chrome"},
            {detectStr: "safari", name: "safari"}
        ];
        var ua = navigator.userAgent.toLowerCase();
        var n, v, vOffset;
        for(var i=0; i<browserPool.length; i++) {
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
            }else{
                n = "unknown";
                v = 0;
            }
        }
        return {name: n, version: v};
    }

   /* ========================================================================
    * brief: mobile device detector
    * usage: untitled.isMobile;
    * =========================================================================
    */
    var isMobile = function() {
        var ua = navigator.userAgent.toLowerCase();
        var detectStr = /mobile|ip(hone|od|ad)|android|blackberry|iemobile|kindle|netfront|silk-accelerated|(hpw|web)os|fennec|minimo|opera m(obi|ini)|blazer|dolfin|dolphin|skyfire|zune/;
        return detectStr.test(ua) ? true : false;
    }

   /* ========================================================================
    * brief: get parameter values from an URL
    * usage: untitled.getParameterByName('parameter name');
    * ========================================================================
    */
    var getParameterByName = function(name) {
        if (name === undefined || name === '') return;
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i=0; i<vars.length; i++) {
            var pair = vars[i].split('=');
            if(pair[0] == name) {
                return pair[1];
            }
        }
    }

   /* ========================================================================
    * brief: enter dash when entering cell phone number
    * usage: document.getElementById('inputIdName').onkeyup = function(event) {
                 this.value = untitled.autoDashPhoneNumber( this.value );
             }
    * ========================================================================
    */
    var autoDashPhoneNumber = function(str) {
        var str = str.replace(/[^0-9]/g, '');
        var tmp = '';
        if(str.length < 4) {
            return str;
        }else if(str.length < 7) {
            tmp += str.substr(0, 3);
            tmp += '-';
            tmp += str.substr(3);
            return tmp;
        }else if(str.length < 11) {
            tmp += str.substr(0, 3);
            tmp += '-';
            tmp += str.substr(3, 3);
            tmp += '-';
            tmp += str.substr(6);
            return tmp;
        }else{
            tmp += str.substr(0, 3);
            tmp += '-';
            tmp += str.substr(3, 4);
            tmp += '-';
            tmp += str.substr(7);
            return tmp;
        }
        return str;
    }

   /* ========================================================================
    * brief: enter dash when entering cell phone number
    * usage: document.getElementById('inputIdName').onkeyup = function(event) {
                 this.value = untitled.autoDashDate( this.value );
             }
    * ========================================================================
    */
    var autoDashDate = function(str) {
        var str = str.replace(/[^0-9]/g, '');
        var tmp = '';
        if(str.length < 5) {
           return str;
        }else if(str.length < 7) {
            tmp += str.substr(0, 4);
            tmp += '-';
            tmp += str.substr(4, 5);
            return tmp;
        }else{
            tmp += str.substr(0, 4);
            tmp += '-';
            tmp += str.substr(4, 2);
            tmp += '-';
            tmp += str.substr(6, 2);
            return tmp;
        }
    }
















	/**
	 * 숫자만 입력가능하게 하는 함수
	 */
	var onlyNumber = function(event) {
	    var event = event || window.event;
	    var keyID = (event.which) ? event.which : event.keyCode;
	    if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 9 || keyID == 46 || keyID == 37 || keyID == 39 ) {
	        return;
	    }else{
	        return false;
	    }
	}



	var autoDashDate = function(str){
	    str = str.replace(/[^0-9]/g, '');

	    var tmp = '';
	    if( str.length < 5 ){
	        return str;
	    } else if(str.length < 7){
	        tmp += str.substr(0, 4);
	        tmp += '-';
	        tmp += str.substr(4, 5);
	        return tmp;
	    } else {
	        tmp += str.substr(0, 4);
	        tmp += '-';
	        tmp += str.substr(4, 2);
	        tmp += '-';
	        tmp += str.substr(6, 2);
	        return tmp;
	    }
	}

	var addComma = function(num) {
		//priceFormat
		//Thousands Separator
		//1000000 > 1,000,000
		num = String(num).replace(/(\d)(?=(\d{3})+$)/g, '$1,');
		return num;
	}

	var removeComma = function(str) {
		//1,000,000 > 1000000
		str = Number(str.replace(/\,/g, ''));
		return str;
	}

	//window popup open
	var openPopup = function(url) {
        //window.open()
    }

	_public.browser = browser();
	_public.isMobile = isMobile();
	_public.getParameterByName = getParameterByName;
	_public.autoDashPhoneNumber = autoDashPhoneNumber;
	_public.autoDashDate = autoDashDate;







    _public.onlyNumber = onlyNumber;


	_public.addComma = addComma;
	_public.removeComma = removeComma;

	_public.openPopup = openPopup;

	return _public;

}());
