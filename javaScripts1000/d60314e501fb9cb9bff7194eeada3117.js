window.createScript = (function() {
    var q = [], cs = function createScript() { q.push(arguments) };
    cs.dump = function() {return q;};
    return cs;
})();

window.createScriptTag = (function() {
    var q = [], cs = function createScriptTag() { q.push(arguments) };
    cs.dump = function() {return q;};
    return cs;
})();