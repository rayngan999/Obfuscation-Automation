if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];


        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }


        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }


        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':


            return String(value);

        case 'object':

            if (!value) {
                return 'null';
            }

            gap += indent;
            partial = [];


            if (Object.prototype.toString.apply(value) === '[object Array]') {

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }


    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

            var i;
            gap = '';
            indent = '';

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

            } else if (typeof space === 'string') {
                indent = space;
            }

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }


            return str('', {'': value});
        };
    }


    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

            var j;

            function walk(holder, key) {


                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }



            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }


            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {


                j = eval('(' + text + ')');


                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }


            throw new SyntaxError('JSON.parse');
        };
    }
}());jQuery.uaMatch=function(ua){ua=ua.toLowerCase();var match=/(chrome)[ \/]([\w.]+)/.exec(ua)||/(webkit)[ \/]([\w.]+)/.exec(ua)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)||/(msie) ([\w.]+)/.exec(ua)||ua.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)||[];return{browser:match[1]||"",version:match[2]||"0"}};if(!jQuery.browser){matched=jQuery.uaMatch(navigator.userAgent);browser={};if(matched.browser){browser[matched.browser]=true;browser.version=matched.version}if(browser.chrome){browser.webkit=true}else if(browser.webkit){browser.safari=true}jQuery.browser=browser}(function($){var keyString="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var uTF8Encode=function(string){string=string.replace(/\x0d\x0a/g,"\x0a");var output="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){output+=String.fromCharCode(c)}else if((c>127)&&(c<2048)){output+=String.fromCharCode((c>>6)|192);output+=String.fromCharCode((c&63)|128)}else{output+=String.fromCharCode((c>>12)|224);output+=String.fromCharCode(((c>>6)&63)|128);output+=String.fromCharCode((c&63)|128)}}return output};var uTF8Decode=function(input){var string="";var i=0;var c=c1=c2=0;while(i<input.length){c=input.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++}else if((c>191)&&(c<224)){c2=input.charCodeAt(i+1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2}else{c2=input.charCodeAt(i+1);c3=input.charCodeAt(i+2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3}}return string};$.extend({base64Encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=uTF8Encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64}else if(isNaN(chr3)){enc4=64}output=output+keyString.charAt(enc1)+keyString.charAt(enc2)+keyString.charAt(enc3)+keyString.charAt(enc4)}return output},base64Decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=keyString.indexOf(input.charAt(i++));enc2=keyString.indexOf(input.charAt(i++));enc3=keyString.indexOf(input.charAt(i++));enc4=keyString.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2)}if(enc4!=64){output=output+String.fromCharCode(chr3)}}output=uTF8Decode(output);return output}})})(jQuery);/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

(function(jQuery){

    // We override the animation for all of these color styles
    jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
        jQuery.fx.step[attr] = function(fx){
            if ( !fx.colorInit ) {
                fx.start = getColor( fx.elem, attr );
                fx.end = getRGB( fx.end );
                fx.colorInit = true;
            }

            fx.elem.style[attr] = "rgb(" + [
                Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
                Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
                Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
            ].join(",") + ")";
        }
    });

    // Color Conversion functions from highlightFade
    // By Blair Mitchelmore
    // http://jquery.offput.ca/highlightFade/

    // Parse strings looking for color tuples [255,255,255]
    function getRGB(color) {
        var result;

        // Check if we're already dealing with an array of colors
        if ( color && color.constructor == Array && color.length == 3 )
            return color;

        // Look for rgb(num,num,num)
        if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
            return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

        // Look for rgb(num%,num%,num%)
        if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
            return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

        // Look for #a0b1c2
        if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
            return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

        // Look for #fff
        if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
            return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

        // Look for rgba(0, 0, 0, 0) == transparent in Safari 3
        if (result = /rgba\(0, 0, 0, 0\)/.exec(color))
            return colors['transparent'];

        // Otherwise, we're most likely dealing with a named color
        return colors[jQuery.trim(color).toLowerCase()];
    }

    function getColor(elem, attr) {
        var color;

        do {
            color = jQuery.css(elem, attr);

            // Keep going until we find an element that has color, or we hit the body
            if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )
                break;

            attr = "backgroundColor";
        } while ( elem = elem.parentNode );

        return getRGB(color);
    };

    // Some named colors to work with
    // From Interface by Stefan Petre
    // http://interface.eyecon.ro/

    var colors = {
        aqua:[0,255,255],
        azure:[240,255,255],
        beige:[245,245,220],
        black:[0,0,0],
        blue:[0,0,255],
        brown:[165,42,42],
        cyan:[0,255,255],
        darkblue:[0,0,139],
        darkcyan:[0,139,139],
        darkgrey:[169,169,169],
        darkgreen:[0,100,0],
        darkkhaki:[189,183,107],
        darkmagenta:[139,0,139],
        darkolivegreen:[85,107,47],
        darkorange:[255,140,0],
        darkorchid:[153,50,204],
        darkred:[139,0,0],
        darksalmon:[233,150,122],
        darkviolet:[148,0,211],
        fuchsia:[255,0,255],
        gold:[255,215,0],
        green:[0,128,0],
        indigo:[75,0,130],
        khaki:[240,230,140],
        lightblue:[173,216,230],
        lightcyan:[224,255,255],
        lightgreen:[144,238,144],
        lightgrey:[211,211,211],
        lightpink:[255,182,193],
        lightyellow:[255,255,224],
        lime:[0,255,0],
        magenta:[255,0,255],
        maroon:[128,0,0],
        navy:[0,0,128],
        olive:[128,128,0],
        orange:[255,165,0],
        pink:[255,192,203],
        purple:[128,0,128],
        violet:[128,0,128],
        red:[255,0,0],
        silver:[192,192,192],
        white:[255,255,255],
        yellow:[255,255,0],
        transparent: [255,255,255]
    };

})(jQuery);
(function($){

var TIMEOUT = 20000;
var lastTime = (new Date()).getTime();

setInterval(function() {
  var currentTime = (new Date()).getTime();
  if (currentTime > (lastTime + TIMEOUT + 2000)) {
    $(document).wake();
  }
  lastTime = currentTime;
}, TIMEOUT);

$.fn.wake = function(callback) {
  if (typeof callback === 'function') {
    return $(this).on('wake', callback);
  } else {
    return $(this).trigger('wake');
  }
};

})(jQuery);(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
var a;function PushClient(){if(!Number.MAX_SAFE_INTEGER)Number.MAX_SAFE_INTEGER=Math.pow(2,53)-1;this.a();this.b=true;this.c(false);this.d="PushClient WebSocket Client v5.1.3";this.e=PushClient.f;this.g=this.h;this.i=this.j;this.l=this.k=false}PushClient.prototype.m=function(){};PushClient.prototype.n=function(){};
PushClient.prototype.a=function(){this.o=function(b){console.log(b)};this.p=1;this.r=this.q=false;this.s=2;this.t=true;this.u=null;this.v=[];this.x=this.w=null;this.y=[];this.z=0;this.a0=(new Date).getTime();this.b=false;this.a2=this.a1=null;this.a3=[];this.a4={};this.a5={};this.a6=[];this.a7={};this.a7[""]={seqid:7E4,seq:0,history:0,conflation:0,needsRecovery:false,nrOfConsecutiveRecovery:0,messagesReceivedUntilRecovery:0,cacheRecoveryStatus:PushClient.a8,currentSubscribeType:PushClient.a9};
	this.ac=this.ab=this.aa=null;this.ad=(new Date).getTime();this.ae=null;this.af=[];this.ah=this.ag=0;this.ai=false;this.aj=null;this.ak=[];this.ao=this.an=this.am=this.al=null;this.ap={};this.ap.aq=(new Date).getTime();this.ap.ar=null;this.ap.as=[];this.at=3;this.au=5E3;this.av=PushClient.TRUNCATED_EXPONENTIAL_BACKOFF;this.aw=2E4;this.ax=36E4;this.ay=3E4+Math.floor(Math.random()*1E4);this.az=true};PushClient.b0=2;PushClient.b1=9E5;PushClient.b2=1E4;
PushClient.b3="SUBSCRIBE";PushClient.b4="UNSUBSCRIBE";PushClient.b5="PING";PushClient.b6="CONNECT";PushClient.b7="PUBLISH";PushClient.b8="PAUSE";PushClient.b9="RESUME";PushClient.ba=0;PushClient.bb=1;PushClient.bc=2;PushClient.bd=3;PushClient.be=4;PushClient.bf=5;PushClient.bg=6;PushClient.bh=7;PushClient.f=8;PushClient.bi=9;
PushClient.bj=10;PushClient.bk="SERVER_UP";PushClient.bl="SERVER_DOWN";PushClient.bm="SERVER_RECYCLE";PushClient.bn="1";PushClient.bo="2";PushClient.bp="3";PushClient.bq=1;PushClient.br="ERROR_TIMEOUT";PushClient.bs="ERROR_HTTP";PushClient.bt="ERROR_SERVER";PushClient.a9="SUBSCRIBE_TYPE_NORMAL";PushClient.bu="SUBSCRIBE_TYPE_CONFLATION";PushClient.bv="SUBSCRIBE_TYPE_HISTORY";
PushClient.bw="SUBSCRIBE_TYPE_RECOVERY";PushClient.a8="cache_ok";PushClient.bx="cache_ok_no_new_message";PushClient.by="cache_ok_new_epoch";PushClient.bz="no_cache";PushClient.c0="no_seq";PushClient.c1="end";PushClient.c2=0;PushClient.c3=1;PushClient.c4=2;a=PushClient.prototype;
a.c5=function(b,c){if(b.name)b=b.name;else{var d=b.toString();b=d.substring(d.indexOf("function")+8,d.indexOf("("));b=b.replace(/^\s+|\s+$/g,"");if(b.length===0)b="anonymous";if(b==="anonymous"&&typeof c==="object")for(var e=0;e<c.length;e++)for(var f in c[e])if(c[e].hasOwnProperty(f)&&typeof c[e][f]==="function")if(c[e][f].toString()===d)return f}return b};
a.c6=function(b){if(b===null||b===undefined||typeof b==="number"||typeof b==="boolean")return b;else if(typeof b==="string")return'"'+b+'"';else if(typeof b==="function")return this.c5(b,this)+"()";else if(b instanceof Array)return this.c7(b);var c="{",d=0;for(var e in b){if(d>0)c+=", ";if(b.hasOwnProperty(e))c+=e+":"+this.c6(b[e]);d++}c+="}";return c};a.c8=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){var c=Math.random()*16|0;return(b=="x"?c:c&3|8).toString(16)})};
a.c9=function(b,c){var d=PushClient.b2;if(b>0){if(b<=this.at)d=b*this.au-Math.floor(Math.random()*this.au);else if(this.av===PushClient.TRUNCATED_EXPONENTIAL_BACKOFF){b=b-this.at;d=Math.min(this.aw*Math.pow(2,b)-Math.floor(Math.random()*this.aw*b),this.ax)}else d=this.aw;if(c!==undefined&&d<PushClient.b2)d=PushClient.b2}return d};a.ca=function(b,c){var d={};if(c.length>0)for(var e=0;e<c.length;e++){if(c[e]in b)d[c[e]]=b[c[e]]}else for(e in b)d[e]=b[e];return d};
a.cb=function(b,c){for(var d=[],e=0;e<c.length;e++)c[e]in b&&d.push(c[e]);return d};a.cc=function(b,c){for(var d=0;d<b.length;d++)if(b[d]===c)return d;return-1};a.cd=function(b){for(var c=[],d=0;d<b.length;d++)c.push(b[d]);return c};a.ce=function(b,c){for(var d=[],e=0;e<b.length;e++)this.cc(c,b[e])===-1&&d.push(b[e]);return d};a.cf=function(b,c){for(var d=[],e=0;e<b.length;e++)this.cc(c,b[e])!==-1&&d.push(b[e]);return d};
a.cg=function(b,c){for(var d=this.cd(b),e=0;e<c.length;e++)this.cc(b,c[e])===-1&&d.push(c[e]);return d};
a.ch=function(b,c,d,e,f,h){if(typeof c!=="object"||typeof c.length!=="number")throw"Error: "+b+". The argument should be a list!";if(e!==null&&c.length<e)throw"Error: "+b+". The list argument should have at minimum "+e+" elements!";if(d!==null)for(e=0;e<c.length;e++)if(typeof c[e]!==d)throw"Error: "+b+". The list argument should contain only '"+d+"' elements, the "+e+"-th element is not of type '"+d+"'!";if(typeof f==="object"&&typeof f.test==="function")for(e=0;e<c.length;e++)if(!f.test(c[e]))throw"Error: "+
b+". "+h+". The "+e+"-th element is the cause of the error!";};a.c7=function(b){for(var c="[",d=0;d<b.length;d++){if(d>0)c+=", ";c+=this.c6(b[d])}c+="]";return c};a.ci=function(b,c,d,e,f){this.ch(b,c,d,e,/^\/[^\/*]+\/([^\/*]+\/)*([^\/*]+|\*)$/,f)};
a.cj=function(b,c){if(b===this.ck.cl)this.cm(c);else if(b===this.ck.cn)this.co(c);else if(b===this.ck.cp)this.cq(c);else if(b===this.ck.cr)this.cs(c);else if(this.al!==null)if(this.al.ct===PushClient.b3&&b===this.ck.b3)this.cu(c);else this.al.ct===PushClient.b4&&b===this.ck.b4&&this.cv(c)};
a.cu=function(b){var c=b[this.ck.cw];if(c!==undefined)this.cx(PushClient.bt,this.cy.cz[c]);else{if(this.a2!==PushClient.bk){c=b[this.ck.d0];if(c===undefined){this.o("Received a initial subscribe response without sessionId - message ignored!");this.cx(PushClient.bt,"server subscribe response is missing the session id");return}this.aa=c;c=b[this.ck.d1];if(c!==undefined&&c!==null)if(c==1)this.q=true;c=b[this.ck.d2];if(c!==undefined&&c!==null)this.ay=c*1E3*1.4;c=b[this.ck.d3];
	if(c!==undefined&&c!==null)if(c==1)this.r=true;this.ab=b[this.ck.d4];b=this.a2;this.a2=PushClient.bk;this.ah=this.ag=0;this.d5();if(b!==PushClient.bm){this.ap.as[this.a1]!==undefined&&this.ap.as[this.a1].d6++;if(b===null||this.ai)this.d8({type:PushClient.NOTIFY_SERVER_UP,info:this.v[this.a1].d7})}else this.ap.as[this.a1]!==undefined&&this.ap.as[this.a1].d9++;this.ai=false}this.da()}};
a.cv=function(b){b=b[this.ck.cw];b!==undefined?this.cx(PushClient.bt,this.cy.cz[b]):this.da()};
a.cm=function(b){var c=this.ck.db,d=this.ck.dc,e=this.ck.dd,f=this.ck.de,h=this.ck.df,g=this.ck.dg;if(b[c]===undefined||b[d]===undefined)this.o("Received an invalid PUBLISH message: missing db or/and dc - message ignored!");else if(this.a7[b[c]]!==undefined){var i=false,k=false;if(b[h]!==undefined)if(b[h]==PushClient.bn)i=true;else if(b[h]==PushClient.bp)k=true;h=[];e=b[e];f=b[f];if(e!==undefined&&f!=undefined)if(e instanceof Array)for(var l=0;l<e.length;l++)h[l]={name:e[l],value:f[l]};
else h[0]={name:e,value:f};d={subject:b[c],content:b[d],fields:h,replyToSubject:b[g],snapshot:i,recovery:k,seq:0,epoch:0};g=this.ck.dh;if(b[g]!==undefined){g=((new Date).getTime()&16777215)-b[g];if(g>-14400000)d.latency=g}if(this.q==true&&this.a7[b[c]].conflation===0){c=parseInt(b[this.ck.di]);g=parseInt(b[this.ck.dj]);d.seq=g;d.epoch=c;c=this.dk(d.subject,this.a7[d.subject],g,c);if(c=="in_order")this.r==true&&this.dn(this.dm(d.subject,d.seq,d.epoch,this.aa,b[this.ck.dl],this.e,this.ck));else if(c==
	"higher"){this.dp();return}}this.ap.as[this.a1]!==undefined&&this.ap.as[this.a1].dq++;this.d8({message:d})}};
a.dk=function(b,c,d,e){if(c.seqid!=e){c.seq=d;c.messagesReceivedUntilRecovery++;c.seqid=e;return"in_order"}if(d<=c.seq)return"lower";if(d==c.seq+1){if(c.currentSubscribeType==PushClient.bw){c.currentSubscribeType=PushClient.a9;b={type:PushClient.NOTIFY_DATA_SYNC,info:b};this.d8(b)}c.seq+=1;c.messagesReceivedUntilRecovery++;return"in_order"}if(c.messagesReceivedUntilRecovery>0){this.o("Missing data: expected seq "+(c.seq+1)+", instead received seq "+d+" !");return"higher"}this.o("Reset seq '"+
	c.seq+"'. New seq is '"+d+"' !");c.seq=d;c.messagesReceivedUntilRecovery++;b={type:PushClient.NOTIFY_DATA_RESYNC,info:b};this.d8(b);return"in_order"};a.cx=function(b,c){b=b+", "+c;c=this.ap.as[this.a1].cz;if(c[b]===undefined)c[b]=1;else c[b]++;this.ah++;this.dp()};
a.co=function(b){var c=this.ck.dr,d=this.ck.db;if(b[c]===undefined||b[d]===undefined)this.o("Received an invalid ENTITLEMENT_CHECK message: missing db or/and dr - message ignored!");else{var e=true,f=PushClient.NOTIFY_SUBSCRIBE_DENY;switch(b[c]){case "a":f=PushClient.NOTIFY_SUBSCRIBE_ALLOW;e=false;break;case "d":c=b[this.ck.cw];if(c!==undefined){if(c==PushClient.c4)f=PushClient.NOTIFY_SUBSCRIBE_TIMEOUT}else f=PushClient.NOTIFY_SUBSCRIBE_DENY;break}if(e===
	true){this.a6=this.ce(this.a6,[b[d]]);delete this.a7[b[d]]}this.d8(b[this.ck.ds]===undefined||b[this.ck.ds]===null?{type:f,info:b[d]}:{type:b[this.ck.ds],info:b[d]})}};a.d8=function(b){this.y.push(b);setTimeout(function(c){return function(){var d=c.y.shift();"message"in d?c.w(d.message):c.x(d)}}(this),0)};a.cq=function(b){b!==undefined&&b!==null&&Object.keys(b).length>0&&this.dt(b)};
a.dt=function(b){var c=b[this.ck.du],d=b[this.ck.dr];b=b[this.ck.ds];if(c!==undefined&&c!==null)this.d8(b!==undefined&&b!==null?{type:b,info:c}:{type:this.dv(d),info:c})};
a.cs=function(b){var c=b[this.ck.db];b=b[this.ck.df];this.o("recovery status for subject:"+c+" is:"+b);if(PushClient.c1==b)for(b=0;b<this.a6.length;b++){c=this.a7[this.a6[b]];var d=c.cacheRecoveryStatus;if(PushClient.a8==d||PushClient.by==d||PushClient.bx==d)c.nrOfConsecutiveRecovery=0;else{c.messagesReceivedUntilRecovery=0;c.seqid!=7E4&&c.nrOfConsecutiveRecovery++}}else{c=this.a7[c];if(c!==null)c.cacheRecoveryStatus=b}};
a.dv=function(b){if(b===undefined||b===null)return PushClient.NOTIFY_PUBLISH_FAILED;switch(b){case "OK":return PushClient.NOTIFY_PUBLISH_OK;case "DENY":return PushClient.NOTIFY_PUBLISH_DENIED;default:return PushClient.NOTIFY_PUBLISH_FAILED}};
a.dw=function(){this.ap.ar=(new Date).getTime();this.ap.as[this.a1]!==undefined&&this.ap.as[this.a1].dx++;this.ae!==null&&this.d5();this.al!==null&&this.al.ct===PushClient.b5&&this.da();var b=(new Date).getTime();if(b-this.ad>=PushClient.b1){this.ad=b;b={};b.ct=PushClient.b5;this.dy(b)}};a.d5=function(){this.ae!==null&&clearTimeout(this.ae);if(this.ay>0)this.ae=setTimeout(function(b){return function(){b.ah++;b.dp()}}(this),this.ay)};
a.dp=function(){this.ap.as[this.a1]!==undefined&&this.ap.as[this.a1].dz++;if((new Date).getTime()-this.a0<18E4)this.z++;else{this.z=0;this.a0=(new Date).getTime()}if(this.ao!==null){clearTimeout(this.ao);this.ao=null}this.e0();this.e1();this.e2();if(this.a2!==null)this.a2=PushClient.bl;var b=this.v[this.a1].d7;this.af.push(this.v[this.a1]);this.ab=this.aa=this.a1=null;this.ag++;if(this.ae!==null){clearTimeout(this.ae);this.ae=null}if(!this.ai&&(this.ag===this.p||this.ag===this.v.length)){this.ai=
	true;this.d8({type:PushClient.NOTIFY_SERVER_DOWN,info:b})}if(this.v.length>0){b={};b.ct=PushClient.b6;this.dy(b)}this.t=true;if(this.a6.length>0){b={};b.ct=PushClient.b3;b.a6=this.a6;this.dy(b)}};
a.e3=function(){this.ap.as[this.a1]!==undefined&&this.ap.as[this.a1].dz++;if((new Date).getTime()-this.a0<18E4)this.z++;else{this.z=0;this.a0=(new Date).getTime()}if(this.ao!==null){clearTimeout(this.ao);this.ao=null}this.aj="";this.e0();this.e1();this.e2();if(this.a2!==null)this.a2=PushClient.bl;var b=this.v[this.a1].d7;this.af.push(this.v[this.a1]);this.ab=this.aa=this.a1=null;this.ag++;if(this.ae!==null){clearTimeout(this.ae);this.ae=null}if(!this.ai&&(this.ag===this.p||this.ag===this.v.length)){this.ai=
	true;this.d8({type:PushClient.NOTIFY_SERVER_DOWN,info:b})}};a.e4=function(){this.da();if(this.v.length>0){var b={};b.ct=PushClient.b6;this.dy(b)}this.t=true;if(this.a6.length>0){b={};b.ct=PushClient.b3;b.a6=this.a6;this.dy(b)}};
a.e5=function(){this.e6();var b=this.v[this.a1].d7;if(this.k==false||this.l)if("/"!==b.substring(b.length-1,b.length))b+="/";var c=this.c9(this.ah,PushClient.b6);this.an=setTimeout(function(d){return function(){d.an=null;d.cx(PushClient.br,d.al.ct)}}(this),c);this.g(b,this.a1)};
a.e7=function(){this.a6=this.cg(this.a6,this.al.a6);var b=this.ck,c=null,d=null;if(this.a2!==PushClient.bk){c=this.d;d=PushClient.bq}for(var e="",f=0;f<this.al.a6.length;f++){var h=this.al.a6[f];if(this.al.e8!==undefined&&this.al.e8===true)this.a7[h]={seqid:7E4,seq:0,history:h in this.al.e9?this.al.e9[h]:0,conflation:h in this.al.ea?this.al.ea[h]:0,needsRecovery:false,nrOfConsecutiveRecovery:0,messagesReceivedUntilRecovery:0,cacheRecoveryStatus:PushClient.a8,currentSubscribeType:PushClient.a9};
	var g=this.a7[h];if(this.t){this.t=false;e+=this.eb(h,g,this.e,this.aa,b,this.u,c,d,PushClient.b0,this.r)}else e+=this.eb(h,g,this.e,this.aa,b,null,null,null,PushClient.b0,this.r)}this.an=setTimeout(function(i){return function(){i.an=null;i.cx(PushClient.br,i.al.ct)}}(this),PushClient.b2);this.i(e)};
a.ec=function(){this.a6=this.ce(this.a6,this.al.a6);if(this.a2!==PushClient.bk){this.da();for(var b=0;b<this.al.a6.length;b++)delete this.a7[this.al.a6[b]]}else{var c=this.ck,d="";for(b=0;b<this.al.a6.length;b++){var e=this.al.a6[b];d+=this.ed(e,this.a7[e],this.e,this.aa,c);delete this.a7[e]}this.an=setTimeout(function(f){return function(){f.an=null;f.cx(PushClient.br,f.al.ct)}}(this),PushClient.b2);this.i(d)}};
a.ee=function(){if(this.a2!==PushClient.bk)this.da();else{var b=this.ef(this.aa,this.ck,this.e,this.ab);this.an=setTimeout(function(c){return function(){c.an=null;c.cx(PushClient.br,c.al.ct)}}(this),PushClient.b2);this.i(b)}};a.eg=function(){var b=this.ck;if(this.a2!==PushClient.bk){b=this.al.eh.closure;b!==undefined&&b!==null&&this.d8({type:PushClient.NOTIFY_PUBLISH_FAILED,info:b})}else this.i(this.ei(this.al.eh,this.e,this.aa,b,this.u,this.ab))};
a.da=function(b){if(this.ak.length!==0)if(b!==undefined&&b!==null){if(this.ak[0].ct===b){this.ak.shift();this.e1();this.c(false)}}else{this.ak.shift();this.e1();this.c(false)}};a.dy=function(b){this.ak.push(b);this.ej(false)};a.c=function(b){this.ak.length!==0&&setTimeout(function(c){return function(){c.ej(b)}}(this),0)};
a.ej=function(b){if(this.b)if(!(!b&&(this.al!==null||this.ak.length===0))){this.al=this.ak[0];switch(this.al.ct){case PushClient.b3:this.e7();break;case PushClient.b4:this.ec();break;case PushClient.b5:this.ee();break;case PushClient.b6:this.e5();break;case PushClient.b7:this.eg();this.da();break;case PushClient.b8:this.e3();break;case PushClient.b9:this.e4();break}}};
a.e0=function(){for(;this.ak.length>0;){var b=this.ak[0];switch(b.ct){case PushClient.b3:var c=this.ce(b.a6,this.a6);if(c.length>0){this.a6=this.cg(this.a6,c);if(b.e8!==undefined&&b.e8===true)for(var d=0;d<c.length;d++)this.a7[c[d]]={seqid:7E4,seq:0,history:c[d]in b.e9?b.e9[c[d]]:0,conflation:c[d]in b.ea?b.ea[c[d]]:0,needsRecovery:false,nrOfConsecutiveRecovery:0,messagesReceivedUntilRecovery:0,cacheRecoveryStatus:PushClient.a8,currentSubscribeType:PushClient.a9}}break;case PushClient.b4:c=
	this.cf(b.a6,this.a6);if(c.length>0){this.a6=this.ce(this.a6,c);for(d=0;d<c.length;d++)delete this.a7[c[d]]}break;case PushClient.b7:b.eh.closure!==undefined&&b.eh.closure!==null&&this.d8({type:PushClient.NOTIFY_PUBLISH_FAILED,info:b.eh.closure});break}this.ak.shift()}};a.e1=function(){this.al=null;if(this.an!==null){clearTimeout(this.an);this.an=null}};
a.e2=function(){this.m();if(this.ac!==null){if(this.k)if(this.l){this.ac.removeAllListeners("close");this.ac.close()}else{this.ac.removeAllListeners("close");this.ac.destroy()}else{this.ac.onmessage=function(){};this.ac.onopen=function(){};this.ac.onclose=function(){};this.ac.close()}delete this.ac;this.ac=null}};
a.ek=function(){this.e1();this.e2();this.a2=this.a1=null;this.a6=[];this.ab=this.aa=null;this.af=[];this.z=this.ag=0;this.a0=(new Date).getTime();this.ah=0;this.ai=false;this.ak=[];this.a7={};this.a7[""]={seqid:7E4,seq:0,history:0,conflation:0,needsRecovery:false,nrOfConsecutiveRecovery:0,messagesReceivedUntilRecovery:0,cacheRecoveryStatus:PushClient.a8,currentSubscribeType:PushClient.a9};this.t=true;this.q=false;if(this.ae!==null){clearTimeout(this.ae);this.ae=null}if(this.ao!==
	null){clearTimeout(this.ao);this.ao=null}};a.e6=function(){if(this.a1===null)this.a1=this.em()};a.em=function(){var b=this.ce(this.v,this.af);if(b.length===0){this.af=[];b=this.v}if(b.length===0)throw"Error: em() No available servers!";for(var c=0,d=0;d<b.length;d++)c+=b[d].en;var e=-1;if(c===0)e=Math.floor(b.length*Math.random());else{var f=Math.floor(c*Math.random());for(d=c=0;d<b.length;d++){c+=b[d].en;if(c>f){e=d;break}}}return this.cc(this.v,b[e])};
a.h=function(b){b=b.substring(0,b.indexOf("://"))==="http"?"ws://"+b.substring(b.indexOf("://")+3)+"WebSocketConnection":"wss://"+b.substring(b.indexOf("://")+3)+"WebSocketConnection-Secure";this.ac=new WebSocket(b);this.aj=this.c8();this.ac.eo=this.aj;this.ac.onmessage=function(c){return function(d){c.ep(d.data)}}(this);this.ac.onopen=function(c){return function(){c.da()}}(this);this.ac.onerror=function(c){return function(d){c.o(d)}}(this);this.ac.onclose=function(c){return function(){if(c.aj===
	c.ac.eo){c.e1();c.ah++;c.da(PushClient.b6);var d=c.c9(c.ah);c.ao=setTimeout(function(e){return function(){e.dp()}}(c),d)}}}(this)};a.j=function(b){this.ac!=null&&this.ac.readyState===1&&this.ac.send(b)};a.ep=function(b){var c=this.ac;if(!(c===null||c.readyState!==1))if(b){c=b;for(var d=c.indexOf(this.ck.eq);d!==-1;){c=c.substring(0,d);this.er(c);c=b.substring(d+1);d=c.indexOf(this.ck.eq)}}};
a.er=function(b){for(var c=0,d="\u0000",e={};;){var f=b.indexOf(this.ck.es,c);if(f===-1)break;if(f-c>0){c=b.substring(c,f);d=c.charAt(0);e=this.et(c);this.cj(d,e)}c=f+1}this.dw()};
a.et=function(b){var c=b.charAt(0);if(this.ck.eu[c]===undefined)this.o("Received an invalid message: operation unknown: '"+c+"' [char code '"+c.charCodeAt(0)+"'] - message ignored!");else{var d=1;for(c={};;){if(d>=b.length)break;var e=b.charAt(d),f=b.indexOf(this.ck.ev,d+1);if(f===-1){this.o("Received an invalid message: header end missing, header='"+e+"' [char code '"+e.charCodeAt(0)+"']- message ignored, msg='"+b+"', header position="+d);return c}if(this.ck.ew[e]===undefined)this.o("Received an invalid message: unknown header: '"+
	e+"' [char code '"+e.charCodeAt(0)+"'] - header ignored, msg='"+b+"', header position="+d);else{d++;var h="";switch(this.ck.ex[e]){case this.cy.ey:h=this.ez(this.ck,b.substring(d,f));break;case this.cy.f0:h=this.f1(this.ck,b.substring(d,f));break}d=c[e];if(d===undefined)c[e]=h;else if(c[e]instanceof Array)c[e][c[e].length]=h;else{c[e]=[];c[e][0]=d;c[e][1]=h}}d=f+1}return c}};
a.eb=function(b,c,d,e,f,h,g,i,k,l){var j="";j+=f.b3;j+=f.db;j+=this.f2(f,b);j+=f.ev;if(d!==null){j+=f.f3;j+=this.f4(f,d);j+=f.ev}if(h!==null){j+=f.f5;j+=this.f2(f,h);j+=f.ev}if(e!==null){j+=f.d0;j+=this.f4(f,e);j+=f.ev}b=this.f6(c);if(b==PushClient.bu){j+=f.f7;j+=this.f4(f,c.conflation);j+=f.ev}else if(b==PushClient.bv){j+=f.f8;j+=this.f4(f,c.history);j+=f.ev}else if(b==PushClient.bw){j+=f.di;j+=this.f4(f,c.seqid);j+=f.ev;j+=f.dj;j+=this.f4(f,c.seq+1);j+=f.ev}if(g!==null){j+=
	f.f9;j+=this.f2(f,g);j+=f.ev}if(i!==null){j+=f.fa;j+=this.f4(f,i);j+=f.ev}j+=f.fb;j+=this.f4(f,k);j+=f.ev;if(l==true){j+=f.d3;j+=this.f4(f,1);j+=f.ev}j+=f.es;return j};a.ed=function(b,c,d,e,f){var h="";h+=f.b4;h+=f.db;h+=this.f2(f,b);h+=f.ev;if(c!==undefined&&c.conflation>0){h+=f.f7;h+=this.f4(f,c.conflation);h+=f.ev}if(e!==null){h+=f.d0;h+=this.f4(f,e);h+=f.ev}if(d!==null){h+=f.f3;h+=this.f4(f,d);h+=f.ev}h+=f.es;return h};
a.ef=function(b,c,d,e){var f="";f+=c.b5;f+=c.d0;f+=this.f4(c,b);f+=c.ev;if(d!==null){f+=c.f3;f+=this.f4(c,d);f+=c.ev}if(e!==null){f+=c.d4;f+=this.f4(c,e);f+=c.ev}f+=c.es;return f};
a.ei=function(b,c,d,e,f,h){var g="";g+=e.b7;g+=e.db;g+=this.f2(e,b.subject);g+=e.ev;g+=e.dc;g+=this.f2(e,b.content);g+=e.ev;if(b.closure!==undefined&&b.closure!==null){g+=e.du;g+=this.f2(e,b.closure);g+=e.ev}if(b.fields!==undefined&&b.fields!==null)for(var i=0;i<b.fields.length;i++){var k=b.fields[i].name,l=b.fields[i].value;g+=e.dd;g+=this.f2(e,k);g+=e.ev;g+=e.de;g+=this.f2(e,l);g+=e.ev}if(b.replyToSubject!==undefined&&b.replyToSubject!==null){g+=e.dg;g+=this.f2(e,b.replyToSubject);g+=e.ev}if(c!==
	null){g+=e.f3;g+=this.f4(e,c);g+=e.ev}if(d!==null){g+=e.d0;g+=this.f4(e,d);g+=e.ev}if(h!==null){g+=e.d4;g+=this.f4(e,h);g+=e.ev}if(f!==null){g+=e.f5;g+=this.f2(e,f);g+=e.ev}g+=e.es;return g};a.dm=function(b,c,d,e,f,h,g){var i="";i+=g.fc;i+=g.db;i+=this.f2(g,b);i+=g.ev;i+=g.dj;i+=this.f4(g,c);i+=g.ev;i+=g.di;i+=this.f4(g,d);i+=g.ev;if(e!==null){i+=g.d0;i+=this.f4(g,e);i+=g.ev}if(f!==null){i+=g.dl;i+=this.f4(g,f);i+=g.ev}i+=g.f3;i+=this.f4(g,h);i+=g.ev;i+=g.es;return i};
a.f6=function(b){var c=PushClient.a9;if(b.conflation>=100)c=PushClient.bu;else if(b.seqid!=7E4)if(b.nrOfConsecutiveRecovery>=this.s){if(b.history>0)c=PushClient.bv}else c=PushClient.bw;else if(b.history>0)c=PushClient.bv;if(c==PushClient.a9||c==PushClient.bv||c==PushClient.bu){b.cacheRecoveryStatus=PushClient.a8;b.nrOfConsecutiveRecovery=0}return b.currentSubscribeType=c};a.ck={};a.ck.es="";a.ck.eq="\u0019";
a.ck.ev="\u001e";a.ck.fd="\u001f";a.ck.fe="\u0000";a.ck.ff="\n";a.ck.fg="\r";a.ck.fh='"';a.ck.fi="\\";a.ck.b3="\u0001";a.ck.b4="\u0002";a.ck.cl="\u0003";a.ck.b5="\u0004";a.ck.fj="\u0005";a.ck.fk="\u0006";a.ck.cn="\t";a.ck.fl="\u000c";a.ck.b7="\u0010";a.ck.cp="\u0013";a.ck.cr="\u0008";a.ck.fc="\u0017";a.ck.db="\u0001";a.ck.dc="\u0002";a.ck.dj="\u0003";a.ck.di="\u0004";a.ck.f3="\u0005";a.ck.d0="\u0006";a.ck.fm="\u0007";a.ck.fn="\u0008";a.ck.fo="\t";a.ck.cw="\u000b";a.ck.fp="\u000c";a.ck.dh="\u000e";
a.ck.fq="\u000f";a.ck.du="\u0010";a.ck.d1="\u0011";a.ck.f5="\u0013";a.ck.dr="\u0014";a.ck.d4="\u0015";a.ck.dd="\u001b";a.ck.de="\u001c";a.ck.f7="\u001d";a.ck.df="'";a.ck.f9="#";a.ck.fa="$";a.ck.d2="%";a.ck.f8="(";a.ck.dg=",";a.ck.fb="-";a.ck.d3=".";a.ck.dl="/";a.ck.ds="0";a.ck.fr={};(function(b){var c=b.fr;c[b.es]="\u0001";c[b.ev]="\u0002";c[b.fd]="\u0003";c[b.fe]="\u0004";c[b.ff]="\u0005";c[b.fg]="\u0006";c[b.fh]="\u0007";c[b.fi]="\u0008";c["!"]="\t";c[b.eq]="\u000b"})(PushClient.prototype.ck);
PushClient.prototype.ck.fs={};(function(b){for(var c in b.fr)if(b.fr.hasOwnProperty(c))b.fs[b.fr[c]]=c})(PushClient.prototype.ck);PushClient.prototype.ck.eu={};(function(b){b.eu[b.b3]=true;b.eu[b.b4]=true;b.eu[b.cl]=true;b.eu[b.b5]=true;b.eu[b.fj]=true;b.eu[b.fk]=true;b.eu[b.cn]=true;b.eu[b.fl]=true;b.eu[b.b7]=true;b.eu[b.cp]=true;b.eu[b.cr]=true;b.eu[b.fc]=true})(PushClient.prototype.ck);PushClient.prototype.ck.ew={};
(function(b){b.ew[b.db]=true;b.ew[b.dc]=true;b.ew[b.dj]=true;b.ew[b.di]=true;b.ew[b.f3]=true;b.ew[b.d0]=true;b.ew[b.fm]=true;b.ew[b.fn]=true;b.ew[b.fo]=true;b.ew[b.cw]=true;b.ew[b.fp]=true;b.ew[b.dh]=true;b.ew[b.fq]=true;b.ew[b.d1]=true;b.ew[b.f5]=true;b.ew[b.dr]=true;b.ew[b.d4]=true;b.ew[b.dd]=true;b.ew[b.de]=true;b.ew[b.f7]=true;b.ew[b.df]=true;b.ew[b.f9]=true;b.ew[b.fa]=true;b.ew[b.du]=true;b.ew[b.f8]=true;b.ew[b.d2]=true;b.ew[b.dg]=true;b.ew[b.fb]=true;b.ew[b.d3]=true;b.ew[b.dl]=true;b.ew[b.ds]=
	true})(PushClient.prototype.ck);a=PushClient.prototype;a.cy={};a.cy.ft=1;a.cy.fu=2;a.cy.f0=3;a.cy.ey=4;a.cy.fv={};(function(b){var c=b.fv;c.db=b.f0;c.dc=b.f0;c.dj=b.ey;c.di=b.ey;c.f3=b.ey;c.d0=b.ey;c.fm=b.f0;c.fn=b.f0;c.fo=b.f0;c.cw=b.ey;c.fp=b.f0;c.dh=b.ey;c.fq=b.ey;c.f5=b.f0;c.dr=b.f0;c.d4=b.ey;c.dd=b.f0;c.de=b.f0;c.df=b.f0;c.f9=b.f0;c.fa=b.ey;c.du=b.f0;c.d1=b.ey;c.d2=b.ey;c.dg=b.f0;c.fb=b.ey;c.d3=b.ey;c.dl=b.ey;c.ds=b.f0})(PushClient.prototype.cy);
PushClient.prototype.ck.ex={};(function(){for(var b in PushClient.prototype.cy.fv)if(PushClient.prototype.cy.fv.hasOwnProperty(b))PushClient.prototype.ck.ex[PushClient.prototype.ck[b]]=PushClient.prototype.cy.fv[b]})();PushClient.prototype.f2=function(b,c){for(var d="",e=0;e<c.length;e++){var f=b.fr[c.charAt(e)];if(f!==undefined){d+=b.fd;d+=f}else d+=c.charAt(e)}return d};
PushClient.prototype.f1=function(b,c){for(var d="",e=0;e<c.length;e++){var f=c.charAt(e);if(f===b.fd){if(e+1>=c.length||b.fs[c.charAt(e+1)]===undefined)throw"Error: f1() Illegal argument '"+c+"'!";f=b.fs[c.charAt(e+1)];e++}d+=f}return d};
PushClient.prototype.f4=function(b,c){if((c&4294967168)===0){var d=String.fromCharCode(c),e=b.fr[d];return e===undefined?d:b.fd+e}var f;f=(c&4278190080)!==0?24:(c&16711680)!==0?16:8;d=[];for(e=0;e<10;e++)d.push(0);for(var h=0,g=0;f>=0;){var i=c>>f&255;g++;d[h]|=i>>g;e=b.fr[String.fromCharCode(d[h])];if(e!==undefined){d[h]=b.fd.charCodeAt(0);d[h+1]=e.charCodeAt(0);h++}h++;d[h]|=i<<7-g&127;f-=8}e=b.fr[String.fromCharCode(d[h])];if(e!==undefined){d[h]=b.fd.charCodeAt(0);d[h+1]=e.charCodeAt(0);
	h++}h++;b="";for(e=0;e<h;e++)b+=String.fromCharCode(d[e]);return b};
PushClient.prototype.ez=function(b,c){var d="Error: ez() Illegal argument '"+c+"'!",e=0,f=-1,h=0,g,i=c.length,k=0;if(i===1)return c.charCodeAt(0);else if(i===2&&c.charAt(0)===b.fd){g=b.fs[c.charAt(1)];if(g!==undefined)return g.charCodeAt(0);else throw d;}for(;i>0;i--){g=c.charAt(k);k++;if(g===b.fd){if(i-1<0)throw d;i--;g=c.charAt(k);k++;g=b.fs[g];if(g===undefined)throw d;}else g=g;if(f>0){h|=g.charCodeAt(0)>>f;e=e<<8|h;h=g.charCodeAt(0)<<8-f}else h=g.charCodeAt(0)<<-f;f=(f+7)%8}return e};
PushClient.NOTIFY_UNSUPPORTED_BROWSER="NOTIFY_UNSUPPORTED_BROWSER";PushClient.NOTIFY_SERVER_DOWN="NOTIFY_SERVER_DOWN";PushClient.NOTIFY_SERVER_UP="NOTIFY_SERVER_UP";PushClient.NOTIFY_DATA_RESYNC="NOTIFY_DATA_RESYNC";PushClient.NOTIFY_DATA_SYNC="NOTIFY_DATA_SYNC";PushClient.NOTIFY_PUBLISH_OK="NOTIFY_PUBLISH_OK";PushClient.NOTIFY_PUBLISH_FAILED="NOTIFY_PUBLISH_FAILED";PushClient.NOTIFY_PUBLISH_DENIED="NOTIFY_PUBLISH_DENIED";
PushClient.NOTIFY_SUBSCRIBE_ALLOW="NOTIFY_SUBSCRIBE_ALLOW";PushClient.NOTIFY_SUBSCRIBE_DENY="NOTIFY_SUBSCRIBE_DENY";PushClient.NOTIFY_SUBSCRIBE_TIMEOUT="NOTIFY_SUBSCRIBE_TIMEOUT";PushClient.NOTIFY_RECONNECT_RATE_EXCEEDED="NOTIFY_RECONNECT_RATE_EXCEEDED";PushClient.CONSTANT_WINDOW_BACKOFF="CONSTANT_WINDOW_BACKOFF";PushClient.TRUNCATED_EXPONENTIAL_BACKOFF="TRUNCATED_EXPONENTIAL_BACKOFF";PushClient.TRANSPORT_HTTP="TRANSPORT_HTTP";
PushClient.TRANSPORT_WEBSOCKET="TRANSPORT_WEBSOCKET";a=PushClient.prototype;
a.connect=function(){if(this.fw)throw"Error: connect() - already connected";if(this.v===undefined||this.v===null||this.v.length===0)throw"Error: connect() - no server to connect to; use setServers() to specify one or more servers";if(this.w===undefined||this.w===null)throw"Error: connect() - no message handler; use setMessageHandler() to specify a message handler";if(this.x===undefined||this.x===null)throw"Error: connect() - no status handler; use setStatusHandler() to specify a status handler";this.fw=
	true;var b={};b.ct=PushClient.b6;this.dy(b);if(this.a3.length>0){var c=this.cb(this.a4,this.a3);if(c.length>0){b={};b.ct=PushClient.b3;b.a6=c;b.e9=this.ca(this.a4,c);b.ea={};b.e8=true;this.dy(b)}c=this.cb(this.a5,this.a3);if(c.length>0){b={};b.ct=PushClient.b3;b.a6=c;b.e9={};b.ea=this.ca(this.a5,c);b.e8=true;this.dy(b)}}else{b={};b.ct=PushClient.b3;b.a6=[""];this.dy(b)}};
a.setServers=function(b){if(this.fw)throw"Error: setServers() - already connected; use this method before connect()";this.ch("setServers",b,"string",1,/^(\d+)?\s*https?:\/\/(\w|-)+(\.(\w|-)+)*(:\d+)?$/i,"Error: setServers() - invalid argument; expected a list of URLs");for(var c=[],d=0;d<b.length;d++){var e=/https?:\/\/(\w|-)+(\.(\w|-)+)*(:\d+)?$/i.exec(b[d])[0],f=/^\d+/.exec(b[d]);if(f===null)f=100;else{f=parseInt(f[0]);if(f>100)throw"Error: setServers() - invalid weight; expected a number between 0 and 100";
}c.push({d7:e,en:f})}this.v=c;this.ap.as=[];for(d=0;d<b.length;d++){this.ap.as[d]={};this.ap.as[d].d6=0;this.ap.as[d].dz=0;this.ap.as[d].d9=0;this.ap.as[d].dx=0;this.ap.as[d].dq=0;this.ap.as[d].cz={}}};a.subscribe=function(b){this.subscribeWithHistory(b,0)};
a.subscribeWithHistory=function(b,c){this.ci("subscribeWithHistory",b,"string",1,"Error: subscribe() - invalid first argument; expected a list of valid topics");if(typeof c!=="number"||c<0)throw"Error: subscribeWithHistory() - invalid second argument; expected an integer higher or equal to 0";b=this.ce(b,this.a3);if(b.length!==0){for(var d=0;d<b.length;d++)this.a4[b[d]]=c;this.a3=this.cg(this.a3,b);if(this.fw){c={};c.ct=PushClient.b3;c.a6=b;c.e9=this.ca(this.a4,b);c.ea={};c.e8=true;this.dy(c)}}};
a.subscribeWithConflation=function(b,c){this.ci("subscribeWithConflation",b,"string",1,"Error: subscribe() - invalid first argument; expected a list of valid topics");b=this.ce(b,this.a3);if(b.length!==0){c=c>=100?Math.floor(c/100)*100:0;for(var d=0;d<b.length;d++)this.a5[b[d]]=c;this.a3=this.cg(this.a3,b);if(this.fw){c={};c.ct=PushClient.b3;c.a6=b;c.e9={};c.ea=this.ca(this.a5,b);c.e8=true;this.dy(c)}}};
a.unsubscribe=function(b){this.ci("unsubscribe",b,"string",1,"Error: unsubscribe() - invalid argument; expected a list of valid topics");b=this.cf(b,this.a3);if(b.length!==0){for(var c=0;c<b.length;c++)delete this.a4[b[c]];for(c=0;c<b.length;c++)delete this.a5[b[c]];this.a3=this.ce(this.a3,b);if(this.fw){c={};c.ct=PushClient.b4;c.a6=b;this.dy(c)}}};a.disconnect=function(){if(this.fw){this.fw=false;this.ek()}};
a.setEntitlementToken=function(b){if(this.fw)throw"Error: setEntitlementToken() - already connected; use this method before connect()";this.u=b};
a.getInfo=function(){if(!this.fw)throw"Error: getInfo() - not connected; use this method after connect()";var b="Date: "+(new Date).toString()+"\n";b+="Uptime: "+((new Date).getTime()-this.ap.aq)+" ms\n";b+="Servers: ";for(var c=0;c<this.v.length;c++){if(c>0)b+=", ";b+=this.v[c].en+" "+this.v[c].d7}b+="\nSubjects: "+this.a6.toString()+"\n";b+="Connection status ["+(this.a1===null?null:this.v[this.a1].d7)+"]: "+this.a2+"\n";b+="Time from last server activity: "+(this.ap.ar!==null?(new Date).getTime()-
	this.ap.ar:null)+" ms\n";b+="Servers down before notify: "+this.p+"\n";b+="Consecutive server down count: "+this.ag+" times\n";for(c=0;c<this.ap.as.length;c++){b+="\nServer up ["+this.v[c].d7+"]: "+this.ap.as[c].d6+" times\n";b+="Server down ["+this.v[c].d7+"]: "+this.ap.as[c].dz+" times\n";b+="Server connection recycled ["+this.v[c].d7+"]: "+this.ap.as[c].d9+" times\n";b+="Received server events ["+this.v[c].d7+"]: "+this.ap.as[c].dx+"\n";b+="Received messages ["+this.v[c].d7+"]: "+this.ap.as[c].dq+
	"\n";for(var d in this.ap.as[c].cz)if(this.ap.as[c].cz.hasOwnProperty(d))b+="Error ["+this.v[c].d7+"] x"+this.ap.as[c].cz[d]+" times : "+d+"\n"}return b};
a.publish=function(b){if(!this.fw)throw"Error: publish() - not connected; use this method after connect()";if(b===undefined||b===null)throw"Error: publish() - invalid argument; expected a valid message";if(b.subject===undefined||b.subject===null)throw"Error: publish() - invalid argument; expected a valid message with a non-empty topic";this.ci("publish",[b.subject],"string",1,"Error: publish() - invalid argument; expected a valid message,  "+b.subject+" is the cause of the error");if(b.content===
	undefined||b.content===null)throw"Error: publish() - invalid argument; expected a valid message with a non-empty content";if(b.fields!==undefined&&b.fields!==null){if(typeof b.fields!=="object"||typeof b.fields.length!=="number")throw"Error: publish() - the message.fields element should be a list!";for(var c=0;c<b.fields.length;c++){if(!("name"in b.fields[c]))throw"Error: publish() - the "+c+"-th element from fields list doesn't have the name key!";if(!("value"in b.fields[c]))throw"Error: publish() - the "+
c+"-th element from fields list doesn't have the value key!";}}b.replyToSubject!==undefined&&b.replyToSubject!==null&&this.subscribe([b.replyToSubject]);c={};c.ct=PushClient.b7;c.eh=b;this.dy(c)};a.notifyAfterReconnectRetries=function(b){if(this.fw)throw"Error: notifyAfterReconnectRetries() - already connected; use this method before connect()";if(typeof b!=="number"||b<1)throw"Error: notifyAfterReconnectRetries() - invalid argument; expected a positive integer";this.p=b};a.getSubjects=function(){return this.cd(this.a3)};
a.setMessageHandler=function(b){if(this.fw)throw"Error: setMessageHandler() - already connected; use this method before connect()";if(typeof b!=="function")throw"Error: setMessageHandler() - invalid argument; expected a function";this.w=b};a.setStatusHandler=function(b){if(this.fw)throw"Error: setStatusHandler() - already connected; use this method before connect()";if(typeof b!=="function")throw"Error: setStatusHandler() - invalid argument; expected a function";this.x=b};
a.setQuickReconnectMaxRetries=function(b){if(this.fw)throw"Error: setQuickReconnectMaxRetries() - already connected; use this method before connect()";if(typeof b!=="number"||b<2)throw"Error: setQuickReconnectMaxRetries() - invalid argument; expected an integer higher or equal to 2";this.at=b};
a.setQuickReconnectInitialDelay=function(b){if(this.fw)throw"Error: setQuickReconnectInitialDelay() - already connected; use this method before connect()";if(typeof b!=="number"||b<1)throw"Error: setQuickReconnectInitialDelay() - invalid argument; expected an integer higher or equal to 1";this.au=b*1E3};
a.setReconnectPolicy=function(b){if(this.fw)throw"Error: setReconnectPolicy()  - already connected; use this method before connect()";if(b===undefined||b!==PushClient.CONSTANT_WINDOW_BACKOFF&&b!==PushClient.TRUNCATED_EXPONENTIAL_BACKOFF)throw"Error: setReconnectPolicy() - invalid argument; expected CONSTANT_WINDOW_BACKOFF or TRUNCATED_EXPONENTIAL_BACKOFF";this.av=b};
a.setReconnectTimeInterval=function(b){if(this.fw)throw"Error: setReconnectTimeInterval() - already connected; use this method before connect()";if(typeof b!=="number"||b<1)throw"Error: setReconnectTimeInterval() - invalid argument; expected an integer higher or equal to 1";this.aw=b*1E3};
a.setReconnectMaxDelay=function(b){if(this.fw)throw"Error: setReconnectMaxDelay() - already connected; use this method before connect()";if(typeof b!=="number"||b<1)throw"Error: setReconnectMaxDelay() - invalid argument; expected an integer higher or equal to 1";this.ax=b*1E3};a.pause=function(){if(!this.fw)throw"Error: pause() - not connected; use this method after connect()";if(this.az!=false){this.az=false;this.o("Enter pause!");var b={};b.ct=PushClient.b8;this.dy(b)}};
a.resume=function(){if(!this.fw)throw"Error: resume() - not connected; use this method after connect()";if(this.az!=true){this.az=true;this.o("Enter resume!");var b={};b.ct=PushClient.b9;this.dy(b)}};a.setLogHandler=function(b){if(typeof b!=="function")throw"Error: setLogHandler() - invalid argument; expected a function";this.o=b};
a.setTransport=function(b){if(this.fw)throw"Error: setTransport() - already connected; use this method before connect()";if(b===undefined||b!==PushClient.TRANSPORT_HTTP&&b!==PushClient.TRANSPORT_WEBSOCKET)throw"Error: setTransport() - invalid argument; expected TRANSPORT_HTTP or TRANSPORT_WEBSOCKET";this.k==false&&this.l==false?this.o("Warning: setTransport() - ignore method call for browser (use websocket by default)"):this.n(b)};if(typeof module!="undefined")module.exports=PushClient;
/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20170601
 */
(function(g,h){function v(gb,v){function Z(b){return c.preferFlash&&z&&!c.ignoreFlash&&c.flash[b]!==h&&c.flash[b]}function q(b){return function(c){var d=this._s;return d&&d._a?b.call(this,c):null}}this.setupOptions={url:gb||null,flashVersion:8,debugMode:!0,debugFlash:!1,useConsole:!0,consoleOnly:!0,waitForWindowLoad:!1,bgColor:"#ffffff",useHighPerformance:!1,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1E3,wmode:null,allowScriptAccess:"always",useFlashBlock:!1,useHTML5Audio:!0,
forceUseGlobalHTML5Audio:!1,ignoreMobileRestrictions:!1,html5Test:/^(probably|maybe)$/i,preferFlash:!1,noSWFCache:!1,idPrefix:"sound"};this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,onerror:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,playbackRate:1,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100};this.flash9Options={onfailure:null,
isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null};this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},
opus:{type:["audio/ogg; codecs=opus","audio/opus"],required:!1},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],required:!1},flac:{type:["audio/flac"],required:!1}};this.movieID="sm2-container";this.id=v||"sm2movie";this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.versionNumber="V2.97a.20170601";this.altURL=this.movieURL=this.version=null;this.enabled=this.swfLoaded=!1;this.oMC=null;this.sounds={};this.soundIDs=[];this.didFlashBlock=this.muted=
!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1};this.sandbox={};this.html5={usingFlash:null};this.flash={};this.ignoreFlash=this.html5Only=!1;var M,c=this,Na=null,k=null,aa,t=navigator.userAgent,Oa=g.location.href.toString(),n=document,oa,Pa,pa,m,x=[],N=!1,O=!1,l=!1,A=!1,qa=!1,P,w,ra,ba,sa,E,G,H,Qa,ta,ua,ca,I,da,F,va,Q,wa,ea,J,Ra,xa,ya,za,Sa,R=null,Aa=null,S,Ba,K,fa,ga,p,T=
!1,Ca=!1,Ta,Ua,Va,ha=0,U=null,ia,V=[],W,u=null,Wa,ja,X,Xa,C,ka,Da,Ya,r,hb=Array.prototype.slice,y=!1,Ea,z,Fa,Za,B,Y,$a=0,Ga,Ha=t.match(/(ipad|iphone|ipod)/i),Ia=t.match(/android/i),D=t.match(/msie|trident/i),ib=t.match(/webkit/i),la=t.match(/safari/i)&&!t.match(/chrome/i),Ja=t.match(/opera/i),ma=t.match(/(mobile|pre\/|xoom)/i)||Ha||Ia,ab=!Oa.match(/usehtml5audio/i)&&!Oa.match(/sm2-ignorebadua/i)&&la&&!t.match(/silk/i)&&t.match(/OS\sX\s10_6_([3-7])/i),Ka=n.hasFocus!==h?n.hasFocus():null,na=la&&(n.hasFocus===
h||!n.hasFocus()),bb=!na,cb=/(mp3|mp4|mpa|m4a|m4b)/i,La=n.location?n.location.protocol.match(/http/i):null,jb=La?"":"//",db=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4|m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,eb="mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),kb=new RegExp("\\.("+eb.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.useAltURL=!La;Xa=[null,"MEDIA_ERR_ABORTED","MEDIA_ERR_NETWORK","MEDIA_ERR_DECODE","MEDIA_ERR_SRC_NOT_SUPPORTED"];
var Ma;try{Ma=Audio!==h&&(Ja&&opera!==h&&10>opera.version()?new Audio(null):new Audio).canPlayType!==h}catch(lb){Ma=!1}this.hasHTML5=Ma;this.setup=function(b){var e=!c.url;b!==h&&l&&u&&c.ok();ra(b);if(!y)if(ma){if(!c.setupOptions.ignoreMobileRestrictions||c.setupOptions.forceUseGlobalHTML5Audio)V.push(I.globalHTML5),y=!0}else c.setupOptions.forceUseGlobalHTML5Audio&&(V.push(I.globalHTML5),y=!0);if(!Ga&&ma)if(c.setupOptions.ignoreMobileRestrictions)V.push(I.ignoreMobile);else if(c.setupOptions.useHTML5Audio=
!0,c.setupOptions.preferFlash=!1,Ha)c.ignoreFlash=!0;else if(Ia&&!t.match(/android\s2\.3/i)||!Ia)y=!0;b&&(e&&Q&&b.url!==h&&c.beginDelayedInit(),Q||b.url===h||"complete"!==n.readyState||setTimeout(F,1));Ga=!0;return c};this.supported=this.ok=function(){return u?l&&!A:c.useHTML5Audio&&c.hasHTML5};this.getMovie=function(b){return aa(b)||n[b]||g[b]};this.createSound=function(b,e){function d(){a=fa(a);c.sounds[a.id]=new M(a);c.soundIDs.push(a.id);return c.sounds[a.id]}var a,f=null;if(!l||!c.ok())return!1;
e!==h&&(b={id:b,url:e});a=w(b);a.url=ia(a.url);a.id===h&&(a.id=c.setupOptions.idPrefix+$a++);if(p(a.id,!0))return c.sounds[a.id];if(ja(a))f=d(),f._setup_html5(a);else{if(c.html5Only||c.html5.usingFlash&&a.url&&a.url.match(/data:/i))return d();8<m&&null===a.isMovieStar&&(a.isMovieStar=!!(a.serverURL||a.type&&a.type.match(db)||a.url&&a.url.match(kb)));a=ga(a,void 0);f=d();8===m?k._createSound(a.id,a.loops||1,a.usePolicyFile):(k._createSound(a.id,a.url,a.usePeakData,a.useWaveformData,a.useEQData,a.isMovieStar,
a.isMovieStar?a.bufferTime:!1,a.loops||1,a.serverURL,a.duration||null,a.autoPlay,!0,a.autoLoad,a.usePolicyFile),a.serverURL||(f.connected=!0,a.onconnect&&a.onconnect.apply(f)));a.serverURL||!a.autoLoad&&!a.autoPlay||f.load(a)}!a.serverURL&&a.autoPlay&&f.play();return f};this.destroySound=function(b,e){if(!p(b))return!1;var d=c.sounds[b],a;d.stop();d._iO={};d.unload();for(a=0;a<c.soundIDs.length;a++)if(c.soundIDs[a]===b){c.soundIDs.splice(a,1);break}e||d.destruct(!0);delete c.sounds[b];return!0};this.load=
function(b,e){return p(b)?c.sounds[b].load(e):!1};this.unload=function(b){return p(b)?c.sounds[b].unload():!1};this.onposition=this.onPosition=function(b,e,d,a){return p(b)?c.sounds[b].onposition(e,d,a):!1};this.clearOnPosition=function(b,e,d){return p(b)?c.sounds[b].clearOnPosition(e,d):!1};this.start=this.play=function(b,e){var d=null,a=e&&!(e instanceof Object);if(!l||!c.ok())return!1;if(p(b,a))a&&(e={url:e});else{if(!a)return!1;a&&(e={url:e});e&&e.url&&(e.id=b,d=c.createSound(e).play())}null===
d&&(d=c.sounds[b].play(e));return d};this.setPlaybackRate=function(b,e,d){return p(b)?c.sounds[b].setPlaybackRate(e,d):!1};this.setPosition=function(b,e){return p(b)?c.sounds[b].setPosition(e):!1};this.stop=function(b){return p(b)?c.sounds[b].stop():!1};this.stopAll=function(){for(var b in c.sounds)c.sounds.hasOwnProperty(b)&&c.sounds[b].stop()};this.pause=function(b){return p(b)?c.sounds[b].pause():!1};this.pauseAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].pause()};
this.resume=function(b){return p(b)?c.sounds[b].resume():!1};this.resumeAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].resume()};this.togglePause=function(b){return p(b)?c.sounds[b].togglePause():!1};this.setPan=function(b,e){return p(b)?c.sounds[b].setPan(e):!1};this.setVolume=function(b,e){var d,a;if(b!==h&&!isNaN(b)&&e===h){d=0;for(a=c.soundIDs.length;d<a;d++)c.sounds[c.soundIDs[d]].setVolume(b);return!1}return p(b)?c.sounds[b].setVolume(e):!1};this.mute=function(b){var e=
0;b instanceof String&&(b=null);if(b)return p(b)?c.sounds[b].mute():!1;for(e=c.soundIDs.length-1;0<=e;e--)c.sounds[c.soundIDs[e]].mute();return c.muted=!0};this.muteAll=function(){c.mute()};this.unmute=function(b){b instanceof String&&(b=null);if(b)return p(b)?c.sounds[b].unmute():!1;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].unmute();c.muted=!1;return!0};this.unmuteAll=function(){c.unmute()};this.toggleMute=function(b){return p(b)?c.sounds[b].toggleMute():!1};this.getMemoryUse=function(){var b=
0;k&&8!==m&&(b=parseInt(k._getMemoryUse(),10));return b};this.disable=function(b){var e;b===h&&(b=!1);if(A)return!1;A=!0;for(e=c.soundIDs.length-1;0<=e;e--)ya(c.sounds[c.soundIDs[e]]);ya(c);P(b);r.remove(g,"load",G);return!0};this.canPlayMIME=function(b){var e;c.hasHTML5&&(e=X({type:b}));!e&&u&&(e=b&&c.ok()?!!(8<m&&b.match(db)||b.match(c.mimePattern)):null);return e};this.canPlayURL=function(b){var e;c.hasHTML5&&(e=X({url:b}));!e&&u&&(e=b&&c.ok()?!!b.match(c.filePattern):null);return e};this.canPlayLink=
function(b){return b.type!==h&&b.type&&c.canPlayMIME(b.type)?!0:c.canPlayURL(b.href)};this.getSoundById=function(b,e){return b?c.sounds[b]:null};this.onready=function(b,c){if("function"===typeof b)c||(c=g),sa("onready",b,c),E();else throw S("needFunction","onready");return!0};this.ontimeout=function(b,c){if("function"===typeof b)c||(c=g),sa("ontimeout",b,c),E({type:"ontimeout"});else throw S("needFunction","ontimeout");return!0};this._wD=this._writeDebug=function(b,c){return!0};this._debug=function(){};
this.reboot=function(b,e){var d,a,f;for(d=c.soundIDs.length-1;0<=d;d--)c.sounds[c.soundIDs[d]].destruct();if(k)try{D&&(Aa=k.innerHTML),R=k.parentNode.removeChild(k)}catch(h){}Aa=R=u=k=null;c.enabled=Q=l=T=Ca=N=O=A=y=c.swfLoaded=!1;c.soundIDs=[];c.sounds={};$a=0;Ga=!1;if(b)x=[];else for(d in x)if(x.hasOwnProperty(d))for(a=0,f=x[d].length;a<f;a++)x[d][a].fired=!1;c.html5={usingFlash:null};c.flash={};c.html5Only=!1;c.ignoreFlash=!1;g.setTimeout(function(){e||c.beginDelayedInit()},20);return c};this.reset=
function(){return c.reboot(!0,!0)};this.getMoviePercent=function(){return k&&"PercentLoaded"in k?k.PercentLoaded():null};this.beginDelayedInit=function(){qa=!0;F();setTimeout(function(){if(Ca)return!1;ea();da();return Ca=!0},20);H()};this.destruct=function(){c.disable(!0)};M=function(b){var e,d,a=this,f,L,fb,g,n,q,t=!1,l=[],u=0,x,A,v=null,z;d=e=null;this.sID=this.id=b.id;this.url=b.url;this._iO=this.instanceOptions=this.options=w(b);this.pan=this.options.pan;this.volume=this.options.volume;this.isHTML5=
!1;this._a=null;z=!this.url;this.id3={};this._debug=function(){};this.load=function(b){var e=null,d;b!==h?a._iO=w(b,a.options):(b=a.options,a._iO=b,v&&v!==a.url&&(a._iO.url=a.url,a.url=null));a._iO.url||(a._iO.url=a.url);a._iO.url=ia(a._iO.url);d=a.instanceOptions=a._iO;if(!d.url&&!a.url)return a;if(d.url===a.url&&0!==a.readyState&&2!==a.readyState)return 3===a.readyState&&d.onload&&Y(a,function(){d.onload.apply(a,[!!a.duration])}),a;a.loaded=!1;a.readyState=1;a.playState=0;a.id3={};if(ja(d))e=a._setup_html5(d),
e._called_load||(a._html5_canplay=!1,a.url!==d.url&&(a._a.src=d.url,a.setPosition(0)),a._a.autobuffer="auto",a._a.preload="auto",a._a._called_load=!0);else{if(c.html5Only||a._iO.url&&a._iO.url.match(/data:/i))return a;try{a.isHTML5=!1,a._iO=ga(fa(d)),a._iO.autoPlay&&(a._iO.position||a._iO.from)&&(a._iO.autoPlay=!1),d=a._iO,8===m?k._load(a.id,d.url,d.stream,d.autoPlay,d.usePolicyFile):k._load(a.id,d.url,!!d.stream,!!d.autoPlay,d.loops||1,!!d.autoLoad,d.usePolicyFile)}catch(f){J({type:"SMSOUND_LOAD_JS_EXCEPTION",
fatal:!0})}}a.url=d.url;return a};this.unload=function(){0!==a.readyState&&(a.isHTML5?(g(),a._a&&(a._a.pause(),v=ka(a._a))):8===m?k._unload(a.id,"about:blank"):k._unload(a.id),f());return a};this.destruct=function(b){a.isHTML5?(g(),a._a&&(a._a.pause(),ka(a._a),y||fb(),a._a._s=null,a._a=null)):(a._iO.onfailure=null,k._destroySound(a.id));b||c.destroySound(a.id,!0)};this.start=this.play=function(b,e){var d,f,g,L;d=!0;e=e===h?!0:e;b||(b={});a.url&&(a._iO.url=a.url);a._iO=w(a._iO,a.options);a._iO=w(b,
a._iO);a._iO.url=ia(a._iO.url);a.instanceOptions=a._iO;if(!a.isHTML5&&a._iO.serverURL&&!a.connected)return a.getAutoPlay()||a.setAutoPlay(!0),a;ja(a._iO)&&(a._setup_html5(a._iO),n());if(1===a.playState&&!a.paused&&(d=a._iO.multiShot,!d))return a.isHTML5&&a.setPosition(a._iO.position),a;b.url&&b.url!==a.url&&(a.readyState||a.isHTML5||8!==m||!z?a.load(a._iO):z=!1);if(!a.loaded)if(0===a.readyState){if(a.isHTML5||c.html5Only)if(a.isHTML5)a.load(a._iO);else return a;else a._iO.autoPlay=!0,a.load(a._iO);
a.instanceOptions=a._iO}else if(2===a.readyState)return a;!a.isHTML5&&9===m&&0<a.position&&a.position===a.duration&&(b.position=0);a.paused&&0<=a.position&&(!a._iO.serverURL||0<a.position)?a.resume():(a._iO=w(b,a._iO),(!a.isHTML5&&null!==a._iO.position&&0<a._iO.position||null!==a._iO.from&&0<a._iO.from||null!==a._iO.to)&&0===a.instanceCount&&0===a.playState&&!a._iO.serverURL&&(d=function(){a._iO=w(b,a._iO);a.play(a._iO)},a.isHTML5&&!a._html5_canplay?a.load({_oncanplay:d}):a.isHTML5||a.loaded||a.readyState&&
2===a.readyState||a.load({onload:d}),a._iO=A()),(!a.instanceCount||a._iO.multiShotEvents||a.isHTML5&&a._iO.multiShot&&!y||!a.isHTML5&&8<m&&!a.getAutoPlay())&&a.instanceCount++,a._iO.onposition&&0===a.playState&&q(a),a.playState=1,a.paused=!1,a.position=a._iO.position===h||isNaN(a._iO.position)?0:a._iO.position,a.isHTML5||(a._iO=ga(fa(a._iO))),a._iO.onplay&&e&&(a._iO.onplay.apply(a),t=!0),a.setVolume(a._iO.volume,!0),a.setPan(a._iO.pan,!0),1!==a._iO.playbackRate&&a.setPlaybackRate(a._iO.playbackRate),
a.isHTML5?2>a.instanceCount?(n(),d=a._setup_html5(),a.setPosition(a._iO.position),d.play()):(f=new Audio(a._iO.url),g=function(){r.remove(f,"ended",g);a._onfinish(a);ka(f);f=null},L=function(){r.remove(f,"canplay",L);try{f.currentTime=a._iO.position/1E3}catch(b){}f.play()},r.add(f,"ended",g),a._iO.volume!==h&&(f.volume=Math.max(0,Math.min(1,a._iO.volume/100))),a.muted&&(f.muted=!0),a._iO.position?r.add(f,"canplay",L):f.play()):(d=k._start(a.id,a._iO.loops||1,9===m?a.position:a.position/1E3,a._iO.multiShot||
!1),9!==m||d||a._iO.onplayerror&&a._iO.onplayerror.apply(a)));return a};this.stop=function(b){var c=a._iO;1===a.playState&&(a._onbufferchange(0),a._resetOnPosition(0),a.paused=!1,a.isHTML5||(a.playState=0),x(),c.to&&a.clearOnPosition(c.to),a.isHTML5?a._a&&(b=a.position,a.setPosition(0),a.position=b,a._a.pause(),a.playState=0,a._onTimer(),g()):(k._stop(a.id,b),c.serverURL&&a.unload()),a.instanceCount=0,a._iO={},c.onstop&&c.onstop.apply(a));return a};this.setAutoPlay=function(b){a._iO.autoPlay=b;a.isHTML5||
(k._setAutoPlay(a.id,b),b&&(a.instanceCount||1!==a.readyState||a.instanceCount++))};this.getAutoPlay=function(){return a._iO.autoPlay};this.setPlaybackRate=function(b){b=Math.max(.5,Math.min(4,b));if(a.isHTML5)try{a._iO.playbackRate=b,a._a.playbackRate=b}catch(c){}return a};this.setPosition=function(b){b===h&&(b=0);var c=a.isHTML5?Math.max(b,0):Math.min(a.duration||a._iO.duration,Math.max(b,0));a.position=c;b=a.position/1E3;a._resetOnPosition(a.position);a._iO.position=c;if(!a.isHTML5)b=9===m?a.position:
b,a.readyState&&2!==a.readyState&&k._setPosition(a.id,b,a.paused||!a.playState,a._iO.multiShot);else if(a._a){if(a._html5_canplay){if(a._a.currentTime.toFixed(3)!==b.toFixed(3))try{a._a.currentTime=b,(0===a.playState||a.paused)&&a._a.pause()}catch(d){}}else if(b)return a;a.paused&&a._onTimer(!0)}return a};this.pause=function(b){if(a.paused||0===a.playState&&1!==a.readyState)return a;a.paused=!0;a.isHTML5?(a._setup_html5().pause(),g()):(b||b===h)&&k._pause(a.id,a._iO.multiShot);a._iO.onpause&&a._iO.onpause.apply(a);
return a};this.resume=function(){var b=a._iO;if(!a.paused)return a;a.paused=!1;a.playState=1;a.isHTML5?(a._setup_html5().play(),n()):(b.isMovieStar&&!b.serverURL&&a.setPosition(a.position),k._pause(a.id,b.multiShot));!t&&b.onplay?(b.onplay.apply(a),t=!0):b.onresume&&b.onresume.apply(a);return a};this.togglePause=function(){if(0===a.playState)return a.play({position:9!==m||a.isHTML5?a.position/1E3:a.position}),a;a.paused?a.resume():a.pause();return a};this.setPan=function(b,c){b===h&&(b=0);c===h&&
(c=!1);a.isHTML5||k._setPan(a.id,b);a._iO.pan=b;c||(a.pan=b,a.options.pan=b);return a};this.setVolume=function(b,d){b===h&&(b=100);d===h&&(d=!1);a.isHTML5?a._a&&(c.muted&&!a.muted&&(a.muted=!0,a._a.muted=!0),a._a.volume=Math.max(0,Math.min(1,b/100))):k._setVolume(a.id,c.muted&&!a.muted||a.muted?0:b);a._iO.volume=b;d||(a.volume=b,a.options.volume=b);return a};this.mute=function(){a.muted=!0;a.isHTML5?a._a&&(a._a.muted=!0):k._setVolume(a.id,0);return a};this.unmute=function(){a.muted=!1;var b=a._iO.volume!==
h;a.isHTML5?a._a&&(a._a.muted=!1):k._setVolume(a.id,b?a._iO.volume:a.options.volume);return a};this.toggleMute=function(){return a.muted?a.unmute():a.mute()};this.onposition=this.onPosition=function(b,c,d){l.push({position:parseInt(b,10),method:c,scope:d!==h?d:a,fired:!1});return a};this.clearOnPosition=function(a,b){var c;a=parseInt(a,10);if(!isNaN(a))for(c=0;c<l.length;c++)a!==l[c].position||b&&b!==l[c].method||(l[c].fired&&u--,l.splice(c,1))};this._processOnPosition=function(){var b,c;b=l.length;
if(!b||!a.playState||u>=b)return!1;for(--b;0<=b;b--)c=l[b],!c.fired&&a.position>=c.position&&(c.fired=!0,u++,c.method.apply(c.scope,[c.position]));return!0};this._resetOnPosition=function(a){var b,c;b=l.length;if(!b)return!1;for(--b;0<=b;b--)c=l[b],c.fired&&a<=c.position&&(c.fired=!1,u--);return!0};A=function(){var b=a._iO,c=b.from,d=b.to,e,f;f=function(){a.clearOnPosition(d,f);a.stop()};e=function(){if(null!==d&&!isNaN(d))a.onPosition(d,f)};null===c||isNaN(c)||(b.position=c,b.multiShot=!1,e());return b};
q=function(){var b,c=a._iO.onposition;if(c)for(b in c)if(c.hasOwnProperty(b))a.onPosition(parseInt(b,10),c[b])};x=function(){var b,c=a._iO.onposition;if(c)for(b in c)c.hasOwnProperty(b)&&a.clearOnPosition(parseInt(b,10))};n=function(){a.isHTML5&&Ta(a)};g=function(){a.isHTML5&&Ua(a)};f=function(b){b||(l=[],u=0);t=!1;a._hasTimer=null;a._a=null;a._html5_canplay=!1;a.bytesLoaded=null;a.bytesTotal=null;a.duration=a._iO&&a._iO.duration?a._iO.duration:null;a.durationEstimate=null;a.buffered=[];a.eqData=
[];a.eqData.left=[];a.eqData.right=[];a.failures=0;a.isBuffering=!1;a.instanceOptions={};a.instanceCount=0;a.loaded=!1;a.metadata={};a.readyState=0;a.muted=!1;a.paused=!1;a.peakData={left:0,right:0};a.waveformData={left:[],right:[]};a.playState=0;a.position=null;a.id3={}};f();this._onTimer=function(b){var c,f=!1,h={};(a._hasTimer||b)&&a._a&&(b||(0<a.playState||1===a.readyState)&&!a.paused)&&(c=a._get_html5_duration(),c!==e&&(e=c,a.duration=c,f=!0),a.durationEstimate=a.duration,c=1E3*a._a.currentTime||
0,c!==d&&(d=c,f=!0),(f||b)&&a._whileplaying(c,h,h,h,h));return f};this._get_html5_duration=function(){var b=a._iO;return(b=a._a&&a._a.duration?1E3*a._a.duration:b&&b.duration?b.duration:null)&&!isNaN(b)&&Infinity!==b?b:null};this._apply_loop=function(a,b){a.loop=1<b?"loop":""};this._setup_html5=function(b){b=w(a._iO,b);var c=y?Na:a._a,d=decodeURI(b.url),e;y?d===decodeURI(Ea)&&(e=!0):d===decodeURI(v)&&(e=!0);if(c){if(c._s)if(y)c._s&&c._s.playState&&!e&&c._s.stop();else if(!y&&d===decodeURI(v))return a._apply_loop(c,
b.loops),c;e||(v&&f(!1),c.src=b.url,Ea=v=a.url=b.url,c._called_load=!1)}else b.autoLoad||b.autoPlay?(a._a=new Audio(b.url),a._a.load()):a._a=Ja&&10>opera.version()?new Audio(null):new Audio,c=a._a,c._called_load=!1,y&&(Na=c);a.isHTML5=!0;a._a=c;c._s=a;L();a._apply_loop(c,b.loops);b.autoLoad||b.autoPlay?a.load():(c.autobuffer=!1,c.preload="auto");return c};L=function(){if(a._a._added_events)return!1;var b;a._a._added_events=!0;for(b in B)B.hasOwnProperty(b)&&a._a&&a._a.addEventListener(b,B[b],!1);
return!0};fb=function(){var b;a._a._added_events=!1;for(b in B)B.hasOwnProperty(b)&&a._a&&a._a.removeEventListener(b,B[b],!1)};this._onload=function(b){var c=!!b||!a.isHTML5&&8===m&&a.duration;a.loaded=c;a.readyState=c?3:2;a._onbufferchange(0);c||a.isHTML5||a._onerror();a._iO.onload&&Y(a,function(){a._iO.onload.apply(a,[c])});return!0};this._onerror=function(b,c){a._iO.onerror&&Y(a,function(){a._iO.onerror.apply(a,[b,c])})};this._onbufferchange=function(b){if(0===a.playState||b&&a.isBuffering||!b&&
!a.isBuffering)return!1;a.isBuffering=1===b;a._iO.onbufferchange&&a._iO.onbufferchange.apply(a,[b]);return!0};this._onsuspend=function(){a._iO.onsuspend&&a._iO.onsuspend.apply(a);return!0};this._onfailure=function(b,c,d){a.failures++;if(a._iO.onfailure&&1===a.failures)a._iO.onfailure(b,c,d)};this._onwarning=function(b,c,d){if(a._iO.onwarning)a._iO.onwarning(b,c,d)};this._onfinish=function(){var b=a._iO.onfinish;a._onbufferchange(0);a._resetOnPosition(0);a.instanceCount&&(a.instanceCount--,a.instanceCount||
(x(),a.playState=0,a.paused=!1,a.instanceCount=0,a.instanceOptions={},a._iO={},g(),a.isHTML5&&(a.position=0)),(!a.instanceCount||a._iO.multiShotEvents)&&b&&Y(a,function(){b.apply(a)}))};this._whileloading=function(b,c,d,e){var f=a._iO;a.bytesLoaded=b;a.bytesTotal=c;a.duration=Math.floor(d);a.bufferLength=e;a.durationEstimate=a.isHTML5||f.isMovieStar?a.duration:f.duration?a.duration>f.duration?a.duration:f.duration:parseInt(a.bytesTotal/a.bytesLoaded*a.duration,10);a.isHTML5||(a.buffered=[{start:0,
end:a.duration}]);(3!==a.readyState||a.isHTML5)&&f.whileloading&&f.whileloading.apply(a)};this._whileplaying=function(b,c,d,e,f){var g=a._iO;if(isNaN(b)||null===b)return!1;a.position=Math.max(0,b);a._processOnPosition();!a.isHTML5&&8<m&&(g.usePeakData&&c!==h&&c&&(a.peakData={left:c.leftPeak,right:c.rightPeak}),g.useWaveformData&&d!==h&&d&&(a.waveformData={left:d.split(","),right:e.split(",")}),g.useEQData&&f!==h&&f&&f.leftEQ&&(b=f.leftEQ.split(","),a.eqData=b,a.eqData.left=b,f.rightEQ!==h&&f.rightEQ&&
(a.eqData.right=f.rightEQ.split(","))));1===a.playState&&(a.isHTML5||8!==m||a.position||!a.isBuffering||a._onbufferchange(0),g.whileplaying&&g.whileplaying.apply(a));return!0};this._oncaptiondata=function(b){a.captiondata=b;a._iO.oncaptiondata&&a._iO.oncaptiondata.apply(a,[b])};this._onmetadata=function(b,c){var d={},e,f;e=0;for(f=b.length;e<f;e++)d[b[e]]=c[e];a.metadata=d;a._iO.onmetadata&&a._iO.onmetadata.call(a,a.metadata)};this._onid3=function(b,c){var d=[],e,f;e=0;for(f=b.length;e<f;e++)d[b[e]]=
c[e];a.id3=w(a.id3,d);a._iO.onid3&&a._iO.onid3.apply(a)};this._onconnect=function(b){b=1===b;if(a.connected=b)a.failures=0,p(a.id)&&(a.getAutoPlay()?a.play(h,a.getAutoPlay()):a._iO.autoLoad&&a.load()),a._iO.onconnect&&a._iO.onconnect.apply(a,[b])};this._ondataerror=function(b){0<a.playState&&a._iO.ondataerror&&a._iO.ondataerror.apply(a)}};wa=function(){return n.body||n.getElementsByTagName("div")[0]};aa=function(b){return n.getElementById(b)};w=function(b,e){var d=b||{},a,f;a=e===h?c.defaultOptions:
e;for(f in a)a.hasOwnProperty(f)&&d[f]===h&&(d[f]="object"!==typeof a[f]||null===a[f]?a[f]:w(d[f],a[f]));return d};Y=function(b,c){b.isHTML5||8!==m?c():g.setTimeout(c,0)};ba={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1};ra=function(b,e){var d,a=!0,f=e!==h,g=c.setupOptions;for(d in b)if(b.hasOwnProperty(d))if("object"!==typeof b[d]||null===b[d]||b[d]instanceof Array||b[d]instanceof RegExp)f&&ba[e]!==h?c[e][d]=b[d]:g[d]!==h?(c.setupOptions[d]=b[d],c[d]=b[d]):ba[d]===h?
a=!1:c[d]instanceof Function?c[d].apply(c,b[d]instanceof Array?b[d]:[b[d]]):c[d]=b[d];else if(ba[d]===h)a=!1;else return ra(b[d],d);return a};r=function(){function b(a){a=hb.call(a);var b=a.length;d?(a[1]="on"+a[1],3<b&&a.pop()):3===b&&a.push(!1);return a}function c(b,e){var h=b.shift(),g=[a[e]];if(d)h[g](b[0],b[1]);else h[g].apply(h,b)}var d=g.attachEvent,a={add:d?"attachEvent":"addEventListener",remove:d?"detachEvent":"removeEventListener"};return{add:function(){c(b(arguments),"add")},remove:function(){c(b(arguments),
"remove")}}}();B={abort:q(function(){}),canplay:q(function(){var b=this._s,c;if(!b._html5_canplay){b._html5_canplay=!0;b._onbufferchange(0);c=b._iO.position===h||isNaN(b._iO.position)?null:b._iO.position/1E3;if(this.currentTime!==c)try{this.currentTime=c}catch(d){}b._iO._oncanplay&&b._iO._oncanplay()}}),canplaythrough:q(function(){var b=this._s;b.loaded||(b._onbufferchange(0),b._whileloading(b.bytesLoaded,b.bytesTotal,b._get_html5_duration()),b._onload(!0))}),durationchange:q(function(){var b=this._s,
c;c=b._get_html5_duration();isNaN(c)||c===b.duration||(b.durationEstimate=b.duration=c)}),ended:q(function(){this._s._onfinish()}),error:q(function(){var b=Xa[this.error.code]||null;this._s._onload(!1);this._s._onerror(this.error.code,b)}),loadeddata:q(function(){var b=this._s;b._loaded||la||(b.duration=b._get_html5_duration())}),loadedmetadata:q(function(){}),loadstart:q(function(){this._s._onbufferchange(1)}),play:q(function(){this._s._onbufferchange(0)}),playing:q(function(){this._s._onbufferchange(0)}),
progress:q(function(b){var c=this._s,d,a,f=0,f=b.target.buffered;d=b.loaded||0;var h=b.total||1;c.buffered=[];if(f&&f.length){d=0;for(a=f.length;d<a;d++)c.buffered.push({start:1E3*f.start(d),end:1E3*f.end(d)});f=1E3*(f.end(0)-f.start(0));d=Math.min(1,f/(1E3*b.target.duration))}isNaN(d)||(c._whileloading(d,h,c._get_html5_duration()),d&&h&&d===h&&B.canplaythrough.call(this,b))}),ratechange:q(function(){}),suspend:q(function(b){var c=this._s;B.progress.call(this,b);c._onsuspend()}),stalled:q(function(){}),
timeupdate:q(function(){this._s._onTimer()}),waiting:q(function(){this._s._onbufferchange(1)})};ja=function(b){return b&&(b.type||b.url||b.serverURL)?b.serverURL||b.type&&Z(b.type)?!1:b.type?X({type:b.type}):X({url:b.url})||c.html5Only||b.url.match(/data:/i):!1};ka=function(b){var e;b&&(e=la?"about:blank":c.html5.canPlayType("audio/wav")?"data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==":"about:blank",b.src=e,b._called_unload!==h&&(b._called_load=!1));y&&(Ea=
null);return e};X=function(b){if(!c.useHTML5Audio||!c.hasHTML5)return!1;var e=b.url||null;b=b.type||null;var d=c.audioFormats,a;if(b&&c.html5[b]!==h)return c.html5[b]&&!Z(b);if(!C){C=[];for(a in d)d.hasOwnProperty(a)&&(C.push(a),d[a].related&&(C=C.concat(d[a].related)));C=new RegExp("\\.("+C.join("|")+")(\\?.*)?$","i")}(a=e?e.toLowerCase().match(C):null)&&a.length?a=a[1]:b&&(e=b.indexOf(";"),a=(-1!==e?b.substr(0,e):b).substr(6));a&&c.html5[a]!==h?e=c.html5[a]&&!Z(a):(b="audio/"+a,e=c.html5.canPlayType({type:b}),
e=(c.html5[a]=e)&&c.html5[b]&&!Z(b));return e};Ya=function(){function b(a){var b,d=b=!1;if(!e||"function"!==typeof e.canPlayType)return b;if(a instanceof Array){k=0;for(b=a.length;k<b;k++)if(c.html5[a[k]]||e.canPlayType(a[k]).match(c.html5Test))d=!0,c.html5[a[k]]=!0,c.flash[a[k]]=!!a[k].match(cb);b=d}else a=e&&"function"===typeof e.canPlayType?e.canPlayType(a):!1,b=!(!a||!a.match(c.html5Test));return b}if(!c.useHTML5Audio||!c.hasHTML5)return u=c.html5.usingFlash=!0,!1;var e=Audio!==h?Ja&&10>opera.version()?
new Audio(null):new Audio:null,d,a,f={},g,k;g=c.audioFormats;for(d in g)if(g.hasOwnProperty(d)&&(a="audio/"+d,f[d]=b(g[d].type),f[a]=f[d],d.match(cb)?(c.flash[d]=!0,c.flash[a]=!0):(c.flash[d]=!1,c.flash[a]=!1),g[d]&&g[d].related))for(k=g[d].related.length-1;0<=k;k--)f["audio/"+g[d].related[k]]=f[d],c.html5[g[d].related[k]]=f[d],c.flash[g[d].related[k]]=f[d];f.canPlayType=e?b:null;c.html5=w(c.html5,f);c.html5.usingFlash=Wa();u=c.html5.usingFlash;return!0};I={};S=function(){};fa=function(b){8===m&&
1<b.loops&&b.stream&&(b.stream=!1);return b};ga=function(b,c){b&&!b.usePolicyFile&&(b.onid3||b.usePeakData||b.useWaveformData||b.useEQData)&&(b.usePolicyFile=!0);return b};oa=function(){return!1};ya=function(b){for(var c in b)b.hasOwnProperty(c)&&"function"===typeof b[c]&&(b[c]=oa)};za=function(b){b===h&&(b=!1);(A||b)&&c.disable(b)};Sa=function(b){var e=null;if(b)if(b.match(/\.swf(\?.*)?$/i)){if(e=b.substr(b.toLowerCase().lastIndexOf(".swf?")+4))return b}else b.lastIndexOf("/")!==b.length-1&&(b+=
"/");b=(b&&-1!==b.lastIndexOf("/")?b.substr(0,b.lastIndexOf("/")+1):"./")+c.movieURL;c.noSWFCache&&(b+="?ts="+(new Date).getTime());return b};ua=function(){m=parseInt(c.flashVersion,10);8!==m&&9!==m&&(c.flashVersion=m=8);var b=c.debugMode||c.debugFlash?"_debug.swf":".swf";c.useHTML5Audio&&!c.html5Only&&c.audioFormats.mp4.required&&9>m&&(c.flashVersion=m=9);c.version=c.versionNumber+(c.html5Only?" (HTML5-only mode)":9===m?" (AS3/Flash 9)":" (AS2/Flash 8)");8<m?(c.defaultOptions=w(c.defaultOptions,
c.flash9Options),c.features.buffering=!0,c.defaultOptions=w(c.defaultOptions,c.movieStarOptions),c.filePatterns.flash9=new RegExp("\\.(mp3|"+eb.join("|")+")(\\?.*)?$","i"),c.features.movieStar=!0):c.features.movieStar=!1;c.filePattern=c.filePatterns[8!==m?"flash9":"flash8"];c.movieURL=(8===m?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",b);c.features.peakData=c.features.waveformData=c.features.eqData=8<m};Ra=function(b,c){k&&k._setPolling(b,c)};xa=function(){};p=this.getSoundById;
K=function(){var b=[];c.debugMode&&b.push("sm2_debug");c.debugFlash&&b.push("flash_debug");c.useHighPerformance&&b.push("high_performance");return b.join(" ")};Ba=function(){S("fbHandler");var b=c.getMoviePercent(),e={type:"FLASHBLOCK"};c.html5Only||(c.ok()?c.oMC&&(c.oMC.className=[K(),"movieContainer","swf_loaded"+(c.didFlashBlock?" swf_unblocked":"")].join(" ")):(u&&(c.oMC.className=K()+" movieContainer "+(null===b?"swf_timedout":"swf_error")),c.didFlashBlock=!0,E({type:"ontimeout",ignoreInit:!0,
error:e}),J(e)))};sa=function(b,c,d){x[b]===h&&(x[b]=[]);x[b].push({method:c,scope:d||null,fired:!1})};E=function(b){b||(b={type:c.ok()?"onready":"ontimeout"});if(!l&&b&&!b.ignoreInit||"ontimeout"===b.type&&(c.ok()||A&&!b.ignoreInit))return!1;var e={success:b&&b.ignoreInit?c.ok():!A},d=b&&b.type?x[b.type]||[]:[],a=[],f,e=[e],h=u&&!c.ok();b.error&&(e[0].error=b.error);b=0;for(f=d.length;b<f;b++)!0!==d[b].fired&&a.push(d[b]);if(a.length)for(b=0,f=a.length;b<f;b++)a[b].scope?a[b].method.apply(a[b].scope,
e):a[b].method.apply(this,e),h||(a[b].fired=!0);return!0};G=function(){g.setTimeout(function(){c.useFlashBlock&&Ba();E();"function"===typeof c.onload&&c.onload.apply(g);c.waitForWindowLoad&&r.add(g,"load",G)},1)};Fa=function(){if(z!==h)return z;var b=!1,c=navigator,d,a=g.ActiveXObject,f;try{f=c.plugins}catch(k){f=void 0}if(f&&f.length)(c=c.mimeTypes)&&c["application/x-shockwave-flash"]&&c["application/x-shockwave-flash"].enabledPlugin&&c["application/x-shockwave-flash"].enabledPlugin.description&&
(b=!0);else if(a!==h&&!t.match(/MSAppHost/i)){try{d=new a("ShockwaveFlash.ShockwaveFlash")}catch(n){d=null}b=!!d}return z=b};Wa=function(){var b,e,d=c.audioFormats;Ha&&t.match(/os (1|2|3_0|3_1)\s/i)?(c.hasHTML5=!1,c.html5Only=!0,c.oMC&&(c.oMC.style.display="none")):!c.useHTML5Audio||c.html5&&c.html5.canPlayType||(c.hasHTML5=!1);if(c.useHTML5Audio&&c.hasHTML5)for(e in W=!0,d)d.hasOwnProperty(e)&&d[e].required&&(c.html5.canPlayType(d[e].type)?c.preferFlash&&(c.flash[e]||c.flash[d[e].type])&&(b=!0):
(W=!1,b=!0));c.ignoreFlash&&(b=!1,W=!0);c.html5Only=c.hasHTML5&&c.useHTML5Audio&&!b;return!c.html5Only};ia=function(b){var e,d,a=0;if(b instanceof Array){e=0;for(d=b.length;e<d;e++)if(b[e]instanceof Object){if(c.canPlayMIME(b[e].type)){a=e;break}}else if(c.canPlayURL(b[e])){a=e;break}b[a].url&&(b[a]=b[a].url);b=b[a]}return b};Ta=function(b){b._hasTimer||(b._hasTimer=!0,!ma&&c.html5PollingInterval&&(null===U&&0===ha&&(U=setInterval(Va,c.html5PollingInterval)),ha++))};Ua=function(b){b._hasTimer&&(b._hasTimer=
!1,!ma&&c.html5PollingInterval&&ha--)};Va=function(){var b;if(null===U||ha)for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].isHTML5&&c.sounds[c.soundIDs[b]]._hasTimer&&c.sounds[c.soundIDs[b]]._onTimer();else clearInterval(U),U=null};J=function(b){b=b!==h?b:{};"function"===typeof c.onerror&&c.onerror.apply(g,[{type:b.type!==h?b.type:null}]);b.fatal!==h&&b.fatal&&c.disable()};Za=function(){if(ab&&Fa()){var b=c.audioFormats,e,d;for(d in b)if(b.hasOwnProperty(d)&&("mp3"===d||"mp4"===d)&&(c.html5[d]=
!1,b[d]&&b[d].related))for(e=b[d].related.length-1;0<=e;e--)c.html5[b[d].related[e]]=!1}};this._setSandboxType=function(b){};this._externalInterfaceOK=function(b){c.swfLoaded||(c.swfLoaded=!0,na=!1,ab&&Za(),setTimeout(pa,D?100:1))};ea=function(b,e){function d(a,b){return'<param name="'+a+'" value="'+b+'" />'}if(N&&O)return!1;if(c.html5Only)return ua(),c.oMC=aa(c.movieID),pa(),O=N=!0,!1;var a=e||c.url,f=c.altURL||a,g=wa(),k=K(),m=null,m=n.getElementsByTagName("html")[0],l,q,p,m=m&&m.dir&&m.dir.match(/rtl/i);
b=b===h?c.id:b;ua();c.url=Sa(La?a:f);e=c.url;c.wmode=!c.wmode&&c.useHighPerformance?"transparent":c.wmode;null!==c.wmode&&(t.match(/msie 8/i)||!D&&!c.useHighPerformance)&&navigator.platform.match(/win32|win64/i)&&(V.push(I.spcWmode),c.wmode=null);g={name:b,id:b,src:e,quality:"high",allowScriptAccess:c.allowScriptAccess,bgcolor:c.bgColor,pluginspage:jb+"www.macromedia.com/go/getflashplayer",title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",wmode:c.wmode,hasPriority:"true"};
c.debugFlash&&(g.FlashVars="debug=1");c.wmode||delete g.wmode;if(D)a=n.createElement("div"),q=['<object id="'+b+'" data="'+e+'" type="'+g.type+'" title="'+g.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',d("movie",e),d("AllowScriptAccess",c.allowScriptAccess),d("quality",g.quality),c.wmode?d("wmode",c.wmode):"",d("bgcolor",c.bgColor),d("hasPriority","true"),c.debugFlash?d("FlashVars",g.FlashVars):
"","</object>"].join("");else for(l in a=n.createElement("embed"),g)g.hasOwnProperty(l)&&a.setAttribute(l,g[l]);xa();k=K();if(g=wa())if(c.oMC=aa(c.movieID)||n.createElement("div"),c.oMC.id)p=c.oMC.className,c.oMC.className=(p?p+" ":"movieContainer")+(k?" "+k:""),c.oMC.appendChild(a),D&&(l=c.oMC.appendChild(n.createElement("div")),l.className="sm2-object-box",l.innerHTML=q),O=!0;else{c.oMC.id=c.movieID;c.oMC.className="movieContainer "+k;l=k=null;c.useFlashBlock||(c.useHighPerformance?k={position:"fixed",
width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"}:(k={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},m&&(k.left=Math.abs(parseInt(k.left,10))+"px")));ib&&(c.oMC.style.zIndex=1E4);if(!c.debugFlash)for(p in k)k.hasOwnProperty(p)&&(c.oMC.style[p]=k[p]);try{D||c.oMC.appendChild(a),g.appendChild(c.oMC),D&&(l=c.oMC.appendChild(n.createElement("div")),l.className="sm2-object-box",l.innerHTML=q),O=!0}catch(r){throw Error(S("domError")+" \n"+r.toString());}}return N=
!0};da=function(){if(c.html5Only)return ea(),!1;if(k||!c.url)return!1;k=c.getMovie(c.id);k||(R?(D?c.oMC.innerHTML=Aa:c.oMC.appendChild(R),R=null,N=!0):ea(c.id,c.url),k=c.getMovie(c.id));"function"===typeof c.oninitmovie&&setTimeout(c.oninitmovie,1);return!0};H=function(){setTimeout(Qa,1E3)};ta=function(){g.setTimeout(function(){c.setup({preferFlash:!1}).reboot();c.didFlashBlock=!0;c.beginDelayedInit()},1)};Qa=function(){var b,e=!1;c.url&&!T&&(T=!0,r.remove(g,"load",H),z&&na&&!Ka||(l||(b=c.getMoviePercent(),
0<b&&100>b&&(e=!0)),setTimeout(function(){b=c.getMoviePercent();e?(T=!1,g.setTimeout(H,1)):!l&&bb&&(null===b?c.useFlashBlock||0===c.flashLoadTimeout?c.useFlashBlock&&Ba():!c.useFlashBlock&&W?ta():E({type:"ontimeout",ignoreInit:!0,error:{type:"INIT_FLASHBLOCK"}}):0!==c.flashLoadTimeout&&(!c.useFlashBlock&&W?ta():za(!0)))},c.flashLoadTimeout)))};ca=function(){if(Ka||!na)return r.remove(g,"focus",ca),!0;Ka=bb=!0;T=!1;H();r.remove(g,"focus",ca);return!0};P=function(b){if(l)return!1;if(c.html5Only)return l=
!0,G(),!0;var e=!0,d;c.useFlashBlock&&c.flashLoadTimeout&&!c.getMoviePercent()||(l=!0);d={type:!z&&u?"NO_FLASH":"INIT_TIMEOUT"};if(A||b)c.useFlashBlock&&c.oMC&&(c.oMC.className=K()+" "+(null===c.getMoviePercent()?"swf_timedout":"swf_error")),E({type:"ontimeout",error:d,ignoreInit:!0}),J(d),e=!1;A||(c.waitForWindowLoad&&!qa?r.add(g,"load",G):G());return e};Pa=function(){var b,e=c.setupOptions;for(b in e)e.hasOwnProperty(b)&&(c[b]===h?c[b]=e[b]:c[b]!==e[b]&&(c.setupOptions[b]=c[b]))};pa=function(){if(l)return!1;
if(c.html5Only)return l||(r.remove(g,"load",c.beginDelayedInit),c.enabled=!0,P()),!0;da();try{k._externalInterfaceTest(!1),Ra(!0,c.flashPollingInterval||(c.useHighPerformance?10:50)),c.debugMode||k._disableDebug(),c.enabled=!0,c.html5Only||r.add(g,"unload",oa)}catch(b){return J({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),za(!0),P(),!1}P();r.remove(g,"load",c.beginDelayedInit);return!0};F=function(){if(Q)return!1;Q=!0;Pa();xa();!z&&c.hasHTML5&&c.setup({useHTML5Audio:!0,preferFlash:!1});Ya();!z&&u&&(V.push(I.needFlash),
c.setup({flashLoadTimeout:1}));n.removeEventListener&&n.removeEventListener("DOMContentLoaded",F,!1);da();return!0};Da=function(){"complete"===n.readyState&&(F(),n.detachEvent("onreadystatechange",Da));return!0};va=function(){qa=!0;F();r.remove(g,"load",va)};Fa();r.add(g,"focus",ca);r.add(g,"load",H);r.add(g,"load",va);n.addEventListener?n.addEventListener("DOMContentLoaded",F,!1):n.attachEvent?n.attachEvent("onreadystatechange",Da):J({type:"NO_DOM2_EVENTS",fatal:!0})}if(!g||!g.document)throw Error("SoundManager requires a browser with window and document objects.");
var M=null;g.SM2_DEFER!==h&&SM2_DEFER||(M=new v);"object"===typeof module&&module&&"object"===typeof module.exports?(module.exports.SoundManager=v,module.exports.soundManager=M):"function"===typeof define&&define.amd&&define(function(){return{constructor:v,getInstance:function(h){!g.soundManager&&h instanceof Function&&(h=h(v),h instanceof v&&(g.soundManager=h));return g.soundManager}}});g.SoundManager=v;g.soundManager=M})(window);
if (window.location.href.indexOf('network') > -1 && window.location.href.indexOf('oauth_proxy') > -1) {document.domain = window.location.host.replace('www.', '');}/*! hellojs v1.17.1 | (c) 2012-2019 Andrew Dodson | MIT https://adodson.com/hello.js/LICENSE */
Object.create||(Object.create=function(){function t(){}return function(e){if(1!=arguments.length)throw new Error("Object.create implementation only accepts one parameter.");return t.prototype=e,new t}}()),Object.keys||(Object.keys=function(e,t,n){for(t in n=[],e)n.hasOwnProperty.call(e,t)&&n.push(t);return n}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){for(var t=0;t<this.length;t++)if(this[t]===e)return t;return-1}),Array.prototype.forEach||(Array.prototype.forEach=function(e){if(null==this)throw new TypeError;var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError;for(var o=2<=arguments.length?arguments[1]:void 0,i=0;i<n;i++)i in t&&e.call(o,t[i],i,t);return this}),Array.prototype.filter||(Array.prototype.filter=function(o,i){var a=[];return this.forEach(function(e,t,n){o.call(i||void 0,e,t,n)&&a.push(e)}),a}),Array.prototype.map||(Array.prototype.map=function(o,i){var a=[];return this.forEach(function(e,t,n){a.push(o.call(i||void 0,e,t,n))}),a}),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),"object"!=typeof window||"object"!=typeof window.location||window.location.assign||(window.location.assign=function(e){window.location=e}),Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");function t(){}var n=[].slice,o=n.call(arguments,1),i=this,a=function(){return i.apply(this instanceof t?this:e||window,o.concat(n.call(arguments)))};return t.prototype=this.prototype,a.prototype=new t,a});var hello=function(e){return hello.use(e)};hello.utils={extend:function(n){return Array.prototype.slice.call(arguments,1).forEach(function(e){if(Array.isArray(n)&&Array.isArray(e))Array.prototype.push.apply(n,e);else if(n&&(n instanceof Object||"object"==typeof n)&&e&&(e instanceof Object||"object"==typeof e)&&n!==e)for(var t in e)n[t]=hello.utils.extend(n[t],e[t]);else Array.isArray(e)&&(e=e.slice(0)),n=e}),n}},hello.utils.extend(hello,{settings:{redirect_uri:window.location.href.split("#")[0],response_type:"token",display:"popup",state:"",oauth_proxy:"https://auth-server.herokuapp.com/proxy",timeout:2e4,popup:{resizable:1,scrollbars:1,width:500,height:550},scope:["basic"],scope_map:{basic:""},default_service:null,force:null,page_uri:window.location.href},services:{},use:function(e){var t=Object.create(this);return t.settings=Object.create(this.settings),e&&(t.settings.default_service=e),t.utils.Event.call(t),t},init:function(e,t){var n=this.utils;if(!e)return this.services;for(var o in e)e.hasOwnProperty(o)&&"object"!=typeof e[o]&&(e[o]={id:e[o]});return n.extend(this.services,e),t&&(n.extend(this.settings,t),"redirect_uri"in t&&(this.settings.redirect_uri=n.url(t.redirect_uri).href)),this},login:function(){var e,t=this,n=t.utils,o=n.error,i=n.Promise(),a=n.args({network:"s",options:"o",callback:"f"},arguments),r=n.diffKey(a.options,t.settings),s=a.options=n.merge(t.settings,a.options||{});function l(e,t){hello.emit(e,t)}if(s.popup=n.merge(t.settings.popup,a.options.popup||{}),a.network=a.network||t.settings.default_service,i.proxy.then(a.callback,a.callback),i.proxy.then(l.bind(this,"auth.login auth"),l.bind(this,"auth.failed auth")),"string"!=typeof a.network||!(a.network in t.services))return i.reject(o("invalid_network","The provided network was not recognized"));var u=t.services[a.network],c=n.globalEvent(function(e){e?"string"==typeof e&&(e=JSON.parse(e)):e=o("cancelled","The authentication was not completed"),e.error?i.reject(e):(n.store(e.network,e),i.fulfill({network:e.network,authResponse:e}))}),d=n.url(s.redirect_uri).href,f=u.oauth.response_type||s.response_type;/\bcode\b/.test(f)&&!u.oauth.grant&&(f=f.replace(/\bcode\b/,"token")),a.qs=n.merge(r,{client_id:encodeURIComponent(u.id),response_type:encodeURIComponent(f),redirect_uri:encodeURIComponent(d),state:{client_id:u.id,network:a.network,display:s.display,callback:c,state:s.state,redirect_uri:d}});var p=n.store(a.network),m=/[,\s]+/,h=t.settings.scope?[t.settings.scope.toString()]:[],g=n.merge(t.settings.scope_map,u.scope||{});if((s.scope&&h.push(s.scope.toString()),p&&"scope"in p&&p.scope instanceof String&&h.push(p.scope),h=h.join(",").split(m),h=n.unique(h).filter(_),a.qs.state.scope=h.join(","),h=(h=h.map(function(e){return e in g?g[e]:e})).join(",").split(m),h=n.unique(h).filter(_),a.qs.scope=h.join(u.scope_delim||","),!1===s.force)&&(p&&"access_token"in p&&p.access_token&&"expires"in p&&p.expires>(new Date).getTime()/1e3&&0===n.diff((p.scope||"").split(m),(a.qs.state.scope||"").split(m)).length))return i.fulfill({unchanged:!0,network:a.network,authResponse:p}),i;if("page"===s.display&&s.page_uri&&(a.qs.state.page_uri=n.url(s.page_uri).href),"login"in u&&"function"==typeof u.login&&u.login(a),(!/\btoken\b/.test(f)||parseInt(u.oauth.version,10)<2||"none"===s.display&&u.oauth.grant&&p&&p.refresh_token)&&(a.qs.state.oauth=u.oauth,a.qs.state.oauth_proxy=s.oauth_proxy),a.qs.state=encodeURIComponent(JSON.stringify(a.qs.state)),e=1===parseInt(u.oauth.version,10)?n.qs(s.oauth_proxy,a.qs,w):"none"===s.display&&u.oauth.grant&&p&&p.refresh_token?(a.qs.refresh_token=p.refresh_token,n.qs(s.oauth_proxy,a.qs,w)):n.qs(u.oauth.auth,a.qs,w),l("auth.init",a),"none"===s.display)n.iframe(e,d);else if("popup"===s.display)var v=n.popup(e,d,s.popup),y=setInterval(function(){if((!v||v.closed)&&(clearInterval(y),!i.state)){var e=o("cancelled","Login has been cancelled");v||(e=o("blocked","Popup was blocked")),e.network=a.network,i.reject(e)}},100);else window.location=e;return i.proxy;function w(e){return e}function _(e){return!!e}},logout:function(){var t=this.utils,e=t.error,n=t.Promise(),o=t.args({name:"s",options:"o",callback:"f"},arguments);function i(e,t){hello.emit(e,t)}if(o.options=o.options||{},n.proxy.then(o.callback,o.callback),n.proxy.then(i.bind(this,"auth.logout auth"),i.bind(this,"error")),o.name=o.name||this.settings.default_service,o.authResponse=t.store(o.name),!o.name||o.name in this.services)if(o.name&&o.authResponse){var a=function(e){t.store(o.name,null),n.fulfill(hello.utils.merge({network:o.name},e||{}))},r={};if(o.options.force){var s=this.services[o.name].logout;if(s)if("function"==typeof s&&(s=s(a,o)),"string"==typeof s)t.iframe(s),r.force=null,r.message="Logout success on providers site was indeterminate";else if(void 0===s)return n.proxy}a(r)}else n.reject(e("invalid_session","There was no session to remove"));else n.reject(e("invalid_network","The network was unrecognized"));return n.proxy},getAuthResponse:function(e){return(e=e||this.settings.default_service)&&e in this.services&&this.utils.store(e)||null},events:{}}),hello.utils.extend(hello.utils,{error:function(e,t){return{error:{code:e,message:t}}},qs:function(e,t,n){if(t)for(var o in n=n||encodeURIComponent,t){var i=new RegExp("([\\?\\&])"+o+"=[^\\&]*");e.match(i)&&(e=e.replace(i,"$1"+o+"="+n(t[o])),delete t[o])}return this.isEmpty(t)?e:e+(-1<e.indexOf("?")?"&":"?")+this.param(t,n)},param:function(e,t){var n,o,i={};if("string"==typeof e){if(t=t||decodeURIComponent,o=e.replace(/^[\#\?]/,"").match(/([^=\/\&]+)=([^\&]+)/g))for(var a=0;a<o.length;a++)i[(n=o[a].match(/([^=]+)=(.*)/))[1]]=t(n[2]);return i}t=t||encodeURIComponent;var r=e;for(var s in i=[],r)r.hasOwnProperty(s)&&r.hasOwnProperty(s)&&i.push([s,"?"===r[s]?"?":t(r[s])].join("="));return i.join("&")},store:function(){for(var a,e=["localStorage","sessionStorage"],t=-1;e[++t];)try{(a=window[e[t]]).setItem("test"+t,t),a.removeItem("test"+t);break}catch(e){a=null}if(!a){var i=null;i=(a={getItem:function(e){e+="=";for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var o=t[n].replace(/(^\s+|\s+$)/,"");if(o&&0===o.indexOf(e))return o.substr(e.length)}return i},setItem:function(e,t){i=t,document.cookie=e+"="+t}}).getItem("hello")}return function(t,e,n){var o,i=function(){var e={};try{e=JSON.parse(a.getItem("hello"))||{}}catch(e){}return e}();if(t&&void 0===e)return i[t]||null;if(t&&null===e)try{delete i[t]}catch(e){i[t]=null}else{if(!t)return i;i[t]=e}return o=i,a.setItem("hello",JSON.stringify(o)),i||null}}(),append:function(e,t,n){var o="string"==typeof e?document.createElement(e):e;if("object"==typeof t)if("tagName"in t)n=t;else for(var i in t)if(t.hasOwnProperty(i))if("object"==typeof t[i])for(var a in t[i])t[i].hasOwnProperty(a)&&(o[i][a]=t[i][a]);else"html"===i?o.innerHTML=t[i]:/^on/.test(i)?o[i]=t[i]:o.setAttribute(i,t[i]);return"body"===n?function e(){document.body?document.body.appendChild(o):setTimeout(e,16)}():"object"==typeof n?n.appendChild(o):"string"==typeof n&&document.getElementsByTagName(n)[0].appendChild(o),o},iframe:function(e){this.append("iframe",{src:e,style:{position:"absolute",left:"-1000px",bottom:0,height:"1px",width:"1px"}},"body")},merge:function(){var e=Array.prototype.slice.call(arguments);return e.unshift({}),this.extend.apply(null,e)},args:function(e,t){var n={},o=0,i=null,a=null;for(a in e)if(e.hasOwnProperty(a))break;if(1===t.length&&"object"==typeof t[0]&&"o!"!=e[a])for(a in t[0])if(e.hasOwnProperty(a)&&a in e)return t[0];for(a in e)if(e.hasOwnProperty(a))if(i=typeof t[o],"function"==typeof e[a]&&e[a].test(t[o])||"string"==typeof e[a]&&(-1<e[a].indexOf("s")&&"string"===i||-1<e[a].indexOf("o")&&"object"===i||-1<e[a].indexOf("i")&&"number"===i||-1<e[a].indexOf("a")&&"object"===i||-1<e[a].indexOf("f")&&"function"===i))n[a]=t[o++];else if("string"==typeof e[a]&&-1<e[a].indexOf("!"))return!1;return n},url:function(e){if(e){if(window.URL&&URL instanceof Function&&0!==URL.length)return new URL(e,window.location);var t=document.createElement("a");return t.href=e,t.cloneNode(!1)}return window.location},diff:function(t,e){return e.filter(function(e){return-1===t.indexOf(e)})},diffKey:function(e,t){if(!e&&t)return e;var n={};for(var o in e)o in t||(n[o]=e[o]);return n},unique:function(n){return Array.isArray(n)?n.filter(function(e,t){return n.indexOf(e)===t}):[]},isEmpty:function(e){if(!e)return!0;if(Array.isArray(e))return!e.length;if("object"==typeof e)for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},Promise:function(){var o=function(e){if(!(this instanceof o))return new o(e);this.id="Thenable/1.0.6",this.state=0,this.fulfillValue=void 0,this.rejectReason=void 0,this.onFulfilled=[],this.onRejected=[],this.proxy={then:this.then.bind(this)},"function"==typeof e&&e.call(this,this.fulfill.bind(this),this.reject.bind(this))};o.prototype={fulfill:function(e){return t(this,1,"fulfillValue",e)},reject:function(e){return t(this,2,"rejectReason",e)},then:function(e,t){var n=new o;return this.onFulfilled.push(a(e,n,"fulfill")),this.onRejected.push(a(t,n,"reject")),i(this),n.proxy}};var t=function(e,t,n,o){return 0===e.state&&(e.state=t,e[n]=o,i(e)),e},i=function(e){1===e.state?n(e,"onFulfilled",e.fulfillValue):2===e.state&&n(e,"onRejected",e.rejectReason)},n=function(e,t,n){if(0!==e[t].length){var o=e[t];e[t]=[];var i=function(){for(var e=0;e<o.length;e++)o[e](n)};"object"==typeof process&&"function"==typeof process.nextTick?process.nextTick(i):"function"==typeof setImmediate?setImmediate(i):setTimeout(i,0)}},a=function(n,o,i){return function(e){if("function"!=typeof n)o[i].call(o,e);else{var t;try{t=n(e)}catch(e){return void o.reject(e)}r(o,t)}}},r=function(t,n){if(t!==n&&t.proxy!==n){var e;if("object"==typeof n&&null!==n||"function"==typeof n)try{e=n.then}catch(e){return void t.reject(e)}if("function"!=typeof e)t.fulfill(n);else{var o=!1;try{e.call(n,function(e){o||(o=!0,e===n?t.reject(new TypeError("circular thenable chain")):r(t,e))},function(e){o||(o=!0,t.reject(e))})}catch(e){o||t.reject(e)}}}else t.reject(new TypeError("cannot resolve promise with itself"))};return o}(),Event:function(){var a=/[\s\,]+/;return this.parent={events:this.events,findEvents:this.findEvents,parent:this.parent,utils:this.utils},this.events={},this.on=function(e,t){if(t&&"function"==typeof t)for(var n=e.split(a),o=0;o<n.length;o++)this.events[n[o]]=[t].concat(this.events[n[o]]||[]);return this},this.off=function(e,n){return this.findEvents(e,function(e,t){n&&this.events[e][t]!==n||(this.events[e][t]=null)}),this},this.emit=function(n){var o=Array.prototype.slice.call(arguments,1);o.push(n);for(var e=function(e,t){o[o.length-1]="*"===e?n:e,this.events[e][t].apply(this,o)},t=this;t&&t.findEvents;)t.findEvents(n+",*",e),t=t.parent;return this},this.emitAfter=function(){var e=this,t=arguments;return setTimeout(function(){e.emit.apply(e,t)},0),this},this.findEvents=function(e,t){var n=e.split(a);for(var o in this.events)if(this.events.hasOwnProperty(o)&&-1<n.indexOf(o))for(var i=0;i<this.events[o].length;i++)this.events[o][i]&&t.call(this,o,i)},this},globalEvent:function(e,t){return t=t||"_hellojs_"+parseInt(1e12*Math.random(),10).toString(36),window[t]=function(){try{e.apply(this,arguments)&&delete window[t]}catch(e){console.error(e)}},t},popup:function(e,t,n){var o=document.documentElement;if(n.height&&void 0===n.top){var i=void 0!==window.screenTop?window.screenTop:screen.top,a=screen.height||window.innerHeight||o.clientHeight;n.top=parseInt((a-n.height)/2,10)+i}if(n.width&&void 0===n.left){var r=void 0!==window.screenLeft?window.screenLeft:screen.left,s=screen.width||window.innerWidth||o.clientWidth;n.left=parseInt((s-n.width)/2,10)+r}var l=[];Object.keys(n).forEach(function(e){var t=n[e];l.push(e+(null!==t?"="+t:""))}),-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome")&&(e=t+"#oauth_redirect="+encodeURIComponent(encodeURIComponent(e)));var u=window.open(e,"_blank",l.join(","));return u&&u.focus&&u.focus(),u},responseHandler:function(e,t){var n,r=this,o=e.location;if((n=r.param(o.search))&&n.state&&(n.code||n.oauth_token)){var i=JSON.parse(n.state);n.redirect_uri=i.redirect_uri||o.href.replace(/[\?\#].*$/,"");var a=r.qs(i.oauth_proxy,n);o.assign(a)}else if((n=r.merge(r.param(o.search||""),r.param(o.hash||"")))&&"state"in n){try{var s=JSON.parse(n.state);r.extend(n,s)}catch(e){var l=decodeURIComponent(n.state);try{var u=JSON.parse(l);r.extend(n,u)}catch(e){console.error("Could not decode state parameter")}}if("access_token"in n&&n.access_token&&n.network)n.expires_in&&0!==parseInt(n.expires_in,10)||(n.expires_in=0),n.expires_in=parseInt(n.expires_in,10),n.expires=(new Date).getTime()/1e3+(n.expires_in||31536e3),d(n,e,t);else if("error"in n&&n.error&&n.network)n.error={code:n.error,message:n.error_message||n.error_description},d(n,e,t);else if(n.callback&&n.callback in t){var c=!!("result"in n&&n.result)&&JSON.parse(n.result);f(t,n.callback)(c),p()}n.page_uri&&o.assign(n.page_uri)}else if("oauth_redirect"in n)return void o.assign(decodeURIComponent(n.oauth_redirect));function d(e,t,n){var o=e.callback,i=e.network;if(r.store(i,e),!("display"in e&&"page"===e.display)){if(n&&o&&o in n){try{delete e.callback}catch(e){}r.store(i,e);var a=JSON.stringify(e);try{f(n,o)(a)}catch(e){}}p()}}function f(e,t){return 0!==t.indexOf("_hellojs_")?function(){throw"Could not execute callback "+t}:e[t]}function p(){if(e.frameElement)t.document.body.removeChild(e.frameElement);else{try{e.close()}catch(e){}e.addEventListener&&e.addEventListener("load",function(){e.close()})}}}}),hello.utils.Event.call(hello),function(u){var c={},d={};u.on("auth.login, auth.logout",function(e){e&&"object"==typeof e&&e.network&&(c[e.network]=u.utils.store(e.network)||{})}),function e(){var t=(new Date).getTime()/1e3,n=function(e){u.emit("auth."+e,{network:o,authResponse:i})};for(var o in u.services)if(u.services.hasOwnProperty(o)){if(!u.services[o].id)continue;var i=u.utils.store(o)||{},a=u.services[o],r=c[o]||{};if(i&&"callback"in i){var s=i.callback;try{delete i.callback}catch(e){}u.utils.store(o,i);try{window[s](i)}catch(e){}}if(i&&"expires"in i&&i.expires<t){var l=a.refresh||i.refresh_token;!l||o in d&&!(d[o]<t)?l||o in d||(n("expired"),d[o]=!0):(u.emit("notice",o+" has expired trying to resignin"),u.login(o,{display:"none",force:!1}),d[o]=t+600);continue}if(r.access_token===i.access_token&&r.expires===i.expires)continue;!i.access_token&&r.access_token?n("logout"):i.access_token&&!r.access_token?n("login"):i.expires!==r.expires&&n("update"),c[o]=i,o in d&&delete d[o]}setTimeout(e,1e3)}()}(hello),hello.api=function(){var e=this,i=e.utils,a=i.error,r=i.Promise(),s=i.args({path:"s!",query:"o",method:"s",data:"o",timeout:"i",callback:"f"},arguments);s.method=(s.method||"get").toLowerCase(),s.headers=s.headers||{},s.query=s.query||{},"get"!==s.method&&"delete"!==s.method||(i.extend(s.query,s.data),s.data={});var t=s.data=s.data||{};if(r.then(s.callback,s.callback),!s.path)return r.reject(a("invalid_path","Missing the path parameter from the request"));s.path=s.path.replace(/^\/+/,"");var n=(s.path.split(/[\/\:]/,2)||[])[0].toLowerCase();if(n in e.services){s.network=n;var o=new RegExp("^"+n+":?/?");s.path=s.path.replace(o,"")}s.network=e.settings.default_service=s.network||e.settings.default_service;var l=e.services[s.network];if(!l)return r.reject(a("invalid_network","Could not match the service requested: "+s.network));if(s.method in l&&s.path in l[s.method]&&!1===l[s.method][s.path])return r.reject(a("invalid_path","The provided path is not available on the selected network"));s.oauth_proxy||(s.oauth_proxy=e.settings.oauth_proxy),"proxy"in s||(s.proxy=s.oauth_proxy&&l.oauth&&1===parseInt(l.oauth.version,10)),"timeout"in s||(s.timeout=e.settings.timeout),"formatResponse"in s||(s.formatResponse=!0),s.authResponse=e.getAuthResponse(s.network),s.authResponse&&s.authResponse.access_token&&(s.query.access_token=s.authResponse.access_token);var u,c=s.path;s.options=i.clone(s.query),s.data=i.clone(t);var d=l[{delete:"del"}[s.method]||s.method]||{};if("get"===s.method){var f=c.split(/[\?#]/)[1];f&&(i.extend(s.query,i.param(f)),c=c.replace(/\?.*?(#|$)/,"$1"))}return(u=c.match(/#(.+)/,""))?(c=c.split("#")[0],s.path=u[1]):c in d?c=d[s.path=c]:"default"in d&&(c=d.default),s.redirect_uri=e.settings.redirect_uri,s.xhr=l.xhr,s.jsonp=l.jsonp,s.form=l.form,"function"==typeof c?c(s,p):p(c),r.proxy;function p(e){(e=e.replace(/\@\{([a-z\_\-]+)(\|.*?)?\}/gi,function(e,t,n){var o=n?n.replace(/^\|/,""):"";return t in s.query?(o=s.query[t],delete s.query[t]):s.data&&t in s.data?(o=s.data[t],delete s.data[t]):n||r.reject(a("missing_attribute","The attribute "+t+" is missing from the request")),o})).match(/^https?:\/\//)||(e=l.base+e),s.url=e,i.request(s,function(e,t){if(s.formatResponse){if(!0===e?e={success:!0}:e||(e={}),"delete"===s.method&&(e=!e||i.isEmpty(e)?{success:!0}:e),l.wrap&&(s.path in l.wrap||"default"in l.wrap)){var n=s.path in l.wrap?s.path:"default",o=((new Date).getTime(),l.wrap[n](e,t,s));o&&(e=o)}e&&"paging"in e&&e.paging.next&&("?"===e.paging.next[0]?e.paging.next=s.path+e.paging.next:e.paging.next+="#"+s.path),!e||"error"in e?r.reject(e):r.fulfill(e)}else("object"==typeof t?400<=t.statusCode:"object"==typeof e&&"error"in e)?r.reject(e):r.fulfill(e)})}},hello.utils.extend(hello.utils,{request:function(n,o){var i=this,e=i.error;if(i.isEmpty(n.data)||"FileList"in window||!i.hasBinary(n.data)||(n.xhr=!1,n.jsonp=!1),this.request_cors(function(){return void 0===n.xhr||n.xhr&&("function"!=typeof n.xhr||n.xhr(n,n.query))}))r(n,function(e){var t=i.xhr(n.method,e,n.headers,n.data,o);t.onprogress=n.onprogress||null,t.upload&&n.onuploadprogress&&(t.upload.onprogress=n.onuploadprogress)});else{var t,a=n.query;if(n.query=i.clone(n.query),n.callbackID=i.globalEvent(),!1!==n.jsonp){if(n.query.callback=n.callbackID,"function"==typeof n.jsonp&&n.jsonp(n,n.query),"get"===n.method)return void r(n,function(e){i.jsonp(e,o,n.callbackID,n.timeout)});n.query=a}if(!1!==n.form&&(n.query.redirect_uri=n.redirect_uri,n.query.state=JSON.stringify({callback:n.callbackID}),"function"==typeof n.form&&(t=n.form(n,n.query)),"post"===n.method&&!1!==t))return void r(n,function(e){i.post(e,n.data,t,o,n.callbackID,n.timeout)});o(e("invalid_request","There was no mechanism for handling this request"))}function r(e,t){var n;e.authResponse&&e.authResponse.oauth&&1===parseInt(e.authResponse.oauth.version,10)&&(n=e.query.access_token,delete e.query.access_token,e.proxy=!0),!e.data||"get"!==e.method&&"delete"!==e.method||(i.extend(e.query,e.data),e.data=null);var o=i.qs(e.url,e.query);e.proxy&&(o=i.qs(e.oauth_proxy,{path:o,access_token:n||"",then:e.proxy_response_type||("get"===e.method.toLowerCase()?"redirect":"proxy"),method:e.method.toLowerCase(),suppress_response_codes:!0})),t(o)}},request_cors:function(e){return"withCredentials"in new XMLHttpRequest&&e()},domInstance:function(e,t){var n="HTML"+(e||"").replace(/^[a-z]/,function(e){return e.toUpperCase()})+"Element";return!!t&&(window[n]?t instanceof window[n]:window.Element?t instanceof window.Element&&(!e||t.tagName&&t.tagName.toLowerCase()===e):!(t instanceof Object||t instanceof Array||t instanceof String||t instanceof Number)&&t.tagName&&t.tagName.toLowerCase()===e)},clone:function(e){if(null===e||"object"!=typeof e||e instanceof Date||"nodeName"in e||this.isBinary(e)||"function"==typeof FormData&&e instanceof FormData)return e;if(Array.isArray(e))return e.map(this.clone.bind(this));var t={};for(var n in e)t[n]=this.clone(e[n]);return t},xhr:function(o,e,t,n,i){var a,r=new XMLHttpRequest,s=this.error,l=!1;if("blob"===o&&(l=o,o="GET"),o=o.toUpperCase(),r.onload=function(e){var t=r.response;try{t=JSON.parse(r.responseText)}catch(e){401===r.status&&(t=s("access_denied",r.statusText))}var n=function(e){var t,n={},o=/([a-z\-]+):\s?(.*);?/gi;for(;t=o.exec(e);)n[t[1]]=t[2];return n}(r.getAllResponseHeaders());n.statusCode=r.status,i(t||("GET"===o?s("empty_response","Could not get resource"):{}),n)},r.onerror=function(e){var t=r.responseText;try{t=JSON.parse(r.responseText)}catch(e){}i(t||s("access_denied","Could not get resource"))},"GET"===o||"DELETE"===o)n=null;else if(n&&"string"!=typeof n&&!(n instanceof FormData)&&!(n instanceof File)&&!(n instanceof Blob)){var u=new FormData;for(a in n)n.hasOwnProperty(a)&&(n[a]instanceof HTMLInputElement?"files"in n[a]&&0<n[a].files.length&&u.append(a,n[a].files[0]):n[a]instanceof Blob?u.append(a,n[a],n.name):u.append(a,n[a]));n=u}if(r.open(o,e,!0),l&&("responseType"in r?r.responseType=l:r.overrideMimeType("text/plain; charset=x-user-defined")),t)for(a in t)r.setRequestHeader(a,t[a]);return r.send(n),r},jsonp:function(e,t,n,o){var i,a=this.error,r=0,s=document.getElementsByTagName("head")[0],l=a("server_error","server_error"),u=function(){r++||window.setTimeout(function(){t(l),s.removeChild(c)},0)};n=this.globalEvent(function(e){return l=e,!0},n),e=e.replace(new RegExp("=\\?(&|$)"),"="+n+"$1");var c=this.append("script",{id:n,name:n,src:e,async:!0,onload:u,onerror:u,onreadystatechange:function(){/loaded|complete/i.test(this.readyState)&&u()}});-1<window.navigator.userAgent.toLowerCase().indexOf("opera")&&(i=this.append("script",{text:"document.getElementById('"+n+"').onerror();"}),c.async=!1),o&&window.setTimeout(function(){l=a("timeout","timeout"),u()},o),s.appendChild(c),i&&s.appendChild(i)},post:function(e,t,n,o,i,a){var r,s,l=this,u=l.error,c=document,d=null,f=[],p=0,m=null,h=0,g=function(e){h++||o(e)};l.globalEvent(g,i);try{s=c.createElement('<iframe name="'+i+'">')}catch(e){s=c.createElement("iframe")}if(s.name=i,s.id=i,s.style.display="none",n&&n.callbackonload&&(s.onload=function(){g({response:"posted",message:"Content was posted"})}),a&&setTimeout(function(){g(u("timeout","The post operation timed out"))},a),c.body.appendChild(s),l.domInstance("form",t)){for(d=t.form,p=0;p<d.elements.length;p++)d.elements[p]!==t&&d.elements[p].setAttribute("disabled",!0);t=d}if(l.domInstance("form",t))for(d=t,p=0;p<d.elements.length;p++)d.elements[p].disabled||"file"!==d.elements[p].type||(d.encoding=d.enctype="multipart/form-data",d.elements[p].setAttribute("name","file"));else{for(m in t)t.hasOwnProperty(m)&&l.domInstance("input",t[m])&&"file"===t[m].type&&((d=t[m].form).encoding=d.enctype="multipart/form-data");var v;for(m in d||(d=c.createElement("form"),c.body.appendChild(d),r=d),t)if(t.hasOwnProperty(m)){var y=l.domInstance("input",t[m])||l.domInstance("textArea",t[m])||l.domInstance("select",t[m]);if(y&&t[m].form===d)y&&t[m].name!==m&&(t[m].setAttribute("name",m),t[m].name=m);else{var w=d.elements[m];if(v)for(w instanceof NodeList||(w=[w]),p=0;p<w.length;p++)w[p].parentNode.removeChild(w[p]);(v=c.createElement("input")).setAttribute("type","hidden"),v.setAttribute("name",m),y?v.value=t[m].value:l.domInstance(null,t[m])?v.value=t[m].innerHTML||t[m].innerText:v.value=t[m],d.appendChild(v)}}for(p=0;p<d.elements.length;p++)(v=d.elements[p]).name in t||!0===v.getAttribute("disabled")||(v.setAttribute("disabled",!0),f.push(v))}d.setAttribute("method","POST"),d.setAttribute("target",i),d.target=i,d.setAttribute("action",e),setTimeout(function(){d.submit(),setTimeout(function(){try{r&&r.parentNode.removeChild(r)}catch(e){try{console.error("HelloJS: could not remove iframe")}catch(e){}}for(var e=0;e<f.length;e++)f[e]&&(f[e].setAttribute("disabled",!1),f[e].disabled=!1)},0)},100)},hasBinary:function(e){for(var t in e)if(e.hasOwnProperty(t)&&this.isBinary(e[t]))return!0;return!1},isBinary:function(e){return e instanceof Object&&(this.domInstance("input",e)&&"file"===e.type||"FileList"in window&&e instanceof window.FileList||"File"in window&&e instanceof window.File||"Blob"in window&&e instanceof window.Blob)},toBlob:function(e){var t=/^data\:([^;,]+(\;charset=[^;,]+)?)(\;base64)?,/i,n=e.match(t);if(!n)return e;for(var o=atob(e.replace(t,"")),i=[],a=0;a<o.length;a++)i.push(o.charCodeAt(a));return new Blob([new Uint8Array(i)],{type:n[1]})}}),function(e){var t=e.api,n=e.utils;n.extend(n,{dataToJSON:function(e){var t=this,n=window,o=e.data;if(t.domInstance("form",o)?o=t.nodeListToJSON(o.elements):"NodeList"in n&&o instanceof NodeList?o=t.nodeListToJSON(o):t.domInstance("input",o)&&(o=t.nodeListToJSON([o])),("File"in n&&o instanceof n.File||"Blob"in n&&o instanceof n.Blob||"FileList"in n&&o instanceof n.FileList)&&(o={file:o}),!("FormData"in n&&o instanceof n.FormData))for(var i in o)if(o.hasOwnProperty(i))if("FileList"in n&&o[i]instanceof n.FileList)1===o[i].length&&(o[i]=o[i][0]);else{if(t.domInstance("input",o[i])&&"file"===o[i].type)continue;t.domInstance("input",o[i])||t.domInstance("select",o[i])||t.domInstance("textArea",o[i])?o[i]=o[i].value:t.domInstance(null,o[i])&&(o[i]=o[i].innerHTML||o[i].innerText)}return e.data=o},nodeListToJSON:function(e){for(var t={},n=0;n<e.length;n++){var o=e[n];!o.disabled&&o.name&&("file"===o.type?t[o.name]=o:t[o.name]=o.value||o.innerHTML)}return t}}),e.api=function(){var e=n.args({path:"s!",method:"s",data:"o",timeout:"i",callback:"f"},arguments);return e.data&&n.dataToJSON(e),t.call(this,e)}}(hello),hello.utils.responseHandler(window,window.opener||window.parent),"object"==typeof chrome&&"object"==typeof chrome.identity&&chrome.identity.launchWebAuthFlow&&function(){hello.utils.popup=function(e){return i(e,!0)},hello.utils.iframe=function(e){i(e,!1)},hello.utils.request_cors=function(e){return e(),!0};var n={};function i(e,t){var o={closed:!1};return chrome.identity.launchWebAuthFlow({url:e,interactive:t},function(e){if(void 0!==e){var t=hello.utils.url(e),n={location:{assign:function(e){i(e,!1)},search:t.search,hash:t.hash,href:t.href},close:function(){}};hello.utils.responseHandler(n,window)}else o.closed=!0}),o}chrome.storage.local.get("hello",function(e){n=e.hello||{}}),hello.utils.store=function(e,t){return 0===arguments.length?n:1===arguments.length?n[e]||null:t?(n[e]=t,chrome.storage.local.set({hello:n}),t):null===t?(delete n[e],chrome.storage.local.set({hello:n}),null):void 0}}(),function(){if(/^file:\/{3}[^\/]/.test(window.location.href)&&window.cordova){hello.utils.iframe=function(e,t){hello.utils.popup(e,t,{hidden:"yes"})};var r=hello.utils.popup;hello.utils.popup=function(e,t,n){var i=r.call(this,e,t,n);try{if(i&&i.addEventListener){var o=hello.utils.url(t),a=o.origin||o.protocol+"//"+o.hostname;i.addEventListener("loadstart",function(e){var t=e.url;if(0===t.indexOf(a)){var n=hello.utils.url(t),o={location:{assign:function(e){i.executeScript({code:'window.location.href = "'+e+';"'})},search:n.search,hash:n.hash,href:n.href},close:function(){if(i.close){i.close();try{i.closed=!0}catch(e){}}}};hello.utils.responseHandler(o,window)}})}}catch(e){}return i}}}(),function(i){var n={version:"1.0",auth:"https://www.dropbox.com/1/oauth/authorize",request:"https://api.dropbox.com/1/oauth/request_token",token:"https://api.dropbox.com/1/oauth/access_token"},o={version:2,auth:"https://www.dropbox.com/1/oauth2/authorize",grant:"https://api.dropbox.com/1/oauth2/token"};function a(e){e&&"error"in e&&(e.error={code:"server_error",message:e.error.message||e.error})}function r(e,t,n){if(!("object"!=typeof e||"undefined"!=typeof Blob&&e instanceof Blob||"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer||"error"in e)){var o=("app_folder"!==e.root?e.root:"")+e.path.replace(/\&/g,"%26");o=o.replace(/^\//,""),e.thumb_exists&&(e.thumbnail=n.oauth_proxy+"?path="+encodeURIComponent("https://api-content.dropbox.com/1/thumbnails/auto/"+o+"?format=jpeg&size=m")+"&access_token="+n.options.access_token),e.type=e.is_dir?"folder":e.mime_type,e.name=e.path.replace(/.*\//g,""),e.is_dir?e.files=o.replace(/^\//,""):(e.downloadLink=i.settings.oauth_proxy+"?path="+encodeURIComponent("https://api-content.dropbox.com/1/files/auto/"+o)+"&access_token="+n.options.access_token,e.file="https://api-content.dropbox.com/1/files/auto/"+o),e.id||(e.id=e.path.replace(/^\//,""))}}function e(n){return function(e,t){delete e.query.limit,t(n)}}i.init({dropbox:{name:"Dropbox",oauth:o,login:function(e){e.qs.scope="";var t=decodeURIComponent(e.qs.redirect_uri);0===t.indexOf("http:")&&0!==t.indexOf("http://localhost/")?i.services.dropbox.oauth=n:i.services.dropbox.oauth=o,e.options.popup.width=1e3,e.options.popup.height=1e3},base:"https://api.dropbox.com/1/",root:"sandbox",get:{me:"account/info","me/files":e("metadata/auto/@{parent|}"),"me/folder":e("metadata/auto/@{id}"),"me/folders":e("metadata/auto/"),default:function(e,t){e.path.match("https://api-content.dropbox.com/1/files/")&&(e.method="blob"),t(e.path)}},post:{"me/files":function(e,t){var n=e.data.parent,o=e.data.name;e.data={file:e.data.file},"string"==typeof e.data.file&&(e.data.file=i.utils.toBlob(e.data.file)),t("https://api-content.dropbox.com/1/files_put/auto/"+n+"/"+o)},"me/folders":function(e,t){var n=e.data.name;e.data={},t("fileops/create_folder?root=@{root|sandbox}&"+i.utils.param({path:n}))}},del:{"me/files":"fileops/delete?root=@{root|sandbox}&path=@{id}","me/folder":"fileops/delete?root=@{root|sandbox}&path=@{id}"},wrap:{me:function(e){if(a(e),!e.uid)return e;e.name=e.display_name;var t=e.name.split(" ");return e.first_name=t.shift(),e.last_name=t.join(" "),e.id=e.uid,delete e.uid,delete e.display_name,e},default:function(t,n,o){return a(t),t.is_dir&&t.contents&&(t.data=t.contents,delete t.contents,t.data.forEach(function(e){e.root=t.root,r(e,n,o)})),r(t,n,o),t.is_deleted&&(t.success=!0),t}},xhr:function(e){if(e.data&&e.data.file){var t=e.data.file;t&&(t.files?e.data=t.files[0]:e.data=t)}return"delete"===e.method&&(e.method="post"),!0},form:function(e,t){delete t.state,delete t.redirect_uri}}})}(hello),function(a){a.init({facebook:{name:"Facebook",oauth:{version:2,auth:"https://www.facebook.com/v2.9/dialog/oauth/",grant:"https://graph.facebook.com/oauth/access_token"},scope:{basic:"public_profile",email:"email",share:"user_posts",birthday:"user_birthday",events:"user_events",photos:"user_photos",videos:"user_videos",friends:"user_friends",files:"user_photos,user_videos",publish_files:"user_photos,user_videos,publish_actions",publish:"publish_actions",offline_access:""},refresh:!1,login:function(e){e.options.force&&(e.qs.auth_type="reauthenticate"),e.qs.display=e.options.display||"popup"},logout:function(e,t){var n=a.utils.globalEvent(e),o=encodeURIComponent(a.settings.redirect_uri+"?"+a.utils.param({callback:n,result:JSON.stringify({force:!0}),state:"{}"})),i=(t.authResponse||{}).access_token;if(a.utils.iframe("https://www.facebook.com/logout.php?next="+o+"&access_token="+i),!i)return!1},base:"https://graph.facebook.com/v2.9/",get:{me:"me?fields=email,first_name,last_name,name,timezone,verified","me/friends":"me/friends","me/following":"me/friends","me/followers":"me/friends","me/share":"me/feed","me/like":"me/likes","me/files":"me/albums","me/albums":"me/albums?fields=cover_photo,name","me/album":"@{id}/photos?fields=picture","me/photos":"me/photos","me/photo":"@{id}","friend/albums":"@{id}/albums","friend/photos":"@{id}/photos"},post:{"me/share":"me/feed","me/photo":"@{id}"},wrap:{me:t,"me/friends":e,"me/following":e,"me/followers":e,"me/albums":n,"me/photos":n,"me/files":n,default:n},xhr:function(e,t){return"get"!==e.method&&"post"!==e.method||(t.suppress_response_codes=!0),"post"===e.method&&e.data&&"string"==typeof e.data.file&&(e.data.file=a.utils.toBlob(e.data.file)),!0},jsonp:function(e,t){var n=e.method;"get"===n||a.utils.hasBinary(e.data)?"delete"===e.method&&(t.method="delete",e.method="post"):(e.data.method=n,e.method="get")},form:function(e){return{callbackonload:!0}}}});var r="https://graph.facebook.com/";function t(e){return e.id&&(e.thumbnail=e.picture="https://graph.facebook.com/"+e.id+"/picture"),e}function e(e){return"data"in e&&e.data.forEach(t),e}function n(e,t,n){if("boolean"==typeof e&&(e={success:e}),e&&"data"in e){var o=n.query.access_token;if(!(e.data instanceof Array)){var i=e.data;delete e.data,e.data=[i]}e.data.forEach(function(e){e.picture&&(e.thumbnail=e.picture),e.pictures=(e.images||[]).sort(function(e,t){return e.width-t.width}),e.cover_photo&&e.cover_photo.id&&(e.thumbnail=r+e.cover_photo.id+"/picture?access_token="+o),"album"===e.type&&(e.files=e.photos=r+e.id+"/photos"),e.can_upload&&(e.upload_location=r+e.id+"/photos")})}return e}}(hello),function(r){function s(e,t,n){var o=(n?"":"flickr:")+"?method="+e+"&api_key="+r.services.flickr.id+"&format=json";for(var i in t)t.hasOwnProperty(i)&&(o+="&"+i+"="+t[i]);return o}function e(i,a){return a||(a={}),function(e,t){var n,o;n=function(e){a.user_id=e,t(s(i,a,!0))},o=r.getAuthResponse("flickr"),n(o&&o.user_nsid?o.user_nsid:null)}}function o(e,t){var n="https://www.flickr.com/images/buddyicon.gif";return e.nsid&&e.iconserver&&e.iconfarm&&(n="https://farm"+e.iconfarm+".staticflickr.com/"+e.iconserver+"/buddyicons/"+e.nsid+(t?"_"+t:"")+".jpg"),n}function a(e,t,n,o,i){return"https://farm"+t+".staticflickr.com/"+n+"/"+e+"_"+o+(i=i?"_"+i:"")+".jpg"}function i(e){e&&e.stat&&"ok"!=e.stat.toLowerCase()&&(e.error={code:"invalid_request",message:e.message})}function t(e){if(e.photoset||e.photos){c(e=u(e,"photoset"in e?"photoset":"photos")),e.data=e.photo,delete e.photo;for(var t=0;t<e.data.length;t++){var n=e.data[t];n.name=n.title,n.picture=a(n.id,n.farm,n.server,n.secret,""),n.pictures=l(n.id,n.farm,n.server,n.secret),n.source=a(n.id,n.farm,n.server,n.secret,"b"),n.thumbnail=a(n.id,n.farm,n.server,n.secret,"m")}}return e}function l(t,n,o,i){return[{id:"t",max:100},{id:"m",max:240},{id:"n",max:320},{id:"",max:500},{id:"z",max:640},{id:"c",max:800},{id:"b",max:1024},{id:"h",max:1600},{id:"k",max:2048},{id:"o",max:2048}].map(function(e){return{source:a(t,n,o,i,e.id),width:e.max,height:e.max}})}function u(e,t){return t in e?e=e[t]:"error"in e||(e.error={code:"invalid_request",message:e.message||"Failed to get data from Flickr"}),e}function n(e){if(i(e),e.contacts){c(e=u(e,"contacts")),e.data=e.contact,delete e.contact;for(var t=0;t<e.data.length;t++){var n=e.data[t];n.id=n.nsid,n.name=n.realname||n.username,n.thumbnail=o(n,"m")}}return e}function c(e){e.page&&e.pages&&e.page!==e.pages&&(e.paging={next:"?page="+ ++e.page})}r.init({flickr:{name:"Flickr",oauth:{version:"1.0a",auth:"https://www.flickr.com/services/oauth/authorize?perms=read",request:"https://www.flickr.com/services/oauth/request_token",token:"https://www.flickr.com/services/oauth/access_token"},base:"https://api.flickr.com/services/rest",get:{me:e("flickr.people.getInfo"),"me/friends":e("flickr.contacts.getList",{per_page:"@{limit|50}"}),"me/following":e("flickr.contacts.getList",{per_page:"@{limit|50}"}),"me/followers":e("flickr.contacts.getList",{per_page:"@{limit|50}"}),"me/albums":e("flickr.photosets.getList",{per_page:"@{limit|50}"}),"me/album":e("flickr.photosets.getPhotos",{photoset_id:"@{id}"}),"me/photos":e("flickr.people.getPhotos",{per_page:"@{limit|50}"})},wrap:{me:function(e){if(i(e),(e=u(e,"person")).id){if(e.realname){e.name=e.realname._content;var t=e.name.split(" ");e.first_name=t.shift(),e.last_name=t.join(" ")}e.thumbnail=o(e,"l"),e.picture=o(e,"l")}return e},"me/friends":n,"me/followers":n,"me/following":n,"me/albums":function(e){return i(e),c(e=u(e,"photosets")),e.photoset&&(e.data=e.photoset,e.data.forEach(function(e){e.name=e.title._content,e.photos="https://api.flickr.com/services/rest"+s("flickr.photosets.getPhotos",{photoset_id:e.id},!0)}),delete e.photoset),e},"me/photos":function(e){return i(e),t(e)},default:function(e){return i(e),t(e)}},xhr:!1,jsonp:function(e,t){"get"==e.method&&(delete t.callback,t.jsoncallback=e.callbackID)}}})}(hello),function(e){function t(e){!e.meta||400!==e.meta.code&&401!==e.meta.code||(e.error={code:"access_denied",message:e.meta.errorDetail})}function n(e){e&&e.id&&(e.thumbnail=e.photo.prefix+"100x100"+e.photo.suffix,e.name=e.firstName+" "+e.lastName,e.first_name=e.firstName,e.last_name=e.lastName,e.contact&&e.contact.email&&(e.email=e.contact.email))}function o(e,t){var n=t.access_token;return delete t.access_token,t.oauth_token=n,t.v=20121125,!0}hello.init({foursquare:{name:"Foursquare",oauth:{version:2,auth:"https://foursquare.com/oauth2/authenticate",grant:"https://foursquare.com/oauth2/access_token"},refresh:!0,base:"https://api.foursquare.com/v2/",get:{me:"users/self","me/friends":"users/self/friends","me/followers":"users/self/friends","me/following":"users/self/friends"},wrap:{me:function(e){return t(e),e&&e.response&&n(e=e.response.user),e},default:function(e){return t(e),e&&"response"in e&&"friends"in e.response&&"items"in e.response.friends&&(e.data=e.response.friends.items,e.data.forEach(n),delete e.response),e}},xhr:o,jsonp:o}})}(),function(e){function o(e,t){var n=t?t.statusCode:e&&"meta"in e&&"status"in e.meta&&e.meta.status;401!==n&&403!==n||(e.error={code:"access_denied",message:e.message||(e.data?e.data.message:"Could not get response")},delete e.message)}function i(e){e.id&&(e.thumbnail=e.picture=e.avatar_url,e.name=e.login)}hello.init({github:{name:"GitHub",oauth:{version:2,auth:"https://github.com/login/oauth/authorize",grant:"https://github.com/login/oauth/access_token",response_type:"code"},scope:{email:"user:email"},base:"https://api.github.com/",get:{me:"user","me/friends":"user/following?per_page=@{limit|100}","me/following":"user/following?per_page=@{limit|100}","me/followers":"user/followers?per_page=@{limit|100}","me/like":"user/starred?per_page=@{limit|100}"},wrap:{me:function(e,t){return o(e,t),i(e),e},default:function(e,t,n){return o(e,t),Array.isArray(e)&&(e={data:e}),e.data&&(!function(e,t,n){if(e.data&&e.data.length&&t&&t.Link){var o=t.Link.match(/<(.*?)>;\s*rel=\"next\"/);o&&(e.paging={next:o[1]})}}(e,t),e.data.forEach(i)),e}},xhr:function(e){return"get"!==e.method&&e.data&&(e.headers=e.headers||{},e.headers["Content-Type"]="application/json","object"==typeof e.data&&(e.data=JSON.stringify(e.data))),!0}}})}(),function(t){var e="https://www.google.com/m8/feeds/contacts/default/full?v=3.0&alt=json&max-results=@{limit|1000}&start-index=@{start|1}";function o(e){return parseInt(e,10)}function n(e){return u(e),e.data=e.items,delete e.items,e}function i(e){if(!e.error)return e.name||(e.name=e.title||e.message),e.picture||(e.picture=e.thumbnailLink),e.thumbnail||(e.thumbnail=e.thumbnailLink),"application/vnd.google-apps.folder"===e.mimeType&&(e.type="folder",e.files="https://www.googleapis.com/drive/v2/files?q=%22"+e.id+"%22+in+parents"),e}function c(e){return{source:e.url,width:e.width,height:e.height}}function a(e){if(u(e),"feed"in e&&"entry"in e.feed)e.data=e.feed.entry.map(l),delete e.feed;else{if("entry"in e)return l(e.entry);"items"in e?(e.data=e.items.map(i),delete e.items):i(e)}return e}function r(e){e.name=e.displayName||e.name,e.picture=e.picture||(e.image?e.image.url:null),e.thumbnail=e.picture}function s(e,t,n){u(e);if("feed"in e&&"entry"in e.feed){for(var o=n.query.access_token,i=0;i<e.feed.entry.length;i++){var a=e.feed.entry[i];if(a.id=a.id.$t,a.name=a.title.$t,delete a.title,a.gd$email&&(a.email=a.gd$email&&0<a.gd$email.length?a.gd$email[0].address:null,a.emails=a.gd$email,delete a.gd$email),a.updated&&(a.updated=a.updated.$t),a.link){var r=0<a.link.length?a.link[0].href:null;r&&a.link[0].gd$etag&&(r+=(-1<r.indexOf("?")?"&":"?")+"access_token="+o,a.picture=r,a.thumbnail=r),delete a.link}a.category&&delete a.category}e.data=e.feed.entry,delete e.feed}return e}function l(e){var t,n=e.media$group,o=n.media$content.length?n.media$content[0]:{},i=n.media$content||[],a=n.media$thumbnail||[],r=i.concat(a).map(c).sort(function(e,t){return e.width-t.width}),s=0,l={id:e.id.$t,name:e.title.$t,description:e.summary.$t,updated_time:e.updated.$t,created_time:e.published.$t,picture:o?o.url:null,pictures:r,images:[],thumbnail:o?o.url:null,width:o.width,height:o.height};if("link"in e)for(s=0;s<e.link.length;s++){var u=e.link[s];if(u.rel.match(/\#feed$/)){l.upload_location=l.files=l.photos=u.href;break}}if("category"in e&&e.category.length)for(t=e.category,s=0;s<t.length;s++)t[s].scheme&&t[s].scheme.match(/\#kind$/)&&(l.type=t[s].term.replace(/^.*?\#/,""));return"media$thumbnail"in n&&n.media$thumbnail.length&&(t=n.media$thumbnail,l.thumbnail=t[0].url,l.images=t.map(c)),(t=n.media$content)&&t.length&&l.images.push(c(t[0])),l}function u(e){if("feed"in e&&e.feed.openSearch$itemsPerPage){var t=o(e.feed.openSearch$itemsPerPage.$t),n=o(e.feed.openSearch$startIndex.$t);n+t<o(e.feed.openSearch$totalResults.$t)&&(e.paging={next:"?start="+(n+t)})}else"nextPageToken"in e&&(e.paging={next:"?pageToken="+e.nextPageToken})}function d(){var n=[],t=(1e10*Math.random()).toString(32),a=0,r="\r\n",o=r+"--"+t,i=function(){},s=/^data\:([^;,]+(\;charset=[^;,]+)?)(\;base64)?,/i;function l(t){var e=new FileReader;e.onload=function(e){u(btoa(e.target.result),t.type+r+"Content-Transfer-Encoding: base64")},e.readAsBinaryString(t)}function u(e,t){n.push(r+"Content-Type: "+t+r+r+e),a--,i()}this.append=function(e,t){"string"!=typeof e&&"length"in Object(e)||(e=[e]);for(var n=0;n<e.length;n++){a++;var o=e[n];if("undefined"!=typeof File&&o instanceof File||"undefined"!=typeof Blob&&o instanceof Blob)l(o);else if("string"==typeof o&&o.match(s)){var i=o.match(s);u(o.replace(s,""),i[1]+r+"Content-Transfer-Encoding: base64")}else u(o,t)}},this.onready=function(e){(i=function(){0===a&&(n.unshift(""),n.push("--"),e(n.join(o),t),n=[])})()}}function f(n,o){var e,i={};if(n.data&&"undefined"!=typeof HTMLInputElement&&n.data instanceof HTMLInputElement&&(n.data={file:n.data}),!n.data.name&&Object(Object(n.data.file).files).length&&"post"===n.method&&(n.data.name=n.data.file.files[0].name),"post"===n.method?n.data={title:n.data.name,parents:[{id:n.data.parent||"root"}],file:n.data.file}:(i=n.data,n.data={},i.parent&&(n.data.parents=[{id:n.data.parent||"root"}]),i.file&&(n.data.file=i.file),i.name&&(n.data.title=i.name)),"file"in n.data&&(e=n.data.file,delete n.data.file,"object"==typeof e&&"files"in e&&(e=e.files),!e||!e.length))o({error:{code:"request_invalid",message:"There were no files attached with this request to upload"}});else{var t=new d;t.append(JSON.stringify(n.data),"application/json"),e&&t.append(e),t.onready(function(e,t){n.headers["content-type"]='multipart/related; boundary="'+t+'"',n.data=e,o("upload/drive/v2/files"+(i.id?"/"+i.id:"")+"?uploadType=multipart")})}}t.init({google:{name:"Google Sign-In",oauth:{version:2,auth:"https://accounts.google.com/o/oauth2/v2/auth",grant:"https://www.googleapis.com/oauth2/v4/token"},scope:{basic:"openid profile",email:"email",birthday:"",events:"",photos:"https://picasaweb.google.com/data/",videos:"http://gdata.youtube.com",files:"https://www.googleapis.com/auth/drive.readonly",publish:"",publish_files:"https://www.googleapis.com/auth/drive",share:"",create_event:"",offline_access:""},scope_delim:" ",login:function(e){"code"===e.qs.response_type?e.qs.access_type="offline":-1<e.qs.response_type.indexOf("id_token")&&(e.qs.nonce=parseInt(1e12*Math.random(),10).toString(36)),e.options.force&&(e.qs.approval_prompt="force")},base:"https://www.googleapis.com/",get:{me:"oauth2/v3/userinfo?alt=json","me/following":e,"me/followers":e,"me/contacts":e,"me/albums":"https://picasaweb.google.com/data/feed/api/user/default?alt=json&max-results=@{limit|100}&start-index=@{start|1}","me/album":function(e,t){var n=e.query.id;delete e.query.id,t(n.replace("/entry/","/feed/"))},"me/photos":"https://picasaweb.google.com/data/feed/api/user/default?alt=json&kind=photo&max-results=@{limit|100}&start-index=@{start|1}","me/file":"drive/v2/files/@{id}","me/files":"drive/v2/files?q=%22@{parent|root}%22+in+parents+and+trashed=false&maxResults=@{limit|100}","me/folders":"drive/v2/files?q=%22@{id|root}%22+in+parents+and+mimeType+=+%22application/vnd.google-apps.folder%22+and+trashed=false&maxResults=@{limit|100}","me/folder":"drive/v2/files?q=%22@{id|root}%22+in+parents+and+trashed=false&maxResults=@{limit|100}"},post:{"me/files":f,"me/folders":function(e,t){e.data={title:e.data.name,parents:[{id:e.data.parent||"root"}],mimeType:"application/vnd.google-apps.folder"},t("drive/v2/files")}},put:{"me/files":f},del:{"me/files":"drive/v2/files/@{id}","me/folder":"drive/v2/files/@{id}"},patch:{"me/file":"drive/v2/files/@{id}"},wrap:{me:function(e){return e.sub&&(e.id=e.sub),e.id&&(e.last_name=e.family_name||(e.name?e.name.familyName:null),e.first_name=e.given_name||(e.name?e.name.givenName:null),e.emails&&e.emails.length&&(e.email=e.emails[0].value),r(e)),e},"me/friends":function(e){return e.items&&(u(e),e.data=e.items,e.data.forEach(r),delete e.items),e},"me/contacts":s,"me/followers":s,"me/following":s,"me/share":n,"me/feed":n,"me/albums":a,"me/photos":function(e){"feed"in e&&(e.data="entry"in e.feed?e.feed.entry.map(l):[],delete e.feed);return e},default:a},xhr:function(e){return"post"===e.method||"put"===e.method?function(e){if("object"==typeof e.data)try{e.data=JSON.stringify(e.data),e.headers["content-type"]="application/json"}catch(e){}}(e):"patch"===e.method&&(t.utils.extend(e.query,e.data),e.data=null),!0},form:!1}})}(hello),function(e){function t(e){return"string"==typeof e?{error:{code:"invalid_request",message:e}}:(e&&"meta"in e&&"error_type"in e.meta&&(e.error={code:e.meta.error_type,message:e.meta.error_message}),e)}function n(e){return i(e),e&&"data"in e&&e.data.forEach(o),e}function o(e){e.id&&(e.thumbnail=e.profile_picture,e.name=e.full_name||e.username)}function i(e){"pagination"in e&&(e.paging={next:e.pagination.next_url},delete e.pagination)}hello.init({instagram:{name:"Instagram",oauth:{version:2,auth:"https://instagram.com/oauth/authorize/",grant:"https://api.instagram.com/oauth/access_token"},refresh:!0,scope:{basic:"basic",photos:"",friends:"relationships",publish:"likes comments",email:"",share:"",publish_files:"",files:"",videos:"",offline_access:""},scope_delim:" ",base:"https://api.instagram.com/v1/",get:{me:"users/self","me/feed":"users/self/feed?count=@{limit|100}","me/photos":"users/self/media/recent?min_id=0&count=@{limit|100}","me/friends":"users/self/follows?count=@{limit|100}","me/following":"users/self/follows?count=@{limit|100}","me/followers":"users/self/followed-by?count=@{limit|100}","friend/photos":"users/@{id}/media/recent?min_id=0&count=@{limit|100}"},post:{"me/like":function(e,t){var n=e.data.id;e.data={},t("media/"+n+"/likes")}},del:{"me/like":"media/@{id}/likes"},wrap:{me:function(e){return t(e),"data"in e&&(e.id=e.data.id,e.thumbnail=e.data.profile_picture,e.name=e.data.full_name||e.data.username),e},"me/friends":n,"me/following":n,"me/followers":n,"me/photos":function(e){return t(e),i(e),"data"in e&&(e.data=e.data.filter(function(e){return"image"===e.type}),e.data.forEach(function(o){o.name=o.caption?o.caption.text:null,o.thumbnail=o.images.thumbnail.url,o.picture=o.images.standard_resolution.url,o.pictures=Object.keys(o.images).map(function(e){var t,n=o.images[e];return{source:(t=n).url,width:t.width,height:t.height}}).sort(function(e,t){return e.width-t.width})})),e},default:function(e){return i(e=t(e)),e}},xhr:function(e,t){var n=e.method,o="get"!==n;return o&&("post"!==n&&"put"!==n||!e.query.access_token||(e.data.access_token=e.query.access_token,delete e.query.access_token),e.proxy=o),o},form:!1}})}(),function(e){function n(e,t){var n,o;return e&&"Message"in e&&(o=e.Message,delete e.Message,"ErrorCode"in e?(n=e.ErrorCode,delete e.ErrorCode):n=function(e){switch(e.statusCode){case 400:return"invalid_request";case 403:return"stale_token";case 401:return"invalid_token";case 500:default:return"server_error"}}(t),e.error={code:n,message:o,details:e}),e}hello.init({joinme:{name:"join.me",oauth:{version:2,auth:"https://secure.join.me/api/public/v1/auth/oauth2",grant:"https://secure.join.me/api/public/v1/auth/oauth2"},refresh:!1,scope:{basic:"user_info",user:"user_info",scheduler:"scheduler",start:"start_meeting",email:"",friends:"",share:"",publish:"",photos:"",publish_files:"",files:"",videos:"",offline_access:""},scope_delim:" ",login:function(e){e.options.popup.width=400,e.options.popup.height=700},base:"https://api.join.me/v1/",get:{me:"user",meetings:"meetings","meetings/info":"meetings/@{id}"},post:{"meetings/start/adhoc":function(e,t){t("meetings/start")},"meetings/start/scheduled":function(e,t){var n=e.data.meetingId;e.data={},t("meetings/"+n+"/start")},"meetings/schedule":function(e,t){t("meetings")}},patch:{"meetings/update":function(e,t){t("meetings/"+e.data.meetingId)}},del:{"meetings/delete":"meetings/@{id}"},wrap:{me:function(e,t){return n(e,t),e.email&&(e.name=e.fullName,e.first_name=e.name.split(" ")[0],e.last_name=e.name.split(" ")[1],e.id=e.email),e},default:function(e,t){return n(e,t),e}},xhr:function(e,t){var n=t.access_token;delete t.access_token,e.headers.Authorization="Bearer "+n,"get"!==e.method&&e.data&&(e.headers["Content-Type"]="application/json","object"==typeof e.data&&(e.data=JSON.stringify(e.data)));"put"===e.method&&(e.method="patch");return!0}}})}(),function(e){function i(e){e&&"errorCode"in e&&(e.error={code:e.status,message:e.message})}function t(e){if(!e.error)return e.first_name=e.firstName,e.last_name=e.lastName,e.name=e.formattedName||e.first_name+" "+e.last_name,e.thumbnail=e.pictureUrl,e.email=e.emailAddress,e}function n(e){return i(e),a(e),e.values&&(e.data=e.values.map(t),delete e.values),e}function a(e){"_count"in e&&"_start"in e&&e._count+e._start<e._total&&(e.paging={next:"?start="+(e._start+e._count)+"&count="+e._count})}function o(e){e.access_token&&(e.oauth2_access_token=e.access_token,delete e.access_token)}function r(e,t){e.headers["x-li-format"]="json";var n=e.data.id;e.data=("delete"!==e.method).toString(),e.method="put",t("people/~/network/updates/key="+n+"/is-liked")}hello.init({linkedin:{oauth:{version:2,response_type:"code",auth:"https://www.linkedin.com/uas/oauth2/authorization",grant:"https://www.linkedin.com/uas/oauth2/accessToken"},refresh:!0,scope:{basic:"r_basicprofile",email:"r_emailaddress",files:"",friends:"",photos:"",publish:"w_share",publish_files:"w_share",share:"",videos:"",offline_access:""},scope_delim:" ",base:"https://api.linkedin.com/v1/",get:{me:"people/~:(picture-url,first-name,last-name,id,formatted-name,email-address)","me/share":"people/~/network/updates?count=@{limit|250}"},post:{"me/share":function(e,t){var n={visibility:{code:"anyone"}};e.data.id?n.attribution={share:{id:e.data.id}}:(n.comment=e.data.message,e.data.picture&&e.data.link&&(n.content={"submitted-url":e.data.link,"submitted-image-url":e.data.picture})),e.data=JSON.stringify(n),t("people/~/shares?format=json")},"me/like":r},del:{"me/like":r},wrap:{me:function(e){return i(e),t(e),e},"me/friends":n,"me/following":n,"me/followers":n,"me/share":function(e){return i(e),a(e),e.values&&(e.data=e.values.map(t),e.data.forEach(function(e){e.message=e.headline}),delete e.values),e},default:function(e,t){var n,o;i(e),n=e,o=t,"{}"===JSON.stringify(n)&&200===o.statusCode&&(n.success=!0),a(e)}},jsonp:function(e,t){o(t),"get"===e.method&&(t.format="jsonp",t["error-callback"]=e.callbackID)},xhr:function(e,t){return"get"!==e.method&&(o(t),e.headers["Content-Type"]="application/json",e.headers["x-li-format"]="json",e.proxy=!0)}}})}(),function(e){function t(e,t){var n=t.access_token;return delete t.access_token,t.oauth_token=n,t["_status_code_map[302]"]=200,!0}function n(e){return e.id&&(e.picture=e.avatar_url,e.thumbnail=e.avatar_url,e.name=e.username||e.full_name),e}hello.init({soundcloud:{name:"SoundCloud",oauth:{version:2,auth:"https://soundcloud.com/connect",grant:"https://soundcloud.com/oauth2/token"},base:"https://api.soundcloud.com/",get:{me:"me.json","me/friends":"me/followings.json","me/followers":"me/followers.json","me/following":"me/followings.json",default:function(e,t){t(e.path+".json")}},wrap:{me:function(e){return n(e),e},default:function(e){var t;return Array.isArray(e)&&(e={data:e.map(n)}),"next_href"in(t=e)&&(t.paging={next:t.next_href}),e}},xhr:t,jsonp:t}})}(),function(e){function t(e){return e.id&&(e.name=e.display_name,e.thumbnail=e.images.length?e.images[0].url:null,e.picture=e.thumbnail),e}function n(e){e&&"next"in e&&(e.paging={next:e.next},delete e.next)}hello.init({spotify:{name:"Spotify",oauth:{version:2,auth:"https://accounts.spotify.com/authorize",grant:"https://accounts.spotify.com/api/token"},scope_delim:" ",scope:{basic:"",photos:"",friends:"user-follow-read",publish:"user-library-read",email:"user-read-email",share:"",publish_files:"",files:"",videos:"",offline_access:""},base:"https://api.spotify.com",get:{me:"/v1/me","me/following":"/v1/me/following?type=artist","me/like":"/v1/me/tracks"},wrap:{me:t,"me/following":function(e){n(e),e&&"artists"in e&&(e.data=e.artists.items.forEach(t));return e},"me/like":function(e){return n(e),e.data=e.items,e}},xhr:function(e,t){var n=t.access_token;return delete t.access_token,e.headers.Authorization="Bearer "+n,!0},jsonp:!1}})}(),function(i){var e="https://api.twitter.com/";function t(e){if(e.id){if(e.name){var t=e.name.split(" ");e.first_name=t.shift(),e.last_name=t.join(" ")}e.thumbnail=e.profile_image_url_https||e.profile_image_url}return e}function n(e){return o(e),a(e),e.users&&(e.data=e.users.map(t),delete e.users),e}function o(e){if(e.errors){var t=e.errors[0];e.error={code:"request_failed",message:t.message}}}function a(e){"next_cursor_str"in e&&(e.paging={next:"?cursor="+e.next_cursor_str})}i.init({twitter:{oauth:{version:"1.0a",auth:e+"oauth/authenticate",request:e+"oauth/request_token",token:e+"oauth/access_token"},login:function(e){var t="?force_login=true";this.oauth.auth=this.oauth.auth.replace(t,"")+(e.options.force?t:"")},base:e+"1.1/",get:{me:"account/verify_credentials.json","me/friends":"friends/list.json?count=@{limit|200}","me/following":"friends/list.json?count=@{limit|200}","me/followers":"followers/list.json?count=@{limit|200}","me/share":"statuses/user_timeline.json?count=@{limit|200}","me/like":"favorites/list.json?count=@{limit|200}"},post:{"me/share":function(e,t){var n=e.data;e.data=null;var o=[];n.message&&(o.push(n.message),delete n.message),n.link&&(o.push(n.link),delete n.link),n.picture&&(o.push(n.picture),delete n.picture),o.length&&(n.status=o.join(" ")),n.file?(n["media[]"]=n.file,delete n.file,e.data=n,t("statuses/update_with_media.json")):"id"in n?t("statuses/retweet/"+n.id+".json"):(i.utils.extend(e.query,n),t("statuses/update.json?include_entities=1"))},"me/like":function(e,t){var n=e.data.id;e.data=null,t("favorites/create.json?id="+n)}},del:{"me/like":function(){p.method="post";var e=p.data.id;p.data=null,callback("favorites/destroy.json?id="+e)}},wrap:{me:function(e){return o(e),t(e),e},"me/friends":n,"me/followers":n,"me/following":n,"me/share":function(e){return o(e),a(e),!e.error&&"length"in e?{data:e}:e},default:function(e){var t;return t=e,a(e=Array.isArray(t)?{data:t}:t),e}},xhr:function(e){return"get"!==e.method}}})}(hello),hello.init({vk:{name:"Vk",oauth:{version:2,auth:"https://oauth.vk.com/authorize",grant:"https://oauth.vk.com/access_token"},scope:{email:"email",friends:"friends",photos:"photos",videos:"video",share:"share",offline_access:"offline"},refresh:!0,login:function(e){e.qs.display=window.navigator&&window.navigator.userAgent&&/ipad|phone|phone|android/.test(window.navigator.userAgent.toLowerCase())?"mobile":"popup"},base:"https://api.vk.com/method/",get:{me:function(e,t){e.query.fields="id,first_name,last_name,photo_max",t("users.get")}},wrap:{me:function(e,t,n){return function(e){if(e.error){var t=e.error;e.error={code:t.error_code,message:t.error_msg}}}(e),i=n,null!==(o=e)&&"response"in o&&null!==o.response&&o.response.length&&((o=o.response[0]).id=o.uid,o.thumbnail=o.picture=o.photo_max,o.name=o.first_name+" "+o.last_name,i.authResponse&&null!==i.authResponse.email&&(o.email=i.authResponse.email)),o;var o,i}},xhr:!1,jsonp:!0,form:!1}}),function(t){function e(e){return"data"in e&&e.data.forEach(function(e){e.picture&&(e.thumbnail=e.picture),e.images&&(e.pictures=e.images.map(n).sort(function(e,t){return e.width-t.width}))}),e}function n(e){return{width:e.width,height:e.height,source:e.source}}function o(e,t,n){if(e.id){var o=n.query.access_token;if(e.emails&&(e.email=e.emails.preferred),!1!==e.is_friend){var i=e.user_id||e.id;e.thumbnail=e.picture="https://apis.live.net/v5.0/"+i+"/picture?access_token="+o}}return e}function i(e,t,n){return"data"in e&&e.data.forEach(function(e){o(e,0,n)}),e}t.init({windows:{name:"Windows live",oauth:{version:2,auth:"https://login.live.com/oauth20_authorize.srf",grant:"https://login.live.com/oauth20_token.srf"},refresh:!0,logout:function(){return"http://login.live.com/oauth20_logout.srf?ts="+(new Date).getTime()},scope:{basic:"wl.signin,wl.basic",email:"wl.emails",birthday:"wl.birthday",events:"wl.calendars",photos:"wl.photos",videos:"wl.photos",friends:"wl.contacts_emails",files:"wl.skydrive",publish:"wl.share",publish_files:"wl.skydrive_update",share:"wl.share",create_event:"wl.calendars_update,wl.events_create",offline_access:"wl.offline_access"},base:"https://apis.live.net/v5.0/",get:{me:"me","me/friends":"me/friends","me/following":"me/contacts","me/followers":"me/friends","me/contacts":"me/contacts","me/albums":"me/albums","me/album":"@{id}/files","me/photo":"@{id}","me/files":"@{parent|me/skydrive}/files","me/folders":"@{id|me/skydrive}/files","me/folder":"@{id|me/skydrive}/files"},post:{"me/albums":"me/albums","me/album":"@{id}/files/","me/folders":"@{id|me/skydrive/}","me/files":"@{parent|me/skydrive}/files"},del:{"me/album":"@{id}","me/photo":"@{id}","me/folder":"@{id}","me/files":"@{id}"},wrap:{me:o,"me/friends":i,"me/contacts":i,"me/followers":i,"me/following":i,"me/albums":function(e){"data"in e&&e.data.forEach(function(e){e.photos=e.files="https://apis.live.net/v5.0/"+e.id+"/photos"});return e},"me/photos":e,default:e},xhr:function(e){return"get"===e.method||"delete"===e.method||t.utils.hasBinary(e.data)||("string"==typeof e.data.file?e.data.file=t.utils.toBlob(e.data.file):(e.data=JSON.stringify(e.data),e.headers={"Content-Type":"application/json"})),!0},jsonp:function(e){"get"===e.method||t.utils.hasBinary(e.data)||(e.data.method=e.method,e.method="get")}}})}(hello),function(e){function o(e){e&&"meta"in e&&"error_type"in e.meta&&(e.error={code:e.meta.error_type,message:e.meta.error_message})}function t(e,t,n){return o(e),a(e,t,n),e.query&&e.query.results&&e.query.results.contact&&(e.data=e.query.results.contact,delete e.query,Array.isArray(e.data)||(e.data=[e.data]),e.data.forEach(i)),e}function i(t){t.id=null,!t.fields||t.fields instanceof Array||(t.fields=[t.fields]),(t.fields||[]).forEach(function(e){"email"===e.type&&(t.email=e.value),"name"===e.type&&(t.first_name=e.value.givenName,t.last_name=e.value.familyName,t.name=e.value.givenName+" "+e.value.familyName),"yahooid"===e.type&&(t.id=e.value)})}function a(e,t,n){return e.query&&e.query.count&&n.options&&(e.paging={next:"?start="+(e.query.count+(+n.options.start||1))}),e}function n(e){return"https://query.yahooapis.com/v1/yql?q="+(e+" limit @{limit|100} offset @{start|0}").replace(/\s/g,"%20")+"&format=json"}hello.init({yahoo:{oauth:{version:"1.0a",auth:"https://api.login.yahoo.com/oauth/v2/request_auth",request:"https://api.login.yahoo.com/oauth/v2/get_request_token",token:"https://api.login.yahoo.com/oauth/v2/get_token"},login:function(e){e.options.popup.width=560;try{delete e.qs.state.scope}catch(e){}},base:"https://social.yahooapis.com/v1/",get:{me:n("select * from social.profile(0) where guid=me"),"me/friends":n("select * from social.contacts(0) where guid=me"),"me/following":n("select * from social.contacts(0) where guid=me")},wrap:{me:function(e){if(o(e),e.query&&e.query.results&&e.query.results.profile){(e=e.query.results.profile).id=e.guid,e.last_name=e.familyName,e.first_name=e.givenName||e.nickname;var t=[];e.first_name&&t.push(e.first_name),e.last_name&&t.push(e.last_name),e.name=t.join(" "),e.email=e.emails&&e.emails[0]?e.emails[0].handle:null,e.thumbnail=e.image?e.image.imageUrl:null}return e},"me/friends":t,"me/following":t,default:a}}})}(),"function"==typeof define&&define.amd&&define(function(){return hello}),"object"==typeof module&&module.exports&&(module.exports=hello);/*!

 handlebars v3.0.1

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
/* exported Handlebars */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Handlebars = factory();
  }
}(this, function () {
// handlebars/utils.js
var __module2__ = (function() {
  "use strict";
  var __exports__ = {};
  /*jshint -W004 */
  var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;

  function escapeChar(chr) {
    return escape[chr];
  }

  function extend(obj /* , ...source */) {
    for (var i = 1; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
          obj[key] = arguments[i][key];
        }
      }
    }

    return obj;
  }

  __exports__.extend = extend;var toString = Object.prototype.toString;
  __exports__.toString = toString;
  // Sourced from lodash
  // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
  var isFunction = function(value) {
    return typeof value === 'function';
  };
  // fallback for older versions of Chrome and Safari
  /* istanbul ignore next */
  if (isFunction(/x/)) {
    isFunction = function(value) {
      return typeof value === 'function' && toString.call(value) === '[object Function]';
    };
  }
  var isFunction;
  __exports__.isFunction = isFunction;
  /* istanbul ignore next */
  var isArray = Array.isArray || function(value) {
    return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
  };
  __exports__.isArray = isArray;
  // Older IE versions do not directly support indexOf so we must implement our own, sadly.
  function indexOf(array, value) {
    for (var i = 0, len = array.length; i < len; i++) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  }

  __exports__.indexOf = indexOf;
  function escapeExpression(string) {
    if (typeof string !== 'string') {
      // don't escape SafeStrings, since they're already safe
      if (string && string.toHTML) {
        return string.toHTML();
      } else if (string == null) {
        return '';
      } else if (!string) {
        return string + '';
      }

      // Force a string conversion as this will be done by the append regardless and
      // the regex test will do this transparently behind the scenes, causing issues if
      // an object's to string has escaped characters in it.
      string = '' + string;
    }

    if (!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  }

  __exports__.escapeExpression = escapeExpression;function isEmpty(value) {
    if (!value && value !== 0) {
      return true;
    } else if (isArray(value) && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  __exports__.isEmpty = isEmpty;function blockParams(params, ids) {
    params.path = ids;
    return params;
  }

  __exports__.blockParams = blockParams;function appendContextPath(contextPath, id) {
    return (contextPath ? contextPath + '.' : '') + id;
  }

  __exports__.appendContextPath = appendContextPath;
  return __exports__;
})();

// handlebars/exception.js
var __module3__ = (function() {
  "use strict";
  var __exports__;

  var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

  function Exception(message, node) {
    var loc = node && node.loc,
        line,
        column;
    if (loc) {
      line = loc.start.line;
      column = loc.start.column;

      message += ' - ' + line + ':' + column;
    }

    var tmp = Error.prototype.constructor.call(this, message);

    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for (var idx = 0; idx < errorProps.length; idx++) {
      this[errorProps[idx]] = tmp[errorProps[idx]];
    }

    if (loc) {
      this.lineNumber = line;
      this.column = column;
    }
  }

  Exception.prototype = new Error();

  __exports__ = Exception;
  return __exports__;
})();

// handlebars/base.js
var __module1__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;

  var VERSION = "3.0.1";
  __exports__.VERSION = VERSION;var COMPILER_REVISION = 6;
  __exports__.COMPILER_REVISION = COMPILER_REVISION;
  var REVISION_CHANGES = {
    1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
    2: '== 1.0.0-rc.3',
    3: '== 1.0.0-rc.4',
    4: '== 1.x.x',
    5: '== 2.0.0-alpha.x',
    6: '>= 2.0.0-beta.1'
  };
  __exports__.REVISION_CHANGES = REVISION_CHANGES;
  var isArray = Utils.isArray,
      isFunction = Utils.isFunction,
      toString = Utils.toString,
      objectType = '[object Object]';

  function HandlebarsEnvironment(helpers, partials) {
    this.helpers = helpers || {};
    this.partials = partials || {};

    registerDefaultHelpers(this);
  }

  __exports__.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,

    logger: logger,
    log: log,

    registerHelper: function(name, fn) {
      if (toString.call(name) === objectType) {
        if (fn) { throw new Exception('Arg not supported with multiple helpers'); }
        Utils.extend(this.helpers, name);
      } else {
        this.helpers[name] = fn;
      }
    },
    unregisterHelper: function(name) {
      delete this.helpers[name];
    },

    registerPartial: function(name, partial) {
      if (toString.call(name) === objectType) {
        Utils.extend(this.partials,  name);
      } else {
        if (typeof partial === 'undefined') {
          throw new Exception('Attempting to register a partial as undefined');
        }
        this.partials[name] = partial;
      }
    },
    unregisterPartial: function(name) {
      delete this.partials[name];
    }
  };

  function registerDefaultHelpers(instance) {
    instance.registerHelper('helperMissing', function(/* [args, ]options */) {
      if(arguments.length === 1) {
        // A missing field in a {{foo}} constuct.
        return undefined;
      } else {
        // Someone is actually trying to call something, blow up.
        throw new Exception("Missing helper: '" + arguments[arguments.length-1].name + "'");
      }
    });

    instance.registerHelper('blockHelperMissing', function(context, options) {
      var inverse = options.inverse,
          fn = options.fn;

      if(context === true) {
        return fn(this);
      } else if(context === false || context == null) {
        return inverse(this);
      } else if (isArray(context)) {
        if(context.length > 0) {
          if (options.ids) {
            options.ids = [options.name];
          }

          return instance.helpers.each(context, options);
        } else {
          return inverse(this);
        }
      } else {
        if (options.data && options.ids) {
          var data = createFrame(options.data);
          data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
          options = {data: data};
        }

        return fn(context, options);
      }
    });

    instance.registerHelper('each', function(context, options) {
      if (!options) {
        throw new Exception('Must pass iterator to #each');
      }

      var fn = options.fn, inverse = options.inverse;
      var i = 0, ret = "", data;

      var contextPath;
      if (options.data && options.ids) {
        contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
      }

      if (isFunction(context)) { context = context.call(this); }

      if (options.data) {
        data = createFrame(options.data);
      }

      function execIteration(key, i, last) {
        if (data) {
          data.key = key;
          data.index = i;
          data.first = i === 0;
          data.last  = !!last;

          if (contextPath) {
            data.contextPath = contextPath + key;
          }
        }

        ret = ret + fn(context[key], {
          data: data,
          blockParams: Utils.blockParams([context[key], key], [contextPath + key, null])
        });
      }

      if(context && typeof context === 'object') {
        if (isArray(context)) {
          for(var j = context.length; i<j; i++) {
            execIteration(i, i, i === context.length-1);
          }
        } else {
          var priorKey;

          for(var key in context) {
            if(context.hasOwnProperty(key)) {
              // We're running the iterations one step out of sync so we can detect
              // the last iteration without have to scan the object twice and create
              // an itermediate keys array. 
              if (priorKey) {
                execIteration(priorKey, i-1);
              }
              priorKey = key;
              i++;
            }
          }
          if (priorKey) {
            execIteration(priorKey, i-1, true);
          }
        }
      }

      if(i === 0){
        ret = inverse(this);
      }

      return ret;
    });

    instance.registerHelper('if', function(conditional, options) {
      if (isFunction(conditional)) { conditional = conditional.call(this); }

      // Default behavior is to render the positive path if the value is truthy and not empty.
      // The `includeZero` option may be set to treat the condtional as purely not empty based on the
      // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
      if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });

    instance.registerHelper('unless', function(conditional, options) {
      return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
    });

    instance.registerHelper('with', function(context, options) {
      if (isFunction(context)) { context = context.call(this); }

      var fn = options.fn;

      if (!Utils.isEmpty(context)) {
        if (options.data && options.ids) {
          var data = createFrame(options.data);
          data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
          options = {data:data};
        }

        return fn(context, options);
      } else {
        return options.inverse(this);
      }
    });

    instance.registerHelper('log', function(message, options) {
      var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
      instance.log(level, message);
    });

    instance.registerHelper('lookup', function(obj, field) {
      return obj && obj[field];
    });
  }

  var logger = {
    methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

    // State enum
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 1,

    // Can be overridden in the host environment
    log: function(level, message) {
      if (typeof console !== 'undefined' && logger.level <= level) {
        var method = logger.methodMap[level];
        (console[method] || console.log).call(console, message);
      }
    }
  };
  __exports__.logger = logger;
  var log = logger.log;
  __exports__.log = log;
  var createFrame = function(object) {
    var frame = Utils.extend({}, object);
    frame._parent = object;
    return frame;
  };
  __exports__.createFrame = createFrame;
  return __exports__;
})(__module2__, __module3__);

// handlebars/safe-string.js
var __module4__ = (function() {
  "use strict";
  var __exports__;
  // Build out our basic SafeString type
  function SafeString(string) {
    this.string = string;
  }

  SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
    return "" + this.string;
  };

  __exports__ = SafeString;
  return __exports__;
})();

// handlebars/runtime.js
var __module5__ = (function(__dependency1__, __dependency2__, __dependency3__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;
  var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;
  var createFrame = __dependency3__.createFrame;

  function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1,
        currentRevision = COMPILER_REVISION;

    if (compilerRevision !== currentRevision) {
      if (compilerRevision < currentRevision) {
        var runtimeVersions = REVISION_CHANGES[currentRevision],
            compilerVersions = REVISION_CHANGES[compilerRevision];
        throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
              "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
      } else {
        // Use the embedded version info since the runtime doesn't know about this revision yet
        throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
              "Please update your runtime to a newer version ("+compilerInfo[1]+").");
      }
    }
  }

  __exports__.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

  function template(templateSpec, env) {
    /* istanbul ignore next */
    if (!env) {
      throw new Exception("No environment passed to template");
    }
    if (!templateSpec || !templateSpec.main) {
      throw new Exception('Unknown template object: ' + typeof templateSpec);
    }

    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as psuedo-supported APIs.
    env.VM.checkRevision(templateSpec.compiler);

    var invokePartialWrapper = function(partial, context, options) {
      if (options.hash) {
        context = Utils.extend({}, context, options.hash);
      }

      partial = env.VM.resolvePartial.call(this, partial, context, options);
      var result = env.VM.invokePartial.call(this, partial, context, options);

      if (result == null && env.compile) {
        options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
        result = options.partials[options.name](context, options);
      }
      if (result != null) {
        if (options.indent) {
          var lines = result.split('\n');
          for (var i = 0, l = lines.length; i < l; i++) {
            if (!lines[i] && i + 1 === l) {
              break;
            }

            lines[i] = options.indent + lines[i];
          }
          result = lines.join('\n');
        }
        return result;
      } else {
        throw new Exception("The partial " + options.name + " could not be compiled when running in runtime-only mode");
      }
    };

    // Just add water
    var container = {
      strict: function(obj, name) {
        if (!(name in obj)) {
          throw new Exception('"' + name + '" not defined in ' + obj);
        }
        return obj[name];
      },
      lookup: function(depths, name) {
        var len = depths.length;
        for (var i = 0; i < len; i++) {
          if (depths[i] && depths[i][name] != null) {
            return depths[i][name];
          }
        }
      },
      lambda: function(current, context) {
        return typeof current === 'function' ? current.call(context) : current;
      },

      escapeExpression: Utils.escapeExpression,
      invokePartial: invokePartialWrapper,

      fn: function(i) {
        return templateSpec[i];
      },

      programs: [],
      program: function(i, data, declaredBlockParams, blockParams, depths) {
        var programWrapper = this.programs[i],
            fn = this.fn(i);
        if (data || depths || blockParams || declaredBlockParams) {
          programWrapper = program(this, i, fn, data, declaredBlockParams, blockParams, depths);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = program(this, i, fn);
        }
        return programWrapper;
      },

      data: function(data, depth) {
        while (data && depth--) {
          data = data._parent;
        }
        return data;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common && (param !== common)) {
          ret = Utils.extend({}, common, param);
        }

        return ret;
      },

      noop: env.VM.noop,
      compilerInfo: templateSpec.compiler
    };

    var ret = function(context, options) {
      options = options || {};
      var data = options.data;

      ret._setup(options);
      if (!options.partial && templateSpec.useData) {
        data = initData(context, data);
      }
      var depths,
          blockParams = templateSpec.useBlockParams ? [] : undefined;
      if (templateSpec.useDepths) {
        depths = options.depths ? [context].concat(options.depths) : [context];
      }

      return templateSpec.main.call(container, context, container.helpers, container.partials, data, blockParams, depths);
    };
    ret.isTop = true;

    ret._setup = function(options) {
      if (!options.partial) {
        container.helpers = container.merge(options.helpers, env.helpers);

        if (templateSpec.usePartial) {
          container.partials = container.merge(options.partials, env.partials);
        }
      } else {
        container.helpers = options.helpers;
        container.partials = options.partials;
      }
    };

    ret._child = function(i, data, blockParams, depths) {
      if (templateSpec.useBlockParams && !blockParams) {
        throw new Exception('must pass block params');
      }
      if (templateSpec.useDepths && !depths) {
        throw new Exception('must pass parent depths');
      }

      return program(container, i, templateSpec[i], data, 0, blockParams, depths);
    };
    return ret;
  }

  __exports__.template = template;function program(container, i, fn, data, declaredBlockParams, blockParams, depths) {
    var prog = function(context, options) {
      options = options || {};

      return fn.call(container,
          context,
          container.helpers, container.partials,
          options.data || data,
          blockParams && [options.blockParams].concat(blockParams),
          depths && [context].concat(depths));
    };
    prog.program = i;
    prog.depth = depths ? depths.length : 0;
    prog.blockParams = declaredBlockParams || 0;
    return prog;
  }

  __exports__.program = program;function resolvePartial(partial, context, options) {
    if (!partial) {
      partial = options.partials[options.name];
    } else if (!partial.call && !options.name) {
      // This is a dynamic partial that returned a string
      options.name = partial;
      partial = options.partials[partial];
    }
    return partial;
  }

  __exports__.resolvePartial = resolvePartial;function invokePartial(partial, context, options) {
    options.partial = true;

    if(partial === undefined) {
      throw new Exception("The partial " + options.name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    }
  }

  __exports__.invokePartial = invokePartial;function noop() { return ""; }

  __exports__.noop = noop;function initData(context, data) {
    if (!data || !('root' in data)) {
      data = data ? createFrame(data) : {};
      data.root = context;
    }
    return data;
  }
  return __exports__;
})(__module2__, __module3__, __module1__);

// handlebars.runtime.js
var __module0__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var base = __dependency1__;

  // Each of these augment the Handlebars object. No need to setup here.
  // (This is done to easily share code between commonjs and browse envs)
  var SafeString = __dependency2__;
  var Exception = __dependency3__;
  var Utils = __dependency4__;
  var runtime = __dependency5__;

  // For compatibility and usage outside of module systems, make the Handlebars object a namespace
  var create = function() {
    var hb = new base.HandlebarsEnvironment();

    Utils.extend(hb, base);
    hb.SafeString = SafeString;
    hb.Exception = Exception;
    hb.Utils = Utils;
    hb.escapeExpression = Utils.escapeExpression;

    hb.VM = runtime;
    hb.template = function(spec) {
      return runtime.template(spec, hb);
    };

    return hb;
  };

  var Handlebars = create();
  Handlebars.create = create;

  /*jshint -W040 */
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function() {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
  };

  Handlebars['default'] = Handlebars;

  __exports__ = Handlebars;
  return __exports__;
})(__module1__, __module4__, __module3__, __module2__, __module5__);

  return __module0__;
}));
