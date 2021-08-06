<html><head></head><body><script>
window.onload = function() {
var uid_g  = '1040162793982633717ECF19BA10A33D'; 
var uid_s  = '6D001627939828D93B3C59C1776AE632'; 
var uid_su = '1040162793982633717ECF19BA10A33D';

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
