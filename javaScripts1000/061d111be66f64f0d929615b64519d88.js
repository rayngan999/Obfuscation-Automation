<html><head></head><body><script>
window.onload = function() {
var uid_g  = '51A016279459553465271BED37F4401F'; 
var uid_s  = '6D0016279459560DCAAC7D9812DF66CA'; 
var uid_su = '51A016279459553465271BED37F4401F';

var debug = {};
var pass_uid = false;
var method = false;

if(uid_g && uid_g.length > 0) {
    method = "got";
    pass_uid = uid_g;
} else if(uid_su && uid_su.length > 0) {
    method = "setu";
    pass_uid = uid_su;
} else if(uid_s.length > 0) {
    method = "set";
    pass_uid = uid_s;
}

debug.pass_method = method;
debug.pass_uid = pass_uid;

var ls_uid = localStorage.getItem('uid');
debug.ls_uid = ls_uid;

var uid = false
if(method == 'got') {
    uid = pass_uid;
    debug.uid_src = 'got';
} else if(ls_uid) {
    uid = ls_uid;
    debug.uid_src = 'ls';
} else {
    uid = pass_uid;
    debug.uid_src = 'setn';
}

if(uid) {
    debug.uid = uid;
    localStorage.setItem('uid', uid);

    var ret = {u : uid, src : debug.uid_src};
    try {
        parent.postMessage(JSON.stringify(ret), "*");
    } catch(e) { }
}
}
</script></body>
