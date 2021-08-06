self.addEventListener('message', function(e) {
    var message = e.data;
    self.postMessage(message);

});