define("services/browserStorageHelper",[],function(){return{storageAvailable:function(e){var r;try{r=window[e];var t="__storage_test__";return r.setItem(t,t),r.removeItem(t),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&r&&0!==r.length}}}});
//# sourceMappingURL=browserStorageHelper.js.map
