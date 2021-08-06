<!doctype html>
<head>
    <meta name="robots" content="noindex" â>
</head>
<body>
<script type="text/javascript">
    !function(e){var t={};t.init=function(e){var r=!0;try{window.localStorage||(r=!1)}catch(n){r=!1}if(!r)try{return window.parent.postMessage("cross-storage:unavailable","*")}catch(n){return}t._permissions=e||[],t._installListener(),window.parent.postMessage("cross-storage:ready","*")},t._installListener=function(){var e=t._listener;window.addEventListener?window.addEventListener("message",e,!1):window.attachEvent("onmessage",e)},t._listener=function(e){var r,n,o,i,s,a,l;if(r="null"===e.origin?"file://":e.origin,"cross-storage:poll"===e.data)return window.parent.postMessage("cross-storage:ready",e.origin);if("cross-storage:ready"!==e.data){try{o=JSON.parse(e.data)}catch(c){return}if(o&&"string"==typeof o.method&&(i=o.method.split("cross-storage:")[1])){if(t._permitted(r,i))try{a=t["_"+i](o.params)}catch(c){s=c.message}else s="Invalid permissions for "+i;l=JSON.stringify({id:o.id,error:s,result:a}),n="file://"===r?"*":r,window.parent.postMessage(l,n)}}},t._permitted=function(e,r){var n,o,i,s;if(n=["get","set","del","clear","getKeys"],!t._inArray(r,n))return!1;for(o=0;o<t._permissions.length;o++)if(i=t._permissions[o],i.origin instanceof RegExp&&i.allow instanceof Array&&(s=i.origin.test(e),s&&t._inArray(r,i.allow)))return!0;return!1},t._set=function(e){window.localStorage.setItem(e.key,e.value)},t._get=function(e){var t,r,n,o;for(t=window.localStorage,r=[],n=0;n<e.keys.length;n++){try{o=t.getItem(e.keys[n])}catch(i){o=null}r.push(o)}return r.length>1?r:r[0]},t._del=function(e){for(var t=0;t<e.keys.length;t++)window.localStorage.removeItem(e.keys[t])},t._clear=function(){window.localStorage.clear()},t._getKeys=function(){var e,t,r;for(r=[],t=window.localStorage.length,e=0;t>e;e++)r.push(window.localStorage.key(e));return r},t._inArray=function(e,t){for(var r=0;r<t.length;r++)if(e===t[r])return!0;return!1},t._now=function(){return"function"==typeof Date.now?Date.now():(new Date).getTime()},"undefined"!=typeof module&&module.exports?module.exports=t:"undefined"!=typeof exports?exports.CrossStorageHub=t:"function"==typeof define&&define.amd?define([],function(){return t}):e.CrossStorageHub=t}(this);
</script>
<script>
    CrossStorageHub.init([
        {origin: /.*/, allow: ['get', 'set', 'del']}
    ]);
</script>
</body>
</html>
