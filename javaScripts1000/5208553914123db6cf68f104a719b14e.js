window.esw.defineFeature("Session",function(a){function h(){this.trackedKeys=[];a.addMessageHandler("session.set",this.setSessionData.bind(this));a.addMessageHandler("session.get",function(b,c){parent.postMessage({method:"session.sessionData",data:a.noSessionStorageAvailable?null:this.getSessionData(b,c)},a.parentOrigin)}.bind(this));a.addMessageHandler("session.delete",this.deleteSessionData.bind(this));a.addMessageHandler("session.deleteAllKeys",function(b){this.deleteAllSessionData(b)}.bind(this))}
h.prototype.getKeyName=function(b,c){if(void 0!==c&&null!==c&&"string"===typeof c)return b+c;throw Error("key is a required parameter must be a string, cannot be undefined or null");};h.prototype.getSessionData=function(b,c,d){var f={},e;if(b&&c)d&&(a.noLocalStorageAvailable?d=!1:e=localStorage),d||(e=a.noSessionStorageAvailable?null:sessionStorage),c.forEach(function(g){f[g]=e?e.getItem(this.getKeyName(b,g)):null}.bind(this));else throw Error("getSessionData requires two non-null arguments (domain, keys).");
return f};h.prototype.deleteSessionData=function(b,c,d){var f;d&&a.noLocalStorageAvailable&&(isLocalStrage=!1);if(d||!a.noSessionStorageAvailable){var e=d?localStorage:sessionStorage;if(b&&c)c.forEach(function(g){-1<this.trackedKeys.indexOf(g)&&(f=this.trackedKeys.indexOf(g),this.trackedKeys.splice(f,1));e.removeItem(this.getKeyName(b,g));"MASTER_DEPLOYMENT_ID"===g&&parent.postMessage({method:"session.updatePrimary",data:{isPrimary:!1}},a.parentOrigin)}.bind(this)),parent.postMessage({method:"session.deletedSessionData",
data:c},a.parentOrigin);else throw Error("deleteSessionData requires two non-null arguments (domain, keys).");}};h.prototype.deleteAllSessionData=function(b){this.deleteSessionData(b,this.trackedKeys,!0);this.deleteSessionData(b,this.trackedKeys,!1);parent.postMessage({method:"session.deletedAllSessionData"},a.parentOrigin)};h.prototype.setSessionData=function(b,c,d){d&&a.noLocalStorageAvailable&&(d=!1);if(d||!a.noSessionStorageAvailable){var f=d?localStorage:sessionStorage;if(b&&c)Object.keys(c).forEach(function(e){this.trackedKeys.push(e);
f.setItem(this.getKeyName(b,e),c[e]);"MASTER_DEPLOYMENT_ID"===e&&parent.postMessage({method:"session.updatePrimary",data:{isPrimary:!0}},a.parentOrigin)}.bind(this));else throw Error("setSessionData requires two non-null arguments (domain, data).");}};a.sessionAPI=new h});
