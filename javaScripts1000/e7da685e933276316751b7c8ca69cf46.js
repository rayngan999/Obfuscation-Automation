var d = new Date();
d.setTime(d.getTime() + (2*365*24*60*60*1000));
var exp = d.toUTCString();
document.cookie = '_vz=;path=/;domain=;expires='+exp;
