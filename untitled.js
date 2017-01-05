// dope v1.0.0
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
    * brief: automatically insert dash when entering cell phone number
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
    * brief: automatically insert dash when entering date
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

   /* ========================================================================
    * brief: copy to clipboard
    * usage: untitled.copyToClipboard(text to copy);
    * ========================================================================
    */
    var copyToClipboard = function(text) {
        if(text === undefined || text === '') return;
        var _txt = text;
        if(window.clipboardData) {
            window.clipboardData.setData("text", _txt);
        }else{
            var textarea = document.createElement("textarea");
            textarea.textContent = _txt;
            textarea.style.position = "fixed";
            document.body.appendChild(textarea);
            textarea.select();
            try {
                return document.execCommand("copy");
            } catch (ex) {
                return false;
            } finally {
                document.body.removeChild(textarea);
            }
        }
    }

   /* ========================================================================
    * brief: thousands separator
    * usage: untitled.addComma(number);
    * ========================================================================
    */
    var addComma = function(num) {
        var num = String(num).replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        return num;
    }
   
   /* ========================================================================
    * brief: remove comma
    * usage: untitled.removeComma(number);
    * ========================================================================
    */
    var removeComma = function(str) {
        var str = Number(str.replace(/\,/g, ''));
        return str;
    }

   /* ========================================================================
    * brief: email validate
    * usage: document.getElementById('email').onblur = function(event) {
                 var isValid = untitled.isValidateEmail( this.value ) ;
                 console.log( isValid );
             }
    * ========================================================================
    */
    var isValidateEmail = function(email) {
        var reg_email = /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}$/;
        return reg_email.test(email);
    }

   //public method
    _public.browser = browser();
    _public.isMobile = isMobile();
    _public.getParameterByName = getParameterByName;
    _public.autoDashPhoneNumber = autoDashPhoneNumber;
    _public.autoDashDate = autoDashDate;
    _public.copyToClipboard = copyToClipboard;
    _public.addComma = addComma;
    _public.removeComma = removeComma;
    _public.isValidateEmail = isValidateEmail;
	return _public;

}());
