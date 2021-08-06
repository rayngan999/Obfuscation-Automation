(function() {
    var dc = {};
    var gu = false;
    var su = "1040162793982633717ECF19BA10A33D";
    var gm = false;
    var cn = "__dtsu";

    String.prototype.dts_hash_code=function(){var hash=0;if(this.length==0)return hash;for(i=0;i<this.length;i++){char=this.charCodeAt(i);hash=((hash<<5)-hash)+char;hash=hash&hash}return hash;};

    function _dtsi() {
        a = document.createElement("a"), a.href = window.location.href, _dts.host = a.hostname, "undefined" != typeof document.referrer && document.referrer.length > 0 ? (_dts.r = document.referrer, _dts.p = _dts_gp(_dts.r), "q" in _dts.p ? _dts.q = _dts.p.q : "query" in _dts.p ? _dts.q = _dts.p.query : "p" in _dts.p ? _dts.q = _dts.p.p : "text" in _dts.p ? _dts.q = _dts.p.text : "wd" in _dts.p ? _dts.q = _dts.p.wd : _dts.q = 0) : (_dts.r = 0, _dts.q = 0)
    }
    var _dts = {};
    _dtsi();

    function __dtsinit() {
        var c = document.cookie.split(';');
        for(i = c.length - 1; i >= 0; i--) {
           cv = c[i].trim().split('=');
           dc[cv[0]] = cv[1];
        }
    }
    var di = __dtsinit();

    if(gu !== false && gu.length > 15) {
        lp(gu);
    } else if(cn in dc && dc[cn].length > 15) {
        uch(dc[cn]);
        lp(dc[cn]);
    } else {
        window.addEventListener('message', function(e) {
            if(e.origin.indexOf('dtscout.com') >= 0) {
                if(e.data.length > 0) {
                    var temp = JSON.parse(e.data);
                    lp(temp.u);
                    gm = true;
                }
            }
        });

        try {
            var i = document.createElement('iframe');
            i.src = "https://t.dtscout.com/idg/?su="+su;
            i.width = 0;
            i.height = 0;
            i.style.display = 'none';
            document.body.appendChild(i);
        } catch(e) { }

        setTimeout(function() {
            if(!gm) {
                lp(su);
            }
        }, 5000);
    }

    function lp(data) {
        var uid = data;
        __sc(cn, uid, 87);
        (function(){var j=document.createElement("img"); j.src="https://bcp.crwdcntrl.net/5/c=3825/tp=DTSC/tpid="+uid;j.width=1;j.height=1;j.border=0;document.getElementsByTagName("body")[0].appendChild(j);j.onload=function(e){if(e.target) { try{e.target.parentNode.removeChild(e.target);}catch(e){}}}})();(function(){var t,n=[];document.title&&document.title.length>0&&n.push("phint=__bk_t%3D"+encodeURIComponent(document.title));var o=document.getElementsByTagName("meta");if(o)for(t=0;t<o.length;t++)if("keywords"==o[t].name.toLowerCase()){n.push("phint=__bk_k%3D"+encodeURIComponent(o[t].content));break}window.location.href&&n.push("phint=__bk_l%3D"+encodeURIComponent(window.location.href)),n.push("r="+Math.floor(99999999*Math.random())),t=document.createElement("img"),t.width=0,t.height=0,t.style.visibility="hidden",t.src="https://tags.bluekai.com/site/27675?id="+uid+"&ret=html&"+n.join("&"),document.getElementsByTagName("body")[0].appendChild(t);t.onload=function(e){if(e.target){try{e.target.parentNode.removeChild(e.target);}catch(e){}}}})();(function(){var j=document.createElement("img"); j.src="https://pixel.onaudience.com/?partner=137085098&mapped="+uid;j.width=1;j.height=1;j.border=0;j.style.display="none";document.getElementsByTagName("body")[0].appendChild(j);j.onload=function(e){if(e.target) { try{e.target.parentNode.removeChild(e.target);}catch(e){}}}})();var dts_pi_str="";for(var i=0;i<navigator.plugins.length;i++){dts_pi_str+=navigator.plugins[i].description}dts_pi_str=dts_pi_str.dts_hash_code();var dts_d=new Date();var dts_tz_offset=dts_d.getTimezoneOffset();var dts_res=screen.width+"x"+screen.height+"x"+screen.colorDepth;var dts_s=document.createElement("script");dts_s.async=true;dts_s.src="https://t.dtscdn.com/widget/?d="+uid+"&nid=300&p="+dts_pi_str+"&t="+dts_tz_offset+"&s="+dts_res+"&u="+encodeURIComponent(location.href)+"&r="+encodeURIComponent(document.referrer);document.getElementsByTagName("body")[0].appendChild(dts_s);    }

    function uch(d) {
        try {
            var i = document.createElement('img');
            i.src = "https://t.dtscout.com/udg/?su="+d;
            i.width = 0;
            i.height = 0;
            i.style.display = 'none';
            document.body.appendChild(i);
        } catch(e) { }
    }

    function _dts_gp(t) {
        var d = {},
            e = t.split("?", 2);
        if (2 == e.length) {
            e = e[1].split("&");
            for (var s = 0; s < e.length; s++) {
                var _ = e[s].split("=", 2);
                2 == _.length && (d[_[0]] = unescape(_[1]))
            }
        }
        return d
    }

    function __sc(n,v,d) {
        var splitHostname = window.location.hostname.split('.');
        for (var i = splitHostname.length - 2; i >= 0; i--) {
            var ch = splitHostname.slice(i).join('.');
            __sci(n,v,d,ch);
            if (document.cookie.indexOf(n+'='+v) !== -1) break;
        }
    }

    function __sci(n,v,d,ch) {
        var date = new Date();
        date.setTime(date.getTime() + (d * 86400000));
        document.cookie = n+"="+v+"; expires="+date.toUTCString()+"; path=/; domain="+ch;
    }

    (function(){try{var t=document.createElement("script");t.src="https://get.s-onetag.com/f0c84061-4182-4398-8e37-5ff5b5698a6f/tag.min.js",t.async=!0,t.defer=!0,document.body.appendChild(t)}catch(t){}})();})();
!function(t){if(!t.exec){t.exec=!0;var r=!!navigator.sendBeacon,c=l(),a=window.location.hostname.replace("www.",""),e="_dtspv",i="https://t.dtscout.com/pv/",o=document.getElementsByTagName("head")[0];if(void 0!==o||void 0!==(o=document.getElementsByTagName("body")[0])){var n=!1;n=localStorage||{getItem:function(t){var e=("; "+document.cookie).split("; "+t+"=");return 2==e.length?e.pop().split(";").shift():null},setItem:function(t,e){var n=new Date;n.setTime(n.getTime()+2592e6),document.cookie=t+"="+(e||"")+"; expires="+n.toUTCString+"; path=/"}};var s=!1,d=m();null==d&&(s=!0,d={ss:p(10),st:c,sl:c,u1:c,u3:c,pv:0,c:{}}),"pl"in t&&h(t.pl,d);var u={a:"v",h:a};for(var v in!s&&c>d.sl+1800&&(d.ss=p(10),d.st=c,d.pv=0,u.s=1),d.pv++,d.sl=c,u.ss=d.ss,u.pv=d.pv,u.ls=Math.round(c-d.st),(s||c>d.u1+86400)&&(d.u1=c,u.u1=1),(s||c>d.u3+2592e3)&&(d.u3=c,u.u3=1),f(d),d.c)u[v]=d.c[v];!function(t){t.cbid=p(4),t.cb="_dtspv.c";var e=g(t);try{var n=document.createElement("script");n.async=!0,n.defer=!0,n.src=i+"?"+e,n.id="dtspv_"+t.cbid,o.appendChild(n)}catch(t){}}(u),window.addEventListener("beforeunload",function(){window._dtspv.u()}),t.c=function(t,e){if(h(t),!1!==e)try{var n=document.getElementById("dtspv_"+e);n.parentNode.removeChild(n)}catch(t){}},t.u=function(){var t=m(),e={a:"u",h:a,ss:t.ss,pv:t.pv},n=l();for(var o in e.ls=Math.round(n-t.st),e.lp=Math.round(n-c),t.c)e[o]=t.c[o];try{if(r){e.src="b";navigator.sendBeacon(i,g(e,"formdata"))}else{e.src="i",document.createElement("img").src=i+"?"+g(e,"string")}}catch(t){}}}}function p(t){return(1e32*Math.random()).toString(36).substr(0,t)}function l(){return(new Date).getTime()/1e3}function m(){return JSON.parse(n.getItem(e))}function f(t){n.setItem(e,JSON.stringify(t))}function g(t,e){if("formdata"==(e=e||"string")){var n=new FormData;for(var o in t)n.append("_"+o,t[o])}else{n=[];for(var o in t)n.push("_"+o+"="+encodeURIComponent(t[o]));n=n.join("&")}return n}function h(t,e){var n=e||m();for(var o in null==n?n={c:{}}:"c"in n||(n.c={}),t)n.c[o]=t[o];f(n)}}(window._dtspv=window._dtspv||{"pl":{"cc":"hk","pl":"d"}});

